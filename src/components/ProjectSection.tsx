import Image from 'next/image'
import collector from "../app/assets/collector.png"
import project from "../app/assets/project.png"
import halfstar from "../app/assets/halfstar.png"

const ProjectSection = () => {
    return (
        <div>
            <div className='w-full min-h-screen bg-black flex sm:flex-row flex-col items-center justify-center relative overflow-hidden' id='projects'>
                <Image
                    src={halfstar}
                    alt='star'
                    className='w-full absolute bottom-0 z-0 animate-flicker'
                />

                <div className='flex justify-end items-center sm:w-[70%] w-full z-50'>
                    <Image
                        src={project}
                        alt='project'
                        className='md:w-[60%] w-[90%]'
                    />
                </div>
                <div className='flex justify-start sm:w-[30%] w-full z-50'>
                    <Image
                        src={collector}
                        alt='collector'
                        className='lg:w-[90%] sm:w-full w-[60%] sm:mx-0 mx-auto'
                    />
                </div>
            </div>

        </div>
    )
}

export default ProjectSection
