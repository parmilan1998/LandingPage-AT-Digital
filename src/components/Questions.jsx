import React, { useState } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa6'

const Questions = () => {
  const [openQuestion, setOpenQuestion] = useState(1)

  const toggleAnswer = (id) => {
    setOpenQuestion(id === openQuestion ? null : id)
  }

  const QuestionList = [
    {
      id: 1,
      question: 'Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?',
      answer:
        'Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.',
    },
    {
      id: 2,
      question:
        'Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?',
      answer:
        'Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.',
    },
    {
      id: 3,
      question:
        'Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?',
      answer:
        'Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.',
    },
  ]
  return (
    <div className='lg:w-[896px] md:w-[686px] sm:w-[334px] mx-auto gap-7 lg:pb-16'>
      <h1 className='py-5 text-3xl font-poppins font-semibold tracking-wider text-center leading-8 text-primaryColor'>
        Frequently asked questions
      </h1>
      <div>
        {QuestionList.map((item, index) => (
          <div key={index} className='gap-3 bg-color rounded-lg my-3 sm:py-2'>
            <div className='flex items-center justify-between px-4 bg-color lg:h-[76px] rounded-lg'>
              <h1
                className={`font-inter font-semibold text-[22px] lg:w-[798px] md:w-[638px] sm:w-[232px] py-4 text-xl leading-6 ${
                  openQuestion === item.id ? 'text-primaryColor' : 'text-black'
                }`}
              >
                {item.question}
              </h1>
              <button
                onClick={() => toggleAnswer(item.id)}
                className='flex sm:justify-start '
              >
                {openQuestion === item.id ? (
                  <FaMinus className=' text-primaryColor' />
                ) : (
                  <FaPlus className='text-black' />
                )}
              </button>
            </div>
            {openQuestion === item.id && (
              <h1 className='font-inter px-4 lg:leading-10 sm:leading-8 lg:text-lg sm:text-base font-normal text-textColor2'>
                {item.answer}
              </h1>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Questions
