import React from 'react'
import './MapsuiteLandingPage.css';
const MapsuiteLandingPage = () => {
  return (
    <div className="landing-page">
    {/* Background Image */}
    <div className="background-image">
    <video autoPlay loop muted controls width="250">
      <source src="https://www.dropbox.com/scl/fi/v22nxmg6tqb9djjs4ic4r/DemoCreatorRec_2023-12-31-14-11-33-online-video-cutter.com-1.mp4?rlkey=5mv8mr0yp7hqi61814ql1s7h1&dl=1" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    </div>

    {/* Small Image */}
    <div className="small-image"></div>
  </div>
  )
}

export default MapsuiteLandingPage