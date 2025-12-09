# Contact Form Email Configuration

## Recommended: Resend (Modern Email API)

For the best Vercel compatibility, use [Resend](https://resend.com):

1. Sign up at resend.com
2. Get your API key
3. Add to environment variables:

```env
RESEND_API_KEY=your-resend-api-key
CONTACT_EMAIL=info@kavianroshd.com
```

## Alternative: SMTP Configuration

If you prefer to use your own SMTP server:

```env
SMTP_HOST=your-smtp-server.com
SMTP_PORT=587
SMTP_USER=your-email@yourdomain.com
SMTP_PASS=your-smtp-password
SMTP_SECURE=false
CONTACT_EMAIL=info@kavianroshd.com
```

The API will automatically use Resend if configured, otherwise fall back to SMTP.

## Common SMTP Configurations

### For Hostinger/cPanel Hosting:
```env
SMTP_HOST=mail.yourdomain.com
SMTP_PORT=587
SMTP_USER=your-email@yourdomain.com
SMTP_PASS=your-email-password
SMTP_SECURE=false
```

### For DirectAdmin Hosting:
```env
SMTP_HOST=mail.yourdomain.com
SMTP_PORT=587
SMTP_USER=your-email@yourdomain.com
SMTP_PASS=your-email-password
SMTP_SECURE=false
```

### For Gmail (if you change your mind):
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_SECURE=false
```

## Vercel Deployment

This API is compatible with Vercel serverless functions with the following optimizations:

- **Timeout handling**: 8-second timeout to stay under Vercel's 10-second limit
- **Connection management**: Proper transporter cleanup
- **Error handling**: Specific error messages for common issues
- **Environment validation**: Checks for required SMTP configuration

## Setting Environment Variables in Vercel

1. Go to your Vercel project dashboard
2. Navigate to Settings → Environment Variables
3. Add all required variables:
   - `SMTP_HOST`
   - `SMTP_PORT`
   - `SMTP_USER`
   - `SMTP_PASS`
   - `SMTP_SECURE`
   - `CONTACT_EMAIL`

## Testing

After setting up the environment variables, test both forms to ensure emails are being sent.

## Troubleshooting

### Vercel-Specific Issues:
- **Timeout errors**: Check if your SMTP server responds quickly
- **Connection refused**: Some SMTP servers block serverless IPs
- **Cold starts**: First request after inactivity might be slower

### General SMTP Issues:
- **Authentication errors**: Verify SMTP credentials
- **Connection errors**: Check if SMTP server allows external connections
- **Port issues**: Try port 465 with `SMTP_SECURE=true` if 587 doesn't work

### Alternative Solutions for Vercel:
If SMTP doesn't work reliably on Vercel, consider:
- **EmailJS**: Client-side email sending
- **Resend**: Modern email API (resend.com)
- **SendGrid**: Professional email service
- **Formspree**: Simple form handling

The emails will be sent from your `SMTP_USER` email address to the address specified in `CONTACT_EMAIL`.