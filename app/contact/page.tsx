'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // Simulate form submission
    try {
      // Here you would typically send the data to your backend
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call

      setSubmitMessage('پیام شما با موفقیت ارسال شد. به زودی با شما تماس خواهیم گرفت.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitMessage('متاسفانه خطایی رخ داد. لطفا دوباره تلاش کنید.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold text-center">تماس و مشاوره</h1>

      <p className="text-center text-gray-600 mb-8">
        برای مشاوره تخصصی و محاسبه رایگان توان مورد نیاز، از روش‌های زیر می‌توانید با ما در ارتباط باشید:
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="space-y-6">
          {/* Phone */}
          <div className="bg-white border p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <span>📱</span>
              شماره تماس
            </h3>
            <p className="text-lg">
              <a href="tel:04161014065" className="text-green-700 hover:underline font-medium">
                04161014065
              </a>
            </p>
          </div>

          {/* Address */}
          <div className="bg-white border p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <span>📍</span>
              موقعیت دفتر
            </h3>
            <p className="leading-relaxed">
              تبریز – خیابان امام – مجتمع تجاری عتیق – بلوک A
              <br />
              طبقه ۲ – واحد ۱
            </p>
          </div>          
        </div>

        {/* Contact Form */}
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span>📩</span>
            فرم تماس
          </h2>
          <p className="text-gray-600 mb-6">
            برای ثبت درخواست مشاوره یا ارسال پیام، فرم زیر را پر کنید.
          </p>

          {submitMessage && (
            <div className={`p-4 rounded-md mb-4 ${submitMessage.includes('موفقیت') ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
              {submitMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">نام و نام خانوادگی *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="نام خود را وارد کنید"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">ایمیل *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="ایمیل خود را وارد کنید"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">شماره تلفن</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="شماره تلفن خود را وارد کنید"
              />
            </div>        

            <div>
              <label className="block text-sm font-medium mb-2">پیام *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="پیام خود را بنویسید"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-green-600 text-white py-3 px-6 rounded-md hover:bg-green-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'در حال ارسال...' : 'ارسال پیام'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}