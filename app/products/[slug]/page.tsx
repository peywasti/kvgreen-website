import { getProduct } from "@/lib/products"
import { notFound } from "next/navigation"
import Link from "next/link"
import FadeIn from "@/components/fade-in"
import { CheckCircle, ArrowLeft, ArrowRight, Box, ClipboardList, FileText, Zap, Tag, Calendar } from "lucide-react"

interface ProductPageProps {
  params: Promise<{
    slug: string
  }>
}

const gradients = [
  "from-emerald-400 via-teal-400 to-cyan-500",
  "from-amber-400 via-orange-400 to-rose-500",
  "from-sky-400 via-blue-400 to-indigo-500",
  "from-violet-400 via-purple-400 to-fuchsia-500",
]

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params

  if (!slug) {
    return notFound()
  }

  let product
  try {
    product = getProduct(slug)
  } catch {
    return notFound()
  }

  const gradient = gradients[0]

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-10 text-gray-800">
      <FadeIn>
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-green-700 transition-colors mb-6 text-sm font-medium"
        >
          <ArrowRight className="w-4 h-4" />
          بازگشت به محصولات
        </Link>
      </FadeIn>

      <FadeIn delay={50}>
        <div className="space-y-6">
          <div className="flex flex-wrap gap-2">
            {product.tags?.map((tag) => (
              <span key={tag} className="inline-flex items-center gap-1 bg-green-50 text-green-700 text-xs font-medium px-3 py-1 rounded-full">
                <Tag className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">{product.title}</h1>
          <p className="text-gray-600 text-lg leading-relaxed">{product.excerpt}</p>
          {product.date && (
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Calendar className="w-4 h-4" />
              <span>{product.date}</span>
            </div>
          )}
        </div>
      </FadeIn>

      <FadeIn delay={100}>
        <div className={`h-64 md:h-80 rounded-3xl bg-gradient-to-br ${gradient} relative flex items-center justify-center overflow-hidden`}>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-30" />
          <Zap className="w-24 h-24 text-white/50" />
        </div>
      </FadeIn>

      {product.features && product.features.length > 0 && (
        <FadeIn delay={150}>
          <div className="bg-white border border-gray-100 rounded-3xl p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-green-50 text-green-600 flex items-center justify-center">
                <Box className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">ویژگی‌ها</h2>
            </div>
            <ul className="grid sm:grid-cols-2 gap-3">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 bg-gray-50 rounded-xl p-4">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      )}

      {product.specs && product.specs.length > 0 && (
        <FadeIn delay={200}>
          <div className="bg-white border border-gray-100 rounded-3xl p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-green-50 text-green-600 flex items-center justify-center">
                <ClipboardList className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">مشخصات فنی</h2>
            </div>
            <div className="overflow-hidden rounded-2xl border border-gray-100">
              <table className="w-full text-right">
                <tbody>
                  {product.specs.map((spec, index) => (
                    <tr key={index} className={`border-b last:border-b-0 ${index % 2 === 0 ? 'bg-gray-50/50' : 'bg-white'}`}>
                      <td className="py-3.5 px-5 font-semibold text-gray-700 w-1/3 text-sm">{spec.label}</td>
                      <td className="py-3.5 px-5 text-gray-600 text-sm">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </FadeIn>
      )}

      {product.html && (
        <FadeIn delay={250}>
          <div className="bg-white border border-gray-100 rounded-3xl p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-green-50 text-green-600 flex items-center justify-center">
                <FileText className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">توضیحات</h2>
            </div>
            <article
              className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-h2:text-2xl prose-h2:font-bold prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-green-700 prose-strong:text-gray-900 prose-ul:text-gray-600 prose-li:my-2"
              dangerouslySetInnerHTML={{ __html: product.html }}
            />
          </div>
        </FadeIn>
      )}

      <FadeIn delay={300}>
        <div className="text-center pt-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-3.5 rounded-xl hover:bg-green-700 transition-all duration-300 shadow-lg shadow-green-600/20 hover:shadow-green-600/30 hover:-translate-y-0.5 font-medium"
          >
            درخواست مشاوره
            <ArrowLeft className="w-4 h-4" />
          </Link>
        </div>
      </FadeIn>
    </div>
  )
}
