import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Remove Router import
import NavigationConfiguration from './components/Navbar/NavigationConfiguration';
import Homepage from './pages/homePage';
import UnderConstructionPage from './components/Navbar/UnderConstructionPage';

// Dummy Components for Route Testing
const Home = () => <div className="p-4 bg-black text-white">Home Page</div>;
const About = () => <div className="p-4 bg-black text-white">About Us</div>;
const Teams = () => <div className="p-4 bg-black text-white">Our Teams</div>;
const Events = () => <div className="p-4 bg-black text-white">Events</div>;
const Blog = () => <div className="p-4 text-white bg-black">Blog</div>;
const Gallery = () => <div className="p-4 text-white bg-black">Gallery</div>;
const Join = () => <div className="p-4 text-white bg-black">Join Us</div>;
const Contact = () => <div className="p-4 text-white bg-black">Contact</div>;
const Login = () => <div className="p-4 text-white bg-black">Login</div>;

const App = () => {
  return (
    <>
      <NavigationConfiguration />

      {/* Page Content */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<UnderConstructionPage />} />
        <Route path="/teams" element={<UnderConstructionPage />} />
        <Route path="/events" element={<UnderConstructionPage />} />
        <Route path="/blog" element={<UnderConstructionPage />} />
        <Route path="/gallery" element={<UnderConstructionPage />} />
        <Route path="/join" element={<UnderConstructionPage />} />
        <Route path="/contact" element={<UnderConstructionPage />} />
        <Route path="/login" element={<UnderConstructionPage />} />
      </Routes>
    </>
  );
};

export default App;