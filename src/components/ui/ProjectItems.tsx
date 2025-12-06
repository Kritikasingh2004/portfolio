import React from "react";
import Image from "next/image";

import { BentoGrid, BentoGridItem } from "../ui/bento-grid";

const ProjectItems = () => {
  return (
    <div className="w-full min-h-screen relative bg-black pb-20">
      <Image
        src="/assets/starbg.png"
        alt="star"
        className="w-full absolute  z-0 animate-pulse md:block hidden repeat-infinite"
        width={1920}
        height={1080}
      />

      <Image
        src="/assets/starbgMobile.png"
        alt="star"
        className="w-full absolute bottom-0 z-0 animate-pulse md:hidden block"
        width={1080}
        height={1920}
      />
      <BentoGrid className="max-w-4xl mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            tags={item.tags}
            headerUrl={item.headerUrl}
            url={item.url}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </div>
  );
};

export default ProjectItems;

const items = [
  {
    title: "Campus/mart",
    description:
      "Built a platform allowing students to buy/sell used items securely.",
    header: "/assets/projects/campusmart.png",
    tags: ["NextJS", "TailwindCSS", "Supabase"],
    url: "https://campusmart-two.vercel.app/",
    headerUrl: "https://github.com/Kritikasingh2004/campusmart.git",
  },
  {
    title: "KaizenYou Website",
    description: "The official website for a edtech startup KaizenYou.",
    header: "/assets/projects/kaizenyou.png",
    tags: ["NextJS", "TailwindCSS", "GSAP"],
    url: "https://www.kaizenyou.in/",
    headerUrl: "https://github.com/Kritikasingh2004/kaizenyou.git",
  },
  {
    title: "Litfest Website",
    description: "The official website for the literature event of Lucknow.",
    header: "/assets/projects/litfest.png",
    tags: ["VueJS", "PicoCSS", "Firebase"],
    url: "https://litfest-gilt.vercel.app/",
    headerUrl: "https://github.com/Kritikasingh2004/litfest.git",
  },
  {
    title: "CodeFiesta Website",
    description: "Website made for a tech fest at Lucknow University.",
    header: "/assets/projects/codefiesta.png",
    tags: ["VueJS", "Bootstrap"],
    url: "https://codefiesta-chi.vercel.app/",
    headerUrl: "https://github.com/Kritikasingh2004/codefiesta.git",
  },
  {
    title: "Coding Soon...",
    description: "Let me cook...For more project see my github profile.",
    tags: ["Project"],
    url: "",
    headerUrl: "",
  },
];
