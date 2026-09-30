import { createClient } from "@/lib/supabase/server";
import Image from "next/image";

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
    .select(
      `
    *,
    category:categories (
      id,
      name,
      slug
    ),
    images:product_images (
      id,
      url,
      alt,
      sort_order
    )
  `,
    )
    .eq("slug", slug)
    .single();

  if (error || !product) {
    return (
      <main className="mx-auto max-w-6xl p-8">
        <h1 className="text-2xl font-bold">Product not found</h1>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-6xl p-8">
      {product.images?.[0] && (
        <Image
          height={150}
          width={150}
          alt={product.images[0].alt ?? product.name}
          src={product.images[0].url}
          className="w-full max-w-md rounded-lg"
        />
      )}
      {product.category && <p className="text-sm text-gray-500">{product.category.name}</p>}
      <h1 className="text-4xl font-bold">{product.name}</h1>
      <p className="mt-4 text-gray-600">{product.description}</p>
      <p className="mt-6 text-2xl font-bold">€{product.price}</p>
      <p className="mt-2 text-gray-500">{product.stock} items in stock</p>
    </main>
  );
}
