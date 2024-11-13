import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import GadgetCard from "../components/GadgetCard";

const AllGadgets = () => {
    const data = useLoaderData();
    return (
        <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
          {data.map((gadget, index) => (
            <GadgetCard key={index} gadget={gadget}></GadgetCard>
          ))}
        </div>
    
      </div>
    );
};

export default AllGadgets;