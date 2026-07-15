import { getAllPosts } from "@/lib/posts"
import Link from "next/link"
import FadeIn from "@/components/fade-in"
import { Calendar, ArrowLeft, Sun, BookOpen, Tag } from "lucide-react"

const gradients = [
  "from-emerald-400 to-teal-500",
  "from-amber-400 to-orange-500",
  "from-sky-400 to-blue-500",
  "from-violet-400 to-purple-500",
  "from-rose-400 to-pink-500",
  "from-cyan-400 to-teal-500",
]

export default function BlogPage() {
  const posts = getAllPosts()
  const featured = posts[0]
  const rest = posts.slice(1)

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <FadeIn>
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 bg-green-50 text-green-700 text-sm font-medium px-4 py-2 rounded-full mb-4">
            <BookOpen className="w-4 h-4" />
            مجله خورشیدی
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">بلاگ</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            مقالات و آموزش‌های تخصصی در زمینه انرژی خورشیدی، پنل‌ها، اینورترها و راهکارهای صرفه‌جویی انرژی
          </p>
        </div>
      </FadeIn>

      {featured && (
        <FadeIn delay={100}>
          <Link href={`/blog/${featured.slug}`} className="block group mb-12">
            <div className="relative bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:border-green-100 transition-all duration-500">
              <div className="md:flex">
                <div className={`md:w-1/2 h-64 md:h-auto min-h-[280px] relative bg-gradient-to-br ${gradients[0]} flex items-center justify-center overflow-hidden`}>
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-30" />
                  <Sun className="w-20 h-20 text-white/60 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {featured.tags?.slice(0, 3).map((tag) => (
                      <span key={tag} className="inline-flex items-center gap-1 bg-green-50 text-green-700 text-xs font-medium px-3 py-1 rounded-full">
                        <Tag className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-green-700 transition-colors leading-tight">
                    {featured.title}
                  </h2>
                  <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                    {featured.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>{featured.date}</span>
                    </div>
                    <span className="inline-flex items-center gap-2 text-green-700 font-semibold text-sm group-hover:gap-3 transition-all">
                      مطالعه مقاله
                      <ArrowLeft className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </FadeIn>
      )}

      <div className="grid gap-6 md:grid-cols-2">
        {rest.map((post, index) => {
          const gradient = gradients[(index + 1) % gradients.length]
          return (
            <FadeIn key={post.slug} delay={index * 100}>
              <Link
                href={`/blog/${post.slug}`}
                className="block bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 hover:border-green-100 transition-all duration-300 group h-full flex flex-col"
              >
                <div className={`h-48 bg-gradient-to-br ${gradient} relative flex items-center justify-center overflow-hidden`}>
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-30" />
                  <BookOpen className="w-14 h-14 text-white/60 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags?.slice(0, 2).map((tag) => (
                      <span key={tag} className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors line-clamp-2 leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-green-700 font-semibold text-sm group-hover:gap-2 transition-all">
                      <ArrowLeft className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </FadeIn>
          )
        })}
      </div>

      {posts.length === 0 && (
        <FadeIn>
          <div className="text-center py-20 text-gray-400">
            <BookOpen className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <p className="text-lg">هنوز مقاله‌ای ثبت نشده است.</p>
          </div>
        </FadeIn>
      )}
    </div>
  )
}
