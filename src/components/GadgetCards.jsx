import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import GadgetCard from "../components/GadgetCard";

const GadgetCards = () => {
  const data = useLoaderData();
  const { category } = useParams();
  const [gadgets, setGadgets] = useState([]);

  useEffect(() => {
    if (category) {
      const filteredByCategory = [...data].filter(
        (gadget) => gadget.category === category
      );
      setGadgets(filteredByCategory);
    } else {
      setGadgets(data.slice(0, 9));
    }
  }, [category, data]);


  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
        {gadgets.map((gadget, index) => (
          <GadgetCard key={index} gadget={gadget}></GadgetCard>
        ))}
      </div>
 
    </div>
  );
};

export default GadgetCards;
