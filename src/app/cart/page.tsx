"use client";
import { useCart } from "@/components/CartProvider";

const CartPage = () => {
  const { items, incrementItem, decrementItem, removeItem } = useCart();

  const subtotal = items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-10 bg-gray-100">
      <div className="grid grid-cols-2 gap-4">
        <div className="">
          {items.map((item) => (
            <div key={item.productId} className="rounded-md p-3 mt-3 mb-3 bg-white shadow-md">
              <p>{item.name}</p>
              <p>{item.price}</p>
              <p>{item.quantity}</p>
              <button onClick={() => incrementItem(item.productId)} className="cursor-pointer border p-3">
                +
              </button>
              <button
                onClick={() => decrementItem(item.productId)}
                className="cursor-pointer border p-3"
                disabled={item.quantity === 1}
              >
                -
              </button>
            </div>
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
