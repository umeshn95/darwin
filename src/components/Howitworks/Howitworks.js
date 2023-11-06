import { Grid } from '@mui/material'
import React from 'react'
import WebdevserviceMain from '../Webdevelopment/WebdevserviceMain'
import ReachOut from '../Reachout/ReachOut'
import WebdevFaq from '../Webdevelopment/WebdevFaq'
import { ecomm } from '../Reachout/reachoutdata'
import EngagementModel from '../EngagementModel/EngagementModel'
import Steps from '../Steps/Steps'
import HeroSection from '../Herosection/HeroSection'
import HowItWorksComponent from '../Howitworkcomponent/Howitworkcomponent'
import { AboutHeading } from '../../pages/NewAbout/Newabout'

const Howitworks = () => {
  return (
    <>
            <div>
       
              <AboutHeading/>
              <HowItWorksComponent/>
                <WebdevserviceMain heading={`Modernizing Educational `} variableText = 'Data'  description='Build your educational data strategy on a modernized data infrastructure to support the academic and overall well-being of all learners.' point1='Data Processing'  point2='Data Analytics' point3='Data Storage' 
                />
                <EngagementModel/>
<Steps/>
                <ReachOut description='Darwin Data Modernization Infrastructure' heading1= {ecomm}  />
                {/* <HireDeveloper /> */}
                {/* <WebdevProcessPage /> */}
                {/* <DesignDev /> */}
                
                <WebdevFaq/>
            </div>
  </>
  )
}

export default Howitworks