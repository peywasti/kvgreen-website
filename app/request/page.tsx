export default function ContactPage() {
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
        <form className="bg-white border rounded-lg shadow-sm p-6 space-y-4">

          {/* نام و نام خانوادگی */}
          <div>
            <label className="block mb-1 font-medium" htmlFor="name">نام و نام خانوادگی</label>
            <input
              type="text"
              id="name"
              placeholder="مثال: علی رضایی"
              className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* شماره تماس */}
          <div>
            <label className="block mb-1 font-medium" htmlFor="phone">شماره تماس</label>
            <input
              type="tel"
              id="phone"
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
              placeholder="مثال: example@email.com"
              className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* نوع مشاوره / محصول */}
          <div>
            <label className="block mb-1 font-medium" htmlFor="topic">موضوع مشاوره</label>
            <select
              id="topic"
              className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option>پکیج خورشیدی کشاورزی</option>
              <option>پکیج خورشیدی صنعتی</option>
              <option>پکیج خورشیدی خانگی</option>
              <option>سیستم‌های هیبرید و ذخیره‌سازی</option>
              <option>ایستگاه شارژ خودرو برقی</option>
              <option>تجهیزات پرتابل و گردشگری</option>
            </select>
          </div>

          {/* پیام */}
          <div>
            <label className="block mb-1 font-medium" htmlFor="message">پیام شما</label>
            <textarea
              id="message"
              rows={5}
              placeholder="توضیحات یا سوالات خود را وارد کنید..."
              className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
          </div>

          {/* دکمه ارسال */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
            >
              ارسال درخواست
            </button>
          </div>

        </form>

        {/* اطلاعات تماس اضافی */}
        <div className="text-center text-gray-700 mt-8 space-y-2">
          <p>📱 شماره تماس: 04161014065</p>
          <p>📍 موقعیت دفتر: تبریز – خیابان امام – مجتمع تجاری عتیق – بلوک A طبقه 2 واحد 1</p>
          <p>📃 دانلود کاتالوگ‌ها: <a href="/catalogs" className="text-green-600 hover:underline">اینجا کلیک کنید</a></p>
        </div>
      </section>
    </div>
  );
}
