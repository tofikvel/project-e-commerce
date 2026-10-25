"use client";
import { useCart } from "@/components/CartProvider";

const CartPage = () => {
  const { items } = useCart();

  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-10">
      <div>
        {items.map((item) => (
          <div key={item.productId}>
            <p>{item.name}</p>
            <p>{item.price}</p>
            <p>{item.quantity}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default CartPage;
