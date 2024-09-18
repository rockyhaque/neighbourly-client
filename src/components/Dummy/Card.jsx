import { useState } from 'react'
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function HeroSection() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="relative min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Background blur effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/4 -top-1/4 w-1/2 h-1/2 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -right-1/4 -bottom-1/4 w-1/2 h-1/2 bg-green-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        {/* Top bar */}
        <div className="flex justify-between items-center mb-16">
          <div className="text-2xl font-bold">Neighbourly</div>
          <Button variant="outline" size="sm" className="text-white border-white hover:bg-white hover:text-gray-900">
            Try our services now
          </Button>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400">
              Simplify Your Life with Neighbourly
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Express Yourself with this Cards
            </p>
            <p className="text-gray-400 mb-12">
              Neighbourly connects residents with skilled workers for home services, making it easy to hire trusted professionals in your community. With our cutting-edge platform, you can now craft your own personalized service requests based on your unique needs.
            </p>
            <Button 
              size="lg" 
              className="text-lg px-8 py-4 bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 transition-all duration-300 transform hover:scale-105"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Get Started
              {isHovered && (
                <span className="ml-2 animate-bounce">→</span>
              )}
            </Button>
          </div>
          <div className="relative">
            <Image
              src="https://i.ibb.co.com/0FzPjkW/rob-lambert-9-Q-p-LLP-jm-A-unsplash.jpg"
              alt="Neighbourly service professional"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white text-gray-900 p-4 rounded-lg shadow-xl">
              <p className="font-bold">Trusted Professionals</p>
              <p className="text-sm">In your community</p>
            </div>
          </div>
        </div>

        {/* Service cards */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Home Repair', 'Gardening', 'Cleaning'].map((service, index) => (
              <div 
                key={service}
                className={`p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 bg-gradient-to-br ${
                  index === 0 ? 'from-blue-500 to-blue-700' :
                  index === 1 ? 'from-green-500 to-green-700' :
                  'from-yellow-500 to-yellow-700'
                }`}
              >
                <h3 className="text-xl font-semibold mb-2">{service}</h3>
                <p className="text-sm opacity-75">Professional {service.toLowerCase()} services at your doorstep.</p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional content */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose Neighbourly?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Local Expertise</h3>
              <p className="text-gray-400">Connect with skilled professionals right in your neighbourhood.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
              <p className="text-gray-400">All our service providers are vetted and reviewed by your community.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Easy Booking</h3>
              <p className="text-gray-400">Schedule services with just a few clicks, anytime, anywhere.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}