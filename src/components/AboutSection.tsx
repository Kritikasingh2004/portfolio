import Image from "next/image";
import { SkillPreview } from "./ui/SkillPreview";
import { EncryptedText } from "@/components/ui/encrypted-text";

const AboutSection = () => {
  return (
    <div id="about">
      <div
        className="w-full min-h-screen  flex items-center justify-center  overflow-hidden"
        id="aboutbg"
      >
        <div className="flex justify-center w-full z-20 ">
          <div className="flex flex-col md:w-1/2 w-[90%]">
            <Image
              src="/assets/about.png"
              alt="about"
              className="w-[80%]"
              width={1920}
              height={501}
            />
            <p className="px-6 text-yellow-300 font-medium text-lg md:text-xl lg:text-2xl">
              Hi, I&apos;m Kritika! I&apos;m a developer who enjoys coding,
              creating crazy websites, and diving into new stories. I love
              exploring how things work, from the front-end to deeper layers of
              technology.{" "}
              <EncryptedText
                text="When I'm not coding, I'm usually being a
              superhero and saving the world."
              />
            </p>
          </div>
        </div>
      </div>
      <div className="w-full min-h-screen  flex items-center justify-between lg:flex-row flex-col">
        <div className="flex justify-end md:w-[35%] w-full">
          <Image
            src="/assets/shadow.png"
            alt="Shadow the hedgehog"
            className="w-full md:block hidden mx-auto"
            width={752}
            height={1124}
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
