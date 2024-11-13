import React from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
const Dashboard = () => {
  return (
    <div>
      <div className="bg-purple-600 min-h-[250px] pt-10">
        <h1 className="text-4xl text-center text-white font-bold mb-3">
          Dashboard
        </h1>
        <p className="text-xl text-center text-white w-8/12 mx-auto">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="flex justify-center gap-5 mt-5">
          <NavLink
            className={({ isActive }) =>
              `btn w-[120px] rounded-3xl ${isActive ? "bg-purple-600" : ""}`
            }
            to={"cart"}
          >
            Cart
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `btn w-[120px] rounded-3xl ${isActive ? "bg-purple-600" : ""}`
            }
            to={"wishlist"}
          >
            Wishlist
          </NavLink>
        </div>
      </div>

      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
