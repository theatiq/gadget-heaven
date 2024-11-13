import React from "react";

import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DynamicTitle from "../components/Dynamic";

const MainLayouts = () => {
  return (
    <div>
      <DynamicTitle></DynamicTitle>
      {/* toaster */}
      <div className="h-5">
        {/* Navbar */}
        <Navbar></Navbar>
      </div>
      <div className="py-12 container mx-auto px-12">
        {/* Outlet */}
        <Outlet></Outlet>
      </div>
      {/* footer */}
      <Footer></Footer>
    </div>
  );
};

export default MainLayouts;
