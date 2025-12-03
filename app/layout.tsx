import type { Metadata } from "next";
import Header from "./components/header";
import Footer from "./components/footer";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazirmatn = Vazirmatn({
  subsets: ["latin", "arabic"], // include arabic if needed
  weight: ["400", "700"], // specify weights you want
  display: "swap",
});

export const metadata: Metadata = {
  title: "کی‌وی‌گرین",
  description: "راهکارهای پاک با پنل‌های خورشیدی",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${vazirmatn.className} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
