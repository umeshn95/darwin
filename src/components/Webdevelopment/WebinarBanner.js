import React, { useState } from 'react';
import './WebinarBanner.css'; // Make sure to create the corresponding CSS file
import EngageTeamSection from './EngageTeamSection';
import TabButtons from './TabButtons';
// Array of images for the slides
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// Array of images for the slides
const slides = [
  {
    imageUrl: 'https://res.cloudinary.com/dvmqfke8w/image/upload/v1704975029/webinarimage1_1_gjuso3.png',
    title: 'WEBINAR',
    subtitle: 'District and School leaders: How to use data to engage teachers in high-growth strategies'
  },
  {
    imageUrl: 'https://res.cloudinary.com/dvmqfke8w/image/upload/v1704975143/webinarimage2_1_go4ecq.png',
    title: 'WEBINAR',
    subtitle: 'Using MAP Growth for gifted and talented service placement decisions'
  },
  {
    imageUrl: 'https://res.cloudinary.com/dvmqfke8w/image/upload/v1704975251/accessibility-image_dark_kz41jr.png',
    title: 'WEBINAR',
    subtitle: 'Education’s long COVID: Achievement data reveal stalled progress toward pandemic recovery'
  },
  {
    imageUrl: 'https://res.cloudinary.com/dvmqfke8w/image/upload/v1704975417/pexels-sunvani-ho%C3%A0ng-7978262_lou3vf.jpg',
    title: 'WEBINAR',
    subtitle: 'Education’s long COVID: Achievement data reveal stalled progress toward pandemic recovery'
  }
];

const WebinarBanner = ({tab1,tab2,tab3}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const backgroundImageUrl="https://res.cloudinary.com/dvmqfke8w/image/upload/v1705055065/The-image-is-a-soft--pastel-colored-background-with-a-smooth-gradient-that-flows-from-a-light-peach-or-pale-yellow-color-at-the-bottom-left-corner--blending-into-a-white-or-very-light-pastel-color-tow-3_p3x6vu.jpg"
  return (
    <Grid container style={{ 
      backgroundImage: `url(${backgroundImageUrl})`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center' 
    }}
    className="wp-block-cover alignfull is-light"
    justifyContent="center"
    alignItems="center">
      {/* You can replace the below divs with Grid items as necessary */}
      
      <Grid item xs={12} sm={8} md={6}>
        <div className="webinar-banner">
          <button className="arrow left-arrow" onClick={goToPrevSlide}>&lt;</button>
          <Grid container>
          <Grid item xs={12} sm={12} md={6}  order={matches ? 1 : 2}>
          <div className="webinar-slide">
            <img src={slides[currentSlide].imageUrl} alt="Webinar Slide" className="webinar-slide-image" />
          </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6}  order={matches ? 2 : 1}>
          <div className="webinar-info">
            <h1 className="webinar-title">{slides[currentSlide].title}</h1>
            <p className="webinar-subtitle">{slides[currentSlide].subtitle}</p>
          </div>
          </Grid>
          </Grid>
          
          
          <button className="arrow right-arrow" onClick={goToNextSlide}>&gt;</button>
          <div className="webinar-navigation">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`nav-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </Grid>
      <Grid item xs={12}>
        <div className="connect-assessment">
          {/* Your connect-assessment content */}
          <h2>Bridging the Gap Between Evaluation and Education.</h2>
      <p>
Our suite of products and services is anchored by credible and consistent assessments, designed to deliver actionable insights and effective learning strategies.</p>
        </div>
      </Grid>
      <Grid item xs={12}>
        <TabButtons tab1={tab1} tab2={tab2} tab3={tab3} />
      </Grid>
    </Grid>
  );
};

export default WebinarBanner;

