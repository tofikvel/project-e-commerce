import { createClient } from "@/lib/supabase/server";
import ProductGrid from "@/components/ProductGrid";

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
      <div className="mt-8">
        <ProductGrid products={products} />
      </div>
    </main>
  );
}
