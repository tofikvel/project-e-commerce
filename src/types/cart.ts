export type CartItem = {
  productId: string;
  name: string;
  price: number;
  image: string | null;
  quantity: number; // how many items customer wants to add to the cart
  stock: number; // how many items are actually available in the database
};
