import React from 'react';
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

const HistorySection = () => {
  const milestones = [
    {
      year: "2018",
      title: "Foundation",
      description: "NPAS was established as a student-led initiative to promote physics and astronomy education at NUST"
    },
    {
      year: "2019",
      title: "First Astronomy Night",
      description: "Organized our inaugural stargazing event, attracting over 200 students and faculty members"
    },
    {
      year: "2020",
      title: "Digital Expansion",
      description: "Launched our blog and social media presence, reaching thousands of science enthusiasts"
    },
    {
      year: "2021",
      title: "Research Collaborations",
      description: "Initiated partnerships with leading universities and research institutions"
    },
    {
      year: "2022",
      title: "Expert Lecture Series",
      description: "Started hosting interviews and lectures with renowned physicists and astronomers"
    },
    {
      year: "2023",
      title: "Team Expansion",
      description: "Grew to 15 specialized teams covering all aspects of physics and astronomy outreach"
    }
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Our Journey
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            From a small group of passionate students to a thriving community of scientific explorers
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-600 to-blue-600 rounded-full"></div>
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <div className={`flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full ${index % 2 === 0 ? 'ml-auto mr-4' : 'mr-auto ml-4'}`}>
                        <History className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-purple-600">{milestone.year}</h3>
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">{milestone.title}</h4>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
                
                <div className="relative flex items-center justify-center w-8 h-8">
                  <div className="w-6 h-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                </div>
                
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

      
      </div>
    </section>
  );
};
export default HistorySection
