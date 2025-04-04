'use client'

import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Achiv1 = () => {
  useEffect(() => {
    AOS.init({
      once: false
    })
  }, [])

  return (
    <>
      <section className="bg-primary text-white pb-12">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div data-aos="zoom-in">
              <img
                src="/img2.jpg"
                alt=""
                className="w-full sm:w-[80%] mx-auto max-h-[300px] object-cover"
              />
            </div>
            <div className="space-y-3 xl:pr-36 p-4 border-r-2 border-b-2 border-r-sky-800 border-b-sky-800">
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
                Hour of Code
              </h1>
              <p data-aos="fade-up" data-aos-delay="700">
                The CSR team puts their words to action, and brings smiles
                across the faces of the underprivileged society. The team makes
                the activities as interactive as possible.
              </p>
              <button
                data-aos="fade-up"
                data-aos-delay="900"
                className="bg-blur text-white hover:bg-grey px-4 py-1 rounded-md duration-200"
              >
                100+ Students
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Achiv1
