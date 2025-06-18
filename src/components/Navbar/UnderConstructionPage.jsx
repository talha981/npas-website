import React, { useState, useEffect } from 'react';
import { 
  Wrench, 
  Star, 
  Rocket, 
  Home,
  Clock,
  Zap
} from 'lucide-react';
import { NavLink } from 'react-router-dom';


const UnderConstructionPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [dots, setDots] = useState('');

  const constructionMessages = [
    {
      id: 1,
      title: "Page Under Construction",
      subtitle: "We're Building Something Amazing",
      description: "Our team is working hard to bring you an incredible experience. Stay tuned for exciting updates!",
      icon: "🚧",
      gradient: "from-purple-600 via-blue-600 to-indigo-600"
    },
    {
      id: 2,
      title: "Coming Soon",
      subtitle: "Innovation in Progress",
      description: "Great things take time. We're crafting every detail to ensure the best possible experience for you.",
      icon: "⚡",
      gradient: "from-slate-600 via-purple-600 to-slate-600"
    },
    {
      id: 3,
      title: "Almost Ready",
      subtitle: "Final Touches in Progress",
      description: "We're putting the finishing touches on this page. Thank you for your patience as we perfect every detail.",
      icon: "🎯",
      gradient: "from-indigo-600 via-purple-600 to-pink-600"
    }
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % constructionMessages.length);
    }, 4000);
    return () => clearInterval(slideInterval);
  }, []);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + Math.random() * 15;
      });
    }, 800);
    return () => clearInterval(progressInterval);
  }, []);

  useEffect(() => {
    const dotsInterval = setInterval(() => {
      setDots((prev) => {
        if (prev.length >= 3) return '';
        return prev + '.';
      });
    }, 500);
    return () => clearInterval(dotsInterval);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-100">
      {constructionMessages.map((message, index) => (
        <div
          key={message.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >


        

          <div className="relative z-10 h-full flex items-center justify-center px-4 py-20">
            <div className="text-center max-w-4xl mx-auto">
            


              <h1 className={`text-4xl md:text-6xl font-bold mb-4 animate-fade-in bg-gradient-to-r ${message.gradient} bg-clip-text text-transparent`}>
                {message.title}
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-700 mb-6 animate-fade-in-delay">
                {message.subtitle}
              </p>
              
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in-delay-2">
                {message.description}
              </p>

             

              {/* Loading Text */}
              <div className="mb-8">
                <p className="text-purple-600 font-semibold text-lg">
                  Loading{dots}
                </p>
              </div>

           

              {/* ETA */}
              <div className="mt-8 text-gray-500 animate-fade-in-delay-4">
                <p className="text-sm">
                  Estimated completion: <span className="text-purple-600 font-semibold">Coming Soon</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {constructionMessages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-purple-500 w-8' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Animated CSS Styles */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        
        .animate-fade-in-delay {
          animation: fade-in 0.6s ease-out 0.2s both;
        }
        
        .animate-fade-in-delay-2 {
          animation: fade-in 0.6s ease-out 0.4s both;
        }
        
        .animate-fade-in-delay-3 {
          animation: fade-in 0.6s ease-out 0.6s both;
        }
        
        .animate-fade-in-delay-4 {
          animation: fade-in 0.6s ease-out 0.8s both;
        }
      `}</style>
    </div>
  );
};

export default UnderConstructionPage;