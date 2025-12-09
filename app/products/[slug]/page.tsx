import { getProduct } from "@/lib/products";
import { notFound } from "next/navigation";
import Image from "next/image";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;

  if (!slug) {
    return notFound();
  }

  let product;
  try {
    product = getProduct(slug);
  } catch {
    return notFound();
  }

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-8 text-gray-800">

      {/* عنوان محصول */}
      <h1 className="text-3xl font-bold">{product.title}</h1>
      <p className="text-gray-700">{product.excerpt}</p>

      {/* تصویر محصول */}
      <div className="w-full h-64 md:h-96 relative rounded-lg overflow-hidden border shadow-sm">
        <Image
          src={product.cover || "/placeholder.jpg"}
          alt={product.title}
          fill
          className="object-cover"
        />
      </div>

      {/* ویژگی‌ها */}
      {product.features && product.features.length > 0 && (
        <div className="bg-white border rounded-lg p-4 shadow-sm">
          <h2 className="text-xl font-semibold mb-3">ویژگی‌ها</h2>
          <ul className="list-disc pr-5 space-y-2">
            {product.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      )}

      {/* مشخصات فنی */}
      {product.specs && product.specs.length > 0 && (
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
      )}

      {/* محتوای اضافی */}
      {product.html && (
        <div className="prose prose-lg max-w-none">
          <article dangerouslySetInnerHTML={{ __html: product.html }} />
        </div>
      )}

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
