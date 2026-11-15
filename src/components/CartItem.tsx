"use client";
import { useCart } from "@/components/CartProvider";
import Image from "next/image";
import type { CartItem } from "@/types/cart";

type CartItemProps = {
  item: CartItem;
};

export default function CartItem({ item }: CartItemProps) {
  const { incrementItem, decrementItem, removeItem } = useCart();

  return (
    <div className="rounded-md p-3 mt-3 mb-3 bg-white shadow-md">
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
        <div className="flex flex-1 flex-col justify-between" id="item-text-description">
          <div>
            <p>{item.name}</p>
            <p>{item.price}</p>
            <p>{item.quantity}</p>
          </div>
          <div className="flex justify-between" id="item-button-group">
            <div className="flex space-x-1">
              {item.quantity > 1 && (
                <button
                  onClick={() => decrementItem(item.productId)}
                  className="cursor-pointer border rounded-full h-10 w-10 shrink-0"
                >
                  -
                </button>
              )}
              <button
                onClick={() => incrementItem(item.productId)}
                className="cursor-pointer border rounded-full h-10 w-10 shrink-0"
              >
                +
              </button>
            </div>
            <div>
              <button
                onClick={() => removeItem(item.productId)}
                className="cursor-pointer border rounded-full h-10 w-10 shrink-0"
              >
                X
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
