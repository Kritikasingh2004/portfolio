import Image from "next/image";
import Link from "next/link";

const ContactSection = () => {
  return (
    <div
      className="w-full min-h-screen bg-black flex md:flex-row flex-col items-center justify-center"
      id="resume"
    >
      <div className="flex justify-end md:w-[42%] w-full">
        <Image
          src="/assets/sprig.png"
          alt="sprig"
          className="lg:w-[75%] md:w-[80%] w-[60%] md:mx-0 mx-auto"
          width={627}
          height={1079}
        />
      </div>
      <div className=" flex justify-evenly md:items-start items-center md:w-[55%] w-full flex-col overflow-hidden">
        <span className="text-5xl md:text-[4rem] lg:text-[6rem] font-bold mt-1 leading-none text-white md:text-left text-center">
          Hi, <span className="text-yellow-300">Download</span> My Resume!
        </span>
        <Link
          href="/resume.pdf"
          download="resume"
          className="hover:shadow-[0_0_10px_rgba(253,224,71,1)] px-6 py-2 mt-5 ml-3 bg-transparent border  rounded-lg font-bold text-xl transform hover:-translate-y-1 transition duration-400 text-yellow-300 border-yellow-300"
        >
          Resume Here
        </Link>
      </div>
    </div>
  );
};

export default ContactSection;
