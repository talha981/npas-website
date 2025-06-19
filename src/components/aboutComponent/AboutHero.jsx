
import React from "react";
import { Users, BookOpen, Calendar } from "lucide-react";

const AboutHero = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <div className="text-center">
  <h2 className="text-4xl md:text-5xl font-bold mb-4 
                 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 
                 bg-clip-text text-transparent inline-block">
    About NPAS
  </h2>

  <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto">
    NUST Physics & Astronomy Society
  </p>
  <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
    At NPAS, we are passionate about igniting curiosity and fostering a
    deep appreciation for the wonders of physics and astronomy. As one
    of the premier student-run organizations at the National University
    of Sciences & Technology (NUST), H-12 Campus, we serve as a bridge
    between academic learning and real-world scientific exploration.
  </p>
</div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4 mx-auto">
              <Users className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">15 Teams</h3>
            <p className="text-gray-600">
              Specialized teams working on diverse physics and astronomy
              projects
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 mx-auto">
              <BookOpen className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Knowledge Hub
            </h3>
            <p className="text-gray-600">
              Managing blogs, social media, and educational content
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4 mx-auto">
              <Calendar className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Events & Programs
            </h3>
            <p className="text-gray-600">
              Expert interviews, astronomy nights, and scientific workshops
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
