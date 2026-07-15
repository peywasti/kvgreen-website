import FadeIn from "@/components/fade-in"
import { Target, Eye, Award, CheckCircle } from "lucide-react"

const reasons = [
  "همکاری با متخصصان باتجربه و قابل‌اعتماد",
  "ارتباط مستقیم با تولیدکنندگان مطرح اروپایی",
  "راهکارهای مهندسی‌شده سازگار با اقلیم ایران",
  "استفاده از تجهیزات باکیفیت و ضمانت طولانی‌مدت",
  "طراحی، مشاوره و اجرای حرفه‌ای",
  "پشتیبانی فنی و خدمات پس از فروش واقعی",
]

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-16 text-gray-800">
      <FadeIn>
        <section className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">درباره ما</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            داستان کی‌وی‌گرین و ماموریت ما برای آینده‌ای پاک‌تر
          </p>
        </section>
      </FadeIn>

      <FadeIn delay={100}>
        <section className="space-y-4 leading-relaxed text-gray-600">
          <p>
            در <strong className="text-green-700">کی وی گرین</strong> باور داریم آینده از آنِ انرژی پاک و پایدار است. بر همین اساس، با اتکا به دانش تخصصی، تجربه‌ میدانی و همکاری با معتبرترین تولیدکنندگان بین‌المللی، واحد انرژی خورشیدی کی وی گرین را ایجاد کردیم تا راهکارهایی دقیق، استاندارد و قابل‌اعتماد برای تولید برق خورشیدی در ایران ارائه دهیم.
          </p>
          <p>
            در دو سال گذشته، تحقیقات گسترده‌ای در بازار داخلی و خارجی انجام دادیم و برای انتخاب بهترین فناوری‌های روز دنیا، همکاری خود را با مهندسان مجرب این حوزه آغاز کردیم. ترکیب دانش فنی، صداقت کاری و تجربه‌ی تیم مهندسی، مسیر ورود حرفه‌ای ما به صنعت انرژی خورشیدی را هموار ساخت.
          </p>
          <p>
            در ادامه این مسیر، مذاکرات رسمی با شرکت‌های معتبر <strong className="text-green-700">CW-Enerji</strong> و <strong className="text-green-700">TommaTech</strong> آغاز شد. در سفر کاری به آنتالیا، از خط تولید پنل‌ها، اینورترها و سیستم‌های آبیاری خورشیدی بازدید کردیم.
          </p>
        </section>
      </FadeIn>

      <div className="grid md:grid-cols-2 gap-8">
        <FadeIn delay={150}>
          <div className="bg-green-50 rounded-2xl p-8 border border-green-100">
            <div className="w-12 h-12 rounded-lg bg-green-100 text-green-600 flex items-center justify-center mb-4">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">ماموریت ما</h3>
            <p className="text-gray-600 leading-relaxed">
              ارائه راهکارهای خورشیدی دقیق، اقتصادی و پایدار برای خانه‌ها، مزارع، کارگاه‌ها، صنایع و مجموعه‌های تجاری؛ به‌گونه‌ای که مشتریان ما بتوانند سال‌ها با خیالی آسوده از انرژی پاک و قابل‌اعتماد بهره‌مند شوند.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={250}>
          <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-100">
            <div className="w-12 h-12 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">چشم‌انداز ما</h3>
            <p className="text-gray-600 leading-relaxed">
              ساخت سیستمی نوین از راهکارهای انرژی خورشیدی در ایران؛ جایی که هر خانواده، مزرعه و کسب‌وکار بتواند بدون وابستگی به شبکه، انرژی پایدار، مطمئن و مقرون‌به‌صرفه تولید کند.
            </p>
          </div>
        </FadeIn>
      </div>

      <FadeIn delay={100}>
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-8 h-8 text-green-600" />
            <h3 className="text-2xl font-bold text-gray-900">چرا کی وی گرین؟</h3>
          </div>
          <ul className="grid sm:grid-cols-2 gap-4">
            {reasons.map((item, index) => (
              <li key={index} className="flex items-start gap-3 bg-gray-50 rounded-xl p-4">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </FadeIn>

      <FadeIn delay={100}>
        <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl p-8 text-white text-center">
          <p className="text-lg font-medium leading-relaxed">
            در <span className="font-bold">کی وی گرین</span>، ما فقط تجهیزات خورشیدی ارائه نمی‌کنیم؛ بلکه راهکار کامل، استاندارد و مطمئن تولید انرژی را ارائه می‌دهیم.
          </p>
        </div>
      </FadeIn>
    </div>
  )
}
