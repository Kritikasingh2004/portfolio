import Image from 'next/image'
import welcome from "../app/assets/message.png"
import card from "../app/assets/mecard.png"
import flickerdown from "../app/assets/flickerdown.png"
import flickMessage from "../app/assets/message_flciker.png"

const HeroSection = () => {
    return (
        <div id='hero' className='w-full min-h-screen flex justify-center items-center relative'>
            <Image
                src={flickerdown}
                alt='flickerdown'
                className='w-full h-fit absolute top-0 -z-0  animate-flicker'
            />
            <div className='w-1/2 flex justify-end z-50 relative'>
                <Image
                    src={welcome}
                    alt='welcome message'
                    height={500}
                    width={500}
                    className=' w-[90%] z-40 '
                />
                <Image
                    src={flickMessage}
                    alt='welcome message'
                    height={500}
                    width={500}
                    className=' w-[90%] z-50 animate-flicker absolute'
                />
            </div>
            <div className='w-1/2 z-50'>
                <Image
                    src={card}
                    alt='My card'
                    height={500}
                    width={500}
                    className='w-[45%] mx-auto z-50 shadow-md rounded-sm'
                />
            </div>
        </div>
    )
}

export default HeroSection
