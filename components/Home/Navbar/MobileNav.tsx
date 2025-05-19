import React from 'react'
import Link from 'next/link'
import { NavLinks } from '@/constant/constant';
import { CgClose } from 'react-icons/cg';

type Props = {
  showNav: boolean;
  closeNav: () => void;
}

const MobileNav = ({closeNav, showNav} : Props) => {

  const navOpen = showNav ? 'translate-x-0' : '-translate-x-[100%]';

  return (
    <div >
      {/* Overlay */}
      <div className={`fixed ${navOpen} inset-0 transform transition-all duration-500 z-[1002] bg-black opacity-70 w-full h-svh`}></div>

      {/* Mobile Navigation Links */}
      <div className={`text-white ${navOpen} fixed justify-center flex flex-col h-full transform transition-all duration-500 
      delay-300 w-[80%] sm:w-[60%] bg-blue-900 space-y-6 z-[1050]`}>
        
        {NavLinks.map((link) => {
          return (
            <Link
              href={link.url}
              key={link.id}
              onClick={closeNav}
            >
              <p className='text-white w-fit text-xl ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]'>{link.label}</p>
            </Link>
          );
        })}

        {/* Cross icon to close the nav bar */}
        <CgClose onClick={closeNav} className='absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6' />
      </div>
    </div>
  )
}

export default MobileNav