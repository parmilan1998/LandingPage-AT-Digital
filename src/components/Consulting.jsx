import React from 'react'

const Consulting = () => {
  return (
    <div className='flex md:flex-row flex-col-reverse justify-center items-center gap-8 md:my-16 my-8  md:mx-10'>
      <div className='lg:w-1/3 sm:w-5/6 space-y-4'>
        <h1 className=' font-poppins text-[27px] text-primaryColor md:text-start  text-center leading-8 tracking-wide font-semibold'>
          Digital Strategy Consulting
        </h1>
        <p className='font-inter text-base font-normal leading-6 lg:w-[542px] md:w-[393px] sm:w-[335px] md:text-start text-center'>
          Your digital strategy should complement the overall marketing strategy
          of the company. In online marketing, each component will never work in
          isolation and every business needs a different mix. We provide a clear
          concept and strategic overview to find the most efficient model for
          your business.
        </p>
        <button className='text-white text-sm font-inter px-4 py-2.5 mt-4 md:mx-0 mx-auto rounded-[4px] flex  uppercase leading-4 bg-secondaryColor'>
          Learn More
        </button>
      </div>
      <div className='lg:w-[414px] md:w-[346px] sm:w-[275px]'>
        <img src='./image 1.png' alt='Development section Image' />
      </div>
    </div>
  )
}

export default Consulting
