import React from 'react'
import { 
  Telescope, 
  Users, 
  Award, 
  BookOpen, 
  Star, 
  Lightbulb,
  Target,
  History,
  Trophy,
  Calendar
} from 'lucide-react';
const AchievementsSection = () => {
  const achievements = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Best Student Society 2023",
      description: "Recognized as the outstanding student organization at NUST for our contributions to scientific education",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "5000+ Community Members",
      description: "Built a thriving online and offline community of physics and astronomy enthusiasts",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "100+ Educational Posts",
      description: "Published comprehensive educational content reaching thousands of students nationwide",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "50+ Successful Events",
      description: "Organized workshops, astronomy nights, and expert lectures with high participation rates",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Research Publications",
      description: "Supported student research projects resulting in peer-reviewed publications",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: <Telescope className="w-8 h-8" />,
      title: "Observatory Partnership",
      description: "Established collaboration with national observatories for enhanced learning experiences",
      color: "from-indigo-500 to-blue-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-purple-400">Achievements</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Celebrating milestones and recognizing the impact we've made in the scientific community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-gradient-to-br from-purple-900/50 to-slate-900/50 p-6 rounded-xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 transform hover:scale-105">
              <div className={`flex items-center justify-center w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-full mb-6 mx-auto`}>
                <div className="text-white">
                  {achievement.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">{achievement.title}</h3>
              <p className="text-gray-300 text-center leading-relaxed">{achievement.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-8 rounded-xl border border-purple-500/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Notable Past Events</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="text-left">
                <h4 className="text-lg font-semibold text-purple-400 mb-2">Cosmic Conversations Series</h4>
                <p className="text-gray-300 text-sm">Monthly interviews with leading astrophysicists and cosmologists from around the world</p>
              </div>
              <div className="text-left">
                <h4 className="text-lg font-semibold text-blue-400 mb-2">Stargazing Expeditions</h4>
                <p className="text-gray-300 text-sm">Organized trips to dark-sky locations for optimal astronomical observations</p>
              </div>
              <div className="text-left">
                <h4 className="text-lg font-semibold text-indigo-400 mb-2">Physics Olympiad Training</h4>
                <p className="text-gray-300 text-sm">Comprehensive preparation programs for national and international physics competitions</p>
              </div>
              <div className="text-left">
                <h4 className="text-lg font-semibold text-teal-400 mb-2">Research Symposium</h4>
                <p className="text-gray-300 text-sm">Annual showcase of undergraduate research projects and scientific innovations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

}

export default AchievementsSection
