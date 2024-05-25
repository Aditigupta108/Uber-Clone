import React from "react";
import InputItem from "./InputItem";

function Search() {
  return (
    <div className="p-2 md:p-6 border-[2px] rounded-xl ">
      <p className="text-[20px] font-bold">Get a Ride</p>
      <InputItem type="source" />
      <InputItem type="destination" />

      <button className="p-3 mt-5 w-full bg-black text-white rounded-lg">
        Search
      </button>
    </div>
  );
}

export default Search;
