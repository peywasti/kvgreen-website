import { getAllPosts } from "@/lib/posts";
import Link from "next/link";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">بلاگ</h1>

      <div className="grid gap-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block p-4 border rounded hover:bg-gray-50 transition"
          >
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-gray-600">{post.excerpt}</p>
            <span className="text-sm text-gray-400">{post.date}</span>
          </Link>
        ))}
      </div>
    </main>
  );
}
