export default function SinglePostPage({ params }) {
  const { slug } = params;

  // داده نمونه — در عمل می‌توانی از فایل Markdown یا دیتابیس دریافت کنی
  const post = {
    title: "راهنمای انتخاب پنل خورشیدی مناسب",
    date: "۱۴۰۴/۱۰/۲۰",
    content: `
      انتخاب پنل خورشیدی مناسب یکی از مهم‌ترین مراحل طراحی یک سیستم خورشیدی است.
      برای این کار باید فاکتورهایی مانند راندمان، توان نامی، تکنولوژی سلول‌ها،
      سازگاری با اقلیم، گارانتی و طول عمر مورد بررسی قرار گیرد.

      در سال‌های اخیر پانل‌های مونوکریستال به دلیل راندمان بالاتر و عملکرد بهتر
      در دماهای مختلف، محبوبیت بیشتری پیدا کرده‌اند. البته سیستم‌های پلی‌کریستال
      و هاف‌سل نیز کاربردهای خاص خود را دارند.

      یکی از مهم‌ترین نکات، بررسی شرایط نصب در محل مورد نظر است؛ زاویه تابش،
      سایه‌اندازی، گرمای هوا و میزان تابش سالانه مواردی هستند که باید در محاسبات
      لحاظ شوند.
    `,
  };

  return (
    <article className="prose prose-lg prose-headings:font-bold prose-p:leading-8 max-w-3xl mx-auto text-gray-800 rtl text-right">

      <h1 className="!text-3xl !mb-4">{post.title}</h1>

      <div className="text-sm text-gray-500 mb-6">{post.date}</div>

      {/* تبدیل متن چندخطی به پاراگراف‌ها */}
      {post.content.split("\n").map(
        (line, i) =>
          line.trim() && (
            <p key={i} className="text-gray-700 leading-8">
              {line.trim()}
            </p>
          )
      )}
    </article>
  );
}
