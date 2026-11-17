"use client";
import { useState } from "react";
import QuantitySelector from "./QuantitySelector";
import AddToCartButton from "./AddToCartButton";

type ProductPurchaseProps = {
  productId: string;
  name: string;
  price: number;
  image: string | null;
  stock: number;
};

const ProductPurchase = ({ productId, name, price, image, stock }: ProductPurchaseProps) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <QuantitySelector quantity={quantity} setQuantity={setQuantity} stock={stock} />
      <AddToCartButton
        productId={productId}
        name={name}
        price={price}
        image={image}
        stock={stock}
        quantity={quantity}
      />
    </>
  );
};

export default ProductPurchase;
