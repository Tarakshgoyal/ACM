'use client'

import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
      <>
        <nav
          data-aos="fade-down"
          className="fixed top-0 right-0 w-full z-50 bg-black/10 backdrop-blur-sm py-4 sm:py-0"
        >
          <div className="container">
            <div className="flex ml-[80px] justify-between items-center">
              {/* <div className="flex items-center gap-4 text-white font-bold text-2xl">
                <img src='/open-logo.jpg' alt="" className="w-20" />
                <Link href='/'>UPES-OPEN</Link>
                 <span className="text-sm font-normal text-gray-300">
                    Aware.Adopt.Contribute
                  </span>
              </div> */}
              <div className="flex items-center gap-4 text-white font-bold text-2xl">
                <img src='/open-logo.jpg' alt="" className="w-20" />

                <div className="flex flex-col">
                  <Link href='/'>OPEN COMMUNITY</Link>

                  <span className="text-sm font-normal text-gray-300">
                    Aware.Adopt.Contribute
                  </span>
                </div>
              </div>
              <div className="text-white hidden sm:block">
                <ul className="flex items-center mr-[-50px] gap-6 text-xl py-4 ">
                  <li>
                    <Link href="/about">About</Link>
                  </li>
                  <li>
                    <Link href="/committes">Committees</Link>
                  </li>
                  <li>
                    <Link href="/team">Our Team</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact us</Link>
                  </li>
                  <li>
                    <Link href="/sih26">SIH 2026</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </>
    </div>
  )
}

export default Navbar
