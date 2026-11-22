"use client";

import ProductCard from "./ProductCard";
import type { Product } from "@/types/product";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

type ProductGridProps = {
  products: Product[];
  categories: { id: string; name: string; slug: string }[];
};

const ProductGrid = ({ products, categories }: ProductGridProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  if (products.length === 0) {
    return <p>No products available</p>;
  }

  const filteredProducts = products.filter((product) => {
    return (
      (selectedCategory === "" || product.category.id === selectedCategory) &&
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

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

      <select
        name="productFilter"
        id="productFilter"
        value={selectedCategory}
        onChange={(event) => setSelectedCategory(event.target.value)}
      >
        <option value="">All categories</option>
        {categories.map((category) => (
          <option value={category.id} key={category.id}>
            {category.name}
          </option>
        ))}
      </select>

      {filteredProducts.length === 0 ? (
        <h2>No products found. Try a different search.</h2>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </>
  );
};

export default ProductGrid;
