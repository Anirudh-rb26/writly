import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-around flex-col gap-4 sm:gap-0 sm:flex-row bg-black py-10 py items-center">
      <Image src={assets.logo_light} alt="AppLogo Light Themed" width={120} />
      <p className="text-white text-sm">Copyright @writly</p>
      <div className="flex">
        <Image src={assets.facebook_icon} alt="SocialMedia Icon" width={40} />
        <Image src={assets.twitter_icon} alt="SocialMedia Icon" width={40} />
      </div>
    </div>
  );
};

export default Footer;
