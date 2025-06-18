import React from 'react'
import { 
  Calendar, 
  Clock, 
  MapPin, 
  User, 
  ArrowRight 
} from 'lucide-react';

const LatestEvents = () => {
  const events = [
    {
      id: 1,
      title: "Stargazing Night",
      date: "2025-06-25",
      time: "8:00 PM",
      location: "NUST Observatory",
      description: "Join us for an evening of celestial observations and astrophotography.",
      attendees: 45,
      image: "🌟"
    },
    {
      id: 2,
      title: "Physics Symposium 2025",
      date: "2025-07-02",
      time: "10:00 AM",
      location: "Main Auditorium",
      description: "Annual symposium featuring renowned physicists and cutting-edge research presentations.",
      attendees: 200,
      image: "🔬"
    },
    {
      id: 3,
      title: "Rocket Workshop",
      date: "2025-07-10",
      time: "2:00 PM",
      location: "Engineering Lab",
      description: "Hands-on workshop on rocket design and propulsion systems.",
      attendees: 25,
      image: "🚀"
    }
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12 flex-col md:flex-row gap-4 md:gap-0">
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-700">
              Don't miss out on our exciting upcoming activities and workshops.
            </p>
          </div>
          <a
            href="/events"
            className="hidden md:flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            <span>View All Events</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white border border-gray-500 rounded-xl overflow-hidden hover:border-purple-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <div className="p-6">
                <div className="text-4xl mb-4 text-center">{event.image}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                <p className="text-gray-700 mb-4 text-sm">{event.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-purple-600 text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{new Date(event.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center text-purple-600 text-sm">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-purple-600 text-sm">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center text-purple-600 text-sm">
                    <User className="w-4 h-4 mr-2" />
                    <span>{event.attendees} attending</span>
                  </div>
                </div>

                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-300">
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <a
            href="/events"
            className="inline-flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
          >
            <span>View All Events</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default LatestEvents;
