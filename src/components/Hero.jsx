import React from 'react'

const Hero = () => {
  return (
    <div className='overflow-hidden lg:relative'>
      <div
        className='flex items-center justify-center lg:h-[700px] md:h-[448px] sm:h-[220px] bg-cover bg-center'
        style={{ backgroundImage: 'url("./Hero Image.png")' }}
      ></div>
      <div
        className='text-center lg:absolute lg:w-[630px] lg:h-[306px] sm:w-full bg-darkColor pl-5 py-10 pr-8 gap-10 top-80 left-20'
        style={{
          background:
            'linear-gradient(256.73deg, #1CBDDD 27.86%, #4DCA79 100%)',
        }}
      >
        <h1 className='md:text-5xl sm:text-4xl font-bold text-white lg:leading-[48px] sm:leading-[36px] font-inter capitalize text-start'>
          We crush your competitors, goals, and sales records - without the B.S.
        </h1>
        <button className='text-white text-sm font-inter px-4 py-2.5 mt-4 rounded-[4px] flex justify-start uppercase leading-4 bg-secondaryColor'>
          Get free consultation
        </button>
      </div>
    </div>
  )
}

export default Hero
