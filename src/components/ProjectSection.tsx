import Image from "next/image";

const ProjectSection = () => {
  return (
    <div>
      <div
        className="w-full min-h-screen bg-black flex sm:flex-row flex-col items-center justify-center relative "
        id="projects"
      >
        <Image
          src="/assets/halfstar.png"
          alt="star"
          className="w-full absolute bottom-0 z-0 animate-flicker"
          width={1920}
          height={1080}
        />

        <div className="flex sm:justify-end justify-center items-center sm:w-[70%] w-full z-50">
          <Image
            src="/assets/project.png"
            alt="project"
            className="md:w-[60%] w-full"
            width={1024}
            height={313}
          />
        </div>
        <div className="flex sm:justify-start justify-center sm:w-[30%] w-full z-50">
          <Image
            src="/assets/collector.png"
            alt="collector"
            className="sm:w-full w-[60%] sm:mx-0 mx-auto"
            width={591}
            height={1053}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
