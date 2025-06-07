'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import logo from '../../public/images/logo.png'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const pathname = usePathname()

  // Track active section on scroll
  useState(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1))
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(`#${currentSection}`)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { 
      name: 'Home', 
      href: '#hero', 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    { 
      name: 'About', 
      href: '#about',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    { 
      name: 'Features', 
      href: '#features',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    { 
      name: 'Partners', 
      href: '#partners',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    { 
      name: 'Pricing', 
      href: '#pricing',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      )
    },
    
    
    { 
      name: 'Blogs', 
      href: '#blogs',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      )
    },
    { 
      name: 'Testimonials', 
      href: '#testimonials',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    },
    
    { 
      name: 'Contact', 
      href: '#contact',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
  ]

  const scrollToSection = (href: string) => {
    if (pathname === '/login') {
      // If on login page, navigate to home first
      window.location.href = `/${href}`
      return
    }
    
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className="bg-primary-black/80 backdrop-blur-md text-white py-4 px-6 sticky top-0 z-50 border-b border-gray-800/50 shadow-xl">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link 
            href="/" 
            className="hover:text-primary-pink transition-all duration-300 transform hover:scale-105"
          >
            Logo
          </Link>
        </div>

        {/* Desktop Navigation - Enhanced Icons with bottom tooltips */}
        <div className="hidden md:flex space-x-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.href
            return (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => scrollToSection(item.href)}
                  className={`relative p-4 transition-all duration-300 backdrop-blur-sm border rounded-xl
                           transform hover:scale-110 hover:-translate-y-1 hover:shadow-2xl
                           ${isActive 
                             ? 'text-primary-pink bg-gradient-to-br from-primary-pink/20 to-primary-red/20 border-primary-pink/50 shadow-lg shadow-primary-pink/20' 
                             : 'text-white/80 hover:text-primary-pink bg-white/5 hover:bg-gradient-to-br hover:from-white/10 hover:to-white/5 border-white/10 hover:border-primary-pink/50'
                           }`}
                >
                  <div className="relative z-10">
                    {item.icon}
                  </div>
                  {/* Active indicator dot */}
                  {isActive && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary-pink rounded-full animate-pulse"></div>
                  )}
                  {/* Gradient overlay for active state */}
                  <div className={`absolute inset-0 rounded-xl transition-opacity duration-300 ${
                    isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
                  } bg-gradient-to-br from-primary-pink/5 to-primary-red/5`}></div>
                </button>
                
                {/* Enhanced bottom tooltip */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 px-4 py-2 
                              bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-lg border border-white/20 
                              text-white text-sm font-medium rounded-xl opacity-0 group-hover:opacity-100 
                              transition-all duration-300 whitespace-nowrap pointer-events-none shadow-2xl
                              scale-95 group-hover:scale-100">
                  <span className="relative z-10">{item.name}</span>
                  {/* Tooltip arrow pointing up */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 
                                border-l-4 border-r-4 border-b-4 border-transparent border-b-gray-900/95"></div>
                  {/* Tooltip glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-pink/10 to-primary-red/10 rounded-xl blur-sm -z-10"></div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Enhanced Login Button */}
        <div className="hidden md:flex">
          <Link
            href="/login"
            className="relative px-8 py-3 font-semibold text-white bg-gradient-to-r from-primary-red to-primary-pink 
                     hover:from-primary-pink hover:to-primary-red rounded-xl shadow-lg hover:shadow-primary-red/40
                     transition-all duration-300 transform hover:scale-105 hover:-translate-y-1
                     border border-white/20 backdrop-blur-sm overflow-hidden group"
          >
            <span className="relative z-10">Login</span>
            {/* Animated shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                          -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-red/20 to-primary-pink/20 blur-lg -z-10 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
        </div>

        {/* Enhanced Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative text-white focus:outline-none p-3 bg-white/10 backdrop-blur-sm 
                     border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-300
                     hover:shadow-lg transform hover:scale-105"
          >
            <svg
              className="h-6 w-6 transition-all duration-300"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              style={{ transform: isMenuOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
            {/* Button glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-pink/10 to-primary-red/10 rounded-xl 
                          opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></div>
          </button>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-6 pb-4">
          <div className="bg-gradient-to-br from-black/80 to-gray-900/80 backdrop-blur-xl border 
                        border-white/20 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-pink/5 to-primary-red/5 rounded-2xl"></div>
            
            <div className="relative z-10 flex flex-col space-y-3">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.href
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`flex items-center space-x-4 text-left py-4 px-5 rounded-xl
                             transition-all duration-300 transform hover:scale-105 group relative overflow-hidden
                             ${isActive 
                               ? 'text-primary-pink bg-gradient-to-r from-primary-pink/20 to-primary-red/20 border border-primary-pink/40 shadow-lg' 
                               : 'text-white/90 hover:text-primary-pink bg-white/5 hover:bg-gradient-to-r hover:from-white/10 hover:to-white/5 border border-white/10 hover:border-primary-pink/30'
                             }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {/* Active indicator */}
                    {isActive && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary-pink rounded-r-full"></div>
                    )}
                    
                    <div className={`transform group-hover:scale-110 transition-transform duration-300 ${
                      isActive ? 'text-primary-pink' : ''
                    }`}>
                      {item.icon}
                    </div>
                    <span className="font-medium flex-1">{item.name}</span>
                    
                    {/* Arrow indicator */}
                    <div className="transform group-hover:translate-x-1 transition-transform duration-300">
                      <svg className="w-4 h-4 opacity-50 group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    
                    {/* Hover shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
                                  -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  </button>
                )
              })}
              
              {/* Enhanced Mobile Login Button */}
              <Link
                href="/login"
                className="relative bg-gradient-to-r from-primary-red to-primary-pink hover:from-primary-pink 
                         hover:to-primary-red px-6 py-4 rounded-xl font-semibold text-center mx-2 mt-4
                         transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary-red/40
                         border border-white/20 backdrop-blur-sm text-white overflow-hidden group"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="relative z-10">Login</span>
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                              -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-red/20 to-primary-pink/20 blur-lg -z-10 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}