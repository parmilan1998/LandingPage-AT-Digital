import React from 'react'

const Development = () => {
  return (
    <div className='flex md:flex-row flex-col justify-center items-center gap-8 md:my-16 my-8'>
      <div className='lg:w-[414px] md:w-[346px] sm:w-[275px]'>
        <img src='./image 2.png' alt='Development section Image' />
      </div>
      <div className='lg:w-1/3 sm:w-5/6 space-y-4'>
        <h1 className='font-poppins text-[27px] md:w-[393px] lg:w-[500px] text-primaryColor md:text-start text-center leading-8 tracking-wide font-semibold'>
          Web & Mobile App Development
        </h1>
        <p className='font-inter text-base font-normal leading-6 lg:w-[542px] md:w-[393px] sm:w-[335px] md:text-start text-center'>
          Your web and mobile Apps are pieces of the puzzle to grow your
          business. We use frameworks which tailor content and engagement
          methods to respond to different intents shown by your potential
          customers who interact with your business online.
        </p>
        <button className='text-white text-sm font-inter px-4 py-2.5 mt-4 md:mx-0 mx-auto rounded-[4px] flex justify-start uppercase leading-4 bg-secondaryColor'>
          Learn More
        </button>
      </div>
    </div>
  )
}

export default Development
