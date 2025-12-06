export default function ProductPage({ params }) {
  const { slug } = params;

  // داده نمونه محصول
  const product = {
    name: "پنل خورشیدی مونوکریستال 300 وات",
    description:
      "این پنل مونوکریستال با راندمان بالا و طول عمر طولانی، مناسب نصب در سیستم‌های خانگی و صنعتی است.",
    features: [
      "راندمان بالا: 20%",
      "گارانتی 25 ساله",
      "ابعاد: 1640x992x35 mm",
      "مقاومت بالا در برابر شرایط جوی ایران",
    ],
    image: "/products/panel-mono-300w.jpg",
    specs: [
      { label: "توان نامی", value: "300 وات" },
      { label: "ولتاژ کاری", value: "36 ولت" },
      { label: "جریان کاری", value: "8.33 آمپر" },
      { label: "نوع سلول", value: "مونوکریستال" },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-8 text-gray-800">

      {/* عنوان محصول */}
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <p className="text-gray-700">{product.description}</p>

      {/* تصویر محصول */}
      <div className="w-full h-64 md:h-96 relative rounded-lg overflow-hidden border shadow-sm">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* ویژگی‌ها */}
      <div className="bg-white border rounded-lg p-4 shadow-sm">
        <h2 className="text-xl font-semibold mb-3">ویژگی‌ها</h2>
        <ul className="list-disc pr-5 space-y-2">
          {product.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      {/* مشخصات فنی */}
      <div className="bg-white border rounded-lg p-4 shadow-sm">
        <h2 className="text-xl font-semibold mb-3">مشخصات فنی</h2>
        <table className="w-full text-right">
          <tbody>
            {product.specs.map((spec, index) => (
              <tr key={index} className="border-b last:border-b-0">
                <td className="py-2 font-medium">{spec.label}</td>
                <td className="py-2">{spec.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* دکمه مشاوره */}
      <div className="text-center">
        <a
          href="/contact"
          className="inline-block bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
        >
          درخواست مشاوره
        </a>
      </div>
    </div>
  );
}
