"use client";
import { useCart } from "./CartProvider";

type AddToCartButtonProps = {
  productId: string;
  name: string;
  price: number;
  image: string | null;
  stock: number;
  quantity: number;
};

const AddToCartButton = ({ productId, name, price, image, stock, quantity }: AddToCartButtonProps) => {
  const { addToCart } = useCart();

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
