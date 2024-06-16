"use client";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { Loader } from "@googlemaps/js-api-loader";
import { SourceContext } from "@/Context/SourceContext";
import { DestinationContext } from "@/Context/DestinationContext";

function InputItem({ type }) {
  const [value, setValue] = useState(null);
  const [placeholderValue, setplaceholderValue] = useState(null);
  const { Source, setSource } = useContext(SourceContext);
  const { Destination, setDestination } = useContext(DestinationContext);

  //getting longitude and lattitude........
  //and then we have to store the information of type using context hook so that we can use this throughout the application.....
  const latAndlong = (place, type) => {
    const placeId = place.value.place_id;
    const service = new google.maps.places.PlacesService(
      document.createElement("div")
    );
    service.getDetails({ placeId }, (place, status) => {
      if (status === "OK" && place.geometry && place.geometry.location) {
        // console.log(place.geometry.location.lat());
        // console.log(place.geometry.location.lng());

        if (type == "source") {
          setSource({
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
            name: place.formatted_address,
            label: place.name,
          });
        } else {
          setDestination({
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
            name: place.formatted_address,
            label: place.name,
          });
        }
      }
    });
  };

  const loader = new Loader({
    apiKey: "AIzaSyBIfwdWxXJ-DlWPVw7HvCliReaGPKwm_7o",
    version: "weekly",
  });

  loader.load().then(async () => {
    const { Map: GoogleMap } = await google.maps.importLibrary("maps");

    const map = new GoogleMap(document.getElementById("map"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
  });

  useEffect(() => {
    type == "source"
      ? setplaceholderValue("Pickup Location")
      : setplaceholderValue("Dropoff Location");
  }, []);

  return (
    <div className="bg-slate-200 mt-3 p-3 rounded-lg flex items-center gap-4">
      <Image
        alt="symbols"
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
        //apiKey={process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY}
        selectProps={{
          value,
          onChange: (place) => {
            latAndlong(place, type);
            setValue(place);
          },
          classNames: {
            input: () => "w-full text-base sm:text-sm",
          },
          placeholder: placeholderValue,
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
      />
    </div>
  );
}

export default InputItem;
