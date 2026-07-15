'use client'

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X, Phone } from "lucide-react"

const navLinks = [
  { href: "/about", label: "درباره ما" },
  { href: "/products", label: "محصولات" },
  { href: "/blog", label: "بلاگ" },
  { href: "/contact", label: "تماس با ما" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100" : "bg-white border-b border-gray-200"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center p-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/kvgreen-logo.svg"
            width={48}
            height={48}
            alt="KV-Green Logo"
          />
          <div className="flex flex-col">
            <span className="text-lg font-bold text-gray-900">کی‌وی‌گرین</span>
            <span className="text-sm text-gray-500">پنل‌های خورشیدی</span>
          </div>
        </Link>

        <div className="flex-1"></div>

        <nav className="hidden md:flex gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-600 hover:text-green-600 transition-colors py-2"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/request"
          className="hidden md:flex items-center gap-2 bg-green-600 text-white px-5 py-2.5 rounded-lg hover:bg-green-700 transition text-sm font-medium mr-6"
        >
          <Phone className="w-4 h-4" />
          درخواست مشاوره
        </Link>

        <button
          className="md:hidden p-2 text-gray-600 hover:text-green-600 transition"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "بستن منو" : "باز کردن منو"}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col p-4 gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-green-600 hover:bg-green-50 px-4 py-3 rounded-lg transition font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/request"
              className="bg-green-600 text-white px-4 py-3 rounded-lg text-center font-medium mt-2 hover:bg-green-700 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              درخواست مشاوره
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
