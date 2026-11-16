"use client";
import { useCart } from "./CartProvider";
import { useState } from "react";

type AddToCartButtonProps = {
  productId: string;
  name: string;
  price: number;
  image: string | null;
  stock: number;
};

const AddToCartButton = ({ productId, name, price, image, stock }: AddToCartButtonProps) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  function increaseQuantity() {
    setQuantity((prev) => (prev < stock ? prev + 1 : prev));
  }
  function decreaseQuantity() {
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
  }

  function handleClick() {
    addToCart({
      productId,
      name,
      price,
      image,
      quantity: quantity,
      stock,
    });
  }

  return (
    <>
      <div className="flex items-center gap-1 mb-2">
        <div>
          <button
            disabled={stock === 0 || quantity === 1}
            onClick={decreaseQuantity}
            className="px-4 py-2 cursor-pointer border disabled:cursor-not-allowed disabled:opacity-40"
          >
            -
          </button>
        </div>

        <span className="px-4 py-2 cursor-pointer border">{quantity}</span>
        <div>
          <button
            disabled={stock === 0 || quantity >= stock}
            onClick={increaseQuantity}
            className="px-4 py-2 cursor-pointer border disabled:cursor-not-allowed disabled:opacity-40"
          >
            +
          </button>
        </div>
      </div>

      <button
        disabled={stock === 0}
        onClick={handleClick}
        className="w-full px-6 py-3 cursor-pointer border border-gray-950 text-gray-950 rounded-sm disabled:cursor-not-allowed disabled:opacity-40"
      >
        Add To Cart
      </button>
    </>
  );
};

export default AddToCartButton;
