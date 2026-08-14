'use client'

import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Achiv2 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false })
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
                Flutter
              </h1>
              <p data-aos="fade-up" data-aos-delay="700">
                Flutter is an open-source framework for building cross-platform applications using a single codebase. Through the Flutter initiative, students can learn modern application development, UI design, Dart programming, API integration, and project development. It provides an opportunity to transform ideas into functional applications while developing practical skills that can be applied to real-world projects.
              </p>
              <button
                data-aos="fade-up"
                data-aos-delay="900"
                className="bg-blur text-white hover:bg-grey px-4 py-1 rounded-md duration-200"
              >
                100+ Students
              </button>
            </div>
            <div data-aos="zoom-in">
              <img
                src="/img2.jpg"
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
