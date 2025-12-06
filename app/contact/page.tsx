export default function ContactPage() {
  return (
    <div className="space-y-8 leading-8 text-gray-800">

      <h1 className="text-2xl font-bold mb-4">تماس و مشاوره</h1>

      <p>
        برای مشاوره تخصصی و محاسبه رایگان توان مورد نیاز، از روش‌های زیر می‌توانید با ما در ارتباط باشید:
      </p>

      {/* Phone */}
      <div className="bg-white border p-4 rounded-lg shadow-sm">
        <h3 className="font-semibold text-lg mb-2">📱 شماره تماس</h3>
        <p className="text-lg">
          <a href="tel:04161014065" className="text-green-700 hover:underline">
            04161014065
          </a>
        </p>
      </div>

      {/* Request form */}
      <div className="bg-white border p-4 rounded-lg shadow-sm">
        <h3 className="font-semibold text-lg mb-2">📩 فرم درخواست</h3>
        <p>برای ثبت درخواست مشاوره، فرم اختصاصی ما را تکمیل کنید.</p>
        <a
          href="/request"
          className="inline-block mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          ورود به فرم درخواست
        </a>
      </div>

      {/* Address */}
      <div className="bg-white border p-4 rounded-lg shadow-sm">
        <h3 className="font-semibold text-lg mb-2">📍 موقعیت دفتر</h3>
        <p>
          تبریز – خیابان امام – مجتمع تجاری عتیق – بلوک A  
          <br />
          طبقه ۲ – واحد ۱
        </p>
      </div>

      {/* Catalog download */}
      <div className="bg-white border p-4 rounded-lg shadow-sm">
        <h3 className="font-semibold text-lg mb-2">📃 دانلود کاتالوگ‌ها</h3>
        <a
          href="/catalogs"
          className="text-green-700 font-semibold hover:underline"
        >
          مشاهده و دانلود کاتالوگ‌ها
        </a>
      </div>

    </div>
  );
}
