'use client'

import React from 'react'
import {SparklesIcon} from '@heroicons/react/24/solid'

const HeroContent = () => {
  return (
    <div className='flex flex-row items-center justify-center px-20 mt-[-320] w-full z-[20]'>
        <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>
            <div className='Welcome-box py-[8px] px-[4px] opacity-[0.9]'>
                <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5' />
                <h1 className='Welcome-text text-[13px]'>Together we inovates </h1>
            </div>
            <div  className='flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto'>
                <div>UPES<span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'> ACM</span></div>
                Student Chapter
            </div>
            <p className='text-lg text-gray-400 my-5 max-w-[600px]'>
                Computing is not about computers, its about living, living to solve the problems of society using computer science.
            </p>
            <a className='py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]' href='https://konfhub.com/upes-acm-acm-w-member-registration'>
                Join Us !!
            </a>
        </div>
    </div>
  )
}

export default HeroContent