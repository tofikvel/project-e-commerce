"use client";

import { createContext, useContext, useState, useEffect } from "react";
import type { CartItem } from "@/types/cart";

const CartContext = createContext<CartContextType | null>(null);

type CartContextType = {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  incrementItem: (productId: string) => void;
  decrementItem: (productId: string) => void;
  removeItem: (productId: string) => void;
};

type CartProviderProps = {
  children: React.ReactNode;
};

const CartProvider = ({ children }: CartProviderProps) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");

    if (savedCart) {
      setItems(JSON.parse(savedCart));
    }

    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    localStorage.setItem("cart", JSON.stringify(items));
  }, [items, isLoaded]);

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

  function incrementItem(productId: string) {
    setItems((currentItems) =>
      currentItems.map((item) => (item.productId === productId ? { ...item, quantity: item.quantity + 1 } : item)),
    );
  }
  function decrementItem(productId: string) {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.productId === productId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item,
      ),
    );
  }
  function removeItem(productId: string) {
    setItems((currentItems) => currentItems.filter((item) => item.productId !== productId));
  }

  return (
    <CartContext.Provider value={{ items, addToCart, incrementItem, decrementItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }

  return context;
}

export default CartProvider;
