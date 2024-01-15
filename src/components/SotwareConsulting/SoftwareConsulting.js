import React,{useState} from 'react';
import './softwareconsulting.css'
import {webdev} from './data'
import { Grid } from '@mui/material';
import nodejs from '../../images/NodeJS_logo.svg' 
import Elixer from '../../images/Elixer_logo.svg' 
import mongo from '../../images/MongoDB.svg' 
import magent from '../../images/Magento.svg' 
import swifts from '../../images/Swift.svg' 
import kotlins from '../../images/Kotlin.svg' 
import Objectivec from '../../images/Objective-C.svg' 
import aftereffect from '../../images/After-Effects.svg' 
import figmas from '../../images/Figma.svg' 
import invisions from '../../images/Invision.svg' 
import illustrators from '../../images/Illustrator.svg' 
import photoshops from '../../images/Photoshop.svg' 
import marvelicons from '../../images/marvel-icon.svg' 
import jiras from '../../images/Jira.svg' 
import Postmans from '../../images/Postman.svg' 
import SoapUIs from '../../images/SoapUI.svg' 
import etherum from '../../images/Ethereum.svg' 
import Hyperledgers from '../../images/Hyperledger.svg' 
import Mists from '../../images/Mist.svg' 

import Simplycitys from '../../images/Simplycity.svg' 
import Soliditys from '../../images/Solidity.svg' 
import Arduinos from '../../images/Arduino.svg' 
import OpenSCADAs from '../../images/OpenSCADA.svg' 
import Raspbians from '../../images/Raspbian.svg' 
import Tessels from '../../images/Tessel.svg' 

// mui responsive media query
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Link } from 'react-router-dom';

const SoftwareConsulting = () => {

    return <div className='software_consulting_main'>
        <div className='software_consulting_sub'>
            <div className='software_consulting_development_services'> <span style={{ color: 'linear-gradient(' +
    '265deg, ' +
    '#1ca3e9, ' +
    'rgb(29, 27, 110)' +
    ')'}}>Darwin Student Assessments with <br/>
Expert Visualization Services...</span></div>
            <div className='software_consulting_perfect_blend'>... dynamic student assessment analytics & visualization solutions.</div>
            <div className='software_consulting_perfect_all'>
            
            <SoftwareConsultingAll/>

            </div>
        </div> 
  </div>;
};

export default SoftwareConsulting;




const SoftwareConsultingAll = () => {
   const [j,setJ] = useState(0)

    return <div className='SoftwareConsultingAll_main'>
        <Grid container spacing={3}>
            <Grid item sm={12}  md={6} lg={8}>
                    <Grid container  spacing={2}>
                {webdev.map((w,i) => <>
                    <Grid onClick={()=> setJ(i)} item xs={12} sm={4}  md={4} lg={4} align='center' justify='center'><div className='software_consultin_all_button_main' style={{background: i===j?  'linear-gradient(' +
    '265deg, ' +
    '#1ca3e9, ' +
    'rgb(29, 27, 110)' +
    ')':'white',color: i===j?'white':'black'}} >
                        <div className='software_consultin_all_button_icon'><img style={{height:'30px',width:'30px'}} src={i===j?w.icon1:w.icon}></img></div>
                    <div className='software_consultin_all_button_text'>{ w.text}</div>
                    </div></Grid>
                </>)}
                </Grid>
                
            
            </Grid>
            <Grid item sm={12} md={6} lg={4}>
              <SoftwareConsultingContentBottom name={j}/>
            
            </Grid>
      </Grid>
  </div>;
};



