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

            <div className={`fixed inset-0 bg-white z-50 flex flex-col transition-all duration-300 ${showMobileMenu ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
                <div className='bg-green flex justify-between md:justify-end items-center sticky md:relative top-[20px] md:top-0 left-0 w-full h-[100px] md:h-0 px-8 md:px-0'>
                    <div className='flex md:hidden'>
                        <a href="#" className="text-[22px] font-medium text-orange-500 cursor-pointer">MohaX</a>
                    </div>
                    {/* <span className='absolute top-10 right-8 md:top-8 md:right-8 cursor-pointer text-[18px] text-[#888]'> */}
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            className="stroke-2 size-[23px] cursor-pointer text-[#999] lucide lucide-x-icon lucide-x" onClick={handleCloseMobileMenu}>
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                        </svg>
                    </span>
                </div>

                <nav className='flex flex-col w-full justify-between gap-8 h-fit'>
                    <div className="h-[1px] w-[90%] m-auto my-8 bg-[rgba(0_0_0_/_0.3)]"></div>
                    <div className="flex flex-col gap-8 text-[16px] pl-15">
                        <a href="#" className='flex items-center gap-2 transition duration-300 hover:text-orange-500' onClick={handleCloseMobileMenu}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-house-icon lucide-house"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" /><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>
                            Home
                        </a>
                        <a href="#About" className='flex items-center gap-2 transition duration-300 hover:text-orange-500' onClick={handleCloseMobileMenu}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                            About
                        </a>
                        <a href="#Skills" className='flex items-center gap-2 transition duration-300 hover:text-orange-500' onClick={handleCloseMobileMenu}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cpu-icon lucide-cpu"><path d="M12 20v2" /><path d="M12 2v2" /><path d="M17 20v2" /><path d="M17 2v2" /><path d="M2 12h2" /><path d="M2 17h2" /><path d="M2 7h2" /><path d="M20 12h2" /><path d="M20 17h2" /><path d="M20 7h2" /><path d="M7 20v2" /><path d="M7 2v2" /><rect x="4" y="4" width="16" height="16" rx="2" /><rect x="8" y="8" width="8" height="8" rx="1" /></svg>
                            Skills
                        </a>
                        <a href="#Projects" className='flex items-center gap-2 transition duration-300 hover:text-orange-500' onClick={handleCloseMobileMenu}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-folder-open-icon lucide-folder-open"><path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2" /></svg>
                            Project
                        </a>
                    </div>
                    <div className="h-[1px] w-[90%] m-auto my-8 bg-[rgba(0_0_0_/_0.3)]"></div>
                    <div className='mx-auto'>
                        <a href="#Contact"
                            className="flex flex-row-reverse gap-2 justify-center items-center px-16 py-3.5 bg-white transition-all duration-500 text-orange-500 text-[16px] font-medium rounded-md hover:rounded-full border border-orange-500 cursor-pointer" onClick={handleCloseMobileMenu}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rocket-icon lucide-rocket"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" /></svg>
                            Contact me
                        </a>
                    </div>

                    {/* <div className='absolute bottom-[15px] left-1/2 -translate-1/2 max-w-3xl'>
                        <p className="text-[14.5px] md:text-[13px] text-center text-[rgba(0_0_0_/_0.5)]">&copy; 2025 MohaX. All rights reserved</p>
                    </div> */}

                </nav>

            </div>

        </div >


    )
}

export default Navbar
