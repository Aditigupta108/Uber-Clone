import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <div>
        <Image
          src="/Uberbanner.jpg"
          width={900}
          height={1000}
          className="h-full w-full object-contain"
        />
        <div className="absolute top-10 left-0 m-10">
          <SignIn />
        </div>
      </div>
    </>
  );
}