const SoftwareConsultingContentBottom = (props) => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));
   
    return <>
        
      <div className='software_consulting_web_design_and_development_content'>
            <div className='software_consulting_web_design_and_development_heading'>
                {props.name === 0 ? 'Student Performance Analytics' : ''}
                {props.name === 3 ? 'WIDA Dashboard' : ''}
                {props.name === 2 ? 'F&P Assessment' : ''}
                {props.name === 4 ? 'NWEA Map suite' : ''}
                {props.name === 5 ? 'CBSE Grade Evaluation' : ''}
                {props.name === 1 ? 'Data Visualization and Reporting' : ''}
            
            
            
            
            </div>
            <div className='software_consulting_web_design_and_development_description'>
                {props.name === 0 ? 'Scalable web product development at any stage and ongoing support after launch.' : ''}
                {props.name === 3 ? 'Unveil the progress of English language learners through our WIDA Assessment Analytics.' : ''}
                {props.name === 2 ? 'F&P Assessment Visualization provides a comprehensive overview of students academic journeys.' : ''}
                {props.name === 4 ? 'Map suites of services is anchored by credible and consistent assessments, designed to deliver actionable insights and effective learning strategies.' : ''}
                {props.name === 5 ? 'CBSE Grade Analytics provides Data insights to educators, powered through our research expertise, resulting  Actionable data in Academic education .' : ''}
                {props.name === 1 ? 'Develop interactive dashboards, charts, graphs, and reports to present educational data in a visually engaging and comprehensible manner.' : ''}
            
               </div>
            <div className='software_consulting_web_design_and_development_icons'> <Grid container >
                
