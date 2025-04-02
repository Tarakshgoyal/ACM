'use client'

import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Achiv2 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000,once: false })
  }, [])

  return (
    <>
      <section className="bg-primary text-white py-20">
        <div className="container ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div className="space-y-3 xl:pr-36 p-4 border-l-2 border-b-2 border-l-sky-800 border-b-sky-800 ">
              {/* <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-sky-800 uppercase"
              >
                our initiatives
              </p> */}
              <h1
                data-aos="fade-up"
                data-aos-delay="500"
                className="uppercase text-5xl"
              >
                Code Anytime
              </h1>
              <p data-aos="fade-up" data-aos-delay="700">
                Code Anytime is our round-the-year initiative to encourage free-spirited coding among beginners to amplify their passion for programming.
              </p>
              <button
                data-aos="fade-up"
                data-aos-delay="900"
                className="bg-blur text-white hover:bg-grey px-4 py-1 rounded-md duration-200"
              >
                15+ Mentors | 200+ Students
              </button>
            </div>
            <div data-aos="zoom-in">
              <img
                src="/img3.jpg"
                alt=""
                className="w-full sm:w-[80%] mx-auto max-h-[300px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Achiv2
