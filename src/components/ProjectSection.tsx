import Image from 'next/image'
import collector from "../app/assets/collector.png"
import project from "../app/assets/project.png"
import halfstar from "../app/assets/halfstar.png"

const ProjectSection = () => {
    return (
        <div>
            <div className='w-full min-h-screen bg-black flex items-center justify-center relative overflow-hidden' id='projects'>
                <Image
                    src={halfstar}
                    alt='star'
                    className='w-full absolute bottom-0 z-0 animate-pulse'
                />

                <div className='flex justify-end items-center w-[70%] z-50'>
                    <Image
                        src={project}
                        alt='project'
                        className='w-[60%]'
                    />
                </div>
                <div className='flex justify-start w-[30%] z-50'>
                    <Image
                        src={collector}
                        alt='collector'
                        className='w-[90%]'
                    />
                </div>
            </div>

        </div>
    )
}

export default ProjectSection
