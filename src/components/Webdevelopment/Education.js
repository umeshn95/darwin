import React from 'react'
import DesignDev from '../DesignDev/DesignDev'
import HireDeveloper from '../HireDeveloper/HireDeveloper'
import { SimpleAccordion } from '../Navbar/Navbar'
import ReachOut from '../Reachout/ReachOut'
import './styles.css'
import WebdevFaq from './WebdevFaq'
import WebdevProcessPage from './WebdevProcessPage'
import WebdevserviceMain from './WebdevserviceMain'
import mobileapp from '../../images/Educational-Software-Development-Services.webp'
import { lms } from '../Reachout/reachoutdata'
function Education() {

    return (
        <>  
            <div>
                <div style={{width:'100%',height:'74px',background:'#2176FF',marginBottom:'50px'}}></div>
                <WebdevserviceMain heading='Fostering Data-Driven Leadership' description='Educational software and eLearning application development services for high-quality education online.' point1='Data Leadership Coaching'  point2='In-App Resources' point3='Digital Learning Center' 

                    icon={mobileapp}
                />
                <ReachOut description='Educational Software Solutions
                Relevant to Your Business.' heading1= {lms}  />
                <HireDeveloper />
                {/* <WebdevProcessPage /> */}
                {/* <DesignDev /> */}
                
                <WebdevFaq/>
            </div>
       </>
    )
}

export default Education