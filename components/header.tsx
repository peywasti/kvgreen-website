import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full border-b bg-white">
      <div className="max-w-6xl mx-auto flex items-center p-4">

        {/* Logo + Title */}
        <div className="flex items-center gap-3">
          <Image
            src="/kvgreen-logo.svg"
            width={50}
            height={50}
            alt="KV-Green Logo"
          />
          <div className="flex flex-col">
            <span className="text-lg font-bold">کی‌ وی ‌گرین</span>
            <span className="text-sm text-gray-600">پنل‌های خورشیدی</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex gap-4 text-sm mr-8">
          <Link href="/" className="hover:text-green-600">خانه</Link>
          <Link href="/about" className="hover:text-green-600">درباره ما</Link>
          <Link href="/products" className="hover:text-green-600">محصولات</Link>
          <Link href="/blog" className="hover:text-green-600">بلاگ</Link>
          <Link href="/contact" className="hover:text-green-600">تماس با ما</Link>
        </nav>

        {/* Spacer */}
        <div className="flex-1"></div>

        {/* Request Button */}
        <Link
          href="/request"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition text-sm"
        >
          درخواست مشاوره
        </Link>

      </div>
    </header>
  );
}
