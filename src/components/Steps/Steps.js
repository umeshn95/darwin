import { Grid } from '@mui/material';
import React from 'react';
import Stepscomponent from './Stepscomponent';
import './steps.css'
import { AiOutlineArrowRight } from 'react-icons/ai';
const Steps = () => {
  return <div className='steps_main_component'>
      <Grid container style={{paddingBottom:'40px'}}>
    <Grid item md={8} lg={8}>
    <div className='steps_main_text'>HOW WE WORKS</div>
    <div className='steps_main_heading'>How Darwin Analytics assist <span style={{color:'#086ad8'}}> your School</span></div>
    </Grid>
    <Grid  item md={4} lg={4} align='center' justify='center'><div className='stepscomponent_steps_mark'> <mark style={{background: 'none',
    textDecoration: 'none',position:'absolute',fontSize:"120px",fontWeight:'600',marginTop:"-60px",zIndex:'-1',color:"#ededed"}}>04</mark>STEPS</div></Grid>
      </Grid>
      <Grid  container spacing={4}>
      <Grid item md={6} lg={3} >
          <Stepscomponent count="01" heading="Integrate Your Data" description="First, we learn about your education outcomes and combine stakeholder interviews with a data discovery workshop to get the integration started the right way."/>
      </Grid>
      <Grid item md={6} lg={3} >
        <Stepscomponent
        count="02" heading="Predictive Analytics Models " description="After integrating your data, we build vital, high-impact algorithms, predictive analytics, and machine learning models for your organization."
        />
      </Grid>
      <Grid item md={6} lg={3} >
        <Stepscomponent
        count="03" heading="Customize Reporting" description="Based on your objectives and outcomes, we build easy-to-use dashboards that reflect the needs of different stakeholders and users."
        />
      </Grid>
      <Grid item md={6} lg={3} >
      <div className='stepscomponent_main'>
      <div className='stepscomponent_sub'>
    <div className='stepcomponents_count'>04</div>
    <div className='stepscomponent_discussion'>
    <div className='stepscomponent_discussion_heading'>Mobilize Your Analytics Data</div>
    <div className='stepscomponent_discussion_description'>Disseminate your analytics data across your entire organization.</div>
    <div className='stepscomponent_discussion_button'>Learn More <AiOutlineArrowRight/></div>
    </div>
    </div>
    </div>
      </Grid>


      </Grid>

  </div>;
};

export default Steps;
