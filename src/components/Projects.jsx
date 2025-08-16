import React from 'react'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'

const Projects = () => {
    return (
        <div>
            <section id='Projects' className='pt-6 pb-12 px-3 md:px-[10%] bg-[#111] text-[#fff]'>
                <h2 className="text-[27px] md:text-3xl pl-0 md:pl-4 relative font-medium text-blue-400 mb-6 pb-2.5 text-center w-fit mx-auto after:content-[''] after:absolute after:bottom-[-5px] after:left-1/2 after:-translate-1/2 after:h-1 after:w-10 after:border-[rgba(0_0_0_/_0.2)] after:bg-orange-500 after:rounded-full">Projects</h2>
                <p className='text-[15px] px-2 md:px-0 text-center mt-7 font-medium max-w-[300px] md:max-w-[325px] mx-auto text-[rgba(255_255_255_/_0.75)]'>Here are some of my projects i have worked on</p>

                <div className='mt-9 flex flex-col md:flex-row px-6 md:px-0 gap-8 md:row-gap-16 justify-between'>
                    <div className='h-full'>
                        <div className=''>
                            <img src={project1} alt="" className='border-[1px] border-[rgba(255_255_255_/_0.3)] rounded-md' />
                        </div>
                        <div className='py-6 px-4'>
                            <h3 className='font-medium text-[20px] pb-2'>Flavora</h3>
                            <p className='text-[rgba(255_255_255_/_0.75)]'>A modern interface for a meal control platform, with integration of a mobile payment system.</p>
                        </div>
                    </div>

                    <div className='h-full'>
                        <div>
                            <img src={project2} alt="" className='border-[1px] border-[rgba(255_255_255_/_0.3)] rounded-md' />
                        </div>
                        <div className='py-6 px-4'>
                            <h3 className='font-medium text-[20px] pb-2'>Water Engineering Sarl</h3>
                            <p className='text-[rgba(255_255_255_/_0.75)]'>Website for an SME specializing in hydraulics, with secure services and authentication page.</p>
                        </div>
                    </div>

                    <div className='h-full'>
                        <div>
                            <img src={project3} alt="" className='border-[1px] border-[rgba(255_255_255_/_0.3)] rounded-md' />
                        </div>
                        <div className='py-6 px-4'>
                            <h3 className='font-medium text-[20px] pb-2'>Real Estate</h3>
                            <p className='text-[rgba(255_255_255_/_0.75)]'>Responsive real estate platform with development of goods and navigation.</p>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Projects