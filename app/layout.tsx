import type { Metadata } from "next";
import Header from "../components/header";
import Footer from "../components/footer";
import localFont from "next/font/local";
import "./globals.css";

const Estedad = localFont({
  src: "../public/fonts/Estedad[KSHD,wght].woff2",
  display: "swap",
  variable: "--font-estedad",
  weight: "100 900", // Variable font range from thin to black
});

export const metadata: Metadata = {
  title: "کی‌وی‌گرین",
  description: "راهکارهای پاک با پنل‌های خورشیدی",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${Estedad.className} antialiased min-h-screen flex flex-col bg-gray-50`}
      >
        <Header />

        {/* Main Content */}
        <main className="grow max-w-6xl mx-auto w-full p-4 pt-8">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
