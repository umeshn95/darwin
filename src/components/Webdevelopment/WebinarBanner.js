import React, { useState } from 'react';
import './WebinarBanner.css'; // Make sure to create the corresponding CSS file
import EngageTeamSection from './EngageTeamSection';
import TabButtons from './TabButtons';
// Array of images for the slides
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import ContentBlock from '../CareerPage/ContentBlock';
import Box from '@mui/material/Box';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';

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
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
      
      <Grid container justifyContent="center">
      <Grid item xs={12} sm={10} md={8} lg={6} sx={{ position: 'relative', mt: 2, mb: 4 }}>
        <div className="webinar-banner" style={{ position: 'relative', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>

          {!isMobile && <button className="arrow left-arrow" onClick={goToPrevSlide}>&lt;</button>}

          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <div className="webinar-slide" style={{ overflow: 'hidden', borderRadius: '8px' }}>
                      <img src={slide.imageUrl} alt="Webinar Slide" style={{ width: '100%', height: '200px', objectFit: 'contain' }} />
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <div className="webinar-info">
                      <h1 className="webinar-title" style={{ fontSize: '1.5em', fontWeight: 'bold', marginBottom: '8px' }}>{slide.title}</h1>
                      <p className="webinar-subtitle" style={{ fontSize: '1em' }}>{slide.subtitle}</p>
                    </div>
                  </Grid>
                </Grid>
              </SwiperSlide>
            ))}
          </Swiper>

          {!isMobile && <button className="arrow right-arrow" onClick={goToNextSlide}>&gt;</button>}

          <Box display="flex" justifyContent="center" alignItems="center" sx={{ position: 'absolute', bottom: 16, left: 0, right: 0 }}>
            {slides.map((_, index) => (
              <button
                key={index}
                className={`nav-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
                style={{ margin: '0 4px', padding: 4, borderRadius: '50%', border: 'none', backgroundColor: `${index === currentSlide ? '#4CAF50' : '#ddd'}` }}
              />
            ))}
          </Box>
        </div>
      </Grid>
    </Grid>
      <Grid item xs={12}>
      <ContentBlock heading="Bridging the Gap Between Evaluation and Education." description="Our suite of products and services is anchored by credible and consistent assessments, designed to deliver actionable insights and effective learning strategies."/>
        
      </Grid>
      <Grid item xs={12}>
        <TabButtons tab1={tab1} tab2={tab2} tab3={tab3} />
      </Grid>
    </Grid>
  );
};

export default WebinarBanner;

