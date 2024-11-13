import React from "react";
import { RxCross1 } from "react-icons/rx";

const Cart = ({ gadget, handleRemove }) => {
  return (
    <div className="flex items-center justify-between border-2 rounded-lg mb-5 p-5">
      <div className="flex items-center mb-5">
        <div>
          <img
            src={gadget.product_image}
            className="rounded-lg h-[100px] w-[150px] object-cover"
          />
        </div>
        <div>
          <h1 className="text-xl font-bold">{gadget.product_title}</h1>
          <p className="">{gadget.description}</p>
          <p className="">
            Price: $<span>{gadget.price}</span>
          </p>
        </div>
      </div>
      <button
        onClick={() => {
          handleRemove(gadget.product_id);
        }}
        className="btn rounded-full text-red-400 border-red-400"
      >
        <RxCross1 />
      </button>
    </div>
  );
};

export default Cart;
