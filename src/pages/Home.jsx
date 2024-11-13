import React from "react";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import { Outlet, useLoaderData } from "react-router-dom";

const Home = () => {
  const categories = useLoaderData()
  return (
    <div>
      <Banner></Banner>
      <div className="flex">
        <div className="w-1/4">
          <Categories categories={categories}></Categories>
        </div>
        <div className="w-3/4">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Home;
