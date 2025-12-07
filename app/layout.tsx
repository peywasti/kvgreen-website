import type { Metadata } from "next";
import Header from "../components/header";
import Footer from "../components/footer";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazirmatn = Vazirmatn({
  subsets: ["latin", "arabic"],
  weight: ["400", "700"],
  display: "swap",
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
        className={`${vazirmatn.className} antialiased min-h-screen flex flex-col bg-gray-50`}
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
