import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import GetStartedButton from "./get-started-button";

const Header = () => {
  return (
    <div className="py-5 px-5 md:px-12 lg:px-28">
      <div className="flex justify-between items-center">
        <Image src={assets.logo} alt="Writly Logo" className="w-[130px]  sm:w-auto" />
        <GetStartedButton />
      </div>

      <div className="text-center my-8">
        <h1 className="text-3xl sm:text-3xl font-medium">Latest Blogs</h1>
        <p className="mt-10 max-w-[740px] m-auto text-xs sm:text-base">Your Favourite Blogs from your Favourite Creators</p>

        <form className="flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000]">
          <input type="email" placeholder="Enter you Email" className="pl-4 outline-none" />
          <button type="submit" className="py-4 px-4 sm:px-8 border-l border-black active:bg-gray-600 active:text-white">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
