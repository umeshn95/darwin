import { Grid } from '@mui/material'
import React from 'react'
import WebdevserviceMain from '../Webdevelopment/WebdevserviceMain'
import ReachOut from '../Reachout/ReachOut'
import WebdevFaq from '../Webdevelopment/WebdevFaq'
import webdevdata from '../Webdevelopment/faq.json'
import { ecomm } from '../Reachout/reachoutdata'
import EngagementModel from '../EngagementModel/EngagementModel'
import Steps from '../Steps/Steps'
import HeroSection from '../Herosection/HeroSection'
import HowItWorksComponent from '../Howitworkcomponent/Howitworkcomponent'
import { AboutHeading } from '../../pages/NewAbout/Newabout'
import DataProcess from '../Webdevelopment/Dataprocess'

const Howitworks = () => {
  return (
    <>
            <div>
            <AboutHeading containercss={true} heading="We transform raw educational data into actionable insights" description={ "We are empowering schools and educators to enhance the learning journey of every student"}backgroundUrl="https://images.squarespace-cdn.com/content/5716af60356fb068327b23af/1618503106278-HIOZ65Y6LZOI4W95C4BN/About+Header.jpg"/>
              {/* <HowItWorksComponent/> */}
                {/* <WebdevserviceMain heading={`Modernizing Educational `} variableText = 'Data'  description='Build your educational data strategy on a modernized data infrastructure to support the academic and overall well-being of all learners.' point1='Data Processing'  point2='Data Analytics' point3='Data Storage' 
                /> */}
                {/* <EngagementModel/> */}
                <Steps/>
                <DataProcess img1="https://res.cloudinary.com/dvmqfke8w/image/upload/v1704964399/5Essentials-Survey-2-150x150_cs5qk7.png" img2="https://res.cloudinary.com/dvmqfke8w/image/upload/v1704964600/5Essentials-Professional-Learning-150x150_xvvkde.png" img3="https://res.cloudinary.com/dvmqfke8w/image/upload/v1704964811/Needs-Assessment-150x150_gvbfwk.png" img4="https://res.cloudinary.com/dvmqfke8w/image/upload/v1704964904/Leadership-coaching-150x150_qmy9yn.png" img5="https://res.cloudinary.com/dvmqfke8w/image/upload/v1704964979/District-systems-advising-150x150_x8qtbw.png" img6="https://res.cloudinary.com/dvmqfke8w/image/upload/v1704964979/District-systems-advising-150x150_x8qtbw.png" heading="Darwin  Services" description="We focus on creating visualization dashboards that present insights and information derived from student assessments" heading1="Integrate Your Data" description1="Streamline data sources for better insights." heading2="Predictive Analytic Models" description2="Forecast with data-driven accuracy." heading3="Customized Dashboards" description3="Tailor analytics to your goals." heading4="Personalize Your Analytics" description4="Make analytics work for you." heading5="Mobilize Your Data" description5="Access insights on the go." heading6="Continuous Improvement" description6="Evolve with data-driven decisions."/>
                {/* <ReachOut description='Darwin Data Modernization Infrastructure' heading1= {ecomm}  /> */}
                {/* <HireDeveloper /> */}
                {/* <WebdevProcessPage /> */}
                {/* <DesignDev /> */}
                
                <WebdevFaq data={webdevdata}/>
            </div>
  </>
  )
}

export default Howitworks