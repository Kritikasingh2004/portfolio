import React from "react";

export function SkillPreview() {
  return (
    <div className="py-10">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 max-w-7xl mx-auto">
        {grid.map((feature) => (
          <div
            key={feature.title}
            className="relative p-6 rounded-3xl overflow-hidden hover:shadow-[0_0_10px_rgba(253,224,71,1)] border border-yellow-300 transition-shadow duration-300 cursor-pointer"
          >
            <p className="text-xl font-bold text-yellow-300 relative z-20">
              {feature.title}
            </p>
            <p className=" mt-4 text-base font-medium relative z-20">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const grid = [
  {
    title: "NextJs",
    description:
      "I have made some projects on NextJs just like this portfolio.",
  },
  {
    title: "NestJs",
    description: "I am working on NestJs during my internship.",
  },
  {
    title: "Typescript",
    description: "I have used Typescript in this portfolio and I love it.",
  },
  {
    title: "TailwindCSS",
    description:
      "I have used TailwindCSS in this portfolio and I literally love it.",
  },
  {
    title: "ReactJs",
    description:
      "Since you have to know ReactJs to work with NextJs, I know ReactJs too.",
  },
  {
    title: "Postgresql",
    description: "I have used Postgresql while working as an SDE intern.",
  },
  {
    title: "GraphQL",
    description:
      "I'm using GraphQL with Apollo Client for caching and state management.",
  },
  {
    title: "Firebase",
    description: "I have used Firebase for authentication and database.",
  },
  {
    title: "RESTful APIs",
    description: "I have built RESTful APIs using NestJS and PostgreSQL.",
  },
  {
    title: "Bootstrap",
    description: "I have used Bootstrap in some of my older projects.",
  },
  {
    title: "GitHub",
    description:
      "Who doesn't know GitHub? I have used it in all of my projects.",
  },
  {
    title: "Html/ Css",
    description: "These are the basics of web development.",
  },
];
