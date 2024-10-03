import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const GetStartedButton = () => {
  return (
    <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]">
      Get Started
      <Image src={assets.arrow} alt="Arrow" />
    </button>
  );
};

export default GetStartedButton;
