import Link from "next/link";
export default function HomePage() {
  return (
    <div className="space-y-16 text-gray-800">

      {/* Hero Section */}
      <section className="bg-green-50 py-20 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          راهکارهای پاک و همیشگی با پنل های خورشیدی
        </h1>
        <p className="text-lg md:text-xl mb-6">
          تأمین انرژی پایدار با پکیج‌های تخصصی خورشیدی، مناسب چاه‌های آب، کارخانه‌ها، واحدهای تولیدی و خانه‌ها.
        </p>
        <p className="text-lg font-semibold mb-6">بدون هزینه سوخت – بدون استهلاک – بدون خاموشی</p>
        <a
          href="/contact"
          className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
        >
          درخواست مشاوره رایگان
        </a>
      </section>

      {/* معرفی کوتاه برند */}
      <section className="max-w-5xl mx-auto px-4 text-center space-y-3">
        <h2 className="text-2xl font-bold">معرفی کوتاه برند</h2>
        <p>
          KV-GREEN ارائه‌دهنده پنل های خورشیدی حرفه‌ای در ایران است. ما با همکاری رسمی برندهای TommaTech و CW Enerji، بهترین پنل‌ها، اینورترها و سیستم‌های خورشیدی را برای هر مصرف تولیدی، کشاورزی یا خانگی ارائه می‌کنیم.
        </p>
      </section>

      {/* دسته‌بندی خدمات */}
      <section className="max-w-6xl mx-auto px-4 space-y-12">
        <h2 className="text-2xl font-bold text-center mb-6">دسته‌بندی خدمات</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          <div className="bg-white border rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-semibold mb-2">پکیج‌های خورشیدی کشاورزی</h3>
            <p>برای چاه‌های آب 2.2 تا 30 کیلووات، باغات، مزارع و پمپ‌های سطحی.</p>
            <p className="mt-2 text-gray-600">راندمان بالا – مصرف صفر برق از شبکه – مناسب تمام مناطق ایران.</p>
          </div>

          <div className="bg-white border rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-semibold mb-2">پکیج‌های خورشیدی صنعتی</h3>
            <p>مخصوص کارخانه‌ها، کارگاه‌ها، مرغداری‌ها و دامداری‌ها.</p>
            <p className="mt-2 text-gray-600">کاهش هزینه انرژی و تأمین توان سه‌فاز.</p>
          </div>

          <div className="bg-white border rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-semibold mb-2">پکیج‌های خورشیدی خانگی</h3>
            <p>سیستم‌های 3 تا 10 کیلووات برای خانه‌ها و ویلاها.</p>
            <p className="mt-2 text-gray-600">کاهش مصرف برق و برق اضطراری.</p>
          </div>

          <div className="bg-white border rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-semibold mb-2">سیستم‌های هیبرید + ذخیره‌سازی انرژی</h3>
            <p>پکیج‌های مجهز به باتری LiFePO4 جهت تأمین انرژی 24 ساعته.</p>
          </div>

          <div className="bg-white border rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-semibold mb-2">ایستگاه شارژ خودرو برقی</h3>
            <p>شارژرهای AC و DC از 7 تا 400 کیلووات.</p>
          </div>

          <div className="bg-white border rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-semibold mb-2">تجهیزات پرتابل و گردشگری</h3>
            <p>پاورباکس‌ها، پنل‌های تاشو، ژاکت خورشیدی و تجهیزات کمپینگ.</p>
          </div>

        </div>
      </section>

      {/* چرا KV-GREEN */}
      <section className="bg-green-50 py-16 px-4">
        <h2 className="text-2xl font-bold text-center mb-6">چرا KV-GREEN کی وی گرین؟</h2>
        <ul className="max-w-4xl mx-auto list-disc pr-6 space-y-2 text-gray-700">
          <li>همکاری رسمی با TommaTech و CW Enerji</li>
          <li>محصولات اصل، گارانتی معتبر، کیفیت اروپایی (آلمانی)</li>
          <li>تخصص کامل در پکیج‌های چاه آب</li>
          <li>از ۲.۲ تا ۳۰ کیلووات، مناسب عمق‌های مختلف</li>
        </ul>

        <div className="max-w-4xl mx-auto mt-8 space-y-4 text-gray-700">
          <p>طراحی فنی بر اساس داده‌های واقعی: محاسبه عمق، دبی، توان پمپ و ظرفیت تولید انرژی.</p>
          <p>اجرا توسط تیم متخصص: نصب استاندارد + تابلو برق صنعتی + تست کامل.</p>
          <p>پشتیبانی واقعی: قطعات یدکی – گارانتی – پاسخ‌گویی ۷ روز هفته.</p>
        </div>
      </section>

      {/* پکیج‌های پرفروش کشاورزی */}
      <section className="max-w-6xl mx-auto px-4 space-y-12">
        <h2 className="text-2xl font-bold text-center mb-6">پکیج‌های پرفروش کشاورزی KV-GREEN</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          <div className="bg-white border rounded-lg shadow-sm p-4 text-center">
            <h3 className="font-semibold text-lg mb-2">پکیج 5.5 کیلووات</h3>
            <p>برای چاه‌های 30–60 متر</p>
            <p>۱۲ عدد پنل ۵۵۰ وات + اینورتر TT</p>
          </div>

          <div className="bg-white border rounded-lg shadow-sm p-4 text-center">
            <h3 className="font-semibold text-lg mb-2">پکیج 7.5 کیلووات حرفه‌ای</h3>
            <p>برای چاه‌های 40–80 متر</p>
            <p>ورودی 1000 ولت – راندمان بالا</p>
          </div>

          <div className="bg-white border rounded-lg shadow-sm p-4 text-center">
            <h3 className="font-semibold text-lg mb-2">پکیج 15 کیلووات</h3>
            <p>برای چاه‌های عمیق</p>
            <p>۳۰ عدد پنل 600 وات</p>
          </div>

          <div className="bg-white border rounded-lg shadow-sm p-4 text-center">
            <h3 className="font-semibold text-lg mb-2">پکیج 30 کیلووات</h3>
            <p>برای مزارع بزرگ</p>
            <p>۴۰ عدد پنل 675 وات + اینورتر صنعتی</p>
          </div>

        </div>
        <div className="text-center mt-6">
          <Link
            href="/products"
            className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
          >
            مشاهده پکیج‌ها
          </Link>
        </div>
      </section>

      {/* گواهی‌نامه‌ها و برندهای همکار */}
      <section className="bg-green-50 py-16 px-4">
        <h2 className="text-2xl font-bold text-center mb-6">گواهی‌نامه‌ها و برندهای همکار</h2>
        <ul className="max-w-4xl mx-auto list-disc pr-6 space-y-2 text-gray-700 text-center">
          <li>نمایندگی رسمی TommaTech</li>
          <li>همکاری با CW Enerji</li>
          <li>موجودی دائمی قطعات</li>
          <li>استاندارد CE – ISO – TIER1</li>
        </ul>
      </section>

    </div>
  );
}
