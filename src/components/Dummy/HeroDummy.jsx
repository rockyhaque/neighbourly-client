'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isAnimating, setIsAnimating] = useState(true)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  const calculateTransform = (baseX: number, baseY: number) => {
    const distanceX = mousePosition.x - window.innerWidth / 2
    const distanceY = mousePosition.y - window.innerHeight / 2
    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2)
    const maxDistance = Math.sqrt((window.innerWidth / 2) ** 2 + (window.innerHeight / 2) ** 2)
    const factor = distance / maxDistance

    return `translate(${baseX - distanceX * 0.02 * factor}px, ${baseY - distanceY * 0.02 * factor}px)`
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-24">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Simplify Your Life with
            <span className="block text-blue-600">Neighbourly</span>
          </h1>
          <p className="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
            Neighbourly connects residents with skilled workers for home services, making it easy to hire trusted professionals in your community.
          </p>
          <div className="mt-10 sm:flex sm:justify-center">
            <div className="rounded-md shadow">
              <Button size="lg" className="w-full sm:w-auto">
                Get Started
              </Button>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Animated and moveable elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className={`absolute transition-transform duration-300 ease-out ${isAnimating ? 'animate-float' : ''}`}
          style={{ 
            left: '10%', 
            top: '20%', 
            transform: calculateTransform(-20, -20) 
          }}
        >
          <svg className="w-16 h-16 text-blue-400 opacity-50" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
          </svg>
        </div>
        <div 
          className={`absolute transition-transform duration-300 ease-out ${isAnimating ? 'animate-float-delayed' : ''}`}
          style={{ 
            right: '15%', 
            top: '30%', 
            transform: calculateTransform(20, -20) 
          }}
        >
          <svg className="w-20 h-20 text-green-400 opacity-50" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clipRule="evenodd" />
          </svg>
        </div>
        <div 
          className={`absolute transition-transform duration-300 ease-out ${isAnimating ? 'animate-float-slow' : ''}`}
          style={{ 
            left: '20%', 
            bottom: '15%', 
            transform: calculateTransform(-20, 20) 
          }}
        >
          <svg className="w-24 h-24 text-yellow-400 opacity-50" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1zm-5 8.274l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L5 10.274zm10 0l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L15 10.274z" />
          </svg>
        </div>
      </div>
    </section>
  )
}