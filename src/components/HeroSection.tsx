import Image from "next/image";
import { EncryptedText } from "@/components/ui/encrypted-text";
import React from "react";

const HeroSection = () => {
  return (
    <div
      id="hero"
      className="w-full min-h-screen flex md:flex-row flex-col justify-center items-center relative"
    >
      <Image
        src="/assets/sonicbg.png"
        alt="sonic the hedgehog"
        className="w-full bottom-0 absolute z-10"
        width={1920}
        height={1080}
      />
      <div className="md:w-[45%] sm:h-auto min-h-full w-full flex flex-col justify-center z-40 relative sm:mt-0 mt-11 md:ml-16">
        <p className="md:text-4xl text-2xl font-semibold text-yellow-300 md:text-left text-center">
          <EncryptedText text="Hello! I am Kritika." revealDelayMs={50} />
        </p>

        <span className="text-5xl md:text-[4rem] lg:text-[6rem] font-bold mt-1 leading-none text-white md:text-left text-center">
          Welcome to My
          <span className="text-yellow-300 text-6xl md:text-[4rem] lg:text-[6rem] md:inline-block block">
            {" "}
            Portfolio!
          </span>
        </span>
      </div>
      <div className="md:w-[45%] w-full z-50">
        <Image
          src="/assets/me.png"
          alt="My card"
          height={2380}
          width={2380}
          className="md:w-[90%] w-full z-50 shadow-md rounded-lg"
        />
      </div>
    </div>
  );
};

export default HeroSection;
