import React from 'react'
import { useState, useEffect } from 'react'

const Navbar = () => {

    const [showMobileMenu, setShowMobileMenu] = useState(false);

    // show mobile menu

    const handleOpenMobileMenu = () => {
        setShowMobileMenu(true)
    }

    const handleCloseMobileMenu = () => {
        setShowMobileMenu(false)
    }

    // const mobileLinkClass = ({ isActive }) => {
    //     return isActive ? "text-orange-500 transition duration-300 font-[500] w-fit px-4" : "hover:text-orange-500 transition duration-300";
    // }

    useEffect(() => {
        if (showMobileMenu) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [showMobileMenu])

    console.log('showMobileMenu state :', showMobileMenu)


    return (

        <div>

            {/* Header */}

            <header className="flex justify-center items-center fixed top-0 right-0 w-full z-50 bg-[#fff] border-b-[1.75px] border-[rgba(0_0_0_/_0.2)] h-[9.5vh] text-[#333]">
                <div className="max-w-7xl w-full flex justify-between items-center px-4">
                    <div>
                        <a to="#" className="text-2xl font-medium text-orange-500 mr-1">MohaX</a>
                    </div>
                    <nav className="md:flex hidden gap-8 items-center">
                        <div className="flex gap-8 text-[15x]">
                            <a href="#" className='transition duration-300 hover:text-orange-500' onClick={handleCloseMobileMenu}>Home</a>
                            <a href="#Skills" className='transition duration-300 hover:text-orange-500' onClick={handleCloseMobileMenu}>Skills</a>
                            <a href="#Projects" className='transition duration-300 hover:text-orange-500' onClick={handleCloseMobileMenu}>Projects</a>
                            <a href="#Contact" className='transition duration-300 text-orange-500' onClick={handleCloseMobileMenu}>Contact</a>
                        </div>
                    </nav>
                    <div className="md:hidden flex items-center justify-center cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" className="text-[#777] lucide lucide-align-right-icon lucide-align-right"><path d="M21 12H9" /><path d="M21 18H7" /><path d="M21 6H3" onClick={handleOpenMobileMenu} /></svg>
                    </div>

                </div>
            </header>

            {/* Mobil Menue */}

            <div className={`fixed inset-0 bg-white z-50 flex flex-col justify-center items-center transition-all duration-300 ${showMobileMenu ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
                <div className='flex justify-between md:justify-end items-center absolute md:relative top-[20px] md:top-0 left-0 w-full h-[60px] md:h-0 px-8 md:px-0'>
                    <div className='flex md:hidden'>
                        <a href="#" className="text-3xl font-medium text-orange-500 cursor-pointer">MohaX</a>
                    </div>
                    {/* <span className='absolute top-10 right-8 md:top-8 md:right-8 cursor-pointer text-[18px] text-[#888]'> */}
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            className="stroke-3 size-[25px] md:size-[23px] cursor-pointer text-[#999] lucide lucide-x-icon lucide-x" onClick={handleCloseMobileMenu}>
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                        </svg>
                    </span>
                </div>

                <nav className='flex flex-col w-full justify-between gap-8'>
                    <div className="flex flex-col items-center text-center gap-8 text-[20px]">
                        <a href="#" className='transition duration-300 hover:text-orange-500' onClick={handleCloseMobileMenu}>Home</a>
                        <a href="#About" className='transition duration-300 hover:text-orange-500' onClick={handleCloseMobileMenu}>About</a>
                        <a href="#Skills" className='transition duration-300 hover:text-orange-500' onClick={handleCloseMobileMenu}>Skills</a>
                        <a href="#Projects" className='transition duration-300 hover:text-orange-500' onClick={handleCloseMobileMenu}>Project</a>
                    </div>
                    <div className="h-[1px] w-[70%] m-auto my-8 bg-[rgba(0_0_0_/_0.3)]"></div>
                    <div className='mx-auto'>
                        <a href="#contact"
                            className="px-14 py-3.5 bg-white transition duration-300 text-orange-500 text-[18px] font-medium rounded-full border border-orange-500 cursor-pointer" onClick={handleCloseMobileMenu}>Contact me</a>
                    </div>

                    <div className='absolute bottom-[15px] left-1/2 -translate-1/2 max-w-3xl'>
                        <p className="text-[14.5px] md:text-[13px] text-center text-[rgba(0_0_0_/_0.5)]">&copy; 2025 MohaX. All rights reserved</p>
                    </div>

                </nav>

            </div>

        </div >


    )
}

export default Navbar