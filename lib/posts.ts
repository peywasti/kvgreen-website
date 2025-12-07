import fs from "fs";
import path from "path";
import matter from "gray-matter";
import MarkdownIt from "markdown-it";

const postsDir = path.join(process.cwd(), "content/posts");

// تمام پست‌ها
export function getAllPosts() {
  const fileNames = fs.readdirSync(postsDir);

  return fileNames.map((file) => {
    const slug = file.replace(".md", "");
    const fullPath = path.join(postsDir, file);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const { data } = matter(fileContents);

    return {
      slug,
      ...data,
    };
  });
}

// پست تکی
export function getPost(slug: string) {
  // Validate slug to prevent directory traversal
  if (!/^[a-zA-Z0-9\-]+$/.test(slug)) {
    throw new Error("Invalid slug format");
  }

  const filePath = path.join(postsDir, `${slug}.md`);

  // Ensure the resolved path is within the posts directory
  const resolvedPath = path.resolve(filePath);
  if (!resolvedPath.startsWith(path.resolve(postsDir))) {
    throw new Error("Access denied");
  }

  const fileContents = fs.readFileSync(filePath, "utf8");

   const { data, content } = matter(fileContents);

   const md = new MarkdownIt({
     html: false, // Disable HTML rendering for security
   });
   const html = md.render(content);

  return {
    slug,
    frontmatter: data,
    html,
  };
}
