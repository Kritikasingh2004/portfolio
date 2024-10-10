import Image from 'next/image'
import sprig from "../app/assets/sprig.png"

const ContactSection = () => {
    return (
        <div className='w-full min-h-screen bg-black flex items-center justify-center' id='resume'>
            <div className='flex justify-end w-[30%]'>
                <Image
                    src={sprig}
                    alt='sprig'
                    className='w-[70%]'
                />
            </div>
            <div className='flex justify-evenly items-center w-[70%] flex-col min-h-44'>
                <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
                    Hi Download my resume!
                </h2>
                <button className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border hover:border-white hover:text-white  rounded-lg font-bold transform hover:-translate-y-1 transition duration-400 text-yellow-300 border-yellow-300">
                    Resume Here
                </button>
            </div>
        </div>
    )
}

export default ContactSection
