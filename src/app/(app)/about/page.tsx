"use client";

import React from 'react';
import Abouthero from '@/components/abouthero';
import Initiative from '@/components/initiative';
import Achiv1 from '@/components/achiv1';
import Achiv2 from '@/components/achiv2';
import Achiv3 from '@/components/achiv3';

const About = () => {
  return (
    <>
      <div className="h-[700px] relative">
        <video
          src="/earth-bg.mp4"
          autoPlay
          loop
          muted
          className="fixed right-0 top-0 h-[700px] w-full object-cover z-0"
        ></video>
        <Abouthero />
      </div>
      <div className="bg-black min-h-screen relative z-10">
        <Initiative />
        <div>
          <Achiv1 />
          <div className='ml-12'>
            <Achiv2/>
          </div>
          <Achiv3/>
        </div>
      </div>
    </>
  );
};

export default About;
