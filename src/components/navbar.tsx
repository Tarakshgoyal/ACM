'use client'

import React from 'react'

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
            <div className="flex items-center gap-4 text-white font-bold text-2xl">
              <img src='/acmlogoo.png' alt="" className="w-20" />
              <a href='https://acmjs.vercel.app'>UPES-ACM</a>
            </div>
            <div className="text-white hidden sm:block">
              <ul className="flex items-center mr-[-50px] gap-6 text-xl py-4 ">
                <li>
                  <a href="https://acmjs.vercel.app/about">About</a>
                </li>
                <li>
                  <a href="https://acmjs.vercel.app/committes">Committes</a>
                </li>
                <li>
                  <a href="https://acmjs.vercel.app/team">Our Team</a>
                </li>
                <li>
                  <a href="https://acmjs.vercel.app/contact">Contact us</a>
                </li>
                <li>
                  <a href="https://konfhub.com/upes-acm-acm-w-member-registration">Join Us</a>
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