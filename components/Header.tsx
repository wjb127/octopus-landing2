'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/files/e9c9fbfb95f43.png"
              alt="황금쭈꾸미집"
              width={150}
              height={40}
              className="h-8 lg:h-10 w-auto"
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className={`font-medium transition-colors ${
                isScrolled ? 'text-gray-900 hover:text-brand-red' : 'text-white hover:text-brand-gold'
              }`}
            >
              브랜드소개
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`font-medium transition-colors ${
                isScrolled ? 'text-gray-900 hover:text-brand-red' : 'text-white hover:text-brand-gold'
              }`}
            >
              경쟁력
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className={`font-medium transition-colors ${
                isScrolled ? 'text-gray-900 hover:text-brand-red' : 'text-white hover:text-brand-gold'
              }`}
            >
              메뉴 안내
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`font-medium transition-colors ${
                isScrolled ? 'text-gray-900 hover:text-brand-red' : 'text-white hover:text-brand-gold'
              }`}
            >
              창업 문의
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block h-0.5 w-6 bg-current transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-0.5' : ''} ${isScrolled ? 'bg-gray-900' : 'bg-white'}`}></span>
              <span className={`block h-0.5 w-6 bg-current transition-all mt-1 ${isMobileMenuOpen ? 'opacity-0' : ''} ${isScrolled ? 'bg-gray-900' : 'bg-white'}`}></span>
              <span className={`block h-0.5 w-6 bg-current transition-all mt-1 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''} ${isScrolled ? 'bg-gray-900' : 'bg-white'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <nav className="py-4 space-y-2">
              <button
                onClick={() => scrollToSection('hero')}
                className="block w-full text-left px-4 py-2 text-gray-900 hover:bg-gray-50"
              >
                브랜드소개
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-4 py-2 text-gray-900 hover:bg-gray-50"
              >
                경쟁력
              </button>
              <button
                onClick={() => scrollToSection('menu')}
                className="block w-full text-left px-4 py-2 text-gray-900 hover:bg-gray-50"
              >
                메뉴 안내
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-4 py-2 text-gray-900 hover:bg-gray-50"
              >
                창업 문의
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}