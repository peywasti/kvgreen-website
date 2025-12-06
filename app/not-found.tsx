import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 text-center p-4">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-4">صفحه مورد نظر یافت نشد</h2>
      <p className="text-gray-700 mb-6">
        متأسفیم، صفحه‌ای که دنبال آن بودید وجود ندارد یا آدرس اشتباه است.
      </p>
      <Link
        href="/"
        className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
      >
        بازگشت به خانه
      </Link>
    </div>
  );
}
