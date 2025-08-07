import React from 'react'
import assets from '../assets/user.png'

const About = () => {
    return (
        <div>
            <section id='about' className="bg-[#f4f4f4] flex flex-col md:flex-row gap-12 md:gap-20 justify-center items-center h-auto py-12 md:pb-16 md:my-0 md:h-[23vh] px-[8%] md:pl-[7%] w-full border-b-[1.5px] border-[rgba(0_0_0_/_0.1)]">
                <div className='size-35 rounded-full border border-[rgba(0_0_0_/_0.2)] bg-blue-500'>
                    <img src={assets} alt='user' className='size-full z-50' />
                </div>
                <div>
                    <h2 className="text-[27px] md:text-3xl pl-0 md:pl-4 relative font-medium text-blue-800 mb-6 pb-2.5 md:pb-0 text-center md:text-left after:content-[''] after:absolute after:bottom-[-5px] after:left-1/2 after:md:pb-0 after:md:top-1/2 after:md:left-0 after:size-2 after:border-[rgba(0_0_0_/_0.2)] after:bg-orange-500 after:rounded-full after:-translate-1/2">About me</h2>
                    <p className="text-gray-600 max-w-2xl text-center md:text-left">
                        I am a young developer passionate about the creation of modern and functional web interfaces.
                        Always in learning, I like to take up new technical challenges and give life to my ideas through
                        the code.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default About