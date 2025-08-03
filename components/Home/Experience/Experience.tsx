import React from 'react'
import ExperienceCard from './ExperienceCard'

const Experience = () => {
  return (
    <div className='pt-30 pb-20' id='experience'>
        <div className='w-[80%] mx-auto'>

            {/* Section Heading */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
                <div data-aos="fade-right">
                     <h1 className='text-lg sm:text-xl md:text-2xl font-bold text-blue-700 dark:text-pink-500 uppercase'>
                        My Experiences
                    </h1>
                    <h1 className='text-xl sm:text-3xl md:text-4xl mt-1 font-bold'>
                        Base ICT field experience in software development,
                        database management, and system integration.
                    </h1>
                </div>
                <div data-aos="fade-left" className='lg:ml-auto'>
                    <a href='#'
                        className='w-full py-4 text-base sm:text-lg md:text-xl text-center text-white transition-colors
                        font-semibold duration-300 bg-blue-800 rounded-full uppercase hover:bg-blue-950 ease px-9 md:w-auto'>
                        All Experience
                    </a>
                </div>
            </div>

            {/* Services Card */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center mt-16'>
                <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="500">
                    <ExperienceCard
                    image="/images/s1.png"
                    title="Application Leader"
                    />
                </div>
                <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="500">
                    <ExperienceCard
                    image="/images/s2.png"
                    title="Jr. Full Stack Developer"
                    />
                </div>
                <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="500">
                    <ExperienceCard
                    image="/images/s3.png"
                    title="Project Management Intern"
                    />
                </div>
                <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="500">
                    <ExperienceCard
                    image="/images/s4.png"
                    title="Ai and Machine Learning Integration"
                    />
                </div>
                <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="500">
                    <ExperienceCard
                    image="/images/s5.png"
                    title="Android and IOS Development"
                    />
                </div>
                <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="500">
                    <ExperienceCard
                    image="/images/s6.png"
                    title="3D Graphics & Vector Design"
                    />
                </div>
            </div>

        </div>
    </div>
  )
}

export default Experience