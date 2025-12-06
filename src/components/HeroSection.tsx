import Image from "next/image";
import { EncryptedText } from "@/components/ui/encrypted-text";
import React from "react";

const HeroSection = () => {
  return (
    <div
      id="hero"
      className="w-full min-h-screen flex md:flex-row flex-col justify-center items-center relative"
    >
      <div className="lg:w-2/2 md:w-[60%] sm:h-auto min-h-full w-full flex flex-col md:justify-end z-40 relative sm:mt-0 mt-11">
        <div className="flex flex-col justify-center md:ml-10">
          <p className="text-4xl font-semibold text-yellow-300 text-left">
            <EncryptedText text="Hello! I am Kritika." revealDelayMs={50} />
          </p>

          <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none text-white">
            Welcome to My <span className="text-yellow-300">Portfolio!</span>
          </span>
        </div>
      </div>
      <div className="lg:w-1/3 md:w-[40%] sm:h-fit h-screen w-full z-50">
        <div className="bg-yellow-300 flex justify-center items-center rounded-lg w-[75%] p-2">
          <Image
            src="/assets/me.jpg"
            alt="My card"
            height={3280}
            width={2460}
            className="w-full z-50 shadow-md rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
