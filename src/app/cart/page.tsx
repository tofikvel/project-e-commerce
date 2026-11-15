"use client";

import { useCart } from "@/components/CartProvider";
import CartItem from "@/components/CartItem";

const CartPage = () => {
  const { items } = useCart();

  const subtotal = items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-10">
      <div className="grid grid-cols-2 gap-4 items-start">
        <div className="">
          {items.map((item) => (
            <CartItem item={item} key={item.productId} />
          ))}
        </div>
        <div className="rounded-md p-3 mt-3 mb-3 bg-white shadow-lg">
          <p className="font-bold">Subtotal: {subtotal.toFixed(2)} PLN</p>
        </div>
      </div>
    </main>
  );
};

export default CartPage;
