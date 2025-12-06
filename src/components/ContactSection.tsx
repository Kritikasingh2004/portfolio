import Image from "next/image";
import Link from "next/link";
import React from "react";

const ContactSection = () => {
  return (
    <div
      className="w-full min-h-screen bg-black flex sm:flex-row flex-col items-center justify-center"
      id="resume"
    >
      <div className="flex justify-start sm:w-[50%] w-full">
        <Image
          src="/assets/sprig.png"
          alt="sprig"
          className="sm:w-full w-[60%] sm:mx-0 mx-auto"
          width={1080}
          height={1080}
        />
      </div>
      <div className=" flex justify-evenly items-start sm:w-[50%] w-full flex-col min-h-44">
        <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none text-white">
          Hi, Download My Resume!
        </span>
        <Link
          href="/resume.pdf"
          download="resume"
          className="hover:shadow-[0_0_10px_rgba(253,224,71,1)] px-6 py-2 mt-5 ml-3 bg-transparent border  rounded-lg font-bold text-xl transform hover:-translate-y-1 transition duration-400 text-yellow-300 border-yellow-300"
        >
          Resume Here
        </Link>
      </div>
    </div>
  );
};

export default ContactSection;
