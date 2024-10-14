import Image from 'next/image'
import welcome from "../app/assets/message.png"
import card from "../app/assets/mecard.png"
import flickMessage from "../app/assets/message_flciker.png"

const HeroSection = () => {
    return (
        <div id='hero' className='w-full min-h-screen flex md:flex-row flex-col justify-center items-center relative'>

            <div className='lg:w-1/2 md:w-[60%] sm:h-auto min-h-full w-full flex md:justify-end justify-center items-center z-40 relative sm:mt-0 mt-11'>
                <Image
                    src={welcome}
                    alt='welcome message'
                    className=' lg:w-[90%] md:w-[97%] w-full z-40 '
                />
                <Image
                    src={flickMessage}
                    alt='welcome message'
                    className=' w-[90%] z-50 animate-flicker absolute'
                />
            </div>
            <div className='lg:w-1/2 md:w-[40%] sm:h-auto h-screen w-full z-50'>
                <Image
                    src={card}
                    alt='My card'
                    height={500}
                    width={500}
                    className='lg:w-[45%] md:w-[70%] w-[75%] mx-auto z-50 shadow-md rounded-sm'
                />
            </div>
        </div>
    )
}

export default HeroSection
