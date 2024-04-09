/* eslint-disable react/no-unescaped-entities */
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-primaryColor'>
      <footer className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 sm:gap-14 pl-10 py-12 pr-5'>
        <div className='sm:col-span-1 md:col-span-2 space-y-4'>
          <img src='./Logo.png' alt='Logo' className='w-[245px] h-[30px]' />
          <p className='text-white text-lg leading-6 lg:w-[413px] sm:w-[335px] font-lato font-normal'>
            Your goal is our target. Not anything in between. We use online
            marketing platforms and tools to achieve single objective - your
            business results.
          </p>
        </div>
        <div>
          <nav className='flex flex-col text-white font-inter gap-3'>
            <header className='text-xl font-semibold leading-6'>
              Our Technologies
            </header>
            <a className='text-lg leading-5'>ReactJS</a>
            <a className='text-lg leading-5'>Gatsby</a>
            <a className='text-lg leading-5'>NextJS</a>
            <a className='text-lg leading-5'>NodeJS</a>
          </nav>
        </div>
        <div>
          <nav className='flex flex-col text-white font-inter gap-3'>
            <header className='text-xl font-semibold leading-6'>
              Our Services
            </header>
            <a className='text-lg leading-5'>Social media Marketing</a>
            <a className='text-lg leading-5 lg:w-[197px]'>
              Web & Mobile App Development
            </a>
            <a className='text-lg leading-5'>Data & Analytics</a>
          </nav>
        </div>
      </footer>
      <footer>
        <hr className='w-[630px] sm:w-[335px] flex justify-center mx-auto items-center' />
        <p className='text-center text-white text-base leading-4 p-4 font-inter'>
          Privacy Policy | Terms & Conditions
        </p>
      </footer>
    </div>
  )
}

export default Footer
