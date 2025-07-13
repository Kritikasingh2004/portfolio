import Image from "next/image";
import darkbill from "../app/assets/evilbill.jpg";
import about from "../app/assets/about.png";
import { SkillPreview } from "./ui/SkillPreview";

const AboutSection = () => {
  return (
    <div id="about">
      <div
        className="w-full min-h-screen  flex items-center justify-center  overflow-hidden"
        id="aboutbg"
      >
        <div className="flex justify-center w-full z-20 ">
          <div className="flex flex-col md:w-1/2 w-[90%]">
            <Image src={about} alt="about" className="w-[60%]" />
            <p className="px-6 text-yellow-300">
              Hi, I&apos;m Kritika! I&apos;m a developer who enjoys coding,
              creating beautiful websites, and diving into new stories. I love
              exploring how things work, from the front-end of websites to
              deeper layers of technology. When I&apos;m not coding, I&apos;m
              usually imagining myself as a superhero and saving the world.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full min-h-screen  flex items-center justify-between lg:flex-row flex-col">
        <div className="flex justify-end md:w-[35%] w-full">
          <Image
            src={darkbill}
            alt="collector"
            className="w-[80%] md:w-full mx-auto"
          />
        </div>
        <div className="flex flex-col items-center justify-center md:w-[65%] w-[90%]">
          <SkillPreview />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
