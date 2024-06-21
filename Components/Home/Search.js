import React, { useEffect, useContext, useState } from "react";
import InputItem from "./InputItem";
import { SourceContext } from "@/Context/SourceContext";
import { DestinationContext } from "@/Context/DestinationContext";
import CarlistOptions from "./CarlistOptions";

function Search() {
  const { Source, setSource } = useContext(SourceContext);
  const { Destination, setDestination } = useContext(DestinationContext);
  const [Distance, setDistance] = useState();

  //for calculating distance for rides.....
  const calculateDistance = () => {
    const dist = google.maps.geometry.spherical.computeDistanceBetween(
      { lat: Source.lat, lng: Source.lng },
      { lat: Destination.lat, lng: Destination.lng }
    );

    //console.log(dist*0.000621374);
    //in miles......
    setDistance(dist * 0.000621374);
  };

  // for accessing Context hook.......
  useEffect(() => {
    if (Source) {
      console.log(Source);
    }
    if (Destination) {
      console.log(Destination);
    }
  }, [Source, Destination]);

  return (
    <div>
      <div className="p-2 md:p-6 border-[2px] rounded-xl ">
        <p className="text-[20px] font-bold">Get a Ride</p>
        <InputItem type="source" />
        <InputItem type="destination" />

        <button
          className="p-3 mt-5 w-full bg-black text-white rounded-lg"
          onClick={() => calculateDistance()}
        >
          Search
        </button>
      </div>
      {/*{Distance ? <CarlistOptions distance={Distance} />: null}*/}
      <CarlistOptions />
    </div>
  );
}

export default Search;
