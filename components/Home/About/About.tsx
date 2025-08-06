import React from 'react'
import Image from 'next/image';

const About = () => {
  return (
    <div className='pt-15 pb-15' id="about">
        <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
            {/* Image Content */}
            <div data-aos="zoom-in-down" data-aos-delay="200">
                <Image src="/images/about.png" alt="image" width={700} height={700} />
            </div>
            {/* Text Content */}
            <div>
                <p className='text-sm sm:text-base md:text-xl font-bold text-blue-700 dark:text-pink-500 uppercase'>
                    About Me
                </p>
                <h1 className='text-2xl md:text-3xl lg:text-5xl mt-3 font-bold leading-[1.8rem] md:leading-[3rem]'>
                    I am a Certified Computer Engineer working as an Application Leader at KCC Malls Property Holdings Inc.
                </h1>
                <p className='mt-3 text-gray-700 dark:text-gray-300'>
                    As an Application Lead, 
                    Ive gained extensive experience in managing SQL queries to support end users and ensure seamless operations. 
                    I also contribute to developing and enhancing system features to improve usability and overall user experience. 
                    Additionally, I gain a lot of knowledge in the business processes of the company, which allows me to provide valuable insights and recommendations for system improvements.
                </p>
                <div className='mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 items-center'>
                    <div className='flex items-center gap-4'>
                        <Image src="/images/a1.png" alt="icon" width={50} height={50}/>
                        <h1 className='text-lg sm:text-xl font-bold leading-5'>
                            Application Performance Optimization
                        </h1>
                    </div>
                    <div className='flex items-center gap-4'>
                        <Image src="/images/a2.png" alt="icon" width={50} height={50}/>
                        <h1 className='text-lg sm:text-xl font-bold leading-5'>
                            Database Management <br/>PL/SQL
                        </h1>
                    </div>
                    <div className='flex items-center gap-4'>
                        <Image src="/images/a3.png" alt="icon" width={50} height={50}/>
                        <h1 className='text-lg sm:text-xl font-bold leading-5'>
                            Custom Software <br/> Development
                        </h1>
                    </div>
                    <div className='flex items-center gap-4'>
                        <Image src="/images/a4.png" alt="icon" width={50} height={50}/>
                        <h1 className='text-lg sm:text-xl font-bold leading-5'>
                            Instant Supports <br/> any Queries
                        </h1>
                    </div>
                </div>
                <div className="mt-12">
                    <a href='#'
                        className='w-full py-4 text-base text-center text-white transition-colors
                        font-semibold duration-300 bg-blue-800 rounded-full uppercase hover:bg-blue-950 ease px-9 md:w-auto'>
                        About More
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About