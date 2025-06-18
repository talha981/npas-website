import React from 'react'
import { 
  ChevronLeft, 
  ChevronRight, 
  Calendar, 
  Users, 
  BookOpen, 
  ArrowRight,
  Star,
  Telescope,
  Rocket,
  Globe,
  Clock,
  MapPin,
  User,
  Eye
} from 'lucide-react';

const LatestBlogs = () => {
  const blogs = [
    {
      id: 1,
      title: "The James Webb Space Telescope: Revolutionizing Astronomy",
      excerpt: "Exploring how JWST is changing our understanding of the early universe and exoplanet atmospheres.",
      author: "Dr. Sarah Ahmed",
      date: "2025-06-15",
      readTime: "5 min read",
      views: 1234,
      category: "Astronomy",
      image: "🔭"
    },
    {
      id: 2,
      title: "Quantum Computing: The Next Frontier",
      excerpt: "Understanding the principles of quantum mechanics and their applications in modern computing systems.",
      author: "Prof. Ali Hassan",
      date: "2025-06-12",
      readTime: "8 min read",
      views: 892,
      category: "Physics",
      image: "⚛️"
    },
    {
      id: 3,
      title: "Dark Matter and Dark Energy: The Greatest Mystery",
      excerpt: "Delving into the invisible components that make up 95% of our universe and current research efforts.",
      author: "Dr. Fatima Khan",
      date: "2025-06-10",
      readTime: "6 min read",
      views: 1567,
      category: "Cosmology",
      image: "🌌"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Latest <span className="text-purple-400">Insights</span>
            </h2>
            <p className="text-xl text-gray-300">
              Discover the latest research, discoveries, and insights from the world of physics and astronomy.
            </p>
          </div>
          <p
            to="/blog"
            className="hidden md:flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            <span>Read All Posts</span>
            <ArrowRight className="w-4 h-4" />
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="bg-gradient-to-br from-slate-800/80 to-purple-900/30 backdrop-blur-sm border border-purple-500/20 rounded-xl overflow-hidden hover:border-purple-400/40 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl">{blog.image}</span>
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {blog.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 hover:text-purple-300 transition-colors cursor-pointer">
                  {blog.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{blog.excerpt}</p>
                
                <div className="flex items-center justify-between text-sm text-purple-300 mb-4">
                  <span>By {blog.author}</span>
                  <span>{new Date(blog.date).toLocaleDateString()}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-xs text-gray-400">
                    <span>{blog.readTime}</span>
                    <div className="flex items-center space-x-1">
                      <Eye className="w-3 h-3" />
                      <span>{blog.views}</span>
                    </div>
                  </div>
                  <button className="text-purple-400 hover:text-purple-300 font-medium text-sm transition-colors">
                    Read More →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <p
            to="/blog"
            className="inline-flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
          >
            <span>Read All Posts</span>
            <ArrowRight className="w-4 h-4" />
          </p>
        </div>
      </div>
    </section>
  );
};

export default LatestBlogs
