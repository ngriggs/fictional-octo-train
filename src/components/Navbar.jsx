import { useState } from 'react'

import { close, logo, menu } from '../assets'

import { navLinks } from '../constants'

import Headroom from 'react-headroom'
import Logo from './Logo'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <Headroom>
      <header className='bg-secondary text-white h-[87px]'>
        <div className='flex justify-between items-center p-2'>
          <div>
            <Logo />
          </div>
          <div>
            <ul className='list-none sm:flex hidden justify-end items-center'>
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-normal cursor-pointer text-[16px] hover:text-black  ${
                    index === navLinks.length - 1 ? 'mr-0' : 'mr-10'
                  }`}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className='sm:hidden flex flex-1 justify-end items-center'>
            <img
              src={toggle ? close : menu}
              alt='menu'
              className='w-[28px] h-[28px] object-contain'
              onClick={() => setToggle(prev => !prev)}
            />
            <div
              className={`${
                toggle ? 'flex' : 'hidden'
              } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
            >
              <ul className='list-none flex-col justify-end items-center flex-1'>
                {navLinks.map((nav, index) => (
                  <li
                    key={nav.id}
                    className={`font-poppins font-normal cursor-pointer text-[16px]  ${
                      index === navLinks.length - 1 ? 'mr-0' : 'mb-4'
                    }`}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </header>
    </Headroom>
  )
}

export default Navbar
