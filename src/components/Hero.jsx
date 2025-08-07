import React from 'react'
import assets from '../assets/HeroImage.png'
import pic1 from '../assets/pic1.jpg'
import pic2 from '../assets/pic2.jpg'
import pic3 from '../assets/pic3.jpg'

const Hero = () => {
    return (
        <div>
            <section className="flex items-center h-[60vh] mt-[9.5vh] w-full md:h-[67.5vh] bg-cover bg-no-repeat bg-center text-white" style={{ backgroundImage: `url(${pic2})` }}>
                <div className="backdrop-blur-[5px] bg-[rgba(0_0_0_/_0.3)] px-[10%]  h-full w-full flex md:flex-row justify-start items-center">
                    <div className='md:w-[50%] flex flex-col gap-10 md:gap-8'>

                        <div>
                            <h1 className="text-3xl md:text-4xl font-medium mb-5 tracking-normal leading-9">Transform your ideas into concrete achievements</h1>
                            <p className="text-[16px] md:text-[18px] leading-7">Access tools, resources and advice for
                                improve your
                                <br />performance and reach your full potential
                            </p>
                        </div>

                        <div className="flex gap-5 items-center">
                            <a href='#contact'
                                className="flex justify-center items-center gap-1 px-4 py-2.5 bg-orange-600 text-[15px] hover:bg-orange-700 transition duration-300 font-medium cursor-pointer rounded-sm">Get
                                started
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                    className="lucide lucide-arrow-up-right-icon lucide-arrow-up-right">
                                    <path d="M7 7h10v10" />
                                    <path d="M7 17 17 7" />
                                </svg>
                            </a>
                            <a href='#projects' className="flex gap-1 px-4 py-2.5 bg-red-600 text-[15px] hover:bg-red-700 transition duration-300 font-medium cursor-pointer rounded-sm">
                                My projects
                            </a>
                        </div>
                    </div>
                    <div className='md:w-[50%] md:h-[80%] hidden md:flex justify-center items-center'>
                        <img src={assets} alt='computer' className='size-full' />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero