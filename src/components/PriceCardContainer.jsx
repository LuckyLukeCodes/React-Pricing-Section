import React from "react";
import PriceCard from "./PriceCard";
import pricingData from "../data/pricing";

const PriceCardContainer = () => {
  return (
    <div className="grid h-1/2 w-2/3 gap-6 md:w-3/4 md:grid-cols-2 lg:w-[80%] lg:grid-cols-3">
      {pricingData.map((item) => (
        <PriceCard key={item.plan} {...item} />
      ))}
    </div>
  );
};

export default PriceCardContainer;
