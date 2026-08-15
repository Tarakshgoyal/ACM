'use client'

import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Achiv3 = () => {
  useEffect(() => {
    AOS.init({ once: false })
  }, [])

  return (
    <>
      <section className="bg-primary text-white pb-12">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div data-aos="zoom-in">
              <img
                src='img3.jpg'
                alt=""
                loading="lazy"
                className="w-full sm:w-[80%] mx-auto max-h-[300px] object-cover"
              />
            </div>
            <div className="space-y-3 xl:pr-36 p-4 border-r-2 border-b-2 border-r-sky-800 border-b-sky-800 ">
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
                Spectrum
              </h1>
              <p data-aos="fade-up" data-aos-delay="700">
                Spectrum is a technology-focused initiative by OPEN Community that brings students together to explore diverse areas of technology, innovation, and development. It provides a platform for students to learn new concepts, participate in technical activities, collaborate with peers, and apply their knowledge through practical experiences. Spectrum encourages curiosity, creativity, and continuous technical growth within the community.
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

export default Achiv3
