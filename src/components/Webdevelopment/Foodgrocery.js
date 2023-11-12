import React from 'react'
import DesignDev from '../DesignDev/DesignDev'
import HireDeveloper from '../HireDeveloper/HireDeveloper'
import { SimpleAccordion } from '../Navbar/Navbar'
import ReachOut from '../Reachout/ReachOut'
import './styles.css'
import WebdevFaq from './WebdevFaq'
import WebdevProcessPage from './WebdevProcessPage'
import WebdevserviceMain from './WebdevserviceMain'
import mobileapp from '../../images/Financial-Software-Development-Services.webp'
import { food } from '../Reachout/reachoutdata'
function Foodgrocery() {

    return (
        <>
            <div>
                <div style={{width:'100%',height:'74px', background: 'linear-gradient(' +
    '265deg, ' +
    '#1ca3e9, ' +
    'rgb(29, 27, 110)' +
    ')',marginBottom:'50px'}}></div>
                <WebdevserviceMain heading='Assessment Solutions' description='
Full support for online and paper-based test administration, advanced test authoring tools, and an extensive content library of benchmark assessments, item banks, and progress monitoring tools' point1='Data Leadership Coaching'  point2='In-App Resources' point3='Digital Learning Center'
                    icon={mobileapp}
                />
                <ReachOut description='Data Adoption Program' heading1= {food}  />
                <HireDeveloper />
                {/* <WebdevProcessPage /> */}
                {/* <DesignDev /> */}
                
                <WebdevFaq/>
            </div>
       </>
    )
}

export default Foodgrocery