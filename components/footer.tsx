import Link from "next/link"
import { Phone, MapPin, Mail, Sun } from "lucide-react"

const footerLinks = [
  { href: "/about", label: "درباره ما" },
  { href: "/products", label: "محصولات" },
  { href: "/blog", label: "بلاگ" },
  { href: "/contact", label: "تماس با ما" },
  { href: "/request", label: "درخواست مشاوره" },
]

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-12 grid gap-8 md:grid-cols-3">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-white">
            <Sun className="w-6 h-6 text-green-400" />
            <span className="text-xl font-bold">کی‌وی‌گرین</span>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            ارائه‌دهنده راهکارهای پاک و پایدار با پنل‌های خورشیدی. همکاری رسمی با TommaTech و CW Enerji.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">لینک‌های سریع</h3>
          <ul className="space-y-2 text-sm">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-green-400 transition">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">تماس با ما</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-green-400 shrink-0" />
              <a href="tel:04161014065" className="hover:text-white transition">۰۴۱۶۱۰۱۴۰۶۵</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
              <span>تبریز – خیابان امام – مجتمع تجاری عتیق – بلوک A – طبقه ۲ – واحد ۱</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-green-400 shrink-0" />
              <span>info@kvgreen.ir</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-4 text-center text-sm text-gray-500">
          <p>© ۱۴۰۴ — کلیه حقوق این وب‌سایت محفوظ است.</p>
        </div>
      </div>
    </footer>
  )
}