{/* web dev */}
            {/* {props.name === 0 ?   (<> <Grid item align='center' justify='center' xs={3} sm={3} md={3} xl={3}  lg={matches?3:1}> <img style={{height:'40px',width:'40px'}} src={nodejs}></img></Grid>
                        <Grid item align='center' justify='center' xs={3} sm={3} md={3} xl={3}  lg={matches?3:1}> <img style={{height:'40px',width:'40px'}} src={Elixer}></img></Grid>
                        <Grid item align='center' justify='center'  xs={3} sm={3} md={3} xl={3}  lg={matches?3:1}> <img style={{height:'40px',width:'40px'}} src={mongo}></img></Grid>
                    <Grid item align='center' justify='center'  xs={3} sm={3} md={3} xl={3}  lg={matches?3:1}> <img style={{ height: '40px', width: '40px' }} src={magent}></img></Grid> </>) : ''} */}
                
                {/* mobile */}
                {/* {props.name === 1 ? (<> <Grid item align='center' justify='center' xs={4} sm={4} md={4} xl={4}  lg={matches?4:1}> <img style={{height:'40px',width:'40px'}} src={swifts}></img></Grid>
                        <Grid item align='center' justify='center' xs={4} sm={4} md={4} xl={4}  lg={matches?4:1}> <img style={{height:'40px',width:'40px'}} src={kotlins}></img></Grid>
                        <Grid item align='center' justify='center' xs={4} sm={4} md={4} xl={4}  lg={matches?4:1}> <img style={{height:'40px',width:'40px'}} src={Objectivec}></img></Grid>
                    </>) : ''} */}
                
                {/* ui/ux */}
                {/* {props.name === 2 ? (<> <Grid item align='center' justify='center' xs={2} sm={2} md={2} xl={2}  lg={matches?2:1}> <img style={{height:'40px',width:'40px'}} src={aftereffect}></img></Grid>
                        <Grid item align='center' justify='center' xs={2} sm={2} md={2} xl={2}  lg={matches?2:1}> <img style={{height:'40px',width:'40px'}} src={figmas}></img></Grid>
                        <Grid item align='center' justify='center' xs={2} sm={2} md={2} xl={2}  lg={matches?2:1}> <img style={{height:'40px',width:'40px'}} src={invisions}></img></Grid>
                    <Grid item align='center' justify='center' xs={2} sm={2} md={2} xl={2}  lg={matches?2:1}> <img style={{ height: '40px', width: '40px' }} src={illustrators}></img></Grid>
                    <Grid item align='center' justify='center' xs={2} sm={2} md={2} xl={2}  lg={matches?2:1}> <img style={{ height: '40px', width: '40px' }} src={photoshops}></img></Grid>
                    <Grid item align='center' justify='center' xs={2} sm={2} md={2} xl={2}  lg={matches?2:1}> <img style={{ height: '40px', width: '40px' }} src={marvelicons}></img></Grid>
                
                </>) : ''} */}

                {/* software testing */}
                {/* {props.name === 3 ? (<> <Grid item align='center' justify='center' xs={4} sm={4} md={4} xl={4}  lg={matches?4:1}> <img style={{height:'40px',width:'40px'}} src={jiras}></img></Grid>
                        <Grid item align='center' justify='center' xs={4} sm={4} md={4} xl={4}  lg={matches?4:1}> <img style={{height:'40px',width:'40px'}} src={Postmans}></img></Grid>
                    <Grid item align='center' justify='center' xs={4} sm={4} md={4} xl={4}  lg={matches?4:1}> <img style={{ height: '40px', width: '40px' }} src={SoapUIs}></img></Grid> </>) : ''} */}
                
                {/* blockchain */}
                {/* {props.name === 4 ? (<> <Grid item align='center' justify='center' xs={2.4} sm={2.4} md={2.4} xl={2.4}  lg={matches?2.4:1}> <img style={{height:'40px',width:'40px'}} src={etherum}></img></Grid>
                        <Grid item align='center' justify='center' xs={2.4} sm={2.4} md={2.4} xl={2.4}  lg={matches?2.4:1}> <img style={{height:'40px',width:'40px'}} src={Hyperledgers}></img></Grid>
                        <Grid item align='center' justify='center' xs={2.4} sm={2.4} md={2.4} xl={2.4}  lg={matches?2.4:1}> <img style={{height:'40px',width:'40px'}} src={Mists}></img></Grid>
                    <Grid item align='center' justify='center' xs={2.4} sm={2.4} md={2.4} xl={2.4}  lg={matches?2.4:1}> <img style={{ height: '40px', width: '40px' }} src={Simplycitys}></img></Grid>
                    <Grid item align='center' justify='center' xs={2.4} sm={2.4} md={2.4} xl={2.4}  lg={matches?2.4:1}> <img style={{ height: '40px', width: '40px' }} src={Soliditys}></img></Grid>
                
                </>) : ''} */}
                
                {/* iot */}
                {/* {props.name === 5 ?(<> <Grid item align='center' justify='center' xs={3} sm={3} md={3} xl={3}  lg={matches?3:1}> <img style={{height:'40px',width:'40px'}} src={Arduinos}></img></Grid>
                        <Grid item align='center' justify='center' xs={3} sm={3} md={3} xl={3}  lg={matches?3:1}> <img style={{height:'40px',width:'40px'}} src={OpenSCADAs}></img></Grid>
                        <Grid item align='center' justify='center' xs={3} sm={3} md={3} xl={3}  lg={matches?3:1}> <img style={{height:'40px',width:'40px'}} src={Raspbians}></img></Grid>
                        <Grid item align='center' justify='center' xs={3} sm={3} md={3} xl={3}  lg={matches?3:1}> <img style={{height:'40px',width:'40px'}} src={Tessels}></img></Grid> </>) : ''} */}
            
                      
                     
                        
                    
                    </Grid></div>
          {props.name===0?  <Link to='/nweamapsuite'>
            <div className='software_consulting_web_design_and_development_learn_more'> Learn More</div>
            </Link>:""}
          {props.name===1?  <Link to='/widadashboard'>
            <div className='software_consulting_web_design_and_development_learn_more'> Learn More</div>
            </Link>:""}
          {props.name===2?  <Link to='/fnpAssessment'>
            <div className='software_consulting_web_design_and_development_learn_more'> Learn More</div>
            </Link>:""}
          {props.name===3?  <Link to='/widadashboard'>
            <div className='software_consulting_web_design_and_development_learn_more'> Learn More</div>
            </Link>:""}
          {props.name===4?  <Link to='/nweamapsuite'>
            <div className='software_consulting_web_design_and_development_learn_more'> Learn More</div>
            </Link>:""}
          {props.name===5?  <Link to='/cbse'>
            <div className='software_consulting_web_design_and_development_learn_more'> Learn More</div>
            </Link>:""}

        </div>
        
    </>;
};





