import React from 'react'
import { NavLink } from 'react-router-dom';
import { 
  Telescope,
  Rocket,
  Globe,

} from 'lucide-react';


const MissionOverview = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-purple-400">Mission</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            To foster scientific curiosity, promote astronomical research, and build a community of passionate physics and astronomy enthusiasts at NUST.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 p-8 rounded-xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center justify-center w-16 h-16 bg-purple-600 rounded-full mb-6 mx-auto">
              <Telescope className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 text-center">Explore</h3>
            <p className="text-gray-300 text-center">
              Discover the wonders of the universe through hands-on observations, experiments, and collaborative research projects.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-900/50 to-indigo-900/50 p-8 rounded-xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6 mx-auto">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 text-center">Connect</h3>
            <p className="text-gray-300 text-center">
              Build lasting relationships with fellow scientists, researchers, and industry professionals in the field of physics and astronomy.
            </p>
          </div>

          <div className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 p-8 rounded-xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center justify-center w-16 h-16 bg-indigo-600 rounded-full mb-6 mx-auto">
              <Rocket className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 text-center">Innovate</h3>
            <p className="text-gray-300 text-center">
              Push the boundaries of scientific knowledge through innovative research, creative problem-solving, and technological advancement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionOverview
