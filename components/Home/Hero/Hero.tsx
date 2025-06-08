import React from 'react'
import { FaFacebookSquare, FaGithubSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa'

const Hero = () => {
  return (
    <div className='relative bg-slate-800 w-full h-screen flex justify-center flex-col' id="hero">
        <div className='w-[90%] md:w-[80%] mx-auto items-center grid grid-cols-1 xl:grid-cols-2 gap-10 '>

            {/* Text Content */}
            <div data-aos="fade-right" data-aos-delay="500">
                {/* Subheading */}
                <p className='text-sm sm:text-base md:text-xl font-bold text-white'>
                    Hi! I'm Engr. Andrian Gultiano from the Philippines <span className='animate-pulse'>👋</span>
                </p>

                {/* Heading */}
                <h1 className='text-4xl md:text-5xl lg:text-7xl mt-6 mb-6 font-bold text-white leading-[2.5rem] md:leading-[4rem]'>
                    Full-Stack Web Developer and Future {" "}<span className='text-yellow-300'>Software Engineer</span>
                </h1>

                {/* Description */}
                <p className='text-sm sm:text-base md:text-lg font-medium text-gray-300'>
                    I'm a simple guy who loves playing Dota and diving into the world of technology. 
                    Always eager to learn and grow, I enjoy sharing knowledge and connecting with like-minded enthusiasts.
                </p>

                {/* Button */}
                <a href="#"
                    className='relative inline-flex mt-8 items-center justify-start px-6 py-3 overflow-hidden font-medium 
                                transition-all bg-white rounded hover:bg-white group'>
                        <span className='w-48 h-48 rounded rotate-[-40deg] bg-slate-700 absolute bottom-0 left-0 -translate-x-full ease-out duration-500
                        transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0'></span>

                        <span className='relative w-full text-left font-bold text-black transition-colors duration-300 ease-in-out group-hover:text-yellow-300'>
                            Discover More
                        </span>
                </a>
            </div>

            {/* Image Content */}
            <div className='mx-auto flex items-center gap-20'>

                <div className='relative hidden lg:block w-[500px] h-[500px] rounded-full bg-gradient-to-br from-slate-400 via-slate-500 to-slate-600 p-2' data-aos="zoom-in" data-aos-delay="500">
                     {/* Emoji Decorations */}
                    <span className='absolute top-0 right-[5%] text-5xl animate-bounce z-10'><span className='text-black text-sm font-extrabold z-10 bg-white p-2'>Welcome</span>😎</span>
                    <img src="/images/andri.png" alt="Hero Image" width={500} height={500} className='w-full h-full object-cover rounded-full border-4 border-slate-600 hover:scale-105 transition-transform duration-300' />
                </div>

                 {/* Social Accounts */}
                <div className='flex flex-row lg:flex-col justify-center items-baseline gap-6' data-aos="fade-left" data-aos-delay="500">
                    <a href="https://github.com/mujakzs" target="_blank" rel="noopener noreferrer">
                        <FaGithubSquare className='icon' />
                    </a>
                    <a href='https://www.linkedin.com/in/andrian4/' target="_blank" rel="noopener noreferrer"> 
                        <FaLinkedin className='icon'/> 
                    </a>
                    <a href='https://www.facebook.com/mujakz ' target="_blank" rel="noopener noreferrer">
                        <FaFacebookSquare className='icon'/>
                    </a>
                    <a href='https://www.instagram.com/mujakz/' target="_blank" rel="noopener noreferrer">
                        <FaInstagramSquare className='icon'/>
                    </a>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Hero