import  Grid  from '@mui/material/Grid';
import React from 'react';
import './styles.css'
import { Link } from 'react-router-dom/cjs/react-router-dom';
const WebdevserviceMain = ({heading,description,point1,point2,point3,icon,variableText,variableText1}) => {
  return <div className='webdev_service_main'>
      
  <div className='webdev_service_sub'>
          <Grid container>
              <Grid item lg={6}>
          <div className='webdev_services_sub_left'>
            <div className='webdev_service_heading'>  
            <h2 style={{ textAlign: 'left', whiteSpace: 'pre-wrap' }}>
                            <strong>{ heading}</strong>
                          </h2> <span style={{color:'#2176FF'}}>
                          <h2 style={{ textAlign: 'left', whiteSpace: 'pre-wrap',lineHeight:"0.5" }}>
                            <strong>{ variableText}</strong>
                          </h2>
                            </span></div>
            <div className='webdev_service_description'>{ description }</div>
                  <div className='webdev_service_points'>
              <div style={{ display: 'flex', paddingBottom: '1rem' }}> <span className='webdev_service_points1' ></span> <span style={{fontWeight:"400",fontSize:"16px"}}>{ point1 }</span> </div> 
              <div style={{display:'flex',paddingBottom:'1rem'}}> <span className='webdev_service_points1' ></span> <span style={{fontWeight:"400",fontSize:"16px"}}>{ point2 }</span> </div>
              <div style={{ display: 'flex', paddingBottom: '1rem' }}> <span className='webdev_service_points1' ></span> <span style={{fontWeight:"400",fontSize:"16px"}}>{ point3 }</span> </div>
        
          </div>
         
                  <Link to='/contact'>
                  <div className='webdev_service_button'>Get a Free Consultation </div>
                  </Link>
                 </div>
              </Grid>
              <Grid item lg={6}>
                  <img className='webdev_service_webdevimages' src={icon}></img>
              </Grid>
</Grid>

  </div>
</div>;
};

export default WebdevserviceMain;
