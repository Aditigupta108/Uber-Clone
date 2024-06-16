"use client";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Search from "@/Components/Home/Search";
import Googlemap from "@/Components/Home/Googlemap";
import { SourceContext } from "@/Context/SourceContext";
import { DestinationContext } from "@/Context/DestinationContext";
import { useState } from "react";
import { LoadScript } from "@react-google-maps/api";

export default function Home() {
  const [Source, setSource] = useState([]);
  const [Destination, setDestination] = useState([]);
  return (
    <SourceContext.Provider value={{ Source, setSource }}>
      <DestinationContext.Provider value={{ Destination, setDestination }}>
        <LoadScript
          libraries={["places"]}
          googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY}
        >
          <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <Search />
            </div>
            <div className="col-span-2">
              <Googlemap />
            </div>
          </div>
        </LoadScript>
      </DestinationContext.Provider>
    </SourceContext.Provider>
  );
}
