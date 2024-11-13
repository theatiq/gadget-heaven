import React from "react";
import { NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
  return (
    <div className="flex flex-col justify-between mt-12 gap-3 border rounded-lg mr-10 py-3 px-10">
      <NavLink to={"allGadgets"}>
        <button className="btn bg-purple-300 rounded-2xl w-full">
          All Products
        </button>
      </NavLink>
      {categories.map((category, index) => (
        <NavLink key={index} to={`/category/${category.category}`}>
          <button className="btn bg-purple-300 rounded-2xl w-full">
            {category.category}
          </button>
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;
