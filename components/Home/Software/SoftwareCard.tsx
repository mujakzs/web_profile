import React from 'react'
import Image from 'next/image'

type Props = {
  icon: string
  title: string
}

const SoftwareCard = ({icon, title} : Props) => {
  return (
    <div className='bg-green-100 dark:bg-gray-800 p-6 rounded-lg'>
        <Image src={icon} alt="Icon" width={50} height={50}/>
        <h1 className='text-xl font-bold mt-6'>{title}</h1>
        <p className='mt-3 text-gray-800 dark:text-gray-300 font-medium'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Inventore iusto animi maxime numquam nostrum laboriosam officiis unde rerum, ea saepe?
        </p>
        <button className='px-6 py-1.5 rounded-full bg-blue-800 mt-4 font-bold hover:bg-blue-950 transition-all duration-200 cursor-pointer text-white'>
            Learn More
        </button>
    </div>
  )
}

export default SoftwareCard