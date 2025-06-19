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
const TeamStructure = () => {
  const teamCategories = [
    {
      category: "Content & Media",
      teams: [
        { name: "Blog Writing Team", focus: "Educational articles and research content", members: "5-7 members" },
        { name: "Social Media Team", focus: "Instagram, Facebook, Twitter management", members: "4-6 members" },
        { name: "Graphic Design Team", focus: "Visual content and infographics", members: "3-5 members" }
      ],
      color: "from-blue-500 to-purple-500"
    },
    {
      category: "Events & Outreach",
      teams: [
        { name: "Event Management Team", focus: "Astronomy nights and workshops", members: "6-8 members" },
        { name: "Guest Relations Team", focus: "Expert interviews and collaborations", members: "4-5 members" },
        { name: "Photography Team", focus: "Event documentation and astrophotography", members: "3-4 members" }
      ],
      color: "from-green-500 to-teal-500"
    },
    {
      category: "Technical & Research",
      teams: [
        { name: "Research Team", focus: "Scientific projects and publications", members: "5-6 members" },
        { name: "Web Development Team", focus: "Website and digital platforms", members: "3-4 members" },
        { name: "Equipment Team", focus: "Telescope and lab equipment management", members: "4-5 members" }
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      category: "Operations & Leadership",
      teams: [
        { name: "Finance Team", focus: "Budget management and fundraising", members: "3-4 members" },
        { name: "HR Team", focus: "Recruitment and member relations", members: "4-5 members" },
        { name: "Public Relations Team", focus: "External partnerships and networking", members: "3-4 members" },
        { name: "Academic Liaison Team", focus: "Faculty coordination and curriculum support", members: "4-5 members" },
        { name: "Quality Assurance Team", focus: "Content review and standards", members: "3-4 members" },
        { name: "Innovation Team", focus: "New initiatives and creative projects", members: "4-6 members" }
      ],
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Our Team Structure
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            15 specialized teams working together to advance physics and astronomy education at NUST
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {teamCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className={`w-4 h-4 bg-gradient-to-r ${category.color} rounded-full mr-3`}></div>
                <h3 className="text-2xl font-bold text-gray-800">{category.category}</h3>
              </div>
              
              <div className="space-y-4">
                {category.teams.map((team, teamIndex) => (
                  <div key={teamIndex} className="border-l-4 border-gray-200 hover:border-purple-400 pl-4 py-3 transition-all duration-300">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-gray-800">{team.name}</h4>
                      <span className="text-sm text-purple-600 bg-purple-100 px-2 py-1 rounded-full">
                        {team.members}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">{team.focus}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8 text-white">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">Leadership Structure</h3>
              <p className="text-lg opacity-90 max-w-2xl mx-auto">
                Each team is led by 2-3 experienced directors who guide projects, mentor members, and ensure quality output
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <div className="text-2xl font-bold mb-2">30+</div>
                <p className="text-sm opacity-90">Team Directors</p>
              </div>
              <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <div className="text-2xl font-bold mb-2">70+</div>
                <p className="text-sm opacity-90">Active Members</p>
              </div>
              <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <div className="text-2xl font-bold mb-2">15</div>
                <p className="text-sm opacity-90">Specialized Teams</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Join Our Team</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              We're always looking for passionate students to join our diverse teams. Whether you're interested in writing, 
              event planning, research, or technical work, there's a place for you at NPAS. Each team provides mentorship, 
              skill development, and opportunities to make a real impact in the scientific community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Apply Now
              </button>
              <button className="border-2 border-purple-600 text-purple-700 hover:bg-purple-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamStructure
