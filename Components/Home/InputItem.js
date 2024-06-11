"use client";
import React, { useState } from "react";
import Image from "next/image";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

function InputItem({ type }) {
  const [value, setValue] = useState(null);
  return (
    <div className="bg-slate-200 mt-3 p-3 rounded-lg flex items-center gap-4">
      <Image
        src={type == "source" ? "/pickup.png" : "/destination.png"}
        width={25}
        height={25}
      />
      {/*
      <input
        type="text"
        placeholder={type == "source" ? "Pickup Location" : "Drop Location"}
        className="bg-transparent outline-none w-full"
      />
  */}

      <GooglePlacesAutocomplete
        selectProps={{
          name,
          value,
          onChange: setValue,
          classNames: {
            input: () => "w-full text-base sm:text-sm",
          },
          placeholder: "Pickup Location",
          isClearable: true,
          className: "w-full",
          components: {
            DropdownIndicator: false,
          },

          styles: {
            control: (provided) => ({
              ...provided,
              backgroundColor: "#00ffff00",
              border: "none",
            }),
          },
        }}
        autocompletionRequest={{
          componentRestrictions: {
            country: ["ca"],
          },
        }}
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY}
      />
    </div>
  );
}

export default InputItem;
