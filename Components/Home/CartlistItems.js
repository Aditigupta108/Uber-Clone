import React from "react";
import Image from "next/image";
import { FaUser } from "react-icons/fa";

function CartlistItems({ car}) {
  return (
    <div>
      <div className="flex justify-between gap-2 items-center mt-3">
        <div className="flex items-center gap-4">
          <Image src={car.image} width={120} height={120} />
          <div>
            <h2 className="font-semibold text-[16px] flex gap-4 items-center">
              {car.name}
              <span className="flex gap-2 items-center font-normal">
                <FaUser /> {car.seat}
              </span>
            </h2>
            <p className="font-semibold text-[12px]">{car.des}</p>
          </div>
        </div>
        <h2 className="font-semibold text-[12px]">
          ₹{(car.amount * 38).toFixed(2)}
        </h2>
      </div>
    </div>
  );
}

export default CartlistItems;
