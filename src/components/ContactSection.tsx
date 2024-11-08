import Image from 'next/image'
import sprig from "../app/assets/sprig.png"

const ContactSection = () => {
    return (
        <div className='w-full min-h-screen bg-black flex sm:flex-row flex-col items-center justify-center' id='resume'>
            <div className='flex justify-end md:w-[30%] sm:w-[50%] w-full'>
                <Image
                    src={sprig}
                    alt='sprig'
                    className='lg:w-[70%] sm:w-full w-[60%] sm:mx-0 mx-auto'
                />
            </div>
            <div className='flex justify-evenly items-center md:w-[70%] sm:w-[50%] w-full flex-col min-h-44'>
                <h2 className="md:max-w-7xl w-full text-center pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-200 font-sans">
                    Hi Download my resume!
                </h2>
                <a href="/resume.pdf" download="resume" className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border hover:border-white hover:text-white  rounded-lg font-bold transform hover:-translate-y-1 transition duration-400 text-yellow-300 border-yellow-300">
                    Resume Here
                </a>
            </div>
        </div>
    )
}

export default ContactSection
