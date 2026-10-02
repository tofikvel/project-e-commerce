import Image from "next/image";
import Link from "next/link";

export type Product = {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  price: number;
  stock: number;
  images?: {
    id: string;
    url: string;
    alt: string | null;
    sort_order: number;
  }[];
};

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const image = product.images?.[0];

  return (
    <Link href={`/products/${product.slug}`} className="group block overflow-hidden rounded-lg">
      {image ? (
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={image.url}
            alt={image.alt ?? product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
      ) : (
        <div className="flex aspect-square items-center justify-center bg-gray-100 text-gray-500">
          No image available
        </div>
      )}
      <div className="mt-3">
        <h2 className="text-lg">{product.name}</h2>
        <p className="mt-1 text-sm">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span>$ €{Number(product.price).toFixed(2)}</span>
        </div>
        <span className="text-sm">{product.stock ? product.stock : <p>Out of stock</p>}</span>
      </div>
    </Link>
  );
}
