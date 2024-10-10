import Image from 'next/image'
import darkbill from "../app/assets/evilbill.jpg"
import about from "../app/assets/about.png"
import { SkillPreview } from './ui/SkillPreview'

const AboutSection = () => {
    return (
        <div>
            <div className='w-full min-h-screen  flex items-center justify-center'>

                <div className='flex justify-center w-full'>
                    <div className='flex flex-col w-1/2'>
                        <Image
                            src={about}
                            alt='collector'
                            className='w-[60%]'
                        />
                        <p className='px-6'>
                            Hi im me and Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nesciunt sunt laudantium earum! Incidunt fuga doloribus nobis amet aliquid corrupti numquam error modi culpa.
                        </p>
                    </div>
                </div>
            </div>
            <div className='w-full min-h-screen  flex items-center justify-between'>
                <div className='flex justify-end w-[30%]'>
                    <Image
                        src={darkbill}
                        alt='collector'
                        className='w-[100%]'
                    />
                </div>
                <div className='flex flex-col items-center justify-center w-[65%]'>
                    <SkillPreview />
                </div>
            </div>

        </div>
    )
}

export default AboutSection
