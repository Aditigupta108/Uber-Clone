import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Search from "@/Components/Home/Search";
import Googlemap from "@/Components/Home/Googlemap";

export default function Home() {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div>
        <Search />
      </div>
      <div className="col-span-2">
        <Googlemap />
      </div>
    </div>
  );
}
