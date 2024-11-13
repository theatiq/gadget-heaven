import React, { useState, useEffect } from "react";
import { useLoaderData, useParams, useSearchParams } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { addCarts, addWishes } from "../utils/uutility";
import RatingComponents from "../components/RatingComponents";

const GadgetDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [gadget, setGadget] = useState({});
  // const [carts, setCarts] = useState([]);
  const [isAdd, setIsAdd] = useState(false);

  useEffect(() => {
    const singleData = data.find((gadget) => gadget.product_id == id);
    setGadget(singleData);
    // const favorites = getAllFavorites();
    // const isExist = favorites.find((item) => item.id == singleData.id);
    // if (isExist) {
    //   setIsFavorite(true);
    // }
  }, [data, id]);

  const {
    product_id,
    product_title,
    product_image,
    category,
    price,
    description,
    Specification,
    availability,
    rating,
  } = gadget;

  const handleAddCart = (gadget) => {
    addCarts(gadget);
    setIsAdd(true);
  };

  const handleWishList = (gadget) => {
    addWishes(gadget);
    setIsAdd(true);
  };

  return (
    <div>
      <div className="bg-purple-600 min-h-[400px] pt-10">
        <h1 className="text-4xl text-center text-white font-bold mb-3">
          Product Details
        </h1>
        <p className="text-xl text-center text-white w-8/12 mx-auto">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <div className="hero bg-base-200 w-10/12 h-[500px] mx-auto border border-white rounded-lg -translate-y-60 overflow-hidden ">
        <div className="hero-content flex justify-end">
          <img
            src={product_image}
            className="max-w-sm rounded-lg h-[400px] w-full shadow-2xl"
          />
          <div className="flex flex-col gap-1 justify-between">
            <h1 className="text-2xl font-bold">{product_title}</h1>
            <p className="py-6">Price: ${price}</p>
            <button className="btn border border-green-600 rounded-2xl bg-green-200">
              {" "}
              In Stock
            </button>
            <p className="text-center">{description}</p>
            <p className="font-bold">Specification</p>

            <ul className="text-xl ml-12">
              {Specification &&
                Object.keys(Specification).map((n, i) => (
                  <li className="list" key={i}>
                    {i + 1}: {Specification[n]}
                  </li>
                ))}
            </ul>
            <p className="font-bold">Rating</p>
            {<RatingComponents rating={rating}></RatingComponents>}
            
            <div className="flex items-center gap-5">
              <button
                onClick={() => handleAddCart(gadget)}
                className="btn bg-purple-600 rounded-2xl text-white"
              >
                Add to Cart <MdOutlineShoppingCart />
              </button>

              <button onClick={() => handleWishList(gadget)}>
                <Link>
                  <FaRegHeart />
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GadgetDetails;
