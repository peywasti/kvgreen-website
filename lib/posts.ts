import fs from "fs";
import path from "path";
import matter from "gray-matter";
import MarkdownIt from "markdown-it";

import type { Post } from '@/types/post'

const postsDir = path.join(process.cwd(), "content/posts");

// Get all posts (without rendering HTML)
export function getAllPosts(): Omit<Post, "html">[] {
  const fileNames = fs.readdirSync(postsDir);

  return fileNames.map((file) => {
    const slug = file.replace(".md", "");
    const fileContents = fs.readFileSync(path.join(postsDir, file), "utf8");
    const { data } = matter(fileContents);

    return {
      slug,
      title: data.title,
      excerpt: data.excerpt,
      date: data.date,
      tags: data.tags || [],
      cover: data.cover || "",
    };
  });
}

// Get a single post (with rendered HTML)
export function getPost(slug: string): Post {
  // Validate slug
  if (!/^[a-zA-Z0-9\-]+$/.test(slug)) {
    throw new Error("Invalid slug format");
  }

  const filePath = path.join(postsDir, `${slug}.md`);
  const resolvedPath = path.resolve(filePath);
  if (!resolvedPath.startsWith(path.resolve(postsDir))) {
    throw new Error("Access denied");
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  const md = new MarkdownIt({ html: false });
  const html = md.render(content);

  return {
    slug,
    title: data.title,
    excerpt: data.excerpt,
    date: data.date,
    tags: data.tags || [],
    cover: data.cover || "",
    html,
  };
}