"use client";

type AddToCartButtonProps = {
  productId: string;
};

const AddToCartButton = ({ productId }: AddToCartButtonProps) => {
  function handleClick() {
    console.log("Add To Cart: ", productId);
  }

  return (
    <button onClick={handleClick} className="cursor-pointer border bg-black px-6 py-3 text-white">
      Add To Cart
    </button>
  );
};

export default AddToCartButton;
