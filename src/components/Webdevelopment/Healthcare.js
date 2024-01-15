import React from 'react'
import DesignDev from '../DesignDev/DesignDev'
import HireDeveloper from '../HireDeveloper/HireDeveloper'
import { SimpleAccordion } from '../Navbar/Navbar'
import ReachOut from '../Reachout/ReachOut'
import './styles.css'
import WebdevFaq from './WebdevFaq'
import webdevdata from './faq.json'

import WebdevProcessPage from './WebdevProcessPage'
import WebdevserviceMain from './WebdevserviceMain'
import mobileapp from '../../images/mobileApp.svg'
import HealthcareSoftwareDevelopmentServices from '../../images/Healthcare-Software-Development-Services.webp'
import { health, mobileout } from '../Reachout/reachoutdata'
import MapsuiteLandingPage from './MapsuiteLandingPage'
import Mapgrowth from './Mapgrowth'
import MapgrowthCol from './MapgrowthCol'
import DataProcess from './Dataprocess'
import Customerchoice from '../Customerchoice/Customerchoice'
import './MapsuiteLandingPage.css'
import { AboutHeading } from '../../pages/NewAbout/Newabout'
import WebinarBanner from './WebinarBanner'
function Healthcare() {

    return (
        <>
        <div style={{width:'100%',height:'74px', background: '#000080'}}></div>
            <div></div>
            <div>
                {/* <div style={{width:'100%',height:'74px', background: 'linear-gradient(' +
    '265deg, ' +
    '#1ca3e9, ' +
    'rgb(29, 27, 110)' +
    ')' }}></div> */}
      {/* <div className="landing-page"> */}
    {/* Background Image */}
    {/* <div className="wida-background-image"></div> */}

    {/* Small Image */}
    {/* <div className=""></div> */}
  {/* </div> */}

  <AboutHeading backgroundUrl="https://res.cloudinary.com/dvmqfke8w/image/upload/v1705058418/the-image-shows-a-cheerful-young-girl-in-school-wi_2_ztx05g.jpg"/>
<WebinarBanner tab1="WIDA Assessment" tab2="WIDA Dashboard" tab3="WIDA Flows"/>
  
    <Customerchoice heading="WIDA Assessment Analytics" description='Unveil the progress of English language learners through our WIDA Assessment Analytics.'/>
                {/* <WebdevserviceMain heading={`Modernizing Educational `} variableText = 'Data'  description='Build your educational data strategy on a modernized data infrastructure to support the academic and overall well-being of all learners.' point1='Data Analytics'  point2='Data Processing' point3='Data Storage' 
                    icon={mobileapp}
                /> */}
                <Mapgrowth imageshow={false} heading="WIDA Assessment" description='  Explore the multifaceted dimensions of English language proficiency with our detailed WIDA graph data analytics. From listening to writing, our interactive graphs provide educators with a clear breakdown of student capabilities in each essential domain.' image2='https://res.cloudinary.com/dvmqfke8w/image/upload/v1705052711/Picsart_24-01-12_13-40-40-746_mhd419.jpg' image1="https://drive.google.com/uc?export=download&id=1z8XDOa0Y4MXbksJQnB-afdqj2vaqtS9x"></Mapgrowth>
                <Mapgrowth order={2} imageshow={false} heading="WIDA Literacy flows"  description='Track student progress through the school year with our Flows over time graph. Watch as learning journeys unfold from the beginning to the end of each term, with visual streams that represent growth and transitions in student learning.' image2='https://res.cloudinary.com/dvmqfke8w/image/upload/v1705052724/AI_Generated_Image_2024-01-12_442741871011201_erzb6w.jpg' image1='https://drive.google.com/uc?export=download&id=1hJhI-0gXn9bU5_34o18Swxlx4PNXBcv1'></Mapgrowth>
                

                {/* <Mapgrowth headingwidth={true} description=' The MAP Dashboard offers a user-friendly presentation of academic metrics, showcasing bar plots that display the Mean (average) and Standard Deviation (SD) of performance across multiple schools and various subjects. This visual representation allows for a quick comparison of the performance levels and variations in grades for different subjects within each school.' image2='https://www.nwea.org/uploads/2022/07/Graphic-3-1.png' image1='https://drive.google.com/uc?export=download&id=1Qa-Nx6fs88VQnwrs-7PDoEnhY0-Atlcx'></Mapgrowth> */}

                {/* <ReachOut description='Data Modernization Infrastructure' heading1= {ecomm}  /> */}
                <DataProcess hide3={true} img1="https://res.cloudinary.com/dvmqfke8w/image/upload/v1704964399/5Essentials-Survey-2-150x150_cs5qk7.png" img2="https://res.cloudinary.com/dvmqfke8w/image/upload/v1704964600/5Essentials-Professional-Learning-150x150_xvvkde.png" img3="https://res.cloudinary.com/dvmqfke8w/image/upload/v1704964811/Needs-Assessment-150x150_gvbfwk.png" heading="Darwin WIDA Assessment Analytics Services" description="We focus on creating visualization dashboards that present insights and information derived from WIDA Assessment Analytics" heading1="WIDA Assessment" description1="The WIDA Assessment Visualization designed to show growth and achievement of students in English language." heading2="WIDA Dashboard" description2="Instant insights into scores and variations across listening, speaking, reading, and writing, all in one place" heading3="WIDA Flows" description3="Visualize student progress effortlessly with our WIDA Flows charts." heading4="MAP Explorer" description4=" Identifies student groups with similar learning styles, enabling tailored teaching strategies for the entire class." heading5="MAP Growth" description5="
This visualization easily tracks the number of students meeting MAP Projected Growth in each grade and subject from year to year." heading6="MAP Comparision" description6="Quickly summarizes student improvement and score distribution across various groups."/>
                {/* <HireDeveloper /> */}
                {/* <WebdevProcessPage /> */}
                {/* <WebdevserviceMain heading='Dashboards And Analytics Tools' variableText1='Data' description='Leverage outcomes-based dashboards powered by predictive analytics, evidence-based data strategies, and analysis to fuel action.' point1='Descriptive and predictive data Analysis.'  point2='Understand the data through questions' point3='Take data-driven action and measure' 
                    icon={HealthcareSoftwareDevelopmentServices}
                /> */}
                {/* <ReachOut description='dashboards enable you to' heading1= {health}  /> */}
                {/* <HireDeveloper /> */}
                {/* <WebdevProcessPage /> */}
                {/* <DesignDev /> */}
                
                <WebdevFaq data={webdevdata}/>
            </div>
       </>
    )
}

export default Healthcare