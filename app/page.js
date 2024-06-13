"use client"
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Search from "@/Components/Home/Search";
import Googlemap from "@/Components/Home/Googlemap";
import { SourceContext } from "@/Context/SourceContext";
import { DestinationContext } from "@/Context/DestinationContext";
import { useState } from "react";

export default function Home() {
  const [Source, setSource] = useState([]);
  const [Destination, setDestination] = useState([]);
  return (
    <SourceContext.Provider value={{ Source, setSource }}>
      <DestinationContext.Provider value={{ Destination, setDestination }}>
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <Search />
          </div>
          <div className="col-span-2">
            <Googlemap />
          </div>
        </div>
      </DestinationContext.Provider>
    </SourceContext.Provider>
  );
}
