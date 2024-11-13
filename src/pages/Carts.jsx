import React, { createContext, useEffect, useState } from "react";
import { getAllCarts, removeCart, removeCartAll } from "../utils/uutility";
import Cart from "../pages/Cart";
import { RxCross1 } from "react-icons/rx";
import Modal from "react-modal";
import payment from "../assets/Group.png";
import "../index.css";
import { FaSortNumericDownAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
export const CartContext = createContext(0);

Modal.setAppElement("#root");

const Carts = () => {
  const navigate = useNavigate();
  const [gadgets, setGadgets] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [purchase, setPurchase] = useState(false);

  const handleHome = () => {
    navigate("/");
  };

  const openModal = () => setIsOpen(true);
  const closeModal = () => {
    setIsOpen(false);
    handlePurchase();
    handleHome();
    removeCartAll();
  };

  useEffect(() => {
    const carts = getAllCarts();
    setGadgets(carts);
    if (gadgets <= 0) {
      setPurchase(true);
    }
  }, []);

  const handlePurchase = () => {
    setGadgets([]);
  };

  const handleRemove = (id) => {
    removeCart(id);
    const carts = getAllCarts();
    setGadgets(carts);
  };

  const handleSort = () => {
    const sortedCart = [...gadgets].sort((a, b) => b.price - a.price);
    setGadgets(sortedCart);
  };
  console.log("Cart List: ", gadgets.length);

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="My Modal"
        className={"modal-box"}
        overlayClassName={"modal-overlay"}
      >
        <div className="flex flex-col items-center gap-2">
          <img src={payment} alt="paid" />
          <h3 className="text-3xl font-bold">Payment Successful</h3>
          <p className="text-xl">Thanks for Purchasing</p>
          <p className="text-xl">
            Total:${" "}
            {gadgets.reduce((a, b) => {
              return a + b.price;
            }, 0)}{" "}
          </p>
          <div className="modal-action">
            <button onClick={closeModal} className="btn w-full">
              Close
            </button>
          </div>
        </div>
      </Modal>
      <div className="flex justify-between my-5">
        <h1 className="text-xl font-bold">Cart</h1>
        <div className="flex justify-between items-center gap-5">
          <p className="text-xl font-bold">
            Total Cost:${" "}
            {gadgets.reduce((a, b) => {
              return a + b.price;
            }, 0)}{" "}
          </p>
          <button
            onClick={handleSort}
            className="btn border border-purple-600 rounded-3xl w-[150px]"
          >
            Sort by Price <FaSortNumericDownAlt />
          </button>
          <button
            disabled={gadgets.length <= 0}
            onClick={openModal}
            className="btn border bg-purple-500 text-white rounded-3xl w-[120px]"
          >
            Purchase
          </button>
        </div>
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
        // <Cart handleRemove={handleRemove} gadget={gadget}></Cart>
      ))}
    </div>
  );
};

export default Carts;
