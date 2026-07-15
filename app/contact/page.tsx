'use client'

import { useState } from 'react'
import FadeIn from '@/components/fade-in'
import { Phone, MapPin, Mail, Send, Loader2 } from 'lucide-react'

export default function ContactPage() {
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
        setSubmitMessage('پیام شما با موفقیت ارسال شد. به زودی با شما تماس خواهیم گرفت.')
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
      console.error('Form submission error:', error)
      setSubmitMessage('متاسفانه خطایی رخ داد. لطفا دوباره تلاش کنید یا با شماره تلفن تماس بگیرید.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 space-y-12">
      <FadeIn>
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">تماس و مشاوره</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            برای مشاوره تخصصی و محاسبه رایگان توان مورد نیاز، از روش‌های زیر می‌توانید با ما در ارتباط باشید:
          </p>
        </div>
      </FadeIn>

      <div className="grid md:grid-cols-2 gap-8">
        <FadeIn delay={100}>
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">شماره تماس</h3>
              <p className="text-lg">
                <a href="tel:04161014065" className="text-green-700 hover:underline font-medium text-2xl">
                  ۰۴۱۶۱۰۱۴۰۶۵
                </a>
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">موقعیت دفتر</h3>
              <p className="leading-relaxed text-gray-600">
                تبریز – خیابان امام – مجتمع تجاری عتیق – بلوک A
                <br />
                طبقه ۲ – واحد ۱
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">ایمیل</h3>
              <p className="text-gray-600">info@kvgreen.ir</p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center gap-3 mb-4">
              <Send className="w-5 h-5 text-green-600" />
              <h2 className="text-xl font-bold text-gray-900">فرم تماس</h2>
            </div>
            <p className="text-gray-600 mb-6">
              برای ثبت درخواست مشاوره یا ارسال پیام، فرم زیر را پر کنید.
            </p>

            {submitMessage && (
              <div className={`p-4 rounded-xl mb-4 text-sm ${submitMessage.includes('موفقیت') ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
                {submitMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">نام و نام خانوادگی *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                  placeholder="نام خود را وارد کنید"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">ایمیل *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                  placeholder="ایمیل خود را وارد کنید"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">شماره تلفن</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                  placeholder="شماره تلفن خود را وارد کنید"
                />
              </div>        

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">پیام *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition resize-none"
                  placeholder="پیام خود را بنویسید"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-600 text-white py-3 px-6 rounded-xl hover:bg-green-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 font-medium"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    در حال ارسال...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    ارسال پیام
                  </>
                )}
              </button>
            </form>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
