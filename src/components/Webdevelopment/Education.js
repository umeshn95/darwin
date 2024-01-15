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
import mobileapp from '../../images/Educational-Software-Development-Services.webp'
import { lms } from '../Reachout/reachoutdata'
import Mapgrowth from './Mapgrowth'
import MapgrowthCol from './MapgrowthCol'
import DataProcess from './Dataprocess'
import Customerchoice from '../Customerchoice/Customerchoice'
import { AboutHeading } from '../../pages/NewAbout/Newabout'
import WebinarBanner from './WebinarBanner'
function Education() {

    return (
        <>  
        <div style={{width:'100%',height:'74px', background: '#000080'}}></div>
            <div></div>
            <div>
<AboutHeading backgroundUrl="https://res.cloudinary.com/dvmqfke8w/image/upload/v1705057062/cbsebanner_1_seqdd1.png" />

<WebinarBanner tab1="CBSE Grade Insight" tab2="CBSE Grade Dashboard" tab3="CBSE Grade Flows"/>

                
<Customerchoice heading="CBSE Grade Analytics" description='The CBSE Grade Analytics provides Data insights to educators, powered through our research expertise, resulting  Actionable data in Academic education'/>
                {/* <WebdevserviceMain heading={`Modernizing Educational `} variableText = 'Data'  description='Build your educational data strategy on a modernized data infrastructure to support the academic and overall well-being of all learners.' point1='Data Analytics'  point2='Data Processing' point3='Data Storage' 
                    icon={mobileapp}
                /> */}
                <Mapgrowth imageshow={false} heading="CBSE Grade Insight" description='Our CBSE Grade Insight paints a picture of student achievements in every class, from science to languages. Its a clear, colorful way to see where students excel and where they can grow, guiding educators to create a balanced and enriching learning environment.' image2='https://res.cloudinary.com/dvmqfke8w/image/upload/v1705052712/AI_Generated_Image_2024-01-12_442741976053201_axgomm.jpg' image1="https://drive.google.com/uc?export=download&id=1z8XDOa0Y4MXbksJQnB-afdqj2vaqtS9x"></Mapgrowth>
                <Mapgrowth order={2} heading="CBSE Grade Flows" imageshow={false} description='Discover the academic advancement in CBSE subjects through our clear, visual graphs. They plot the learning journey in key areas like English and Science, showing you at a glance where students are improving. This tool is designed for educators to easily interpret subject growth, supporting informed teaching and enriched student outcomes.' image2='https://res.cloudinary.com/dvmqfke8w/image/upload/v1705052706/Picsart_24-01-12_13-39-39-835_ta1lbt.jpg' image1='https://drive.google.com/uc?export=download&id=1hJhI-0gXn9bU5_34o18Swxlx4PNXBcv1'></Mapgrowth>

                <Mapgrowth heading="CBSE Grade Dashboard" headingwidth={true} description=' Our dashboard offers educators a seamless overview of student performance across key assessments. It transforms raw scores into a narrative of Very Good to Outstanding achievements, with a simple view of how many students are performing Above or Below expectations.' image2='https://www.nwea.org/uploads/2022/07/Graphic-3-1.png' image1='https://drive.google.com/uc?export=download&id=1Qa-Nx6fs88VQnwrs-7PDoEnhY0-Atlcx'></Mapgrowth>

                {/* <ReachOut description='Data Modernization Infrastructure' heading1= {ecomm}  /> */}
                <DataProcess hide3={true} img1="https://res.cloudinary.com/dvmqfke8w/image/upload/v1704964399/5Essentials-Survey-2-150x150_cs5qk7.png" img2="https://res.cloudinary.com/dvmqfke8w/image/upload/v1704964600/5Essentials-Professional-Learning-150x150_xvvkde.png" img3="https://res.cloudinary.com/dvmqfke8w/image/upload/v1704964811/Needs-Assessment-150x150_gvbfwk.png" heading="Darwin CBSE Grade Assessment Analytic Services" description="We focus on creating visualization dashboards that present insights and information derived from CBSE Grade assessments" heading1="CBSE Grade Insight" description1="The CBSE Grade Assessment Visualization designed to show growth and achievement of students." heading2="CBSE Grade Dashboard" description2="Instant insights into scores and variations across schools, grades, and subjects." heading3="CBSE Grade Flows" description3=" Visualize student progress effortlessly with our CBSE Flow charts. These intuitive graphs display the Grade level development journey." heading4="MAP Explorer" description4=" Identifies student groups with similar learning styles, enabling tailored teaching strategies for the entire class." heading5="MAP Growth" description5="
This visualization easily tracks the number of students meeting MAP Projected Growth in each grade and subject from year to year." heading6="MAP Comparision" description6="Quickly summarizes student improvement and score distribution across various groups."/>
                
                <WebdevFaq data={webdevdata}/>
            </div>
       </>
    )
}

export default Education