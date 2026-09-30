import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import Image from "next/image";

export default async function Home() {
  const supabase = await createClient();

  const { data: products, error } = await supabase.from("products").select(`*, images:product_images (
      id,
      url,
      alt,
      sort_order
    )`);

  if (error) {
    return (
      <main>
        <h1>Something went wrong</h1>
        <pre>{error.message}</pre>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-6xl p-8">
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Link href={`/products/${product.slug}`} key={product.id} className="border p-4">
            {product.images?.[0] && (
              <Image
                height={150}
                width={150}
                alt={product.images[0].alt ?? product.name}
                src={product.images[0].url}
                className="w-full max-w-md rounded-lg"
              />
            )}
            <div className="mt-3">
              <h2 className="text-xl">{product.name}</h2>
              <p className="mt-2">{product.description}</p>
              <p className="mt-2">{product.price}</p>
              <p className="mt-2 text-gray-500">{product.stock} items in store</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
