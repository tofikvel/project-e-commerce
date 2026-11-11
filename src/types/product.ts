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
