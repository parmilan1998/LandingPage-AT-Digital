import React, { useState } from 'react'
import { LuMenu } from 'react-icons/lu'
import { IoClose } from 'react-icons/io5'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div>
      <nav className='bg-primaryColor py-6 lg:px-20 sm:px-6 flex flex-row items-center justify-between'>
        <img
          src='./Logo.png'
          alt='Logo'
          className='h-8 w-[238px] flex items-center justify-center'
        />
        <div className='flex items-center'>
          <div className='hidden md:block'>
            <a
              href='#'
              className='text-white uppercase text-sm font-normal font-inter leading-4 tracking-wider px-4'
            >
              Services
            </a>
            <a
              href='#'
              className='text-white uppercase text-sm font-normal font-inter leading-4 tracking-wider px-4'
            >
              About Us
            </a>
            <a
              href='#'
              className='text-white uppercase text-sm font-normal font-inter leading-4 tracking-wider px-4'
            >
              Contact Us
            </a>
            <a
              href='#'
              className='text-white uppercase text-sm font-normal font-inter leading-4 tracking-wider px-4'
            >
              Career
            </a>
          </div>
          <div className='block md:hidden'>
            <button
              onClick={toggleMenu}
              className='text-white px-3 py-2 focus:outline-none'
            >
              {!isOpen ? (
                <LuMenu
                  size={32}
                  color='white'
                  className='mt-1.5'
                  onClick={toggleMenu}
                />
              ) : null}
            </button>
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className='md:hidden bg-white h-[812px] absolute w-full top-0 px-4 py-5'>
          <div className='flex justify-between'>
            <a
              href='#'
              className='block text-black px-3 py-2 uppercase text-base font-semibold hover:text-primaryColor duration-200 ease-in hover:font-bold'
            >
              Home
            </a>
            {isOpen ? (
              <IoClose size={32} color='black' onClick={toggleMenu} />
            ) : null}
          </div>
          <a
            href='#'
            className='block text-black px-3 py-2 uppercase text-base font-semibold hover:text-primaryColor duration-200 ease-in hover:font-bold'
          >
            Services
          </a>
          <a
            href='#'
            className='block text-black px-3 py-2 uppercase text-base font-semibold hover:text-primaryColor duration-200 ease-in hover:font-bold'
          >
            About Us
          </a>
          <a
            href='#'
            className='block text-black px-3 py-2 uppercase text-base font-semibold hover:text-primaryColor duration-200 ease-in hover:font-bold'
          >
            Contact Us
          </a>
          <a
            href='#'
            className='block text-black px-3 py-2 uppercase text-base font-semibold hover:text-primaryColor duration-200 ease-in hover:font-bold'
          >
            Career
          </a>
        </div>
      )}
    </div>
  )
}

export default Header
