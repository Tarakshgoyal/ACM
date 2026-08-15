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
          <div className='flex flex-col md:flex-row justify-center md:justify-around items-center px-4 sm:px-8'>
            <div data-aos="fade-right" className="h-auto md:h-screen flex items-center pt-24 md:pt-0">
              <h1 data-aos-delay="300" className="text-4xl sm:text-5xl md:text-6xl text-white font-bold">Technical</h1>
            </div>
            <div data-aos="fade-left" className='h-auto md:h-screen flex items-center mt-4 md:mt-[20px]'>
              <h2 data-aos-delay="300" className="text-base sm:text-lg md:text-2xl text-white font-semibold max-w-lg">The Community&apos;s backbone, the Technical Team of UPES not only designs the websites and apps for the Community, but also propagates the culture of coding across entire UPES and works on projects that help students learn.</h2>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.54}
          className='flex items-center justify-center'
          style={{ textAlign: 'center' }}
        >
          <h2 className="text-lg sm:text-2xl text-white font-semibold px-4">Universe is so vast</h2>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1.54}
          className='flex items-center justify-center'
          style={{ textAlign: 'center' }}
        >
          <h2 className="text-lg sm:text-2xl text-white font-semibold px-4">It&apos;s beautiful as well as dangerous</h2>
        </ParallaxLayer>
        <ParallaxLayer
          offset={2.54}
          className='flex items-center justify-center'
          style={{ textAlign: 'center' }}
        >
          <h2 className="text-lg sm:text-2xl text-white font-semibold px-4">beyond our imagination</h2>
        </ParallaxLayer>
        <ParallaxLayer
          offset={3.54}
          className='flex items-center justify-center'
          style={{ textAlign: 'center' }}
        >
          <h2 className="text-lg sm:text-2xl text-white font-semibold px-4">Journey is more beautiful than destination</h2>
        </ParallaxLayer>

        {/* Page 2 */}
        <ParallaxLayer className="bg-cover bg-center" style={{ backgroundImage: 'url(/sp1.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }} offset={1} speed={0.4}>
          <div className='flex flex-col md:flex-row justify-center md:justify-around items-center px-4 sm:px-8'>
            <div className="h-auto md:h-screen flex items-center pt-24 md:pt-0">
              <h1 data-aos-delay="300" data-aos="fade-right" className="text-4xl sm:text-5xl md:text-6xl text-white font-bold">Design</h1>
            </div>
            <div className='h-auto md:h-screen flex items-center mt-4 md:mt-[20px]'>
              <h2 data-aos-delay="300" data-aos="fade-left" className="text-base sm:text-lg md:text-2xl text-white font-semibold max-w-lg">This distinguished committee is the creative house of the community. This team always leads the forefront by making breathtaking videos and developing visually appealing graphic material.</h2>
            </div>
          </div>
        </ParallaxLayer>

        {/* Page 3 */}
        <ParallaxLayer className="bg-cover bg-center" style={{ backgroundImage: 'url(/sp2.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} offset={2} speed={0.5}>
          <div className='flex flex-col md:flex-row justify-center md:justify-around items-center px-4 sm:px-8'>
            <div className="h-auto md:h-screen flex items-center pt-24 md:pt-0">
              <h1 data-aos-delay="300" data-aos="fade-right" className="text-4xl sm:text-5xl md:text-6xl text-white font-bold">Events &<br />Planning</h1>
            </div>
            <div className='h-auto md:h-screen flex items-center mt-4 md:mt-[20px]'>
              <h2 data-aos-delay="300" data-aos="fade-left" className="text-base sm:text-lg md:text-2xl text-white font-semibold max-w-lg">The brain of the community, organizes a variety of events, our vivacious team. Through creative concepts and flawless event execution, the Events team makes sure that attendees enjoy every minute from conception to conclusion.</h2>
            </div>
          </div>
        </ParallaxLayer>

        {/* Page 4 */}
        <ParallaxLayer className="bg-cover bg-center" style={{ backgroundImage: 'url(/sp4.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }} offset={3} speed={0.7}>
          <div className='flex flex-col md:flex-row justify-center md:justify-around items-center px-4 sm:px-8'>
            <div className="h-auto md:h-screen flex items-center pt-24 md:pt-0">
              <h1 data-aos-delay="300" data-aos="fade-right" className="text-4xl sm:text-5xl md:text-6xl text-white font-bold">Marketing</h1>
            </div>
            <div className='h-auto md:h-screen flex items-center mt-4 md:mt-[20px]'>
              <h2 data-aos-delay="300" data-aos="fade-left" className="text-base sm:text-lg md:text-2xl text-white font-semibold max-w-lg">Leads the community&apos;s outreach and promotion efforts by developing communication strategies, managing digital presence, and increasing awareness and engagement around community initiatives.</h2>
            </div>
          </div>
        </ParallaxLayer>

        {/* Page 5 */}
        <ParallaxLayer className="bg-cover bg-center" style={{ backgroundImage: 'url(/sp5.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center' }} offset={4} speed={0.8}>
          <div className='flex flex-col md:flex-row justify-center md:justify-around items-center px-4 sm:px-8'>
            <div className="h-auto md:h-screen flex items-center pt-24 md:pt-0">
              <h1 data-aos-delay="300" data-aos="fade-right" className="text-4xl sm:text-5xl md:text-6xl text-white font-bold">Photography</h1>
            </div>
            <div className='h-auto md:h-screen flex items-center mt-4 md:mt-[20px]'>
              <h2 data-aos-delay="300" data-aos="fade-left" className="text-base sm:text-lg md:text-2xl text-white font-semibold max-w-lg">Captures and documents the community&apos;s activities, events, and milestones through photography and visual storytelling, preserving memorable moments and strengthening the community&apos;s digital presence</h2>
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default Page