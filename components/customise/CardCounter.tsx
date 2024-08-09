import React, { useEffect, useState } from "react";

const CartCounter = (props:any) => {
  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => {setQuantity((prev) => prev + 1);}
  const handleDecrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 0)); // Prevent quantity from going below 0

  useEffect(() => {
    props.setItemQty(quantity)
  }, [quantity])
  

  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={handleDecrement}
        className="flex items-center justify-center w-5 h-5 rounded-full border-stone-400 border"
      >
        -
      </button>
      <input
        type="number"
        value={quantity}
        readOnly
        className="w-10 text-center border border-amber-300 rounded-md"
      />
      <button
        onClick={handleIncrement}
        className="flex items-center justify-center w-5 h-5 rounded-full border-stone-400  border"
      >
        +
      </button>
    </div>
  );
};

export default CartCounter;
