import React from 'react'
import { NavLink } from 'react-router-dom';
import { 
  Users, 
  BookOpen, 
  Telescope, 
  Star 
} from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-20 bg-gray-100 relative overflow-hidden">
      {/* Background Animation - soft white sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${1 + Math.random() * 2}s`
            }}
          >
            <Star className="w-1 h-1 text-purple-300/20" />
          </div>
        ))}
      </div>

      <div className="max-w-4xl  mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Ready to Explore the Universe?
        </h2>
        <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
          Join NPAS today and become part of a community that's passionate about pushing the boundaries of scientific knowledge and discovery.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <NavLink
            to="/join"
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2"
          >
            <Users className="w-6 h-6" />
            <span>Join Our Society</span>
          </NavLink>
          <NavLink
            to="/teams"
            className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
          >
            <Telescope className="w-6 h-6" />
            <span>Explore Teams</span>
          </NavLink>
          <NavLink
            to="/blog"
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
          >
            <BookOpen className="w-6 h-6" />
            <span>Read Articles</span>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
