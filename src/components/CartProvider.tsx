"use client";

import { createContext, useContext, useState, useEffect } from "react";
import type { CartItem } from "@/types/cart";

const CartContext = createContext<CartContextType | null>(null);

type CartContextType = {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
};

type CartProviderProps = {
  children: React.ReactNode;
};

const CartProvider = ({ children }: CartProviderProps) => {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    console.log("CartPrivder mounted");
    return () => {
      console.log("CartProvider unmounted");
    };
  }, []);

  function addToCart(item: CartItem) {
    setItems((currentItems) => {
      // checking wether the item we are adding already exist in the cart, and if it is, we are saving the refference to that object into the existingItem
      const existingItem = currentItems.find((cartItem) => cartItem.productId === item.productId);

      // this just finds that item by comparing their id's and adding quantity or just adding one
      if (existingItem) {
        return currentItems.map((cartItem) =>
          cartItem.productId === item.productId
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem,
        );
      }
      return [...currentItems, item];
    });
  }

  console.log("CartProvider rendered");

  return <CartContext.Provider value={{ items, addToCart }}>{children}</CartContext.Provider>;
};

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }

  return context;
}

export default CartProvider;
