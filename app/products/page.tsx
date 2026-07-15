import { getAllProducts } from "@/lib/products"
import Link from "next/link"
import FadeIn from "@/components/fade-in"
import { ArrowLeft, Box, Zap, CheckCircle, SlidersHorizontal } from "lucide-react"

const gradients = [
  "from-emerald-400 via-teal-400 to-cyan-500",
  "from-amber-400 via-orange-400 to-rose-500",
  "from-sky-400 via-blue-400 to-indigo-500",
  "from-violet-400 via-purple-400 to-fuchsia-500",
  "from-rose-400 via-pink-400 to-orange-500",
  "from-cyan-400 via-teal-400 to-emerald-500",
  "from-lime-400 via-green-400 to-emerald-500",
  "from-fuchsia-400 via-purple-400 to-indigo-500",
]

export default function ProductsPage() {
  const products = getAllProducts()

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-14">
      <FadeIn>
        <div className="text-center">
          <span className="inline-flex items-center gap-2 bg-green-50 text-green-700 text-sm font-medium px-4 py-2 rounded-full mb-4">
            <SlidersHorizontal className="w-4 h-4" />
            کاتالوگ محصولات
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">محصولات ما</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            مجموعه‌ای از پنل‌ها، اینورترها، باتری‌ها و پکیج‌های خورشیدی با کیفیت و استاندارد اروپایی
          </p>
        </div>
      </FadeIn>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product, index) => {
          const gradient = gradients[index % gradients.length]
          const mainTag = product.tags?.[0] ?? ""

          return (
            <FadeIn key={product.slug} delay={index * 100}>
              <Link
                href={`/products/${product.slug}`}
                className="block bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-green-100 transition-all duration-500 overflow-hidden group h-full flex flex-col"
              >
                {/* Cover Area */}
                <div className={`h-52 bg-gradient-to-br ${gradient} relative flex items-center justify-center overflow-hidden`}>
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-30" />
                  <Zap className="w-16 h-16 text-white/50 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" />
                  {mainTag && (
                    <span className="absolute top-4 right-4 bg-white/90 backdrop-blur text-gray-800 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                      {mainTag}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors leading-snug line-clamp-2">
                    {product.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-5 line-clamp-2 leading-relaxed flex-1">
                    {product.excerpt}
                  </p>

                  {/* Meta row */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                    {product.features && product.features.length > 0 ? (
                      <span className="inline-flex items-center gap-1 text-xs text-gray-500">
                        <CheckCircle className="w-3.5 h-3.5" />
                        {product.features.length} ویژگی
                      </span>
                    ) : (
                      <span />
                    )}
                    <span className="inline-flex items-center gap-1 text-green-700 font-semibold text-sm group-hover:gap-2 transition-all">
                      مشاهده جزئیات
                      <ArrowLeft className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </FadeIn>
          )
        })}
      </div>

      {products.length === 0 && (
        <FadeIn>
          <div className="text-center py-20 text-gray-400">
            <Box className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <p className="text-lg">هنوز محصولی ثبت نشده است.</p>
          </div>
        </FadeIn>
      )}
    </div>
  )
}
