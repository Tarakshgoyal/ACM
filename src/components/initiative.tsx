'use client';

import React from 'react';
import { FaCalendarAlt,FaUsers,FaLaptopCode   } from 'react-icons/fa';

interface InitiativeItem {
  title: string;
  content: string;
  description: string;
  icon: JSX.Element;
  aosDelay: string;
}

const init: InitiativeItem[] = [
  {
    title: 'Years in the Game!',
    content: '13+',
    description:
      'hhhjhhjjgughvg',
    icon: <FaLaptopCode className="text-7xl" />,
    aosDelay: '500',
  },
  {
    title: 'Members (for 2024-25)',
    content: '600+',
    description:
      'jgvjgvghvhgvhvbjlbkbkl',
    icon: <FaUsers className="text-7xl" />,
    aosDelay: '700',
  },
  {
    title: 'Events Conducted',
    content: '150+',
    description:
      'jfgvugvujbhbuguyfytdyvikjnkj',
    icon: <FaCalendarAlt className="text-7xl" />,
    aosDelay: '900',
  },
];

const Initiative: React.FC = () => {
  return (
    <section className='bg-black'>
      <div className="container">
        <div className=" ml-20 min-h-[400px]">
          <div className="grid ml-20 grid-cols-1 sm:grid-cols-3 gap-6 relative z-10">
            {init.map((data, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                className="min-h-[180px] flex flex-col justify-center items-center rounded-xl gap-2 bg-sky-900/60 backdrop-blur-sm text-white text-center text-2xl py-8 px-3 w-full lg:w-[300px] mx-auto"
              >
                {data.icon}
                <h1>{data.title}</h1>
                <p>{data.content}</p>
                <p className="text-sm">{data.description}</p>
              </div>
            ))}
          </div>
          <img src='/waveGif.gif' alt='' className="h-[200px] w-full mt-3  object-cover mix-blend-screen -translate-y-24 relative z-[0]"/>
        </div>
      </div>
    </section>
  );
};

export default Initiative;

