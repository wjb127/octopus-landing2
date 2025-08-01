'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const slides = [
  {
    id: 1,
    image: '/files/b4201f868df71.png',
    title: "'쭈편단심' 오직 쭈꾸미만을 바라보는 한 조각의 붉은 마음",
    subtitle: "언제나 변함 없는 맛으로 '특별함'을 선물하는 식당"
  },
  {
    id: 2,
    image: '/files/3b7f53ca7fee6.png',
    title: "대한민국 쭈꾸미 맛의 기준을 세우다",
    subtitle: "전국 가맹문의 1577-6615"
  }
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section id="hero" className="relative h-screen overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="relative w-full h-full">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {slides[currentSlide].title}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 opacity-90">
              {slides[currentSlide].subtitle}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => {
                  const element = document.getElementById('contact')
                  if (element) element.scrollIntoView({ behavior: 'smooth' })
                }}
                className="bg-brand-red hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
              >
                창업 문의하기
              </button>
              <button 
                onClick={() => {
                  const element = document.getElementById('menu')
                  if (element) element.scrollIntoView({ behavior: 'smooth' })
                }}
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
              >
                메뉴 보기
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <button 
          onClick={() => {
            const element = document.getElementById('about')
            if (element) element.scrollIntoView({ behavior: 'smooth' })
          }}
          className="text-white opacity-70 hover:opacity-100 transition-opacity"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </section>
  )
}