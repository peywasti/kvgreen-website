import Link from "next/link"
import { Home, AlertTriangle } from "lucide-react"

export default function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex flex-col justify-center items-center bg-gray-50 text-center px-4">
      <div className="max-w-md mx-auto space-y-6">
        <div className="w-20 h-20 rounded-full bg-red-50 text-red-500 flex items-center justify-center mx-auto">
          <AlertTriangle className="w-10 h-10" />
        </div>
        <h1 className="text-6xl font-bold text-gray-900">۴۰۴</h1>
        <h2 className="text-2xl font-semibold text-gray-800">صفحه مورد نظر یافت نشد</h2>
        <p className="text-gray-600 leading-relaxed">
          متأسفیم، صفحه‌ای که دنبال آن بودید وجود ندارد یا آدرس اشتباه است.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-3.5 rounded-xl hover:bg-green-700 transition-all duration-300 shadow-lg shadow-green-600/20 hover:shadow-green-600/30 hover:-translate-y-0.5 font-medium"
        >
          <Home className="w-5 h-5" />
          بازگشت به خانه
        </Link>
      </div>
    </div>
  )
}
