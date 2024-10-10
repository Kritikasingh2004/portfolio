import Image from 'next/image'
import darkbill from "../app/assets/evilbill.jpg"
import about from "../app/assets/about.png"
import aboutbg from "../app/assets/aboutbg.jpg"
import { SkillPreview } from './ui/SkillPreview'

const AboutSection = () => {
    return (
        <div id='about'>
            <div className='w-full min-h-screen  flex items-center justify-center relative overflow-hidden'>
                <Image
                    src={aboutbg}
                    alt='bg image'
                    className='w-full absolute z-0 '
                />

                <div className='flex justify-center w-full z-20 '>
                    <div className='flex flex-col w-1/2'>

                        <Image
                            src={about}
                            alt='about'
                            className='w-[60%]'
                        />
                        <p className='px-6 text-yellow-300'>
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
