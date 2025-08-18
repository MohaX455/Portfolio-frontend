import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

const App = () => {
    const [success, setSuccess] = useState(false)

    // Disparition auto du popup après 3s
    useEffect(() => {
        if (success) {
            const timer = setTimeout(() => setSuccess(false), 3000)
            return () => clearTimeout(timer)
        }
    }, [success])

    return (
        <div className="font-['Nata Sans'] text-gray-700 relative tracking-wide transition duration-300 scroll-smooth">

            {/* ✅ Popup avec animation descendante */}
            <div className={`
        fixed top-5 left-1/2 transform -translate-x-1/2 z-60 
        transition-all duration-500 ease-in-out
        ${success ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'}
      `}>
                <div className="bg-[#222] w-fit h-[90px] px-6 flex justify-center items-center 
                        border-[1.5px] border-[rgba(255_255_255_/_0.3)] rounded-lg shadow-2xl">
                    <p className="text-white text-center font-medium text-[14px] md:text-[17px] flex items-center justify-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="text-green-400 lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5" /></svg>
                        Message sent successfully!
                    </p>
                </div>
            </div>

            {/* Composants */}
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact setSuccess={setSuccess} />
            <Footer />
        </div>
    )
}

export default App
