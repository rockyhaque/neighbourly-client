import React, { useState } from "react";

export default function OurSpecialty() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-gray-200 text-white overflow-hidden">
      {/* 3D-like background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        </div>
        <svg
          className="absolute bottom-0 left-0 w-full h-32 text-gray-900"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            fillOpacity="0.2"
            d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl  font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-blue-500">
              Our Specialty at Neighbourly
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 mb-8">
              Simplifying life by connecting you with local professionals.
            </p>
            <p className="text-gray-500 mb-12">
              At Neighbourly, we bring trusted workers to your doorstep for a
              range of services, from home repair to gardening, ensuring you get
              the best help right in your community.
            </p>
            <button
              className="text-lg px-8 py-4 bg-gradient-to-r from-blue-400 to-purple-400 hover:from-blue-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Get Started
              {isHovered && <span className="ml-2 animate-bounce">→</span>}
            </button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg transform rotate-6 scale-105 filter blur"></div>
            <div className="relative bg-gray-900 bg-opacity-70 backdrop-filter backdrop-blur-lg rounded-lg p-8 shadow-2xl">
              <img
                src="https://i.ibb.co/0FzPjkW/rob-lambert-9-Q-p-LLP-jm-A-unsplash.jpg"
                alt="Neighbourly service professional"
                className="rounded-lg shadow-xl mb-6"
              />
              <h3 className="text-2xl font-bold mb-2">Trusted Professionals</h3>
              <p className="text-gray-300">Right in your community</p>
            </div>
          </div>
        </div>

        {/* Service cards */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-700">Featured Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Home Repair",
                image: "https://i.ibb.co/ZghLbXN/collab-media-VGj-Qg-LN4-B78-unsplash.jpg",
              },
              {
                name: "Gardening",
                image: "https://i.ibb.co/w0GhXYz/henry-co-3co-Kbdfn-AFg-unsplash.jpg",
              },
              {
                name: "Cleaning",
                image: "https://i.ibb.co/0FzPjkW/rob-lambert-9-Q-p-LLP-jm-A-unsplash.jpg",
              },
            ].map((service, index) => (
              <div key={service.name} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400 rounded-xl transform group-hover:scale-105 transition-transform duration-300 filter blur-sm"></div>
                <div className="relative bg-gray-900 bg-opacity-70 backdrop-filter backdrop-blur-lg rounded-xl overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                    <p className="text-sm text-gray-300">
                      Professional {service.name.toLowerCase()} services at your doorstep.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional content */}
        <div className="mt-24 text-center">
  <h2 className="text-4xl font-extrabold mb-12 text-white">Why Choose Neighbourly?</h2>
  <p className="text-lg max-w-2xl mx-auto mb-8 text-gray-300">
    Discover why Neighbourly is your trusted choice for home services. We connect you with skilled workers in your local area, ensuring a seamless and reliable experience.
  </p>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
    {[
      {
        title: "Trusted Local Professionals",
        description:
          "Get connected with verified professionals from your community who know the area and understand your specific needs.",
      },
      {
        title: "Personalized Service",
        description:
          "We ensure high-quality services tailored to your preferences, with a focus on trust and transparency in every booking.",
      },
      {
        title: "24/7 Accessibility",
        description:
          "Book services anytime, anywhere. Our easy-to-use platform allows you to schedule help whenever it suits you.",
      },
    ].map((item) => (
      <div key={item.title} className="relative group">
        <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg transform group-hover:scale-105 transition-transform duration-300 filter blur-lg opacity-75"></div>
        <div className="relative h-full bg-gray-800 bg-opacity-80 backdrop-filter backdrop-blur-md rounded-lg p-8">
          <h3 className="text-2xl font-semibold text-white mb-4">{item.title}</h3>
          <p className="text-gray-300">{item.description}</p>
        </div>
      </div>
    ))}
  </div>
</div>

      </div>
    </section>
  );
}
