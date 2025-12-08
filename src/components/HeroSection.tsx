"use client";

import Image from "next/image";
import { EncryptedText } from "@/components/ui/encrypted-text";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div
      id="hero"
      className="w-full min-h-screen flex md:flex-row flex-col justify-center items-center relative"
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="w-full bottom-0 absolute z-10"
      >
        <Image
          src="/assets/sonicbg.webp"
          alt="sonic the hedgehog"
          className="w-full z-10"
          width={1864}
          height={1049}
          priority
        />
      </motion.div>
      <div className="md:w-[45%] sm:h-auto min-h-full w-full flex flex-col justify-center z-40 relative sm:mt-0 mt-11 md:ml-16">
        <p className="md:text-4xl text-2xl font-semibold text-yellow-300 md:text-left text-center">
          <EncryptedText text="Hello! I am Kritika." revealDelayMs={50} />
        </p>

        <motion.span
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="text-5xl md:text-[4rem] lg:text-[6rem] font-bold mt-1 leading-none text-white md:text-left text-center"
        >
          Welcome to My
          <span className="text-yellow-300 text-6xl md:text-[4rem] lg:text-[6rem] md:inline-block block">
            {" "}
            Portfolio!
          </span>
        </motion.span>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="md:w-[45%] w-full z-50"
      >
        <Image
          src="/assets/me.webp"
          alt="My card"
          height={755}
          width={755}
          className="md:w-[90%] w-full z-50 shadow-md rounded-lg"
          priority
        />
      </motion.div>
    </div>
  );
};

export default HeroSection;
