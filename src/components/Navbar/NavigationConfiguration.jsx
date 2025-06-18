import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  Home, 
  Users, 
  Calendar, 
  BookOpen, 
  Camera, 
  UserPlus, 
  Mail, 
  Info,
  LogIn,
  Menu,
  X,
  Telescope,
  Star
} from 'lucide-react';

const NavigationConfiguration = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Navigation items for public role
  const publicNavItems = [
    {
      id: 'home',
      label: 'Home',
      icon: Home,
      path: '/',
      description: 'Welcome to NPAS'
    },
    {
      id: 'about',
      label: 'About Us',
      icon: Info,
      path: '/about',
      description: 'Our mission and vision'
    },
    {
      id: 'teams',
      label: 'Teams',
      icon: Users,
      path: '/teams',
      description: 'Meet our 15 teams'
    },
    {
      id: 'events',
      label: 'Events',
      icon: Calendar,
      path: '/events',
      description: 'Upcoming and past events'
    },
    {
      id: 'blog',
      label: 'Blog',
      icon: BookOpen,
      path: '/blog',
      description: 'Physics & astronomy articles'
    },
    {
      id: 'gallery',
      label: 'Gallery',
      icon: Camera,
      path: '/gallery',
      description: 'Event photos and captures'
    },
    {
      id: 'join',
      label: 'Join Us',
      icon: UserPlus,
      path: '/join',
      description: 'Become a member'
    },
    {
      id: 'contact',
      label: 'Contact',
      icon: Mail,
      path: '/contact',
      description: 'Get in touch'
    }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Custom NavLink styling function
  const getLinkClasses = ({ isActive }) => {
    const baseClasses = "flex items-center space-x-1 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 group";
    return isActive
      ? `${baseClasses} bg-purple-600 text-white shadow-lg`
      : `${baseClasses} text-gray-300 hover:text-white hover:bg-purple-600/50`;
  };

  const getMobileLinkClasses = ({ isActive }) => {
    const baseClasses = "flex items-center space-x-3 w-full px-3 py-3 text-left text-sm font-medium rounded-lg transition-all duration-200";
    return isActive
      ? `${baseClasses} bg-purple-600 text-white`
      : `${baseClasses} text-gray-300 hover:text-white hover:bg-purple-600/50`;
  };

  return (
    <nav className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 shadow-lg border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24  ">
          {/* Logo and Brand */}
          <NavLink to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <div className="relative">
              <Telescope className="h-8 w-8 text-purple-400" />
              <Star className="h-3 w-3 text-yellow-400 absolute -top-1 -right-1 animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg leading-tight">NPAS</span>
              <span className="text-purple-300 text-xs leading-tight">Physics & Astronomy Society</span>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {publicNavItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <NavLink
                  key={item.id}
                  to={item.path}
                  className={getLinkClasses}
                  title={item.description}
                  end={item.path === '/'}
                >
                  <IconComponent className="h-4 w-4" />
                  <span>{item.label}</span>
                </NavLink>
              );
            })}
          </div>

          {/* Login Button and Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            {/* Login Button */}
            <NavLink
              to="/login"
              className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              <LogIn className="h-4 w-4" />
              <span className="hidden sm:inline">Login</span>
            </NavLink>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-gray-300 hover:text-white hover:bg-purple-600/50 transition-colors duration-200"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800/50 rounded-lg mt-2 backdrop-blur-sm border border-purple-500/20">
              {publicNavItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <NavLink
                    key={item.id}
                    to={item.path}
                    className={getMobileLinkClasses}
                    onClick={closeMenu}
                    end={item.path === '/'}
                  >
                    <IconComponent className="h-5 w-5" />
                    <div>
                      <div>{item.label}</div>
                      <div className="text-xs text-gray-400">{item.description}</div>
                    </div>
                  </NavLink>
                );
              })}
              
              {/* Mobile Login Link */}
              <NavLink
                to="/login"
                className={getMobileLinkClasses}
                onClick={closeMenu}
              >
                <LogIn className="h-5 w-5" />
                <div>
                  <div>Login</div>
                  <div className="text-xs text-gray-400">Sign in to your account</div>
                </div>
              </NavLink>
            </div>
          </div>
        )}
      </div>

    
    </nav>
  );
};

export default NavigationConfiguration;