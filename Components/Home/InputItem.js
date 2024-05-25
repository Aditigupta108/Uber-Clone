import React from "react";
import Image from "next/image";

function InputItem({ type }) {
  return (
    <div className="bg-slate-200 mt-3 p-3 rounded-lg flex items-center gap-4">
      <Image
        src={type == "source" ? "/pickup.png" : "/destination.png"}
        width={25}
        height={25}
      />
      <input
        type="text"
        placeholder={type == "source" ? "Pickup Location" : "Drop Location"}
        className="bg-transparent outline-none w-full"
      />
    </div>
  );
}

export default InputItem;
