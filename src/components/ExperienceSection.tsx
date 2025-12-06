"use client";

import Image from "next/image";
import ExperienceCards from "@/components/ui/ExperienceCards";

const cards = [
  {
    description: "Kyte Research Pte. Ltd.",
    title: "SDE Intern",
    src: "https://assets.aceternity.com/demos/lana-del-rey.jpeg",
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
    title: "Web Development Intern",
    src: "https://assets.aceternity.com/demos/babbu-maan.jpeg",
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

const ProjectSection = () => {
  return (
    <>
      <div
        className="w-full min-h-screen bg-black flex sm:flex-row flex-col items-center justify-center relative overflow-hidden"
        id="projects"
      >
        <Image
          src="/assets/starbg.png"
          alt="star"
          className="w-full absolute bottom-0 z-0 animate-flicker"
          width={1920}
          height={1080}
        />

        <div className="flex flex-col justify-center items-center sm:w-[70%] w-full z-50">
          <Image
            src="/assets/experience.jpg"
            alt="experience"
            className="w-[80%]"
            width={1366}
            height={567}
          />
          <ExperienceCards cards={cards} />
        </div>
      </div>
    </>
  );
};

export default ProjectSection;
