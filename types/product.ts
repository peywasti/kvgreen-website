export type Product = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags?: string[];
  cover?: string;
  features?: string[];
  specs?: { label: string; value: string }[];
  html: string;
}