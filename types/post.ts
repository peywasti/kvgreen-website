export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags?: string[];
  cover?: string;
  html: string;
}
