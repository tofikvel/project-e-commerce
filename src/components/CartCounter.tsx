"use client";
import { useCart } from "./CartProvider";

const CartCounter = () => {
  // extracts (reads) items [in an array form] from the shared cart context
  const { items } = useCart();

  // goes through every item int eh cart and adds its quantity to total, 0 is the starting value
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);

  // displays the total quantity in the UI
  return <div>Cart {totalItems}</div>;
};

export default CartCounter;
