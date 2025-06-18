import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Calendar, 
  Rocket, 
  Star 
} from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroSlides = [
    {
      id: 1,
      title: "Explore the Universe",
      subtitle: "NUST Physics & Astronomy Society",
      description: "Join us in unraveling the mysteries of the cosmos through scientific exploration, research, and discovery.",
      image: "🌌",
      gradient: "from-purple-600 via-blue-600 to-indigo-600"
    },
    {
      id: 2,
      title: "Discover. Learn. Innovate.",
      subtitle: "Where Science Meets Wonder",
      description: "Engage with cutting-edge physics research, astronomical observations, and collaborative learning experiences.",
      image: "🔭",
      gradient: "from-slate-600 via-purple-600 to-slate-600"
    },
    {
      id: 3,
      title: "Shape the Future",
      subtitle: "Next Generation Scientists",
      description: "Be part of a community that's pushing the boundaries of scientific knowledge and technological advancement.",
      image: "🚀",
      gradient: "from-indigo-600 via-purple-600 to-pink-600"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <section className="relative h-screen overflow-hidden bg-gray-100">
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Animated Stars */}
          <div className="absolute inset-0">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 3}s`
                }}
              >
                <Star className="w-1 h-1 text-gray-300" />
              </div>
            ))}
          </div>

          <div className="relative z-10 h-full flex items-center justify-center px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className={`text-5xl md:text-7xl font-bold mb-4 animate-fade-in bg-gradient-to-r ${slide.gradient} bg-clip-text text-transparent`}>
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-6 animate-fade-in-delay">
                {slide.subtitle}
              </p>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in-delay-2">
                {slide.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-3">
                <NavLink
                  to="/join"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <Rocket className="w-5 h-5" />
                  <span>Join NPAS</span>
                </NavLink>
                <NavLink
                  to="/events"
                  className="border-2 border-purple-600 text-purple-700 hover:bg-purple-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-5 h-5" />
                  <span>View Events</span>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-purple-500 w-8' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
