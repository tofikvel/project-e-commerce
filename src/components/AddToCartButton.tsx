"use client";
import { useCart } from "./CartProvider";

type AddToCartButtonProps = {
  productId: string;
  name: string;
  price: number;
  image: string | null;
  stock: number;
};

const AddToCartButton = ({ productId, name, price, image, stock }: AddToCartButtonProps) => {
  const { addToCart } = useCart();
  function handleClick() {
    addToCart({
      productId,
      name,
      price,
      image,
      quantity: 1,
      stock,
    });
  }

  return (
    <button onClick={handleClick} className="cursor-pointer border bg-black px-6 py-3 text-white">
      Add To Cart
    </button>
  );
};

export default AddToCartButton;
