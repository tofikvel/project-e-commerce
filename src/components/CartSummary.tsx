"use client";

import { useCart } from "@/components/CartProvider";

const CartSummary = () => {
  const { items } = useCart();

  const subtotal = items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <div className="rounded-md p-3 mt-3 mb-3 bg-white shadow-lg">
      <p className="font-bold">Subtotal: {subtotal.toFixed(2)} PLN</p>
    </div>
  );
};

export default CartSummary;
