import { createClient } from "@/lib/supabase/server";
import ProductGrid from "@/components/ProductGrid";

export default async function Home() {
  const supabase = await createClient();

  const { data: products, error } = await supabase.from("products").select(`*, 
    images:product_images (id, url, alt, sort_order),
    category:categories (id, name, slug)`);
  if (error) {
    return (
      <main>
        <h1>Something went wrong</h1>
        <pre>{error.message}</pre>
      </main>
    );
  }

  const { data: categories, error: categoriesError } = await supabase.from("categories").select(`*`);
  if (categoriesError) {
    return (
      <main>
        <h1>Something went wrong</h1>
        <pre>{categoriesError.message}</pre>
      </main>
    );
  }

  return (
    <main className="mx-auto w-full max-w-6xl p-8">
      <div className="mt-8">
        <ProductGrid products={products} categories={categories} />
      </div>
    </main>
  );
}
