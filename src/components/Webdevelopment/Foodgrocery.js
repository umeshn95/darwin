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
import mobileapp from '../../images/Financial-Software-Development-Services.webp'
import { food } from '../Reachout/reachoutdata'
import { AboutHeading } from '../../pages/NewAbout/Newabout'
import Mapgrowth from './Mapgrowth'
import MapgrowthCol from './MapgrowthCol'
import DataProcess from './Dataprocess'
import Customerchoice from '../Customerchoice/Customerchoice'
import WebinarBanner from './WebinarBanner'
function Foodgrocery() {

    

    return (
        <>
        <div style={{width:'100%',height:'74px', background: '#000080'}}></div>
            <div></div>
            <div>
<AboutHeading backgroundUrl="https://res.cloudinary.com/dvmqfke8w/image/upload/v1705058634/the-image-shows-a-cheerful-young-student-girl-with_2_yz3wgf.jpg" />
<WebinarBanner tab1="F&P Assessment" tab2="F&P Dashboard" tab3="F&P Flows"/>


<Customerchoice heading="Explore the Power of Data: Fountas & Pinnell Analytics in Action" description='With F&P Analytics, experience the gentle power of intuitive dashboards and enlightening reports,all designed to nurture and elevate the art of reading instruction.'/>
                {/* <WebdevserviceMain heading={`Modernizing Educational `} variableText = 'Data'  description='Build your educational data strategy on a modernized data infrastructure to support the academic and overall well-being of all learners.' point1='Data Analytics'  point2='Data Processing' point3='Data Storage' 
                    icon={mobileapp}
                /> */}
                <Mapgrowth imageshow={false} heading="F&P Assessment" description='The F&P Assessment Visualization provides a comprehensive overview of students academic journeys, capturing the essence of literacy development without the clutter of numbers. It showcases a clear trajectory of reading comprehension and fluency, offering educators a dynamic tool for personalizing instruction. By revealing patterns and growth in students reading abilities.' image2='https://res.cloudinary.com/dvmqfke8w/image/upload/v1705052709/Picsart_24-01-12_13-39-05-867_uv2p2f.jpg' image1="https://drive.google.com/uc?export=download&id=1z8XDOa0Y4MXbksJQnB-afdqj2vaqtS9x"></Mapgrowth>
               
                <Mapgrowth order={2} imageshow={false} heading="F&P Flows" description='Our F&P Progress Stream captures the ebb and flow of academic achievement through vivid, color-coded performance snapshots. From the beginning of the year to its end, educators can trace the progression of literacy skills, distinguishing between students who are exceeding, meeting, approaching, or not yet meeting key benchmarks.' image2='https://res.cloudinary.com/dvmqfke8w/image/upload/v1705052695/Picsart_24-01-12_13-39-19-413_w3dojh.jpg' image1='https://drive.google.com/uc?export=download&id=1hJhI-0gXn9bU5_34o18Swxlx4PNXBcv1'></Mapgrowth>
           


                {/* <ReachOut description='Data Modernization Infrastructure' heading1= {ecomm}  /> */}
                <DataProcess hide3={true} img1="https://res.cloudinary.com/dvmqfke8w/image/upload/v1704964399/5Essentials-Survey-2-150x150_cs5qk7.png" img2="https://res.cloudinary.com/dvmqfke8w/image/upload/v1704964600/5Essentials-Professional-Learning-150x150_xvvkde.png" img3="https://res.cloudinary.com/dvmqfke8w/image/upload/v1704964811/Needs-Assessment-150x150_gvbfwk.png" img4="https://res.cloudinary.com/dvmqfke8w/image/upload/v1704964904/Leadership-coaching-150x150_qmy9yn.png" img5="https://res.cloudinary.com/dvmqfke8w/image/upload/v1704964979/District-systems-advising-150x150_x8qtbw.png" img6="https://res.cloudinary.com/dvmqfke8w/image/upload/v1704964979/District-systems-advising-150x150_x8qtbw.png" heading="Darwin F&P Assessment Visualization Services" description="We focus on creating visualization dashboards that present insights and information derived from F&P Assessment Visualization" heading1="F&P Assessment" description1="The F&P Assessment Visualization designed to show growth and achievement of students for F&P assessments." heading2="F&P Dashboard" description2="Instant insights into scores and variations across Instructional Reading Level,Accuracy,Comprehension,fluency." heading3="F&P FLows" description3="Visualize student progress effortlessly with our F&P Flows charts. These intuitive graphs display the literacy development journey." heading4="F&P Flows" description4=" Identifies student groups with similar learning styles, enabling tailored teaching strategies for the entire class." heading5="MAP Growth" description5="
                This visualization easily tracks the number of students meeting MAP Projected Growth in each grade and subject from year to year." heading6="MAP Comparision" description6="Quickly summarizes student improvement and score distribution across various groups."/>      
                {/* <WebdevserviceMain heading='Assessment Solutions' description='
Full support for online and paper-based test administration, advanced test authoring tools, and an extensive content library of benchmark assessments, item banks, and progress monitoring tools' point1='Data Leadership Coaching'  point2='In-App Resources' point3='Digital Learning Center'
                    icon={mobileapp}
                />
                <ReachOut description='Data Adoption Program' heading1= {food}  />
                <HireDeveloper /> */}
                {/* <WebdevProcessPage /> */}
                {/* <DesignDev /> */}
                
                <WebdevFaq data={webdevdata}/>
            </div>
       </>
    )
}

export default Foodgrocery