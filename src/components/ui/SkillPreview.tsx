import React from "react";
import { useId } from "react";

export function SkillPreview() {
  return (
    <div className="py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-2 max-w-7xl mx-auto">
        {grid.map((feature) => (
          <div
            key={feature.title}
            className="relative bg-gradient-to-b from-neutral-900 to-neutral-950 p-6 rounded-3xl overflow-hidden hover:shadow-[0_0_10px_rgba(253,224,71,1)] hover:border-yellow-300 transition-shadow duration-300 cursor-pointer"
          >
            <Grid size={20} />
            <p className="text-base font-bold text-yellow-300 relative z-20">
              {feature.title}
            </p>
            <p className="text-neutral-400 mt-4 text-base font-normal relative z-20">
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

interface GridProps {
  pattern?: number[][];
  size?: number;
}

export const Grid: React.FC<GridProps> = ({ pattern, size }) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];

  return (
    <div className="pointer-events-none absolute left-1/2 top-0  -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r  [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] from-zinc-900/30 to-zinc-900/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full  mix-blend-overlay fill-white/10 stroke-white/10"
        />
      </div>
    </div>
  );
};

interface GridPatternProps {
  width: number;
  height: number;
  x: string;
  y: string;
  squares: number[][];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any; // For any other props
}

export const GridPattern: React.FC<GridPatternProps> = ({
  width,
  height,
  x,
  y,
  squares,
  ...props
}) => {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]: number[]) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
};
