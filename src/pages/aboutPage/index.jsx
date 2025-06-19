import React, { useEffect } from 'react';
import AboutHero from '../../components/aboutComponent/AboutHero';
import HistorySection from '../../components/aboutComponent/HistorySection';
import WhatWeDo from '../../components/aboutComponent/WhatWeDo';
import AchievementsSection from '../../components/aboutComponent/Achievements';
import TeamStructure from '../../components/aboutComponent/TeamStructure';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when component mounts
  }, []);

  return (
    <div>
      <AboutHero />
      <WhatWeDo/>
      <HistorySection/>
      <AchievementsSection/>
      <TeamStructure/>
    </div>
  );
};

export default AboutPage;
