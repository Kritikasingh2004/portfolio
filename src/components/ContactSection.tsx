import Image from 'next/image'
import sprig from "../app/assets/sprig.png"

const ContactSection = () => {
    return (
        <div className='w-full min-h-screen bg-black flex items-center justify-center'>
            <div className='flex justify-end w-[40%]'>
                <Image
                    src={sprig}
                    alt='sprig'
                    height={500}
                    width={500}
                    className='w-[60%]'
                />
            </div>
            <div className='flex justify-start w-[60%]'>

            </div>
        </div>
    )
}

export default ContactSection
