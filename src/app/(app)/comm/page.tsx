'use client'

import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Parallax , ParallaxLayer } from '@react-spring/parallax'

const page = () => {
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
            <div data-aos="fade-right"  className="h-screen mr-88 mt-[-30px] flex items-center ">
                <h1 data-aos-delay="300" className="text-6xl text-white font-bold">Public Relations <br />& Sponsorship</h1>
            </div>
            <div data-aos="fade-left" className='h-screen flex items-center mt-[20px] mr-[-90px]'>
                <h2 data-aos-delay="300" className=" text-2xl text-white font-semibold">This committee is the face of the chapter. <br />The PR and Sponsorship team puts in immeasurabl <br /> efforts to secure sponsorships for the events,<br /> responds to inquiries, and tries to increase <br /> the chapter’s.</h2>
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
          <h2 className=" text-2xl text-white font-semibold">It's beacutiful as well as dangerous</h2>
        </ParallaxLayer>
        <ParallaxLayer
          offset={2.54}
          className='flex items-center justify-center'
          style={{ textAlign: 'center' }}
        >
          <h2 className=" text-2xl text-white font-semibold">beyond our imagination</h2>
        </ParallaxLayer>
        <ParallaxLayer
          offset={3.54}
          className='flex items-center justify-center'
          style={{ textAlign: 'center' }}
        >
          <h2 className=" text-2xl text-white font-semibold">Expect the unexpected</h2>
        </ParallaxLayer>
        <ParallaxLayer
          offset={4.54}
          className='flex items-center justify-center'
          style={{ textAlign: 'center' }}
        >
          <h2 className=" text-2xl text-white font-semibold">There is a constant war between positive and negative power</h2>
        </ParallaxLayer>
        <ParallaxLayer
          offset={5.54}
          className='flex items-center justify-center'
          style={{ textAlign: 'center' }}
        >
          <h2 className=" text-2xl text-white font-semibold">Journey is more beautiful than destination</h2>
        </ParallaxLayer>
        

        {/* Page 2 */}
        <ParallaxLayer className="bg-cover bg-center" style={{ backgroundImage: 'url(/sp1.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }} offset={1} speed={0.4}>
          <div className='flex justify-around'>
            <div className="h-screen mr-88 mt-[-30px] flex items-center ">
                <h1 data-aos-delay="300" data-aos="fade-right" className="text-6xl text-white font-bold">Design <br />& VFX</h1>
            </div>
            <div className='h-screen flex items-center mt-[20px] mr-[-90px]'>
                <h2 data-aos-delay="300" data-aos="fade-left" className=" text-2xl text-white font-semibold">This distinguished committee is the  <br /> creative house of the chapters. This team <br /> always leads the forefront by making <br /> breathtaking videos and developing visually <br /> appealing graphic material.</h2>
            </div>
          </div>
        </ParallaxLayer>

        {/* Page 3 */}
        <ParallaxLayer className="bg-cover bg-center" style={{ backgroundImage: 'url(/sp2.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} offset={2} speed={0.5}>
          <div className='flex justify-around'>
            <div className="h-screen mr-88 mt-[-30px] flex items-center ">
                <h1 data-aos-delay="300" data-aos="fade-right" className="text-6xl text-white font-bold">Events</h1>
            </div>
            <div className='h-screen flex items-center mt-[20px] mr-[-90px]'>
                <h2 data-aos-delay="300" data-aos="fade-left" className=" text-2xl text-white font-semibold">The brain of the chapter, organizes a <br />variety of events, our vivacious team. Through <br />creative concepts and flawless event <br />execution, the Events team makes sure that <br />attendees enjoy every minute from conception <br />to conclusion.</h2>
            </div>
          </div>
        </ParallaxLayer>

        {/* Page 4 */}
        <ParallaxLayer className="bg-cover bg-center" style={{ backgroundImage: 'url(/sp3.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} offset={3} speed={0.6}>
          <div className='flex justify-around'>
            <div className="h-screen mr-88 mt-[-30px] flex items-center ">
                <h1 data-aos-delay="300" data-aos="fade-right" className="text-6xl text-white font-bold">Technical</h1>
            </div>
            <div className='h-screen flex items-center mt-[20px] mr-[-90px]'>
                <h2 data-aos-delay="300" data-aos="fade-left" className=" text-2xl text-white font-semibold">The Chapter's backbone, the Technical <br />Team not only designs the websites and <br />apps for the Chapter, but also propogates the <br />culture of coding across entire UPES and <br />works on projects that help students learn.</h2>
            </div>
          </div>
        </ParallaxLayer>

        {/* Page 5 */}
        <ParallaxLayer className="bg-cover bg-center" style={{ backgroundImage: 'url(/sp4.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }} offset={4} speed={0.7}>
          <div className='flex justify-around'>
            <div className="h-screen mr-88 mt-[-30px] flex items-center ">
                <h1 data-aos-delay="300" data-aos="fade-right" className="text-6xl text-white font-bold">Editorial</h1>
            </div>
            <div className='h-screen flex items-center mt-[20px] mr-[-90px]'>
                <h2 data-aos-delay="300" data-aos="fade-left" className=" text-2xl text-white font-semibold">The Editorial Committee is the brainchild <br />behind the Chapter's all formal <br />communications, blogs, social media <br />content and document all the daily <br />proceedings. This teams gives life to <br />everything you see or read about UPES ACM.</h2>
            </div>
          </div>
        </ParallaxLayer>

        {/* Page 6 */}
        <ParallaxLayer className="bg-cover bg-center" style={{ backgroundImage: 'url(/sp5.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center' }} offset={5} speed={0.8}>
          <div className='flex justify-around'>
            <div className="h-screen mr-88 mt-[-30px] flex items-center ">
                <h1 data-aos-delay="300" data-aos="fade-right" className="text-6xl text-white font-bold">Corporate Social <br />Responsibility</h1>
            </div>
            <div className='h-screen flex items-center mt-[20px] mr-[-90px]'>
                <h2 data-aos-delay="300" data-aos="fade-left" className=" text-2xl text-white font-semibold">Being the reflection of the chapter’s ethics <br />and deeds, the CSR committee curates <br />activities that help contribute to the upliftment <br />of society. It promotes education, and vocational <br />skills among young children.</h2>
            </div>
          </div>
        </ParallaxLayer>

        {/* Page 7 */}
        <ParallaxLayer className="bg-cover bg-center" style={{ backgroundImage: 'url(/sp6.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} offset={6} speed={0.9}>
        <div className='flex justify-around'>
            <div className="h-screen mr-88 mt-[-30px] flex items-center ">
                <h1 data-aos-delay="300" data-aos="fade-right" className="text-6xl text-white font-bold">Operations</h1>
            </div>
            <div className='h-screen flex items-center mt-[20px] mr-[-90px]'>
                <h2 data-aos-delay="300" data-aos="fade-left" className=" text-2xl text-white font-semibold">The Operations committee works behind <br />the scenes to ensure the smooth functioning <br />of every event or activity of the chapters. This <br />team provides back-end support to every <br />other committee by managing all the <br />arrangements flawlessly.</h2>
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default page