import React, { useEffect } from 'react'
import TeamComponents from '../../components/TeamComponents.jsx/TeamCom'

const TeamPage = () => {
     useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when component mounts
      }, []);
    
  return (
    <div>
      <TeamComponents/>
    </div>
  )
}

export default TeamPage
