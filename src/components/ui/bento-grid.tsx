import { cn } from "@/lib/utils";
import { IconAppWindow, IconBrandGithub } from "@tabler/icons-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

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
        "grid md:auto-rows-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-7xl mx-auto z-50 w-[90%]",
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
  headerUrl,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: string | StaticImageData;
  tags?: string[];
  url?: string;
  headerUrl?: string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl  group/bento hover:shadow-[0_0_10px_rgba(253,224,71,1)] transition duration-200 shadow-input shadow-none p-4 bg-black border-yellow-300  border justify-between flex flex-col  z-50",
        className
      )}
    >
      {typeof header === "string" || header instanceof Object ? (
        <Link
          href={url || "#"}
          target="_blank"
          className="flex  w-full min-h-fit flex-1 rounded-xl  m-0 p-0 relative"
        >
          <div className="absolute z-50  w-full h-full rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 opacity-0 hover:opacity-80 hover:backdrop-blur transition-all flex text-sm justify-center items-center">
            Click to Preview
          </div>
          <Image
            src={header}
            alt={title?.toString() || "Project image"}
            className="z-40 border border-white/[0.1] rounded-xl w-full"
            width={1920}
            height={1080}
          />
        </Link>
      ) : (
        <Skeleton />
      )}

      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div className="flex justify-between items-center mt-5 mb-2">
          <div className="font-bold text-yellow-300 text-xl">{title}</div>

          <div className="flex items-center">
            {url && (
              <Link href={url} target="_blank" rel="Website Output">
                <IconAppWindow className="w-7 h-7 p-1 bg-neutral-900 hover:text-yellow-300 rounded-full  mr-2" />
              </Link>
            )}
            {headerUrl && (
              <Link href={headerUrl} target="_blank" rel="Source Code">
                <IconBrandGithub className="w-7 h-7 p-1 bg-neutral-900 hover:text-yellow-300 rounded-full " />
              </Link>
            )}
          </div>
        </div>
        <div className="font-medium">{description}</div>
        <div className="flex justify-start flex-wrap mt-2">
          {tags &&
            tags.map((tag, index) => (
              <div
                key={index}
                className="mr-1 border border-neutral-400 text-xs font-medium text-neutral-400 px-2 py-1 rounded-xl mt-2"
              >
                {tag}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
