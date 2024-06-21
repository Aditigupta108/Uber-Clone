import { CartListData } from "@/utils/CartListData";
import React, { useState } from "react";
import CartlistItems from "./CartlistItems";

function CarlistOptions() {
  const [activeIndex, setactiveIndex] = useState();
  return (
    <div className="mt-4 overflow-auto h-[250px]">
      <h2 className="font-bold text-[18px]">Recommended</h2>
      {CartListData.map((item, index) => (
        <div
          className={`cursor-pointer p-2 px-4 mt-2 rounded-md border-black ${
            activeIndex === index ? "border-[3px]" : null
          }`}
          onClick={() => setactiveIndex(index)}
        >
          <CartlistItems car={item}/>
        </div>
      ))}
    </div>
  );
}

export default CarlistOptions;
