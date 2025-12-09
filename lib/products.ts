import fs from "fs";
import path from "path";
import matter from "gray-matter";
import MarkdownIt from "markdown-it";

import type { Product } from '@/types/product'

const productsDir = path.join(process.cwd(), "content/products");

// Get all products (without rendering HTML)
export function getAllProducts(): Omit<Product, "html">[] {
  const fileNames = fs.readdirSync(productsDir);

  return fileNames.map((file) => {
    const slug = file.replace(".md", "");
    const fileContents = fs.readFileSync(path.join(productsDir, file), "utf8");
    const { data } = matter(fileContents);

    return {
      slug,
      title: data.title,
      excerpt: data.excerpt,
      date: data.date,
      tags: data.tags || [],
      cover: data.cover || "",
      features: data.features || [],
      specs: data.specs || [],
    };
  });
}

// Get a single product (with rendered HTML)
export function getProduct(slug: string): Product {
  // Validate slug
  if (!/^[a-zA-Z0-9\-]+$/.test(slug)) {
    throw new Error("Invalid slug format");
  }

  const filePath = path.join(productsDir, `${slug}.md`);
  const resolvedPath = path.resolve(filePath);
  if (!resolvedPath.startsWith(path.resolve(productsDir))) {
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
    features: data.features || [],
    specs: data.specs || [],
    html,
  };
}