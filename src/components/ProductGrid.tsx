"use client";

import ProductCard from "./ProductCard";
import type { Product } from "@/types/product";
import { useState } from "react";

type ProductGridProps = {
  products: Product[];
};

const ProductGrid = ({ products }: ProductGridProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) => {
    return product.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  if (products.length === 0) {
    return <p>No products available</p>;
  }

  return (
    <>
      <div>
        <input
          type="text"
          name="searchInput"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          className="mb-3 border"
          placeholder="Search products"
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductGrid;
