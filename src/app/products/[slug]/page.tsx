import { createClient } from "@/lib/supabase/server";
import Image from "next/image";
import { notFound } from "next/navigation";
import ProductPurchase from "@/components/ProductPurchase";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;

  const supabase = await createClient();

  const { data: product, error } = await supabase
    .from("products")
    .select(`*, category:categories (id, name,slug), images:product_images (id, url, alt, sort_order)`)
    .eq("slug", slug)
    .order("sort_order", { referencedTable: "product_images", ascending: true })
    .single();

  if (error || !product) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-6xl p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-lg">
          {product.images?.[0] && (
            <Image
              fill
              alt={product.images[0].alt ?? product.name}
              src={product.images[0].url}
              className="w-full max-w-md rounded-lg object-cover"
            />
          )}
        </div>
        <div className="flex flex-col">
          <div>
            {product.category && <p className="text-sm text-gray-500">{product.category.name}</p>}
            <h1 className="text-2xl md:text-4xl font-bold">{product.name}</h1>
            <p className="mt-1 text-gray-600">{product.description}</p>
            <p className="mt-4 text-xl md:text-2xl font-bold">PLN {product.price}</p>
            <p className="mt-2 text-gray-500">{product.stock} items available in stock</p>
          </div>
          <div className="mt-auto">
            <ProductPurchase
              productId={product.id}
              name={product.name}
              price={product.price}
              image={product.images?.[0]?.url ?? null}
              stock={product.stock}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
