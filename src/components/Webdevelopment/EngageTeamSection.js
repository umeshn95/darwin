import React from 'react';
import './EngageTeamSection.css'; // Your CSS file for styling
import  Grid  from '@mui/material/Grid';
import { Height } from '@mui/icons-material';

const EngageTeamSection = ({image,heading,description,description1,description2,heading1,description3,description4}) => {
  return (
    // <div className='engagement-teamsection-container'>
    //   <div className="wp-block-columns">
    //   <div className="wp-block-column">
    //     <h2>Engage your team with trusted, evidence-based products and services</h2>
    //     <p>The MAP® Growth™ assessment connects to dozens of supplementary instructional providers to simplify differentiation. Further support your team with learning and improvement services tailored to the unique needs of your school community.</p>
    //     <p>Ready to build a culture of continuous improvement? 
    //       <a href="/school-district-leaders-hub/">Visit the School & District Leaders Hub now.</a>
    //     </p>
    //   </div>

    //   <div className="wp-block-column">
    //     <figure>
    //       <img src="https://www.nwea.org/uploads/school-district-feature-nwea.jpg" alt="Teacher" />
    //     </figure>
    //     <p>FEATURED CONTENT</p>
    //     <p>
    //       <a href="/high-growth-for-all-instructional-strategies/">Researching effective instruction at high-growth schools</a>
    //     </p>
    //     <p>We studied highly effective teachers at high-growth schools and captured transformational instructional strategies that can support teachers everywhere.</p>
    //   </div>
    // </div>
    // </div>
   <div className='engagement-teamsection-container'>
     <Grid container spacing={2}>
    <Grid item xs={12} md={6}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div style={{  textAlign: 'left' }} className='engagement-teamsection-left'>
            <h3>{heading}</h3>
          <p>{description}</p>
          </div>
        </Grid>
        {/* <Grid item xs={12}>
          <div className='engagement-teamsection-readytobuild' style={{  textAlign: 'left' }}>
           <p>{description1}</p>
          </div>
        </Grid> */}
        {/* <Grid item xs={12}>
          <div className='engagement-teamsection-visit' style={{  textAlign: 'left' }}>
            <p>
{description2}</p>
          </div>
        </Grid> */}
      </Grid>
    </Grid>
    <Grid item xs={12} md={6}>
      <Grid container spacing={2}>
      <Grid item xs={12}>
  <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
    <img 
      src={image} 
      alt="nwea" 
      style={{ 
        maxWidth: '100%', 
        maxHeight: '100%', 
        display: 'block', // Ensures the image is a block-level element
        objectFit: 'contain', // Ensures the image is scaled correctly
        margin: 'auto' // Centers the image within the div
      }} 
    />
  </div>
</Grid>
        {/* <Grid item xs={12}>
          <div style={{  textAlign: 'left' }} className='engagement-teamsection-right'>
            <p>{heading1}</p>
            <p>{description3}</p>
            <p>{description4}</p>
          </div>
        </Grid> */}
      </Grid>
    </Grid>
  </Grid>
   </div>


    
  );
};

export default EngageTeamSection;
