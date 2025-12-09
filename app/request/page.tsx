'use client';

import { useState } from 'react';

export default function RequestPage() {
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

    try {
      // Send form data to your backend API
      const response = await fetch('/api/forms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitMessage('درخواست شما با موفقیت ارسال شد. به زودی با شما تماس خواهیم گرفت.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Request form submission error:', error);
      setSubmitMessage('متاسفانه خطایی رخ داد. لطفا دوباره تلاش کنید یا با شماره تلفن تماس بگیرید.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-16">

      {/* عنوان صفحه / Hero */}
      <section className="bg-green-50 py-16 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">درخواست مشاوره</h1>
        <p className="text-lg md:text-xl text-gray-700">
          لطفاً فرم زیر را پر کنید تا کارشناسان KV-GREEN با شما تماس بگیرند.
        </p>
      </section>

      {/* فرم مشاوره */}
      <section className="max-w-3xl mx-auto px-4">
        <div className="bg-white border rounded-lg shadow-sm p-6">
          {submitMessage && (
            <div className={`p-4 rounded-md mb-6 ${submitMessage.includes('موفقیت') ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
              {submitMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* نام و نام خانوادگی */}
            <div>
              <label className="block mb-1 font-medium" htmlFor="name">نام و نام خانوادگی *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="مثال: علی رضایی"
                className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* شماره تماس */}
            <div>
              <label className="block mb-1 font-medium" htmlFor="phone">شماره تماس *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="مثال: 04161014065"
                className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* ایمیل */}
            <div>
              <label className="block mb-1 font-medium" htmlFor="email">ایمیل</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="مثال: example@email.com"
                className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* نوع مشاوره / محصول */}
            <div>
              <label className="block mb-1 font-medium" htmlFor="subject">موضوع مشاوره *</label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">موضوع را انتخاب کنید</option>
                <option value="پکیج خورشیدی کشاورزی">پکیج خورشیدی کشاورزی</option>
                <option value="پکیج خورشیدی صنعتی">پکیج خورشیدی صنعتی</option>
                <option value="پکیج خورشیدی خانگی">پکیج خورشیدی خانگی</option>
                <option value="سیستم‌های هیبرید و ذخیره‌سازی">سیستم‌های هیبرید و ذخیره‌سازی</option>
                <option value="ایستگاه شارژ خودرو برقی">ایستگاه شارژ خودرو برقی</option>
                <option value="تجهیزات پرتابل و گردشگری">تجهیزات پرتابل و گردشگری</option>
                <option value="مشاوره">مشاوره عمومی</option>
                <option value="سایر">سایر</option>
              </select>
            </div>

            {/* پیام */}
            <div>
              <label className="block mb-1 font-medium" htmlFor="message">پیام شما</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="توضیحات یا سوالات خود را وارد کنید..."
                className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              ></textarea>
            </div>

            {/* دکمه ارسال */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'در حال ارسال...' : 'ارسال درخواست'}
              </button>
            </div>

          </form>
        </div>

        {/* اطلاعات تماس اضافی */}
        <div className="text-center text-gray-700 mt-8 space-y-2">
          <p>📱 شماره تماس: 04161014065</p>
          <p>📍 موقعیت دفتر: تبریز – خیابان امام – مجتمع تجاری عتیق – بلوک A طبقه ۲ واحد ۱</p>
          <p>📃 دانلود کاتالوگ‌ها: <a href="/catalogs" className="text-green-700 hover:underline">اینجا کلیک کنید</a></p>
        </div>
      </section>
    </div>
  );
}
