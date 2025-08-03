import React from 'react'
import { FaRegFileCode } from 'react-icons/fa'
import { GrBook, GrCodepen, GrDatabase, GrRobot } from 'react-icons/gr'
import Image from 'next/image'

const skill = () => {
  return (
    <div className='pt-30 pb-20' id="skill">
        <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
            {/* Text Content */}
            <div>
                {/* Subheading */}
                <p className='text-sm sm:text-base md:text-xl font-bold text-blue-700 dark:text-pink-500 uppercase'>
                    my skills
                </p>
                {/* Heading */}
                <h1 className='text-2xl md:text-3xl lg:text-5xl mt-3 font-bold leading-[1.8rem] md:leading-[3rem]'>
                    Knowledge and Experience base
                </h1>
                 {/* Line */}
                <div className='mt-8 mb-8 w-full h-[1px] bg-gray-200 dark:bg-gray-700'></div>

                {/* List Type of Feature */}
                <div className='sm:flex space-y-3 sm:space-y-0 items-center gap-6 mt-8 mb-8'>
                    <div className='flex items-center w-16 h-16 outline-2 outline-gray-200 dark:outline-gray-700
                    rounded-full flex-col justify-center'>
                        <FaRegFileCode className='w-8 h-8 text-blue-600'/>
                    </div>
                    <div className='flex-1'>
                        <h1 className='text-xl font-bold'>Debugging and Programming</h1>
                        <p className='mt-2 text-gray-800 dark:text-gray-300 w-[70%]'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Inventore iusto animi maxime numquam nostrum laboriosam officiis unde rerum, ea saepe?
                        </p>
                    </div>
                </div>

                {/* 2nd item */}
                <div className='sm:flex space-y-3 sm:space-y-0 items-center gap-6 mt-8 mb-8'>
                    <div className='flex items-center w-16 h-16 outline-2 outline-gray-200 dark:outline-gray-700
                    rounded-full flex-col justify-center'>
                        <GrDatabase className='w-8 h-8 text-blue-600'/>
                    </div>
                    <div className='flex-1'>
                        <h1 className='text-xl font-bold'>Queries and Version Control</h1>
                        <p className='mt-2 text-gray-800 dark:text-gray-300 w-[70%]'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Inventore iusto animi maxime numquam nostrum laboriosam officiis unde rerum, ea saepe?
                        </p>
                    </div>
                </div>

                {/* 3rd item */}
                <div className='sm:flex space-y-3 sm:space-y-0 items-center gap-6 mt-8 mb-8'>
                    <div className='flex items-center w-16 h-16 outline-2 outline-gray-200 dark:outline-gray-700
                    rounded-full flex-col justify-center'>
                        <GrBook className='w-8 h-8 text-blue-600'/>
                    </div>
                    <div className='flex-1'>
                        <h1 className='text-xl font-bold'>DSA and OOP</h1>
                        <p className='mt-2 text-gray-800 dark:text-gray-300 w-[70%]'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Inventore iusto animi maxime numquam nostrum laboriosam officiis unde rerum, ea saepe?
                        </p>
                    </div>
                </div>

                  {/* 4th item */}
                <div className='sm:flex space-y-3 sm:space-y-0 items-center gap-6 mt-8 mb-8'>
                    <div className='flex items-center w-16 h-16 outline-2 outline-gray-200 dark:outline-gray-700
                    rounded-full flex-col justify-center'>
                        <GrCodepen className='w-8 h-8 text-blue-600'/>
                    </div>
                    <div className='flex-1'>
                        <h1 className='text-xl font-bold'>Web Development</h1>
                        <p className='mt-2 text-gray-800 dark:text-gray-300 w-[70%]'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Inventore iusto animi maxime numquam nostrum laboriosam officiis unde rerum, ea saepe?
                        </p>
                    </div>
                </div>

                 {/* 5th item */}
                <div className='sm:flex space-y-3 sm:space-y-0 items-center gap-6 mt-8 mb-8'>
                    <div className='flex items-center w-16 h-16 outline-2 outline-gray-200 dark:outline-gray-700
                    rounded-full flex-col justify-center'>
                        <GrRobot className='w-8 h-8 text-blue-600'/>
                    </div>
                    <div className='flex-1'>
                        <h1 className='text-xl font-bold'>Embedded Systems & Networking</h1>
                        <p className='mt-2 text-gray-800 dark:text-gray-300 w-[70%]'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Inventore iusto animi maxime numquam nostrum laboriosam officiis unde rerum, ea saepe?
                        </p>
                    </div>
                </div>
            </div>

            {/* Image Content */}
            <div data-aos="zoom-out-left" data-aos-delay="400">
                <Image 
                    src="/images/wc.png"
                    alt="image" 
                    width={700} 
                    height={700} 
                    />
            </div>
        </div>
    </div>
  )
}

export default skill