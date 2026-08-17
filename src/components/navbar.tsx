'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const isSih = pathname === '/sih26'

  // Adaptive color classes based on page background
  const navBg = isSih ? 'bg-[#FDF8F3]/80' : 'bg-black/10'
  const textColor = isSih ? 'text-[#1B3764]' : 'text-white'
  const subtitleColor = isSih ? 'text-[#1B3764]/50' : 'text-gray-300'
  const linkHover = isSih ? 'hover:text-[#F26522]' : 'hover:text-cyan-300'
  const hamburgerBg = isSih ? 'bg-[#1B3764]' : 'bg-white'
  const borderColor = isSih ? 'border-[#1B3764]/10' : 'border-white/10'

  return (
    <nav
      data-aos="fade-down"
      className={`fixed top-0 right-0 w-full z-50 ${navBg} backdrop-blur-sm`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          {/* Logo — conditional based on route */}
          {isSih ? (
            <div className={`flex items-center gap-3 ${textColor} font-bold text-lg sm:text-2xl shrink-0`}>
              <img src='/sih.png' alt="SIH 2026 Logo" className="w-10 sm:w-14 lg:w-16 rounded" />
              <div className="flex flex-col">
                <Link href='/' className="leading-tight">Smart India Hackathon</Link>
                <span className={`text-[10px] sm:text-sm font-normal ${subtitleColor}`}>
                  SIH 2026
                </span>
              </div>
            </div>
          ) : (
            <div className={`flex items-center gap-3 ${textColor} font-bold text-lg sm:text-2xl shrink-0`}>
              <img src='/open-logo.jpg' alt="OPEN Community Logo" className="w-12 sm:w-16 lg:w-20 rounded" />
              <div className="flex flex-col">
                <Link href='/' className="leading-tight">OPEN COMMUNITY</Link>
                <span className={`text-[10px] sm:text-sm font-normal ${subtitleColor}`}>
                  Aware.Adopt.Contribute
                </span>
              </div>
            </div>
          )}

          {/* Desktop nav links */}
          <ul className={`hidden md:flex items-center gap-4 lg:gap-6 text-lg lg:text-xl ${textColor}`}>
            <li><Link href="/about" className={`${linkHover} transition-colors`}>About</Link></li>
            <li><Link href="/committes" className={`${linkHover} transition-colors`}>Committees</Link></li>
            <li><Link href="/team" className={`${linkHover} transition-colors`}>Our Team</Link></li>
            <li><Link href="/contact" className={`${linkHover} transition-colors`}>Contact us</Link></li>
            <li><Link href="/sih26" className={`${linkHover} transition-colors`}>SIH 2026</Link></li>
          </ul>

          {/* Mobile hamburger button */}
          <button
            className={`md:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10 ${textColor}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span className={`block w-6 h-0.5 ${hamburgerBg} transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 ${hamburgerBg} transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 ${hamburgerBg} transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile nav menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-80 opacity-100 pb-4' : 'max-h-0 opacity-0'}`}
        >
          <ul className={`flex flex-col gap-3 ${textColor} text-lg border-t ${borderColor} pt-4`}>
            <li><Link href="/about" onClick={() => setMenuOpen(false)} className={`block py-1 ${linkHover} transition-colors`}>About</Link></li>
            <li><Link href="/committes" onClick={() => setMenuOpen(false)} className={`block py-1 ${linkHover} transition-colors`}>Committees</Link></li>
            <li><Link href="/team" onClick={() => setMenuOpen(false)} className={`block py-1 ${linkHover} transition-colors`}>Our Team</Link></li>
            <li><Link href="/contact" onClick={() => setMenuOpen(false)} className={`block py-1 ${linkHover} transition-colors`}>Contact us</Link></li>
            <li><Link href="/sih26" onClick={() => setMenuOpen(false)} className={`block py-1 ${linkHover} transition-colors`}>SIH 2026</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
