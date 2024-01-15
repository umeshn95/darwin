import React, { useEffect } from 'react'
import DesignDev from '../DesignDev/DesignDev'
import HireDeveloper from '../HireDeveloper/HireDeveloper'
import { SimpleAccordion } from '../Navbar/Navbar'
import ReachOut from '../Reachout/ReachOut'
import Customerchoice from '../Customerchoice/Customerchoice'
import './styles.css'
import WebdevFaq from './WebdevFaq'
import webdevdata from './faq.json'

import WebdevProcessPage from './WebdevProcessPage'
import WebdevserviceMain from './WebdevserviceMain'
import mobileapp from '../../images/mobileApp.svg'
import { ecomm } from '../Reachout/reachoutdata'
import MapsuiteLandingPage from './MapsuiteLandingPage'
import Mapgrowth from './Mapgrowth'
import MapgrowthCol from './MapgrowthCol'
import DataProcess from './Dataprocess'
import { AboutHeading } from '../../pages/NewAbout/Newabout'
import WebinarBanner from './WebinarBanner'



function Ecommerce() {
    // useEffect(() => {
    //     window.scrollTo(0, 90);
    //   }, []);

    return (
        <>
        <div style={{width:'100%',height:'74px', background: '#000080'}}></div>
            <div>
            
<AboutHeading backgroundUrl="https://res.cloudinary.com/dvmqfke8w/image/upload/v1704974539/Nweafirst_1_yqjlxc.png" />
<WebinarBanner tab1="Map Growth" tab2="Map Scores" tab3="Map Dashboard"/>
    {/* <MapsuiteLandingPage></MapsuiteLandingPage> */}
    <Customerchoice heading="NWEA Map Suite" description='The MAP Suite provides Data insights to educators, powered through our research expertise, resulting  Actionable data in K–12 education'/>
                {/* <WebdevserviceMain heading={`Modernizing Educational `} variableText = 'Data'  description='Build your educational data strategy on a modernized data infrastructure to support the academic and overall well-being of all learners.' point1='Data Analytics'  point2='Data Processing' point3='Data Storage' 
                    icon={mobileapp}
                /> */}
                <Mapgrowth description=' MAP Growth is widely recognized as a pioneering and reliable tool for assessing progress and accomplishment in K–12 mathematics, reading, and language usage. It offers educators precise and practical data that can guide their teaching approaches for students at all levels of proficiency, whether they are advancing beyond their grade level or working towards it.' image2='https://res.cloudinary.com/dvmqfke8w/image/upload/v1705044976/AI_Generated_Image_2024-01-12_442740382032201_x0cxjd.jpg' image1="https://drive.google.com/uc?export=download&id=1z8XDOa0Y4MXbksJQnB-afdqj2vaqtS9x"></Mapgrowth>
                <Mapgrowth order={2} description='The MAP Scores Visualization offers a comprehensive overview of students academic progress, presenting key metrics in an easily understandable format. It includes achievement percentiles, which indicate how students in each grade performed compared to their peers.The visualization also highlights median percentiles, offering insight into the typical performance in each grade.' image2='https://res.cloudinary.com/dvmqfke8w/image/upload/v1705045176/AI_Generated_Image_2024-01-12_442740368002201_nn5asn.jpg' image1='https://drive.google.com/uc?export=download&id=1hJhI-0gXn9bU5_34o18Swxlx4PNXBcv1'></Mapgrowth>

                <Mapgrowth headingwidth={true} description=' The MAP Dashboard offers a user-friendly presentation of academic metrics, showcasing bar plots that display the Mean (average) and Standard Deviation (SD) of performance across multiple schools and various subjects. This visual representation allows for a quick comparison of the performance levels and variations in grades for different subjects within each school.' image2='https://res.cloudinary.com/dvmqfke8w/image/upload/v1705045273/AI_Generated_Image_2024-01-12_442740368003201_uykh7p.jpg' image1='https://drive.google.com/uc?export=download&id=1Qa-Nx6fs88VQnwrs-7PDoEnhY0-Atlcx'></Mapgrowth>

                {/* <ReachOut description='Data Modernization Infrastructure' heading1= {ecomm}  /> */}
                <DataProcess img1="https://res.cloudinary.com/dvmqfke8w/image/upload/v1704964399/5Essentials-Survey-2-150x150_cs5qk7.png" img2="https://res.cloudinary.com/dvmqfke8w/image/upload/v1704964600/5Essentials-Professional-Learning-150x150_xvvkde.png" img3="https://res.cloudinary.com/dvmqfke8w/image/upload/v1704964811/Needs-Assessment-150x150_gvbfwk.png" img4="https://res.cloudinary.com/dvmqfke8w/image/upload/v1704964904/Leadership-coaching-150x150_qmy9yn.png" img5="https://res.cloudinary.com/dvmqfke8w/image/upload/v1704964979/District-systems-advising-150x150_x8qtbw.png" img6="https://res.cloudinary.com/dvmqfke8w/image/upload/v1704964979/District-systems-advising-150x150_x8qtbw.png" heading="Darwin NWEA Map Services" description="We focus on creating visualization dashboards that present insights and information derived from NWEA MAP assessments" heading1="Map Scanner" description1="The MAP Scanner analyzes group-wide student progress and academic performance." heading2="MAP Dashboard" description2="Instant insights into scores and variations across schools, grades, and subjects." heading3="MAP Scores" description3=" Tracks student success in five stages, comparing their achievements with peers in the same grade." heading4="MAP Explorer" description4=" Identifies student groups with similar learning styles, enabling tailored teaching strategies for the entire class." heading5="MAP Growth" description5="
This visualization easily tracks the number of students meeting MAP Projected Growth in each grade and subject from year to year." heading6="MAP Comparision" description6="Quickly summarizes student improvement and score distribution across various groups."/>
                {/* <HireDeveloper /> */}
                {/* <WebdevProcessPage /> */}
                {/* <DesignDev /> */}
                
                <WebdevFaq data={webdevdata}/>
    


            </div>
       </>
    )
}

export default Ecommerce