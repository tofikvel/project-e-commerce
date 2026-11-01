"use client";
import { useCart } from "@/components/CartProvider";
import Image from "next/image";

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
              <div className="flex space-x-2.5">
                {item.image ? (
                  <div className="h-32 w-32 shrink-0">
                    <Image
                      src={item.image}
                      height={100}
                      width={100}
                      alt="cart_item_image"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <p>No image</p>
                )}
                <div className="flex flex-col w-full" id="item-text-description">
                  <div>
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                    <p>{item.quantity}</p>
                  </div>
                  <div className="flex justify-between h-full" id="item-button-group">
                    <div className="flex space-x-1">
                      <button onClick={() => incrementItem(item.productId)} className="cursor-pointer border px-3 py-2">
                        +
                      </button>
                      {item.quantity > 1 && (
                        <button
                          onClick={() => decrementItem(item.productId)}
                          className="cursor-pointer border px-3 py-2"
                        >
                          -
                        </button>
                      )}
                    </div>
                    <div>
                      <button onClick={() => removeItem(item.productId)} className="cursor-pointer border px-3 py-2">
                        X
                      </button>
                    </div>
                  </div>
                </div>
              </div>
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
