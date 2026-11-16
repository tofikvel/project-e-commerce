"use client";

import { useCart } from "@/components/CartProvider";
import CartItem from "@/components/CartItem";
import CartSummary from "@/components/CartSummary";
import Link from "next/link";

const CartPage = () => {
  const { items } = useCart();

  return (
    <main className="mx-auto w-full max-w-6xl mt-6">
      {items.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4 w-full">
          <div>
            {items.map((item) => (
              <CartItem item={item} key={item.productId} />
            ))}
          </div>
          <CartSummary />
        </div>
      ) : (
        <div className="flex flex-col mx-auto space-y-3 p-1 max-w-md text-center">
          <h1>Your cart is empty</h1>
          <Link href="/" className="bg-black px-6 py-3 text-white">
            Back to main page
          </Link>
        </div>
      )}
    </main>
  );
};

export default CartPage;
