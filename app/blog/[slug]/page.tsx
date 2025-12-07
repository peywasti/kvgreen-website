import { getPost } from "@/lib/posts";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function SinglePostPage({ params }: Props) {

  const { slug } = await params;

  if (!slug) {
    return notFound();
  }

  let post;
  try {
    post = getPost(slug);
  } catch {
    return notFound();
  }

  return (
    <main className="max-w-3xl mx-auto p-6 prose prose-lg prose-h1:text-green-600">
      <h1>{post.title}</h1>
      <p className="text-gray-500">{post.date}</p>

      <article
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </main>
  );
}
