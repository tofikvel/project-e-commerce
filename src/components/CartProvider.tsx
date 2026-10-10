"use client";

import { createContext, useContext, useState } from "react";
import type { CartItem } from "@/types/cart";

const CartContext = createContext<CartItem[] | null>(null);

type CartContextType = {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
};

const [items, setItems] = useState<CartItem[]>([]);

function addToCart(item: CartItem) {
  setItems((currentItems) => {
    // checking wether the item we are adding already exist in the cart, and if it is, we are saving the refference to that object into the existingItem
    const existingItem = currentItems.find((cartItem) => cartItem.productId === item.productId);

    if (existingItem) {
      return currentItems.map((cartItem) =>
        cartItem.productId === item.productId ? { ...cartItem, quantity: cartItem.quantity + item.quantity } : cartItem,
      );
    }
    return [...currentItems, item];
  });
}
