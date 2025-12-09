import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check if SMTP is configured
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('SMTP configuration missing');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    // Create email transporter with Vercel-compatible settings
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      },
      // Vercel-specific settings
      tls: {
        rejectUnauthorized: false, // Allow self-signed certificates
        ciphers: 'SSLv3'
      },
      // Connection timeout for Vercel
      connectionTimeout: 5000,
      greetingTimeout: 5000,
      socketTimeout: 5000
    });

    // Email content
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: 'info@kavianroshd.com',
      subject: `پیام جدید از وبسایت کی وی گرین: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #16a34a; border-bottom: 2px solid #16a34a; padding-bottom: 10px;">
            پیام جدید از فرم تماس وبسایت
          </h2>

          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #374151;">جزئیات پیام:</h3>

            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; width: 120px;">نام:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold;">ایمیل:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;">
                  <a href="mailto:${email}" style="color: #16a34a;">${email}</a>
                </td>
              </tr>
              ${phone ? `
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold;">تلفن:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;">
                  <a href="tel:${phone}" style="color: #16a34a;">${phone}</a>
                </td>
              </tr>
              ` : ''}
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold;">موضوع:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;">${subject}</td>
              </tr>
            </table>
          </div>

          <div style="background: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h3 style="margin-top: 0; color: #374151;">متن پیام:</h3>
            <div style="background: #f9fafb; padding: 15px; border-radius: 4px; white-space: pre-line;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>

          <div style="margin-top: 30px; padding: 20px; background: #ecfdf5; border: 1px solid #d1fae5; border-radius: 8px;">
            <p style="margin: 0; color: #065f46; font-size: 14px;">
              <strong>زمان دریافت:</strong> ${new Date().toLocaleString('fa-IR')}
            </p>
            <p style="margin: 10px 0 0 0; color: #065f46; font-size: 14px;">
              این پیام از طریق فرم تماس وبسایت کی وی گرین ارسال شده است.
            </p>
          </div>
        </div>
      `,
      // Also send a plain text version
      text: `
پیام جدید از وبسایت کی وی گرین

نام: ${name}
ایمیل: ${email}
${phone ? `تلفن: ${phone}` : ''}
موضوع: ${subject}

پیام:
${message}

زمان دریافت: ${new Date().toLocaleString('fa-IR')}
      `
    };

    // Send email with timeout for Vercel
    const emailPromise = transporter.sendMail(mailOptions);

    // Set timeout for Vercel (8 seconds to stay under 10s limit)
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error('Email sending timeout')), 8000);
    });

    await Promise.race([emailPromise, timeoutPromise]);

    // Close transporter connection
    transporter.close();

    // Log successful submission
    console.log('Contact form email sent successfully:', {
      to: process.env.CONTACT_EMAIL || 'info@kavianroshd.com',
      subject: `پیام جدید از وبسایت کی وی گرین: ${subject}`,
      name,
      email,
      timestamp: new Date().toISOString()
    });

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form API error:', error);

    // More specific error messages for debugging
    let errorMessage = 'Internal server error';
    if (error instanceof Error) {
      if (error.message.includes('timeout')) {
        errorMessage = 'Email sending timed out. Please try again.';
      } else if (error.message.includes('authentication')) {
        errorMessage = 'Email authentication failed.';
      } else if (error.message.includes('connection')) {
        errorMessage = 'Email server connection failed.';
      }
    }

    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}