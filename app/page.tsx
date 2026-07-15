import Link from "next/link"
import FadeIn from "@/components/fade-in"
import {
  Droplets,
  Zap,
  Home,
  BatteryCharging,
  PlugZap,
  Backpack,
  Phone,
  ShieldCheck,
  Settings,
  Handshake,
  Headphones,
  ClipboardCheck,
  Gauge,
  Sun,
  CheckCircle,
  ChevronLeft
} from "lucide-react"

const services = [
  {
    title: "پکیج‌های خورشیدی کشاورزی",
    description: "برای چاه‌های آب ۲.۲ تا ۳۰ کیلووات، باغات، مزارع و پمپ‌های سطحی.",
    detail: "راندمان بالا – مصرف صفر برق از شبکه – مناسب تمام مناطق ایران.",
    icon: Droplets,
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    title: "پکیج‌های خورشیدی صنعتی",
    description: "مخصوص کارخانه‌ها، کارگاه‌ها، مرغداری‌ها و دامداری‌ها.",
    detail: "کاهش هزینه انرژی و تأمین توان سه‌فاز.",
    icon: Zap,
    color: "bg-amber-100 text-amber-700",
  },
  {
    title: "پکیج‌های خورشیدی خانگی",
    description: "سیستم‌های ۳ تا ۱۰ کیلووات برای خانه‌ها و ویلاها.",
    detail: "کاهش مصرف برق و برق اضطراری.",
    icon: Home,
    color: "bg-sky-100 text-sky-700",
  },
  {
    title: "سیستم‌های هیبرید + ذخیره‌سازی",
    description: "پکیج‌های مجهز به باتری LiFePO4 جهت تأمین انرژی ۲۴ ساعته.",
    detail: "",
    icon: BatteryCharging,
    color: "bg-violet-100 text-violet-700",
  },
  {
    title: "ایستگاه شارژ خودرو برقی",
    description: "شارژرهای AC و DC از ۷ تا ۴۰۰ کیلووات.",
    detail: "",
    icon: PlugZap,
    color: "bg-rose-100 text-rose-700",
  },
  {
    title: "تجهیزات پرتابل و گردشگری",
    description: "پاورباکس‌ها، پنل‌های تاشو، ژاکت خورشیدی و تجهیزات کمپینگ.",
    detail: "",
    icon: Backpack,
    color: "bg-orange-100 text-orange-700",
  },
]

const features = [
  {
    title: "همکاری رسمی",
    description: "با TommaTech و CW Enerji",
    icon: Handshake,
  },
  {
    title: "کیفیت اروپایی",
    description: "محصولات اصل با گارانتی معتبر",
    icon: ShieldCheck,
  },
  {
    title: "تخصص کامل",
    description: "در پکیج‌های چاه آب",
    icon: Settings,
  },
  {
    title: "طراحی فنی",
    description: "بر اساس داده‌های واقعی",
    icon: ClipboardCheck,
  },
  {
    title: "اجرای استاندارد",
    description: "نصب + تابلو برق + تست",
    icon: Gauge,
  },
  {
    title: "پشتیبانی ۷ روزه",
    description: "قطعات یدکی و گارانتی",
    icon: Headphones,
  },
]

const packages = [
  {
    name: "پکیج ۵.۵ کیلووات",
    scope: "چاه‌های ۳۰–۶۰ متر",
    specs: "۱۲ عدد پنل ۵۵۰ وات + اینورتر TT",
  },
  {
    name: "پکیج ۷.۵ کیلووات حرفه‌ای",
    scope: "چاه‌های ۴۰–۸۰ متر",
    specs: "ورودی ۱۰۰۰ ولت – راندمان بالا",
  },
  {
    name: "پکیج ۱۵ کیلووات",
    scope: "چاه‌های عمیق",
    specs: "۳۰ عدد پنل ۶۰۰ وات",
  },
  {
    name: "پکیج ۳۰ کیلووات",
    scope: "مزارع بزرگ",
    specs: "۴۰ عدد پنل ۶۷۵ وات + اینورتر صنعتی",
  },
]

const certifications = ["نمایندگی رسمی TommaTech", "همکاری با CW Enerji", "موجودی دائمی قطعات", "استاندارد CE – ISO – TIER1"]

