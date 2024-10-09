import Image from 'next/image'
import collector from "../app/assets/dark_collector.png"
import star from "../app/assets/starbg.png"
import about from "../app/assets/about.png"

const ProjectSection = () => {
    return (
        <div>
            <div className='w-full min-h-screen bg-gradient-to-b from-black to-[#1b0051] flex items-center justify-center'>
                <div className='flex justify-end w-[40%]'>
                    <Image
                        src={collector}
                        alt='collector'
                        height={500}
                        width={500}
                        className='w-[60%]'
                    />
                </div>
                <div className='flex justify-start w-[60%]'>
                    <Image
                        src={about}
                        alt='project'
                        height={500}
                        width={500}
                        className='w-[70%]'
                    />
                </div>
            </div>
            <div className='w-full min-h-screen  flex items-center justify-center bg-gradient-to-b from-[#1b0051] to-black relative' >
                <Image
                    src={star}
                    alt='star'
                    className='w-full absolute bottom-0 z-0'
                />
                <div className='flex justify-center w-[70%] z-50'>
                    <span className='text-white text-lg'>Here are some skills I possess.</span>

                </div>
            </div>

        </div>
    )
}

export default ProjectSection
