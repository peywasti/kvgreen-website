import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center dark:bg-gray-950 dark:text-white p-3">

      <div className="flex items-center">
        <Image
          src="/kvgreen-logo.svg"
          width={100}
          height={100}
          alt="KV-Green Logo"
          className="mx-auto"
        />
        <div className="title">
          کی‌وی‌گرین
          <div className="slogan">
              پنل‌های خورشیدی
          </div>
        </div>
      </div>
      <nav className="flex gap-2">
        <Link href={"/"}>خانه</Link>
        <Link href={"/about"}>درباره‌ی ما</Link>
        <Link href={"/products"}>محصولات</Link>
        <Link href={"/blog"}>بلاگ</Link>
        <Link href={"/contact"}>تماس با ما</Link>        
      </nav>
    </header>
  );
}
