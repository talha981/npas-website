import React, { useEffect } from 'react'
import HeroSection from '../../components/homeComponents/HeroSection'
import MissionOverview from '../../components/homeComponents/MissionOverview'
import LatestEvents from '../../components/homeComponents/LatestEvents'
import LatestBlogs from '../../components/homeComponents/LatestBlog'
import CallToAction from '../../components/homeComponents/CallToAction'

const Homepage = () => {
   useEffect(() => {
      window.scrollTo(0, 0); // Scroll to the top when component mounts
    }, []);
  
  return (
    <div>
      <HeroSection/>
      <MissionOverview/>
      <LatestEvents/>
      <LatestBlogs/>
      <CallToAction/>
    </div>
  )
}

export default Homepage
