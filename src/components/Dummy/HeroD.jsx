'use client'

import { useState, useEffect, useRef } from 'react'
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function HeroSection() {
  const [activeImage, setActiveImage] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  const images = [
    "https://i.ibb.co.com/0FzPjkW/rob-lambert-9-Q-p-LLP-jm-A-unsplash.jpg",
    "https://i.ibb.co.com/ZghLbXN/collab-media-VGj-Qg-LN4-B78-unsplash.jpg",
    "https://i.ibb.co.com/w0GhXYz/henry-co-3co-Kbdfn-AFg-unsplash.jpg"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const parallaxStyle = (depth: number) => ({
    transform: `translate(${mousePosition.x / depth}px, ${mousePosition.y / depth}px)`
  })

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden bg-gray-900 text-white">
      {/* Background image carousel */}
      <div className="absolute inset-0 z-0">
        {images.map((src, index) => (
          <Image
            key={src}
            src={src}
            alt={`Background ${index + 1}`}
            layout="fill"
            objectFit="cover"
            className={`transition-opacity duration-1000 ${
              index === activeImage ? 'opacity-30' : 'opacity-0'
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="mb-4 text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
            Simplify Your Life with
            <span className="block mt-2 text-blue-400 animate-pulse">Neighbourly</span>
          </h1>
          <p className="mt-6 text-xl sm:text-2xl md:text-3xl font-light">
            Connecting residents with skilled workers for home services, making it easy to hire trusted professionals in your community.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" className="text-lg px-8 py-4 bg-blue-500 hover:bg-blue-600 transition-colors duration-300">
              Get Started
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-gray-900 transition-colors duration-300">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Animated elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute w-64 h-64 rounded-full bg-blue-500 opacity-10 blur-3xl"
          style={{
            ...parallaxStyle(20),
            top: '10%',
            left: '5%',
            animation: 'pulse 8s infinite alternate'
          }}
        />
        <div 
          className="absolute w-96 h-96 rounded-full bg-green-500 opacity-10 blur-3xl"
          style={{
            ...parallaxStyle(30),
            bottom: '5%',
            right: '10%',
            animation: 'pulse 12s infinite alternate-reverse'
          }}
        />
        <div 
          className="absolute w-48 h-48 rounded-full bg-yellow-500 opacity-10 blur-3xl"
          style={{
            ...parallaxStyle(25),
            top: '40%',
            right: '25%',
            animation: 'pulse 10s infinite alternate'
          }}
        />
      </div>

      {/* Floating icons */}
      <div className="absolute inset-0 pointer-events-none">
        <svg 
          className="absolute w-16 h-16 text-blue-400"
          style={{...parallaxStyle(10), top: '20%', left: '10%'}}
          fill="currentColor" 
          viewBox="0 0 20 20"
        >
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
        </svg>
        <svg 
          className="absolute w-20 h-20 text-green-400"
          style={{...parallaxStyle(15), bottom: '15%', right: '10%'}}
          fill="currentColor" 
          viewBox="0 0 20 20"
        >
          <path fillRule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clipRule="evenodd" />
        </svg>
      </div>

      {/* Image indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === activeImage ? 'bg-white' : 'bg-gray-500'
            }`}
            onClick={() => setActiveImage(index)}
          />
        ))}
      </div>
    </section>
  )
}