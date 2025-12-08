"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ProjectSection = () => {
  return (
    <div>
      <div
        className="w-full min-h-screen bg-black flex sm:flex-row flex-col items-center justify-center relative "
        id="projects"
      >
        <Image
          src="/assets/halfstar.webp"
          alt="star"
          className="w-full absolute bottom-0 z-0 animate-flicker"
          width={1920}
          height={1080}
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="flex sm:justify-end justify-center items-center sm:w-[70%] w-full z-50"
        >
          <Image
            src="/assets/project.webp"
            alt="project"
            className="md:w-[60%] w-full"
            width={1024}
            height={313}
          />
        </motion.div>
        <motion.div
          className="overflow-x-hidden flex sm:justify-start justify-center sm:w-[30%] w-full z-50"
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/assets/collector.webp"
            alt="collector"
            className="sm:w-full w-[60%] sm:mx-0 mx-auto"
            width={591}
            height={1053}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectSection;
