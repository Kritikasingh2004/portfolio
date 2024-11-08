import React from 'react'
import star from "../../app/assets/starbg.png"
import Image from 'next/image'
import kaizenyou from "../../app/assets/projects/kaizenyou.png"
import vaccitime from "../../app/assets/projects/vaccitime.png"
import codefiesta from "../../app/assets/projects/codefiesta.png"
import hiresum from "../../app/assets/projects/hiresum.png"
import chatbot from "../../app/assets/projects/chatbot.png"
import litfest from "../../app/assets/projects/litfest.png"

import { BentoGrid, BentoGridItem } from "../ui/bento-grid";


const ProjectItems = () => {
    return (
        <div className='w-full min-h-screen relative bg-black pb-20'>
            <Image
                src={star}
                alt='star'
                className='w-full absolute bottom-0 z-0 h-full animate-pulse'
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
    )
}

export default ProjectItems



const items = [

    {
        title: "KaizenYou Website",
        description: "The official website for a edtech startup KaizenYou.",
        header: kaizenyou,
        tags: ["NextJS", "TailwindCSS", "GSAP"],
        url: "https://www.kaizenyou.in/",
        headerUrl: "https://github.com/Kritikasingh2004/kaizenyou.git",
    },
    {
        title: "Litfest Website",
        description: "The official website for the literature event of Lucknow.",
        header: litfest,
        tags: ["VueJS", "PicoCSS", "Firebase"],
        url: "https://enlit.club/",
        headerUrl: "https://github.com/Kritikasingh2004/litfest.git",
    },
    {
        title: "CodeFiesta Website",
        description: "Website made for a tech fest at Lucknow University.",
        header: codefiesta,
        tags: ["VueJS", "Bootstrap"],
        url: "https://codefiesta-chi.vercel.app/",
        headerUrl: "https://github.com/Kritikasingh2004/codefiesta.git",
    },
    {
        title: "VacciTime",
        description: "A website to remind you about your child's vaccination schedule.",
        header: vaccitime,
        tags: ["Firebase", "NextJS", "TailwindCSS"],
        url: "https://vacci-time.vercel.app/",
        headerUrl: "https://github.com/Kritikasingh2004/Vacci-Time.git",
    },
    {
        title: "ChatBot Frontend",
        description: "FrontEnd for a image based chatbot.",
        header: chatbot,
        tags: ["NextJS", "TailwindCSS", "Aceternity UI"],
        url: "https://chatbot-app-livid.vercel.app/",
        headerUrl: "https://github.com/Kritikasingh2004/chatbot-app.git",
    },
    {
        title: "HireSum FrontEnd",
        description: "FrontEnd of a website for hiring candidates.",
        header: hiresum,
        tags: ["ReactJS", "CSS"],
        url: "https://kritikasingh2004.github.io/hiresum/",
        headerUrl: "https://github.com/Kritikasingh2004/hiresum.git",
    },
    {
        title: "Coding Soon...",
        description: "Let me cook...For more project see my github profile.",
        tags: ["Project"],
        url: "",
        headerUrl: "",
    },

];