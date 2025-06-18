import React from 'react'
import HeroSection from '../../components/homeComponents/HeroSection'
import MissionOverview from '../../components/homeComponents/MissionOverview'
import LatestEvents from '../../components/homeComponents/LatestEvents'
import LatestBlogs from '../../components/homeComponents/LatestBlog'
import CallToAction from '../../components/homeComponents/CallToAction'

const Homepage = () => {
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
