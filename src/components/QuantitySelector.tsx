type QuantitySelectorProps = {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  stock: number;
};

const QuantitySelector = ({ setQuantity, quantity, stock }: QuantitySelectorProps) => {
  return (
    <>
      <div className="flex items-center gap-1 mb-2">
        <div>
          <button
            disabled={stock === 0 || quantity === 1}
            onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : prev))}
            className="px-4 py-2 cursor-pointer border disabled:cursor-not-allowed disabled:opacity-40"
          >
            -
          </button>
        </div>

        <span className="px-4 py-2 cursor-pointer border">{quantity}</span>
        <div>
          <button
            disabled={stock === 0 || quantity >= stock}
            onClick={() => setQuantity((prev) => (prev < stock ? prev + 1 : prev))}
            className="px-4 py-2 cursor-pointer border disabled:cursor-not-allowed disabled:opacity-40"
          >
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default QuantitySelector;
