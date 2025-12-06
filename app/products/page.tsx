export default function ProductsPage() {
  // نمونه داده محصولات — بعداً می‌توانی از API یا دیتابیس جایگزین کنی
  const products = [
    {
      id: 1,
      name: "پنل خورشیدی مونوکریستال 300 وات",
      description: "راندمان بالا، مناسب اقلیم ایران",
      image: "/products/panel-mono-300w.jpg",
      link: "/products/panel-mono-300w",
    },
    {
      id: 2,
      name: "پنل خورشیدی پلی‌کریستال 250 وات",
      description: "قیمت مناسب، عملکرد قابل اعتماد",
      image: "/products/panel-poly-250w.jpg",
      link: "/products/panel-poly-250w",
    },
    {
      id: 3,
      name: "اینورتر خورشیدی 5 کیلووات",
      description: "قابل استفاده در سیستم‌های خانگی و صنعتی",
      image: "/products/inverter-5kw.jpg",
      link: "/products/inverter-5kw",
    },
    {
      id: 4,
      name: "باتری لیتیومی 12V 100Ah",
      description: "ذخیره انرژی پایدار و طول عمر بالا",
      image: "/products/lithium-battery-12v.jpg",
      link: "/products/lithium-battery-12v",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-4 space-y-8">

      <h1 className="text-3xl font-bold mb-4">محصولات ما</h1>
      <p className="text-gray-700 mb-6">
        مجموعه‌ای از پنل‌ها، اینورترها، باتری‌ها و پکیج‌های خورشیدی با کیفیت و استاندارد اروپایی.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <a
            key={product.id}
            href={product.link}
            className="block bg-white border rounded-lg shadow-sm hover:shadow-md transition overflow-hidden"
          >
            <div className="h-48 w-full relative">
              <img
                src={product.image}
                alt={product.name}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <span className="text-green-700 font-semibold hover:underline">
                مشاهده جزئیات
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
