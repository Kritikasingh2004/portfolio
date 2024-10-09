import Image from 'next/image'
import bill from "../app/assets/bill.png"
import about from "../app/assets/about.png"

const AboutSection = () => {
    return (
        <div>
            <div className='w-full min-h-screen bg-gradient-to-b from-[#0f0801] to-transparent flex items-center justify-center'>

                <div className='flex justify-center w-full'>
                    <Image
                        src={about}
                        alt='collector'
                        height={500}
                        width={500}
                        className='w-[50%]'
                    />
                </div>
            </div>
            <div className='w-full min-h-screen bg-gradient-to-b from-transparent to-black flex items-center justify-center'>
                <div className='flex justify-end w-[30%]'>
                    <Image
                        src={bill}
                        alt='collector'
                        height={500}
                        width={500}
                        className='w-[90%]'
                    />
                </div>
                <div className='flex justify-center w-[70%]'>
                    <span className='text-black'>Here are some skills I possess.</span>

                </div>
            </div>

        </div>
    )
}

export default AboutSection
