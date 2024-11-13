import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { getAllWishes, getAllCarts } from "../utils/uutility";
const Navbar = () => {
  const carts = getAllCarts();
  const wishlist = getAllWishes();
  const location = useLocation();

  return (
    <div
      className={`navbar fixed top-0 z-50 opacity-80 px-10 ${
        location.pathname === "/" ? "bg-purple-600" : ""
      }`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/statistics"}>Statistics</NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard"}>Dashboard</NavLink>
            </li>
            <li>
              <NavLink to={"/preOrder"}>Pre Order</NavLink>
            </li>
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost text-2xl font-bold">
          Gadget Heaven
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/statistics"}>Statistics</NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard"}>Dashboard</NavLink>
          </li>
          <li>
            <NavLink to={"/preOrder"}>Pre Order</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="flex gap-3">
          <div className="relative">
            <MdOutlineShoppingCart className="" />
            <span className="absolute -top-5 -right-1">{carts.length}</span>
          </div>
          <div className="relative">
            <FaRegHeart className="" />
            <span className="absolute -top-5 -right-1 ">{wishlist.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
