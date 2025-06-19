import React, { useState } from 'react';
import { 
  Users, 
  ChevronDown, 
  ChevronUp, 
  Mail, 
  Linkedin, 
  Github,
  BookOpen,
  Camera,
  Code,
  Calendar,
  Megaphone,
  DollarSign,
  UserCheck,
  Handshake,
  GraduationCap,
  Shield,
  Lightbulb,
  Telescope,
  PenTool,
  Instagram
} from 'lucide-react';

const TeamComponents = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [expandedTeam, setExpandedTeam] = useState(null);

  const teamCategories = [
    'All',
    'Content & Media',
    'Events & Outreach', 
    'Technical & Research',
    'Operations & Leadership'
  ];

  const teams = [
    // Content & Media Teams
    {
      id: 1,
      name: "Blog Writing Team",
      category: "Content & Media",
      icon: <BookOpen className="w-6 h-6" />,
      description: "Creates engaging educational content about physics and astronomy topics for our blog and website.",
      responsibilities: [
        "Write weekly blog posts on physics and astronomy topics",
        "Research and fact-check scientific content",
        "Collaborate with experts for accurate information",
        "Maintain content calendar and publishing schedule"
      ],
      directors: [
        {
          name: "Sarah Ahmed",
          position: "Lead Content Director",
          bio: "Physics major with a passion for science communication. Published 50+ articles on quantum mechanics and astrophysics.",
          image: "👩‍💻",
          email: "sarah.ahmed@nust.edu.pk",
          linkedin: "sarah-ahmed-npas"
        },
        {
          name: "Ali Hassan",
          position: "Research Director",
          bio: "Astronomy enthusiast and research coordinator. Specializes in making complex topics accessible to students.",
          image: "👨‍🔬",
          email: "ali.hassan@nust.edu.pk",
          linkedin: "ali-hassan-research"
        }
      ],
      members: [
        "Fatima Khan", "Ahmed Malik", "Zara Sheikh", "Hassan Ali", "Aisha Tariq"
      ]
    },
    {
      id: 2,
      name: "Social Media Team",
      category: "Content & Media",
      icon: <Instagram className="w-6 h-6" />,
      description: "Manages all social media platforms and creates engaging visual content to reach wider audiences.",
      responsibilities: [
        "Daily posts on Instagram, Facebook, and Twitter",
        "Create science memes and infographics",
        "Engage with followers and scientific community",
        "Track analytics and optimize content strategy"
      ],
      directors: [
        {
          name: "Maryam Siddique",
          position: "Social Media Director",
          bio: "Digital marketing expert with 2+ years experience. Grew NPAS social media following by 300%.",
          image: "👩‍💼",
          email: "maryam.siddique@nust.edu.pk",
          linkedin: "maryam-siddique-digital"
        },
        {
          name: "Omar Khalil",
          position: "Content Strategy Director",
          bio: "Creative content creator specializing in science communication through visual storytelling.",
          image: "👨‍🎨",
          email: "omar.khalil@nust.edu.pk",
          linkedin: "omar-khalil-creative"
        }
      ],
      members: [
        "Noor Fatima", "Bilal Ahmed", "Sana Iqbal", "Hasan Raza"
      ]
    },
    {
      id: 3,
      name: "Graphic Design Team",
      category: "Content & Media",
      icon: <PenTool className="w-6 h-6" />,
      description: "Creates visual content, infographics, and designs for all NPAS materials and events.",
      responsibilities: [
        "Design posters and banners for events",
        "Create educational infographics",
        "Develop visual branding materials",
        "Design certificates and promotional content"
      ],
      directors: [
        {
          name: "Ayesha Rehman",
          position: "Creative Director",
          bio: "Professional graphic designer with expertise in scientific illustration and visual communication.",
          image: "👩‍🎨",
          email: "ayesha.rehman@nust.edu.pk",
          linkedin: "ayesha-rehman-design"
        },
        {
          name: "Usman Tariq",
          position: "Visual Content Director",
          bio: "UI/UX designer passionate about making science visually appealing and accessible.",
          image: "👨‍💻",
          email: "usman.tariq@nust.edu.pk",
          linkedin: "usman-tariq-visual"
        }
      ],
      members: [
        "Hira Malik", "Faisal Sheikh", "Rafia Ahmed"
      ]
    },

    // Events & Outreach Teams
    {
      id: 4,
      name: "Event Management Team",
      category: "Events & Outreach",
      icon: <Calendar className="w-6 h-6" />,
      description: "Plans and executes all NPAS events including astronomy nights, workshops, and seminars.",
      responsibilities: [
        "Organize monthly astronomy nights",
        "Plan workshops and educational seminars",
        "Coordinate with venues and equipment",
        "Manage event logistics and registration"
      ],
      directors: [
        {
          name: "Hamza Malik",
          position: "Event Director",
          bio: "Experienced event coordinator with 3+ years managing scientific conferences and workshops.",
          image: "👨‍💼",
          email: "hamza.malik@nust.edu.pk",
          linkedin: "hamza-malik-events"
        },
        {
          name: "Zainab Ali",
          position: "Operations Director",
          bio: "Logistics expert specializing in educational event management and student engagement.",
          image: "👩‍💼",
          email: "zainab.ali@nust.edu.pk",
          linkedin: "zainab-ali-ops"
        }
      ],
      members: [
        "Kashif Ahmed", "Maham Siddique", "Arslan Khan", "Nimra Tariq", "Saad Hassan", "Farah Malik"
      ]
    },
    {
      id: 5,
      name: "Guest Relations Team",
      category: "Events & Outreach",
      icon: <Handshake className="w-6 h-6" />,
      description: "Coordinates with external experts, manages interviews, and builds professional relationships.",
      responsibilities: [
        "Invite and coordinate with guest speakers",
        "Conduct expert interviews",
        "Manage professional partnerships",
        "Handle VIP guest arrangements"
      ],
      directors: [
        {
          name: "Dr. Maria Khan",
          position: "Relations Director",
          bio: "PhD in Astrophysics with extensive network in academic and research communities.",
          image: "👩‍🔬",
          email: "maria.khan@nust.edu.pk",
          linkedin: "dr-maria-khan"
        },
        {
          name: "Shahzad Ahmed",
          position: "Partnership Director",
          bio: "Business relations expert with strong connections in scientific and educational sectors.",
          image: "👨‍💼",
          email: "shahzad.ahmed@nust.edu.pk",
          linkedin: "shahzad-ahmed-partnerships"
        }
      ],
      members: [
        "Samra Malik", "Adnan Sheikh", "Kiran Fatima", "Waqas Ali"
      ]
    },
    {
      id: 6,
      name: "Photography Team",
      category: "Events & Outreach",
      icon: <Camera className="w-6 h-6" />,
      description: "Documents events, creates astrophotography content, and manages visual archives.",
      responsibilities: [
        "Event photography and videography",
        "Astrophotography sessions",
        "Create visual documentation",
        "Maintain photo archives and galleries"
      ],
      directors: [
        {
          name: "Asad Iqbal",
          position: "Photography Director",
          bio: "Professional photographer specializing in scientific events and astrophotography.",
          image: "👨‍📸",
          email: "asad.iqbal@nust.edu.pk",
          linkedin: "asad-iqbal-photo"
        }
      ],
      members: [
        "Sundas Ahmed", "Talha Malik", "Arooj Khan"
      ]
    },

    // Technical & Research Teams
    {
      id: 7,
      name: "Research Team",
      category: "Technical & Research",
      icon: <Telescope className="w-6 h-6" />,
      description: "Conducts scientific research projects and supports student research initiatives.",
      responsibilities: [
        "Lead undergraduate research projects",
        "Publish scientific papers",
        "Collaborate with faculty on research",
        "Mentor junior researchers"
      ],
      directors: [
        {
          name: "Dr. Ahmed Hassan",
          position: "Research Director",
          bio: "PhD in Theoretical Physics with 20+ publications in peer-reviewed journals.",
          image: "👨‍🔬",
          email: "ahmed.hassan@nust.edu.pk",
          linkedin: "dr-ahmed-hassan-research"
        },
        {
          name: "Sobia Malik",
          position: "Student Research Coordinator",
          bio: "Masters in Astrophysics, coordinates student research projects and publications.",
          image: "👩‍🔬",
          email: "sobia.malik@nust.edu.pk",
          linkedin: "sobia-malik-research"
        }
      ],
      members: [
        "Owais Ahmed", "Laiba Sheikh", "Junaid Ali", "Mehwish Khan", "Raheel Malik"
      ]
    },
    {
      id: 8,
      name: "Web Development Team",
      category: "Technical & Research",
      icon: <Code className="w-6 h-6" />,
      description: "Develops and maintains NPAS website and digital platforms.",
      responsibilities: [
        "Website development and maintenance",
        "Create interactive educational tools",
        "Manage databases and user systems",
        "Implement new digital features"
      ],
      directors: [
        {
          name: "Hassan Sheikh",
          position: "Lead Developer",
          bio: "Full-stack developer with expertise in React, Node.js, and educational technology platforms.",
          image: "👨‍💻",
          email: "hassan.sheikh@nust.edu.pk",
          linkedin: "hassan-sheikh-dev",
          github: "hassan-sheikh-dev"
        },
        {
          name: "Amna Tariq",
          position: "UI/UX Director",
          bio: "Frontend specialist focused on creating intuitive user experiences for educational platforms.",
          image: "👩‍💻",
          email: "amna.tariq@nust.edu.pk",
          linkedin: "amna-tariq-ux"
        }
      ],
      members: [
        "Bilal Hassan", "Nida Ahmed", "Farhan Ali"
      ]
    },
    {
      id: 9,
      name: "Equipment Team",
      category: "Technical & Research",
      icon: <Shield className="w-6 h-6" />,
      description: "Manages telescopes, laboratory equipment, and technical resources.",
      responsibilities: [
        "Maintain telescopes and optical equipment",
        "Setup equipment for astronomy nights",
        "Manage laboratory resources",
        "Train members on equipment usage"
      ],
      directors: [
        {
          name: "Imran Malik",
          position: "Equipment Director",
          bio: "Technical expert with extensive experience in astronomical equipment and laboratory management.",
          image: "👨‍🔧",
          email: "imran.malik@nust.edu.pk",
          linkedin: "imran-malik-tech"
        },
        {
          name: "Faiza Ahmed",  
          position: "Safety Coordinator",
          bio: "Safety specialist ensuring proper equipment handling and laboratory protocols.",
          image: "👩‍🔧",
          email: "faiza.ahmed@nust.edu.pk",
          linkedin: "faiza-ahmed-safety"
        }
      ],
      members: [
        "Umer Sheikh", "Sidra Khan", "Nabeel Ali", "Huma Malik"
      ]
    },

    // Operations & Leadership Teams  
    {
      id: 10,
      name: "Finance Team",
      category: "Operations & Leadership",
      icon: <DollarSign className="w-6 h-6" />,
      description: "Manages budget, fundraising, and financial planning for all NPAS activities.",
      responsibilities: [
        "Budget planning and management",
        "Fundraising for events and equipment",
        "Financial reporting and transparency",
        "Sponsorship coordination"
      ],
      directors: [
        {
          name: "Rabia Hassan",
          position: "Finance Director",
          bio: "Business Administration major with expertise in non-profit financial management.",
          image: "👩‍💼",
          email: "rabia.hassan@nust.edu.pk",
          linkedin: "rabia-hassan-finance"
        },
        {
          name: "Kashif Malik",
          position: "Fundraising Director", 
          bio: "Experienced in grant writing and corporate partnerships for educational initiatives.",
          image: "👨‍💼",
          email: "kashif.malik@nust.edu.pk",
          linkedin: "kashif-malik-fundraising"
        }
      ],
      members: [
        "Saima Ahmed", "Tariq Ali", "Noor Sheikh"
      ]
    },
    {
      id: 11,
      name: "HR Team",
      category: "Operations & Leadership",
      icon: <UserCheck className="w-6 h-6" />,
      description: "Handles recruitment, member relations, and human resource management.",
      responsibilities: [
        "Recruit new team members",
        "Manage member relations and conflicts",
        "Organize training and development",
        "Maintain member database and records"
      ],
      directors: [
        {
          name: "Sadaf Khan",
          position: "HR Director",
          bio: "Psychology major specializing in organizational behavior and team dynamics.",
          image: "👩‍💼",
          email: "sadaf.khan@nust.edu.pk",
          linkedin: "sadaf-khan-hr"
        },
        {
          name: "Adeel Ahmed",
          position: "Training Director",
          bio: "Experienced in member development and skill-building programs for student organizations.",
          image: "👨‍🏫",
          email: "adeel.ahmed@nust.edu.pk", 
          linkedin: "adeel-ahmed-training"
        }
      ],
      members: [
        "Maira Malik", "Zohaib Sheikh", "Rida Ali", "Hamad Khan"
      ]
    },
    {
      id: 12,
      name: "Public Relations Team",
      category: "Operations & Leadership",
      icon: <Megaphone className="w-6 h-6" />,
      description: "Manages external communications, partnerships, and public image of NPAS.",
      responsibilities: [
        "External communications and PR",
        "Build partnerships with other organizations",
        "Manage media relations",
        "Represent NPAS at external events"
      ],
      directors: [
        {
          name: "Hania Tariq",
          position: "PR Director",
          bio: "Communications expert with strong media relations and public speaking skills.",
          image: "👩‍💼",
          email: "hania.tariq@nust.edu.pk",
          linkedin: "hania-tariq-pr"
        },
        {
          name: "Salman Ali",
          position: "External Relations Director",
          bio: "Experienced in building strategic partnerships and inter-organizational collaborations.",
          image: "👨‍💼",
          email: "salman.ali@nust.edu.pk",
          linkedin: "salman-ali-relations"
        }
      ],
      members: [
        "Zoya Ahmed", "Fahad Malik", "Sana Sheikh"
      ]
    },
    {
      id: 13,
      name: "Academic Liaison Team", 
      category: "Operations & Leadership",
      icon: <GraduationCap className="w-6 h-6" />,
      description: "Coordinates with faculty and academic departments for curriculum support.",
      responsibilities: [
        "Liaise with physics and astronomy faculty",
        "Support curriculum development",
        "Coordinate academic events",
        "Bridge student-faculty communication"
      ],
      directors: [
        {
          name: "Dr. Saira Malik",
          position: "Academic Director",
          bio: "PhD in Physics, liaison between NPAS and academic departments.",
          image: "👩‍🎓",
          email: "saira.malik@nust.edu.pk",
          linkedin: "dr-saira-malik-academic"
        },
        {
          name: "Waqas Hassan",
          position: "Curriculum Coordinator",
          bio: "Masters in Physics Education, specializes in bridging academic and practical learning.",
          image: "👨‍🎓",
          email: "waqas.hassan@nust.edu.pk",
          linkedin: "waqas-hassan-curriculum"
        }
      ],
      members: [
        "Ayesha Ali", "Muneeb Sheikh", "Fatima Ahmed", "Rizwan Malik"
      ]
    },
    {
      id: 14,
      name: "Quality Assurance Team",
      category: "Operations & Leadership", 
      icon: <Shield className="w-6 h-6" />,
      description: "Ensures content quality, standards compliance, and maintains NPAS reputation.",
      responsibilities: [
        "Review all published content",
        "Maintain quality standards",
        "Fact-check scientific information",
        "Monitor brand consistency"
      ],
      directors: [
        {
          name: "Nadia Ahmed",
          position: "Quality Director",
          bio: "Editor and content strategist with expertise in scientific writing and fact-checking.",
          image: "👩‍💼",
          email: "nadia.ahmed@nust.edu.pk",
          linkedin: "nadia-ahmed-quality"
        },
        {
          name: "Ahsan Malik",
          position: "Standards Coordinator",
          bio: "Quality assurance specialist ensuring all NPAS outputs meet professional standards.",
          image: "👨‍💼",
          email: "ahsan.malik@nust.edu.pk",
          linkedin: "ahsan-malik-standards"
        }
      ],
      members: [
        "Samina Sheikh", "Daniyal Ali", "Kinza Ahmed"
      ]
    },
    {
      id: 15,
      name: "Innovation Team",
      category: "Operations & Leadership",
      icon: <Lightbulb className="w-6 h-6" />,
      description: "Develops new initiatives, creative projects, and future-focused programs.",
      responsibilities: [
        "Brainstorm new project ideas",
        "Develop innovative programs",
        "Pilot experimental initiatives", 
        "Research emerging trends in science education"
      ],
      directors: [
        {
          name: "Iqra Hassan",
          position: "Innovation Director",
          bio: "Creative strategist and entrepreneur focused on educational technology and innovation.",
          image: "👩‍💡",
          email: "iqra.hassan@nust.edu.pk",
          linkedin: "iqra-hassan-innovation"
        },
        {
          name: "Fawad Sheikh",
          position: "Projects Director",
          bio: "Project management expert specializing in creative and experimental educational initiatives.",
          image: "👨‍💡",
          email: "fawad.sheikh@nust.edu.pk",
          linkedin: "fawad-sheikh-projects"
        }
      ],
      members: [
        "Minahil Ahmed", "Usama Ali", "Sehrish Malik", "Taha Khan"
      ]
    }
  ];

  const filteredTeams = activeFilter === 'All' 
    ? teams 
    : teams.filter(team => team.category === activeFilter);

  const toggleTeamExpansion = (teamId) => {
    setExpandedTeam(expandedTeam === teamId ? null : teamId);
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Content & Media': 'from-blue-500 to-purple-500',
      'Events & Outreach': 'from-green-500 to-teal-500', 
      'Technical & Research': 'from-purple-500 to-pink-500',
      'Operations & Leadership': 'from-orange-500 to-red-500'
    };
    return colors[category] || 'from-gray-500 to-gray-600';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-purple-400">Teams</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Meet the dedicated individuals who make NPAS a thriving community of physics and astronomy enthusiasts
            </p>
            <div className="flex items-center justify-center space-x-8 text-gray-300">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">15</div>
                <p className="text-sm">Specialized Teams</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">30+</div>  
                <p className="text-sm">Team Directors</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-400">70+</div>
                <p className="text-sm">Active Members</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {teamCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Teams Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredTeams.map((team) => (
              <div key={team.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Team Header */}
                <div className="p-6 border-b">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${getCategoryColor(team.category)}`}>
                        <div className="text-white">
                          {team.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">{team.name}</h3>
                        <span className="text-sm text-purple-600 bg-purple-100 px-2 py-1 rounded-full">
                          {team.category}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleTeamExpansion(team.id)}
                      className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                    >
                      {expandedTeam === team.id ? (
                        <ChevronUp className="w-5 h-5 text-gray-600" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-600" />
                      )}
                    </button>
                  </div>
                  <p className="text-gray-600 mt-3">{team.description}</p>
                </div>

                {/* Team Details (Expandable) */}
                {expandedTeam === team.id && (
                  <div className="p-6 space-y-6">
                    {/* Responsibilities */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Responsibilities</h4>
                      <ul className="space-y-2">
                        {team.responsibilities.map((responsibility, index) => (
                          <li key={index} className="flex items-start">
                            <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-600">{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Directors */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-4">Team Directors</h4>
                      <div className="space-y-4">
                        {team.directors.map((director, index) => (
                          <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                            <div className="text-4xl">{director.image}</div>
                            <div className="flex-1">
                              <h5 className="font-semibold text-gray-800">{director.name}</h5>
                              <p className="text-sm text-purple-600 mb-2">{director.position}</p>
                              <p className="text-sm text-gray-600 mb-3">{director.bio}</p>
                              <div className="flex space-x-3">
                                <a href={`mailto:${director.email}`} className="text-gray-400 hover:text-purple-600 transition-colors">
                                  <Mail className="w-4 h-4" />
                                </a>
                                <a href={`https://linkedin.com/in/${director.linkedin}`} className="text-gray-400 hover:text-blue-600 transition-colors">
                                  <Linkedin className="w-4 h-4" />
                                </a>
                                {director.github && (
                                  <a href={`https://github.com/${director.github}`} className="text-gray-400 hover:text-gray-800 transition-colors">
                                    <Github className="w-4 h-4" />
                                  </a>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Team Members */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">Team Members</h4>
                      <div className="flex flex-wrap gap-2">
                        {team.members.map((member, index) => (
                          <span key={index} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                            {member}
                          </span>
                        ))}
                      </div>
                      <p className="text-sm text-gray-500 mt-2">
                        {team.members.length} active members
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Teams CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Join Our Teams</h2>
          <p className="text-lg text-gray-200 mb-8">
            Ready to contribute to NPAS? We're always looking for passionate students to join our diverse teams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Apply Now
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamComponents;