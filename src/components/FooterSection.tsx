"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import Image from "next/image";

const FooterSection = () => {
  return (
    <div className="flex flex-col overflow-hidden bg-black z-[600]">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-yellow-300">
              That&apos;s all about me <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none text-white">
                Always Remember
              </span>
            </h1>
          </>
        }
      >
        <Image
          src="/assets/bill.png"
          alt="bill cipher"
          height={1080}
          width={1080}
          className="mx-auto w-fit  h-full"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
};

export default FooterSection;
