import React from "react";
import { getAllWishes, removeWish, addCarts } from "../utils/uutility";
import { useState, useEffect } from "react";
import { RxCross1 } from "react-icons/rx";

const Wishlist = () => {
  const [gadgets, setGadgets] = useState([]);
  useEffect(() => {
    const wish = getAllWishes();
    setGadgets(wish);
  }, []);
  const handleAddCart = (gadget) => {
    addCarts(gadget);
    setIsAdd(true);
  };
  const handleRemoveWish = (id) => {
    removeWish(id);
    const wish = getAllWishes();
    setGadgets(wish);
  };
  return (
    <div>
      <div className="flex justify-between my-5">
        <h1 className="text-xl font-bold">Wishlist</h1>
      </div>
      {/* Cards */}

      {gadgets.map((gadget) => (
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
              <button
                onClick={() => handleAddCart(gadget)}
                className="btn bg-purple-600"
              >
                Add to Cart
              </button>
            </div>
          </div>
          <button
            onClick={() => {
              handleRemoveWish(gadget.product_id);
            }}
            className="btn rounded-full text-red-400 border-red-400"
          >
            <RxCross1 />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Wishlist;
