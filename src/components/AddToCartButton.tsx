"use client";
import { useCart } from "./CartProvider";

type AddToCartButtonProps = {
  productId: string;
  name: string;
  price: number;
  image: string | null;
};

const AddToCartButton = ({ productId, name, price, image }: AddToCartButtonProps) => {
  const { addToCart } = useCart();
  function handleClick() {
    addToCart({
      productId,
      name,
      price,
      image,
      quantity: 1,
    });
    console.log("Added to cart:", name);
  }

  return (
    <button onClick={handleClick} className="cursor-pointer border bg-black px-6 py-3 text-white">
      Add To Cart
    </button>
  );
};

export default AddToCartButton;
