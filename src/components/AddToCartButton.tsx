"use client";

type AddToCartButtonProps = {
  productId: string;
};

const AddToCartButton = ({ productId }: AddToCartButtonProps) => {
  function handleClick() {
    console.log("Add To Cart: ", productId);
  }

  return (
    <button onClick={handleClick} className="px-6 py-3 cursor-pointer border bg-black text-white">
      Add To Cart
    </button>
  );
};

export default AddToCartButton;
