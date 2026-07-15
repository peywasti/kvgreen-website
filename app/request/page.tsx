'use client'

import { useState } from 'react'
import FadeIn from '@/components/fade-in'
import { Phone, MapPin, FileText, Send, Loader2 } from 'lucide-react'

export default function RequestPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      const response = await fetch('/api/forms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitMessage('درخواست شما با موفقیت ارسال شد. به زودی با شما تماس خواهیم گرفت.')
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        })
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      console.error('Request form submission error:', error)
      setSubmitMessage('متاسفانه خطایی رخ داد. لطفا دوباره تلاش کنید یا با شماره تلفن تماس بگیرید.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="space-y-16">
      <section className="bg-gradient-to-br from-green-50 via-emerald-50 to-white py-16 text-center px-4 relative overflow-hidden">
        <div className="relative max-w-3xl mx-auto">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">درخواست مشاوره</h1>
            <p className="text-lg md:text-xl text-gray-600">
              لطفاً فرم زیر را پر کنید تا کارشناسان KV-GREEN با شما تماس بگیرند.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 pb-20">
        <FadeIn>
          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 md:p-8">
            {submitMessage && (
              <div className={`p-4 rounded-xl mb-6 text-sm ${submitMessage.includes('موفقیت') ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
                {submitMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="name">نام و نام خانوادگی *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="مثال: علی رضایی"
                  className="w-full border border-gray-200 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="phone">شماره تماس *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="مثال: 04161014065"
                  className="w-full border border-gray-200 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="email">ایمیل</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="مثال: example@email.com"
                  className="w-full border border-gray-200 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="subject">موضوع مشاوره *</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-200 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition bg-white"
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

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="message">پیام شما</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="توضیحات یا سوالات خود را وارد کنید..."
                  className="w-full border border-gray-200 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition resize-none"
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-3.5 rounded-xl hover:bg-green-700 transition disabled:opacity-50 disabled:cursor-not-allowed font-medium shadow-lg shadow-green-600/20"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      در حال ارسال...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      ارسال درخواست
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </FadeIn>

        <FadeIn delay={150}>
          <div className="grid sm:grid-cols-3 gap-4 mt-8">
            <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-4 text-sm text-gray-600">
              <Phone className="w-5 h-5 text-green-600 shrink-0" />
              <span>۰۴۱۶۱۰۱۴۰۶۵</span>
            </div>
            <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-4 text-sm text-gray-600">
              <MapPin className="w-5 h-5 text-green-600 shrink-0" />
              <span>تبریز – مجتمع عتیق</span>
            </div>
            <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-4 text-sm text-gray-600">
              <FileText className="w-5 h-5 text-green-600 shrink-0" />
              <a href="/catalogs" className="text-green-700 hover:underline">دانلود کاتالوگ‌ها</a>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  )
}
