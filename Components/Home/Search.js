import React, { useEffect , useContext} from "react";
import InputItem from "./InputItem";
import { SourceContext } from "@/Context/SourceContext";
import { DestinationContext } from "@/Context/DestinationContext";

function Search() {
  const { Source, setSource } = useContext(SourceContext);
  const { Destination, setDestination } = useContext(DestinationContext);

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
