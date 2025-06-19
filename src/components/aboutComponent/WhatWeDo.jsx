import React from 'react'
import { 
  Telescope, 
  Users, 
  BookOpen, 
  
  Calendar
} from 'lucide-react';
const WhatWeDo = () => {
  const activities = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Educational Content Creation",
      description: "We produce high-quality blog posts, articles, and educational materials that make complex physics and astronomy concepts accessible to students at all levels.",
      features: ["Weekly blog posts", "Simplified explanations", "Visual learning aids", "Interactive content"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Social Media Engagement",
      description: "Our active social media presence shares fascinating scientific discoveries, daily astronomy facts, and engages with the global scientific community.",
      features: ["Daily space facts", "Research highlights", "Student spotlights", "Science memes & visuals"]
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Expert Interviews",
      description: "We host exclusive interviews with renowned physicists, astronomers, and researchers, providing students direct access to industry experts.",
      features: ["Monthly expert sessions", "Career guidance", "Research insights", "Q&A opportunities"]
    },
    {
      icon: <Telescope className="w-8 h-8" />,
      title: "Astronomy Nights",
      description: "Regular stargazing events where we set up telescopes and guide students through astronomical observations of planets, stars, and celestial phenomena.",
      features: ["Telescope observations", "Constellation tours", "Astrophotography", "Solar system exploration"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What <span className="text-purple-400">We Do</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Bridging the gap between academic physics and real-world astronomical exploration through diverse programs and initiatives
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {activities.map((activity, index) => (
            <div key={index} className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 p-8 rounded-xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mr-4">
                  <div className="text-white">
                    {activity.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white">{activity.title}</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {activity.description}
              </p>
              <div className="grid grid-cols-2 gap-3">
                {activity.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 p-8 rounded-xl border border-purple-500/20">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-4">Our Impact</h3>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Through these activities, we've created a thriving ecosystem where curiosity meets knowledge, 
                and passion transforms into expertise.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">200+</div>
                <p className="text-gray-300">Blog Articles Published</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">50K+</div>
                <p className="text-gray-300">Social Media Reach</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-indigo-400 mb-2">25+</div>
                <p className="text-gray-300">Expert Interviews</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-400 mb-2">100+</div>
                <p className="text-gray-300">Astronomy Night Participants</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo
