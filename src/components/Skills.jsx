import React from 'react'
import htmlPic from '../assets/htmlPic2.png'
import cssPic from '../assets/cssPic.png'
import jsPic from '../assets/jsPic.png'
import reactPic from '../assets/react.svg'

const Skills = () => {
    return (
        <div>
            <section id='skills' className='py-12 px-3 md:px-[10%]'>
                <h2 className="text-[27px] md:text-3xl pl-0 md:pl-4 relative font-medium text-blue-800 mb-6 pb-2.5 text-center w-fit mx-auto after:content-[''] after:absolute after:bottom-[-5px] after:left-1/2 after:-translate-1/2 after:h-1 after:w-10 after:border-[rgba(0_0_0_/_0.2)] after:bg-orange-500 after:rounded-full">Soft skills</h2>
                <p className='text-[15px] px-2 md:px-0 text-center mt-7 font-medium text-[#333] max-w-[300px] md:max-w-[325px] mx-auto'>Human skills that strengthen my technical capacities</p>

                <div className='flex flex-col gap-6 md:gap-10 justify-center items-center md:flex-row max-w-6xl px-14 md:px-0 mx-auto mt-9'>

                    <div className='flex flex-col gap-4 w-full md:max-w-[225px] p-4 rounded-lg transition duration-300 max-lg:hover:scale-[1.04] lg:hover:-translate-y-1 hover:shadow-2xl lg:shadow-2xl'>
                        <div className='flex flex-col justify-center items-center'>
                            <img src={htmlPic} className='size-20' alt="" />
                        </div>
                        <div>
                            <h3 className='text-center font-bold text-xl mb-2 text-black font-[cursive]'>HTML</h3>
                            <p className='text-left'>Je structure le contenu web avec précision, garantissant une base claire.</p>
                        </div>
                    </div>

                    <div className='flex flex-col gap-4 w-full md:max-w-[225px] p-4 rounded-lg transition duration-300 max-lg:hover:scale-[1.04] lg:hover:-translate-y-1 hover:shadow-2xl lg:shadow-2xl'>
                        <div className='flex flex-col justify-center items-center'>
                            <img src={cssPic} className='size-20' alt="" />
                        </div>
                        <div>
                            <h3 className='text-center font-bold text-xl mb-2 text-yellow-600 font-[cursive]'>CSS</h3>
                            <p className='text-left'>J’habille les sites avec des styles élégants.</p>
                        </div>
                    </div>

                    <div className='flex flex-col gap-4 w-full md:max-w-[225px] p-4 rounded-lg transition duration-300 max-lg:hover:scale-[1.04] lg:hover:-translate-y-1 hover:shadow-2xl lg:shadow-2xl'>
                        <div className='flex flex-col justify-center items-center'>
                            <img src={jsPic} className='size-20' alt="" />
                        </div>
                        <div>
                            <h3 className='text-center font-bold text-xl mb-2 text-cyan-700 font-[cursive]'>JAVASCRIPT</h3>
                            <p className='text-left'>J’anime mes projets avec des interactions dynamiques et modernes.</p>
                        </div>
                    </div>

                    <div className='flex flex-col gap-4 w-full md:max-w-[225px] py-4 px-6 rounded-lg transition duration-300 max-lg:hover:scale-[1.04] lg:hover:-translate-y-1 hover:shadow-2xl lg:shadow-2xl'>
                        <div className='flex flex-col justify-center items-center'>
                            <img src={reactPic} className='size-20' alt="" />
                        </div>
                        <div>
                            <h3 className='text-center font-bold text-xl mb-2 text-cyan-400 font-[cursive]'>REACT</h3>
                            <p className='text-left'>Je développe des interfaces réactives et modulaires.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Skills