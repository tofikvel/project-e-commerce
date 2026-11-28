"use client";

import ProductCard from "./ProductCard";
import type { Product } from "@/types/product";
import { useState, useEffect } from "react";
import { useFilters } from "@/components/FilterProvider";

type ProductGridProps = {
  products: Product[];
  categories: { id: string; name: string; slug: string }[];
};

const ProductGrid = ({ products, categories }: ProductGridProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortOrder, setSortOrder] = useState<"" | "price-asc" | "price-desc">("");
  const [visibleCount, setVisibleCount] = useState(6);
  const { resetSignal } = useFilters();

  // resets states when user clicks on Home link in navbar
  useEffect(() => {
    setSearchQuery("");
    setSelectedCategory("");
    setSortOrder("");
    setVisibleCount(6);
  }, [resetSignal]);

  useEffect(() => {
    setVisibleCount(6);
  }, [searchQuery, selectedCategory, sortOrder]);

  if (products.length === 0) {
    return <p>No products available</p>;
  }

  const filteredProducts = products.filter((product) => {
    return (
      (selectedCategory === "" || product.category.id === selectedCategory) &&
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === "price-asc") {
      return a.price - b.price;
    } else if (sortOrder === "price-desc") {
      return b.price - a.price;
    }
    return 0;
  });

  const visibleProducts = sortedProducts.slice(0, visibleCount);

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
      <div className="flex justify-between">
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
        <select
          name="productSort"
          id="productSort"
          value={sortOrder}
          onChange={(event) => setSortOrder(event.target.value as "" | "price-asc" | "price-desc")}
        >
          <option value="">Default order</option>
          <option value="price-asc">Price: low to high</option>
          <option value="price-desc">Price: high to low</option>
        </select>
      </div>

      {filteredProducts.length === 0 ? (
        <h2>No products found. Try a different search.</h2>
      ) : (
        <div className="w-full min-w-0 grid grid-cols-2 md:grid-cols-3 gap-4 mt-3">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
      {visibleCount < sortedProducts.length && (
        <div className="flex justify-center mt-3">
          <button onClick={() => setVisibleCount((prev) => prev + 6)} className="mx-auto p-3 cursor-pointer border">
            Load More
          </button>
        </div>
      )}
    </>
  );
};

export default ProductGrid;
