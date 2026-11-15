"use client";

import { useCart } from "@/components/CartProvider";
import CartItem from "@/components/CartItem";
import CartSummary from "@/components/CartSummary";

const CartPage = () => {
  const { items } = useCart();

  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-10">
      <div className="grid grid-cols-2 gap-4 items-start">
        <div className="">
          {items.map((item) => (
            <CartItem item={item} key={item.productId} />
          ))}
        </div>
        <CartSummary />
      </div>
    </main>
  );
};

export default CartPage;
