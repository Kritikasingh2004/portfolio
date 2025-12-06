import Image from "next/image";
import { SkillPreview } from "./ui/SkillPreview";
import { EncryptedText } from "@/components/ui/encrypted-text";

const AboutSection = () => {
  return (
    <div id="about">
      <div
        className="w-full min-h-screen  flex items-center justify-center relative"
        id="aboutbg"
      >
        <Image
          src="/assets/aboutbg.jpg"
          alt="about background"
          className="w-full absolute z-0 hidden sm:block"
          width={1920}
          height={1080}
        />
        <Image
          src="/assets/aboutbgMobile.jpg"
          alt="about background"
          className="w-full absolute z-0 block sm:hidden"
          width={1080}
          height={1920}
        />
        <div className="flex justify-center w-full z-20 ">
          <div className="flex flex-col lg:w-1/2 md:w-2/3 w-[90%]">
            <Image
              src="/assets/about.png"
              alt="about"
              className="w-[80%]"
              width={1920}
              height={501}
            />
            <p className="px-6 text-yellow-300 font-medium text-xl md:text-2xl">
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
            className="md:w-full w-[60%] mx-auto z-50"
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
