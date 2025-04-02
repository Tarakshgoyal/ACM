'use client'

import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const AboutHero = () => {
  useEffect(() => {
    AOS.init({ 
      once: false,     
    })
  }, [])

  return (
    <div className="relative bg-black/20 h-full">
      <div className="h-full flex justify-center items-center p-4 relative z-10">
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="text-white space-y-4 lg:pr-36">
            <h1 data-aos="fade-up" className="text-5xl w-[550px] font-bold">
              ABOUT OUR CHAPTER
            </h1>
            <p data-aos="fade-up" data-aos-delay="300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ea
              dolorem eius accusamus beatae. Nulla quis beatae quo, possimus
              tempora similique dignissimos repellat aperiam veniam culpa
              consequatur repudiandae asperiores saepe.
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="500"
              className="bg-blur text-white hover:bg-grey px-4 py-1 rounded-md duration-200"
            >
              LEARN MORE
            </button>
          </div>
          <div></div>
        </div>
      </div>

      <img
        src="/moon-surface-hd.png"
        alt="Moon Surface"
        className="absolute right-0 bottom-0 w-full brightness-50 z-0"
      />

      <div className="absolute bottom-0 z-30 right-0 w-full pointer-events-none bg-gradient-to-b from-transparent via-black/50 to-black/90 h-[20px] sm:h-[50px] md:h-[100px]"></div>
    </div>
  )
}

export default AboutHero
