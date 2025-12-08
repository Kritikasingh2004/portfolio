"use client";

import Image from "next/image";
import ExperienceCards from "@/components/ui/ExperienceCards";

const cards = [
  {
    description: "Kyte Research Pte. Ltd.",
    title: "SDE Intern",
    src: "/assets/experience/kyte.webp",
    ctaText: "View More",
    content: () => {
      return (
        <div>
          <p className="text-yellow-300 font-semibold">Feb - Aug 2025</p>
          <ul>
            <li>
              <span>
                Released 6+ production features with minimal supervision across
                web platforms.
              </span>
            </li>
            <li>
              Created and refactored REST APIs and backend logic using NestJS.
            </li>
            <li>
              Improved frontend flows in both Next.js and React-based UIs,
              reducing bugs by 40%.
            </li>
            <li>
              Proactively minimized post-release issues via comprehensive E2E
              testing.
            </li>
          </ul>
        </div>
      );
    },
  },
  {
    description: "KaizenYou",
    title: "Web Dev Intern",
    src: "/assets/experience/kaizenyou.webp",
    ctaText: "View More",
    content: () => {
      return (
        <div>
          <p className="text-yellow-300 font-semibold">Jun - Aug 2024</p>
          <ul>
            <li>
              Launched a full-stack website for internships and events using
              Next.js and Firebase.
            </li>
            <li>
              Built real-time data features with Firestore and Firebase Auth.
            </li>
            <li>
              Achieved 100% Lighthouse scores through optimized rendering and
              caching.
            </li>
          </ul>
        </div>
      );
    },
  },
];

const ExperienceSection = () => {
  return (
    <>
      <div
        className="w-full py-16 bg-black flex sm:flex-row flex-col items-center justify-center relative overflow-hidden"
        id="projects"
      >
        <Image
          src="/assets/starbg.webp"
          alt="star"
          className="w-full absolute top-0 z-0 animate-pulse md:block hidden repeat-infinite"
          width={1920}
          height={1080}
        />

        <Image
          src="/assets/starbgMobile.webp"
          alt="star"
          className="w-full absolute top-0 z-0 animate-pulse md:hidden block"
          width={1080}
          height={1920}
        />

        <div className="flex flex-col justify-center items-center sm:w-[70%] w-full z-50">
          <Image
            src="/assets/experience.webp"
            alt="experience"
            className="md:w-[80%] w-full"
            width={1366}
            height={567}
          />
          <ExperienceCards cards={cards} />
        </div>
      </div>
    </>
  );
};

export default ExperienceSection;
