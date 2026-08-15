'use client'

import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

const Page = () => {
  useEffect(() => {
    AOS.init({
      once: false
    })
  }, [])
  return (
    <div className="h-screen w-full">
      <video autoPlay loop muted className="absolute w-full h-full object-cover">
        <source src="/star_twinkling.mp4" type="video/mp4" />
      </video>
      <Parallax pages={7} className="bg-black-100">
        {/* Page 1 */}
        <ParallaxLayer offset={0} speed={0.3} className="bg-cover bg-center" style={{ backgroundImage: 'url(/sp.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          {/* <div className=''>
            <img src="/ufo.png" alt="" />
          </div> */}
          <div className='flex justify-around'>
            <div data-aos="fade-right" className="h-screen mr-88 mt-[-30px] flex items-center ">
              <h1 data-aos-delay="300" className="text-6xl text-white font-bold">Technical</h1>
            </div>
            <div data-aos="fade-left" className='h-screen flex items-center mt-[20px] mr-[-90px]'>
              <h2 data-aos-delay="300" className=" text-2xl text-white font-semibold">The Community&apos;s backbone,the Technical Team<br />of UPES not only designs the websites and apps<br /> for the Community,but also propogates the culture<br /> of coding across entire UPES and works on projects<br />that help students learn.</h2>
            </div>
          </div>


        </ParallaxLayer>
        {/* <ParallaxLayer
          sticky={{ start: 0, end: 7 }}
          className='flex items-center justify-center'
          style={{ textAlign: 'center' }}
        >
          <img src="/cat.gif" />
        </ParallaxLayer> */}
        <ParallaxLayer
          offset={0.54}
          className='flex items-center justify-center'
          style={{ textAlign: 'center' }}
        >
          <h2 className=" text-2xl text-white font-semibold">Universe is so vast</h2>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1.54}
          className='flex items-center justify-center'
          style={{ textAlign: 'center' }}
        >
          <h2 className=" text-2xl text-white font-semibold">It&apos;s beautiful as well as dangerous</h2>
        </ParallaxLayer>
        <ParallaxLayer
          offset={2.54}
          className='flex items-center justify-center'
          style={{ textAlign: 'center' }}
        >
          <h2 className=" text-2xl text-white font-semibold">beyond our imagination</h2>
        </ParallaxLayer>
        {/* <ParallaxLayer
          offset={3.54}
          className='flex items-center justify-center'
          style={{ textAlign: 'center' }}
        >
          <h2 className=" text-2xl text-white font-semibold">Expect the unexpected</h2>
        </ParallaxLayer> */}
        {/* <ParallaxLayer
          offset={3.54}
          className='flex items-center justify-center'
          style={{ textAlign: 'center' }}
        >
          <h2 className=" text-2xl text-white font-semibold">There is a constant war between positive and negative power</h2>
        </ParallaxLayer> */}
        <ParallaxLayer
          offset={3.54}
          className='flex items-center justify-center'
          style={{ textAlign: 'center' }}
        >
          <h2 className=" text-2xl text-white font-semibold">Journey is more beautiful than destination</h2>
        </ParallaxLayer>


        {/* Page 2 */}
        <ParallaxLayer className="bg-cover bg-center" style={{ backgroundImage: 'url(/sp1.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }} offset={1} speed={0.4}>
          <div className='flex justify-around'>
            <div className="h-screen mr-88 mt-[-30px] flex items-center ">
              <h1 data-aos-delay="300" data-aos="fade-right" className="text-6xl text-white font-bold">Design</h1>
            </div>
            <div className='h-screen flex items-center mt-[20px] mr-[-90px]'>
              <h2 data-aos-delay="300" data-aos="fade-left" className=" text-2xl text-white font-semibold">This distinguished committee is the  <br /> creative house of the community. This team <br /> always leads the forefront by making <br /> breathtaking videos and developing visually <br /> appealing graphic material.</h2>
            </div>
          </div>
        </ParallaxLayer>

        {/* Page 3 */}
        <ParallaxLayer className="bg-cover bg-center" style={{ backgroundImage: 'url(/sp2.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} offset={2} speed={0.5}>
          <div className='flex justify-around'>
            <div className="h-screen mr-88 mt-[-30px] flex items-center ">
              <h1 data-aos-delay="300" data-aos="fade-right" className="text-6xl text-white font-bold">Events & <br />Planning</h1>
            </div>
            <div className='h-screen flex items-center mt-[20px] mr-[-90px]'>
              <h2 data-aos-delay="300" data-aos="fade-left" className=" text-2xl text-white font-semibold">The brain of the community, organizes a <br />variety of events, our vivacious team. Through <br />creative concepts and flawless event <br />execution, the Events team makes sure that <br />attendees enjoy every minute from conception <br />to conclusion.</h2>
            </div>
          </div>
        </ParallaxLayer>



        {/* Page 4 */}
        <ParallaxLayer className="bg-cover bg-center" style={{ backgroundImage: 'url(/sp4.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }} offset={3} speed={0.7}>
          <div className='flex justify-around'>
            <div className="h-screen mr-88 mt-[-30px] flex items-center ">
              <h1 data-aos-delay="300" data-aos="fade-right" className="text-6xl text-white font-bold">Marketing</h1>
            </div>
            <div className='h-screen flex items-center mt-[20px] mr-[-90px]'>
              <h2 data-aos-delay="300" data-aos="fade-left" className=" text-2xl text-white font-semibold">Leads the community&apos;s outreach and<br />promotion efforts by developing communication<br />strategies, managing digital presence, and<br />increasing awareness and engagement around<br />community initiatives.</h2>
            </div>
          </div>
        </ParallaxLayer>

        {/* Page 5 */}
        <ParallaxLayer className="bg-cover bg-center" style={{ backgroundImage: 'url(/sp5.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center' }} offset={4} speed={0.8}>
          <div className='flex justify-around'>
            <div className="h-screen mr-88 mt-[-30px] flex items-center ">
              <h1 data-aos-delay="300" data-aos="fade-right" className="text-6xl text-white font-bold">Photography</h1>
            </div>
            <div className='h-screen flex items-center mt-[20px] mr-[-90px]'>
              <h2 data-aos-delay="300" data-aos="fade-left" className=" text-2xl text-white font-semibold">Captures and documents the community&apos;s activities,<br />events, and milestones through photography<br />and visual storytelling, preserving memorable<br />moments and strengthening the community&apos;s<br />digital presence</h2>
            </div>
          </div>
        </ParallaxLayer>

        {/* Page 7 */}
        {/* <ParallaxLayer className="bg-cover bg-center" style={{ backgroundImage: 'url(/sp6.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} offset={6} speed={0.9}>
          <div className='flex justify-around'>
            <div className="h-screen mr-88 mt-[-30px] flex items-center ">
              <h1 data-aos-delay="300" data-aos="fade-right" className="text-6xl text-white font-bold">Operations</h1>
            </div>
            <div className='h-screen flex items-center mt-[20px] mr-[-90px]'>
              <h2 data-aos-delay="300" data-aos="fade-left" className=" text-2xl text-white font-semibold">The Operations committee works behind <br />the scenes to ensure the smooth functioning <br />of every event or activity of the chapters. This <br />team provides back-end support to every <br />other committee by managing all the <br />arrangements flawlessly.</h2>
            </div>
          </div>
        </ParallaxLayer> */}
      </Parallax>
    </div>
  )
}

export default Page