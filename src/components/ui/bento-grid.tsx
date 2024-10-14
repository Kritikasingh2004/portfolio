import { cn } from "@/lib/utils";
import { IconAppWindow, IconBrandGithub } from "@tabler/icons-react";
import Image from "next/image";
import { StaticImageData } from 'next/image';

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid md:auto-rows-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-7xl mx-auto z-50",
                className
            )}
        >
            {children}
        </div>
    );
};
const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 "></div>
);
export const BentoGridItem = ({
    className,
    title,
    description,
    header,
    tags,
    url,
    headerUrl
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: StaticImageData;
    tags?: string[];
    url?: string;
    headerUrl?: string;
}) => {
    return (
        <div
            className={cn(
                "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input shadow-none p-4 bg-black border-white/[0.2] hover:border-white/[0.3]  border justify-between flex flex-col  z-50",
                className
            )}
        >

            {typeof header === "string" || header instanceof Object ? (
                <a href={url} target="_blank" className="flex  w-full min-h-fit flex-1 rounded-xl  m-0 p-0 relative">
                    <div className="absolute z-50  w-full h-full rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 opacity-0 hover:opacity-80 hover:backdrop-blur transition-all flex text-sm justify-center items-center">Click to Preview</div>
                    <Image
                        src={header}
                        alt={title?.toString() || "Project image"}
                        className="z-40 border border-white/[0.1] rounded-xl w-full"
                    />
                </a>
            ) : (
                <Skeleton />
            )}

            <div className="group-hover/bento:translate-x-2 transition duration-200">
                <div className="flex justify-start flex-wrap">
                    {url && (
                        <a href={url} target="_blank" rel="Website Output" className="mt-2">
                            <IconAppWindow className="w-7 h-7 p-1 bg-neutral-800 text-xs  text-neutral-400 hover:text-neutral-800 hover:bg-neutral-400 rounded-full  mr-2" />
                        </a>
                    )}
                    {headerUrl && (
                        <a href={headerUrl} target="_blank" rel="Source Code" className="mt-2">
                            <IconBrandGithub className="w-7 h-7 p-1 bg-neutral-800 text-xs  text-neutral-400 hover:text-neutral-800 hover:bg-neutral-400 rounded-full " />
                        </a>
                    )}
                </div>

                <div className="font-bold text-yellow-300 mb-1 mt-2">
                    {title}
                </div>
                <div className="font-normal  text-xs text-neutral-300 ">
                    {description}
                </div>
                <div className="flex justify-start flex-wrap mt-2">
                    {tags && tags.map((tag, index) => (
                        <div key={index} className="mr-1 bg-neutral-900 text-xs text-neutral-500 px-2 py-1 rounded mt-2">
                            {tag}
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};
