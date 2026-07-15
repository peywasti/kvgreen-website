import { getPost } from "@/lib/posts"
import { notFound } from "next/navigation"
import Link from "next/link"
import FadeIn from "@/components/fade-in"
import { Calendar, ArrowRight, Tag, BookOpen } from "lucide-react"

interface Props {
  params: Promise<{ slug: string }>
}

export default async function SinglePostPage({ params }: Props) {
  const { slug } = await params

  if (!slug) {
    return notFound()
  }

  let post
  try {
    post = getPost(slug)
  } catch {
    return notFound()
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <FadeIn>
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-green-700 transition-colors mb-8 text-sm font-medium"
        >
          <ArrowRight className="w-4 h-4" />
          بازگشت به بلاگ
        </Link>

        {/* Header */}
        <div className="mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags?.map((tag) => (
              <span key={tag} className="inline-flex items-center gap-1 bg-green-50 text-green-700 text-xs font-medium px-3 py-1 rounded-full">
                <Tag className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              <span>KV-Green</span>
            </div>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{post.date}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <article
          className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-10 prose-h2:mb-4 prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-green-700 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-ul:text-gray-600 prose-ol:text-gray-600 prose-li:my-2 prose-blockquote:border-r-4 prose-blockquote:border-green-500 prose-blockquote:pr-6 prose-blockquote:pl-0 prose-blockquote:italic prose-blockquote:text-gray-700 prose-img:rounded-2xl prose-img:shadow-lg prose-hr:border-gray-200"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </FadeIn>
    </div>
  )
}
