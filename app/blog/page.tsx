export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: "راهنمای انتخاب پنل خورشیدی مناسب",
      excerpt: "برای انتخاب پنل خورشیدی مناسب، باید به راندمان، توان نامی، گارانتی و شرایط اقلیمی توجه شود...",
      link: "/blog/selecting-solar-panel",
      date: "۱۴۰۴/۱۰/۲۰",
    },
    {
      id: 2,
      title: "محاسبه توان مصرفی خانه برای سیستم خورشیدی",
      excerpt: "برای طراحی یک سیستم خورشیدی دقیق، ابتدا باید توان مصرفی وسایل الکتریکی را محاسبه کنید...",
      link: "/blog/home-power-calculation",
      date: "۱۴۰۴/۱۰/۱۸",
    },
    {
      id: 3,
      title: "تفاوت سیستم‌های آن‌گرید و آف‌گرید چیست؟",
      excerpt: "سیستم‌های خورشیدی در دو نوع آن‌گرید و آف‌گرید طراحی می‌شوند که هر کدام کاربرد متفاوتی دارند...",
      link: "/blog/on-vs-off-grid",
      date: "۱۴۰۴/۱۰/۱۵",
    },
  ];

  return (
    <div className="space-y-10 text-gray-800">

      <h1 className="text-3xl font-bold mb-6">بلاگ کی‌وی‌گرین</h1>
      <p className="text-lg mb-6">
        جدیدترین مقالات آموزشی، نکات تخصصی و راهنماهای کاربردی در حوزه انرژی خورشیدی
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

        {posts.map((post) => (
          <a
            key={post.id}
            href={post.link}
            className="block bg-white border rounded-lg p-5 shadow-sm hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold mb-3">{post.title}</h2>
            <p className="text-sm text-gray-600 mb-4">{post.excerpt}</p>
            <div className="text-xs text-gray-500">{post.date}</div>
          </a>
        ))}

      </div>
    </div>
  );
}
