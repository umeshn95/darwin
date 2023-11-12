import React from 'react'
import DesignDev from '../DesignDev/DesignDev'
import HireDeveloper from '../HireDeveloper/HireDeveloper'
import { SimpleAccordion } from '../Navbar/Navbar'
import ReachOut from '../Reachout/ReachOut'
import './styles.css'
import WebdevFaq from './WebdevFaq'
import WebdevProcessPage from './WebdevProcessPage'
import WebdevserviceMain from './WebdevserviceMain'
import mobileapp from '../../images/mobileApp.svg'
import HealthcareSoftwareDevelopmentServices from '../../images/Healthcare-Software-Development-Services.webp'
import { health, mobileout } from '../Reachout/reachoutdata'

function Healthcare() {

    return (
        <>
            <div>
                <div style={{width:'100%',height:'74px', background: 'linear-gradient(' +
    '265deg, ' +
    '#1ca3e9, ' +
    'rgb(29, 27, 110)' +
    ')',marginBottom:'50px'}}></div>
                <WebdevserviceMain heading='Dashboards And Analytics Tools' variableText1='Data' description='Leverage outcomes-based dashboards powered by predictive analytics, evidence-based data strategies, and analysis to fuel action.' point1='Descriptive and predictive data Analysis.'  point2='Understand the data through questions' point3='Take data-driven action and measure' 
                    icon={HealthcareSoftwareDevelopmentServices}
                />
                <ReachOut description='dashboards enable you to' heading1= {health}  />
                <HireDeveloper />
                {/* <WebdevProcessPage /> */}
                {/* <DesignDev /> */}
                
                <WebdevFaq/>
            </div>
       </>
    )
}

export default Healthcare