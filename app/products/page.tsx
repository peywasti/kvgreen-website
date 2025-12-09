import { getAllProducts } from "@/lib/products";
import Image from "next/image";
import Link from "next/link";

export default function ProductsPage() {
  const products = getAllProducts();

  return (
    <div className="max-w-6xl mx-auto p-4 space-y-8">

      <h1 className="text-3xl font-bold mb-4">محصولات ما</h1>
      <p className="text-gray-700 mb-6">
        مجموعه‌ای از پنل‌ها، اینورترها، باتری‌ها و پکیج‌های خورشیدی با کیفیت و استاندارد اروپایی.
      </p>

       <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
         {products.map((product) => (
           <Link
             key={product.slug}
             href={`/products/${product.slug}`}
             className="block bg-white border rounded-lg shadow-sm hover:shadow-md transition overflow-hidden"
           >
             <div className="h-48 w-full relative">
               <Image
                 src={product.cover || "/placeholder.jpg"}
                 alt={product.title}
                 fill
                 className="object-cover"
               />
             </div>
             <div className="p-4">
               <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
               <p className="text-gray-600 mb-4">{product.excerpt}</p>
               <span className="text-green-700 font-semibold hover:underline">
                 مشاهده جزئیات
               </span>
             </div>
           </Link>
         ))}
       </div>
    </div>
  );
}
