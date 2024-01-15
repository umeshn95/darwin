import { Container, Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { motion } from 'framer-motion'
import React, { useEffect } from 'react'
import landingimage from '../../images/slider-cybersecurity-slide-01-image-01.png'
import './LandingPage.css'
import Experience from '../Experience/Experience'
import Quality from '../Quality/Quality'
import ReachOut from '../Reachout/ReachOut'
import { Aboutus, CircularProgressba,  Service } from '..'
import Particles from "react-tsparticles";
import Newcounter from '../Newcounter/Countcomponent'
import Newcardcomponent from '../Newcard/Newcardcomponent'
import Steps from '../Steps/Steps'
import DesignDev from '../DesignDev/DesignDev'
import { useState } from 'react'
import HireDeveloper from '../HireDeveloper/HireDeveloper'
import SoftwareConsulting from '../SotwareConsulting/SoftwareConsulting'
import MainBanner from '../MainBanner/MainBanner'
import Navbar from '../Navbar/Navbar'
import EngagementModel from '../EngagementModel/EngagementModel'
import Newcard from '../Newcard/Newcard'
import GetInTouch from '../GetInTouch/GetInTouch'
import Furtherinformation from '../Furtherinformation/Furtherinformation'
import ContactUs from '../GetInTouch/ContactUs.'
import Projectcompletion from '../Projectcompletion/Projectcompletion'
import Customerchoice from '../Customerchoice/Customerchoice'
import Unifieddataplatform from '../UnifiedDataplatform/Unifieddataplatform'
import { AboutHeading } from '../../pages/NewAbout/Newabout'
import DataProcess from '../Webdevelopment/Dataprocess'
const LandingPage = () => {
  const [i,setI] = useState(0)
  const [textmoving,setTextmoving] = useState(['success','victory','progres','Triumps'])
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const useStyle = makeStyles({
    landingpage_main: {
      height: '100vh',
     
    


    },
    landingpage_main_text: {
      position: 'relative',
     
    },
    quality_description:{
      margin:'60px 0',
      padding:'80px 0'
    }
  })


//   useEffect(() => {
//     setTimeout(() => {
//       if (i < 4) {
//                 setI(i+1)
//               }    
     
      
          
//       }, 1500);
//  },[i])


  const classes = useStyle()
  return (
    <>
  
{/* old landing page start */}

{/*  
      <div className='landing_page_main_div'>
      <Grid container className={classes.landingpage_main}>
                <Grid item lg={6} sm={12} xs={12} className={classes.landingpage_main_text}>
               <div style={{padding:'120px'}}>
               <h3 className='figure_plan'>FIGURE PLANS OUT</h3>
              <h1 className='custom_software'><div className='static_txt'>Custom <span style={{ color: '#086AD8' }}>Software</span> Development Focused On Your</div> <ul style={{ color: '#086AD8' }} className='dyanamic_txts'>
                <li><span>{ textmoving[i]}</span></li>
                <li><span>Success</span></li>
              
              
              </ul></h1>
                <button className='button1s'>DIG DEEPER NOW</button>
               </div>
                </Grid>
                <Grid item lg={6} sm={12} xs={12} > <div style={{padding:'20px'}}><img style={{ width:'80%',height:'90vh'}} src={landingimage}></img></div> </Grid>
            </Grid>
      
      </div> */}

      {/* old landing page end */}
      
      


      {/* <Service></Service> */}
      {/* Quality */}

      {/* <Container className={classes.quality_description}>
        <Grid container rowSpacing={3} columnSpacing={3}>
          <Grid item><Quality /> </Grid>
          <Grid item><Quality /> </Grid>
          <Grid item><Quality /> </Grid>

        </Grid>
      </Container> */}
      {/* <MainBanner /> */}

      <AboutHeading containercss={true} heading="Data Analytics To Enhance Student Learning Graph" description={ "Our mission is to actualize the expansive promise of education  by transforming data into actionable insights that positively impact students."}backgroundUrl="https://images.squarespace-cdn.com/content/5716af60356fb068327b23af/1618503106278-HIOZ65Y6LZOI4W95C4BN/About+Header.jpg"/>

<Customerchoice heading='The Darwin Analytics Tool' description='We spent the last decade assembling the highest-quality platform that works for every educator to deliver solutions that truly improve the way the world learns.'/>
<SoftwareConsulting/>
<DataProcess hide3={true} img1="https://res.cloudinary.com/dvmqfke8w/image/upload/v1704964399/5Essentials-Survey-2-150x150_cs5qk7.png" img2="https://res.cloudinary.com/dvmqfke8w/image/upload/v1704964600/5Essentials-Professional-Learning-150x150_xvvkde.png" img3="https://res.cloudinary.com/dvmqfke8w/image/upload/v1704964811/Needs-Assessment-150x150_gvbfwk.png" img4="https://res.cloudinary.com/dvmqfke8w/image/upload/v1704964904/Leadership-coaching-150x150_qmy9yn.png" img5="https://res.cloudinary.com/dvmqfke8w/image/upload/v1704964979/District-systems-advising-150x150_x8qtbw.png" img6="https://res.cloudinary.com/dvmqfke8w/image/upload/v1704964979/District-systems-advising-150x150_x8qtbw.png" heading="Darwin Analytic Services" description="We focus on creating visualization dashboards that present insights of student Assessment." heading1="F&P Assessment" description1="The F&P Assessment Visualization designed to show growth and achievement of students." heading2="NWEA Map Suite" description2="The MAP Scanner analyzes group-wide student progress and academic performance." heading3="WIDA Dashboard" description3=" The WIDA Assessment Visualization designed to show growth and achievement of students in English language." heading4="MAP Explorer" description4=" Identifies student groups with similar learning styles, enabling tailored teaching strategies for the entire class." heading5="MAP Growth" description5="
This visualization easily tracks the number of students meeting MAP Projected Growth in each grade and subject from year to year." heading6="MAP Comparision" description6="Quickly summarizes student improvement and score distribution across various groups."/>
{/* <Unifieddataplatform/> */}
      
{/* <DesignDev/> */}
      {/* <HireDeveloper /> */}
      {/* <Newcard /> */}
      {/* <Newcounter/> */}
      {/* <Furtherinformation/> */}
<Projectcompletion/>
<ContactUs/>

      



    </>
  )
}

export default LandingPage