export default function HomePage() {
  return (
    <div className="text-gray-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-emerald-50 to-white py-24 md:py-32 text-center px-4">
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-10 right-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
        <div className="relative max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur px-4 py-2 rounded-full text-sm text-green-700 font-medium shadow-sm border border-green-100 mb-4">
            <Sun className="w-4 h-4" />
            <span>راهکارهای انرژی پاک</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            راهکارهای پاک و همیشگی با{' '}
            <span className="text-green-600">پنل‌های خورشیدی</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            تأمین انرژی پایدار با پکیج‌های تخصصی خورشیدی، مناسب چاه‌های آب، کارخانه‌ها، واحدهای تولیدی و خانه‌ها.
          </p>
          <p className="text-base md:text-lg font-semibold text-gray-500">
            بدون هزینه سوخت – بدون استهلاک – بدون خاموشی
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-8 py-3.5 rounded-xl hover:bg-green-700 transition-all duration-300 shadow-lg shadow-green-600/20 hover:shadow-green-600/30 hover:-translate-y-0.5 text-base font-medium"
            >
              <Phone className="w-5 h-5" />
              درخواست مشاوره رایگان
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 bg-white text-green-700 border-2 border-green-100 px-8 py-3.5 rounded-xl hover:border-green-300 hover:bg-green-50 transition-all duration-300 text-base font-medium"
            >
              مشاهده محصولات
              <ChevronLeft className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* معرفی کوتاه برند */}
      <section className="max-w-5xl mx-auto px-4 py-20 text-center space-y-6">
        <FadeIn>
          <h2 className="text-3xl font-bold text-gray-900">معرفی کوتاه برند</h2>
        </FadeIn>
        <FadeIn delay={100}>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            <strong className="text-green-700">KV-GREEN</strong> ارائه‌دهنده پنل‌های خورشیدی حرفه‌ای در ایران است. ما با همکاری رسمی برندهای TommaTech و CW Enerji، بهترین پنل‌ها، اینورترها و سیستم‌های خورشیدی را برای هر مصرف تولیدی، کشاورزی یا خانگی ارائه می‌کنیم.
          </p>
        </FadeIn>
      </section>

      {/* دسته‌بندی خدمات */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">دسته‌بندی خدمات</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                راهکارهای متنوع خورشیدی برای تمام نیازهای انرژی شما
              </p>
            </div>
          </FadeIn>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <FadeIn key={service.title} delay={index * 100}>
                <div className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default">
                  <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-2">{service.description}</p>
                  {service.detail && (
                    <p className="text-sm text-gray-500 font-medium">{service.detail}</p>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* چرا KV-GREEN */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">چرا KV-GREEN کی وی گرین؟</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                مزیت‌های کلیدی که ما را از سایرین متمایز می‌کند
              </p>
            </div>
          </FadeIn>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <FadeIn key={feature.title} delay={index * 100}>
                <div className="flex items-start gap-4 p-5 rounded-xl bg-white border border-gray-100 hover:border-green-200 hover:shadow-md transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg bg-green-50 text-green-600 flex items-center justify-center shrink-0">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* پکیج‌های پرفروش کشاورزی */}
      <section className="bg-gradient-to-b from-green-50 to-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">پکیج‌های پرفروش کشاورزی</h2>
              <p className="text-gray-600">پرفروش‌ترین پکیج‌های خورشیدی KV-GREEN برای مصارف کشاورزی</p>
            </div>
          </FadeIn>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {packages.map((pkg, index) => (
              <FadeIn key={pkg.name} delay={index * 100}>
                <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{pkg.name}</h3>
                  <p className="text-sm text-gray-500 mb-1">{pkg.scope}</p>
                  <p className="text-sm text-green-700 font-medium">{pkg.specs}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={400}>
            <div className="text-center mt-10">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-3.5 rounded-xl hover:bg-green-700 transition-all duration-300 shadow-lg shadow-green-600/20 hover:shadow-green-600/30 hover:-translate-y-0.5 font-medium"
              >
                مشاهده همه پکیج‌ها
                <ChevronLeft className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* گواهی‌نامه‌ها و برندهای همکار */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">گواهی‌نامه‌ها و برندهای همکار</h2>
          </FadeIn>
          <div className="grid gap-4 sm:grid-cols-2">
            {certifications.map((cert, index) => (
              <FadeIn key={cert} delay={index * 100}>
                <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-5 border border-gray-100">
                  <CheckCircle className="w-6 h-6 text-green-600 shrink-0" />
                  <span className="font-medium text-gray-800">{cert}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
