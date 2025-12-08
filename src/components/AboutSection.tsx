"use client";

import Image from "next/image";
import { SkillPreview } from "./ui/SkillPreview";
import { EncryptedText } from "@/components/ui/encrypted-text";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <div id="about">
      <div
        className="w-full min-h-screen  flex items-center justify-center relative"
        id="aboutbg"
      >
        <Image
          src="/assets/aboutbg.webp"
          alt="about background"
          className="w-full absolute z-0 hidden sm:block"
          width={1864}
          height={1049}
        />
        <Image
          src="/assets/aboutbgMobile.webp"
          alt="about background"
          className="w-full absolute z-0 block sm:hidden"
          width={1080}
          height={1920}
        />
        <div className="flex justify-center w-full z-20 ">
          <motion.div
            className="flex flex-col lg:w-1/2 md:w-2/3 w-[90%]"
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/assets/about.webp"
              alt="about"
              className="w-[80%]"
              width={746}
              height={195}
            />
            <p className="px-6 text-yellow-300 font-medium text-xl md:text-2xl">
              Hi, I&apos;m Kritika! I&apos;m a developer who enjoys coding,
              creating crazy websites, and diving into new stories. I love
              exploring how things work, from the front-end to deeper layers of
              technology. When I'm not coding,{" "}
              <EncryptedText
                text="I'm usually being a
              superhero and saving the world."
                revealDelayMs={20}
              />
            </p>
          </motion.div>
        </div>
      </div>
      <div className="w-full min-h-screen  flex items-center justify-between lg:flex-row flex-col">
        <motion.div
          className="flex justify-end md:w-[35%] w-full overflow-x-hidden"
          initial={{ opacity: 0.5, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/assets/shadow.webp"
            alt="Shadow the hedgehog"
            className="md:w-full w-[60%] mx-auto z-50"
            width={652}
            height={975}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center justify-center md:w-[65%] w-[90%]"
        >
          <SkillPreview />
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;
