// automate script

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import  Grid  from '@mui/material/Grid';
import React from 'react';
import './engagementmodel.css'
import engage from '../../images/engagement.svg'
import staff from '../../images/staff_engagement.svg'
import productdevelopement from '../../images/productdev.svg'
import dedicateddeveloper from '../../images/dedicated.svg'

// mui responsive media query
const EngagementModel = () => {

    
const theme = useTheme();
const matches = useMediaQuery(theme.breakpoints.down("md"));
    return <div className='engagementmodel_main'>
      
        <div className='engagementmodel_sub'>

            <Grid align='center' justify='center' container spacing={4}>
                <Grid item sm={12} md={6} lg={6}>
                    <div className='engagement_model_leftpart_main'>
                    <div className='engagement_model_leftpart_heading'>
                    Engagement <span style={{ color: 'linear-gradient(' +
    '265deg, ' +
    '#1ca3e9, ' +
    'rgb(29, 27, 110)' +
    ')'}}>Models</span>
                        </div>
                        <div className='engagement_model_leftpart_description'>
                        We asked our customers what makes us special <br/>
                        here’s what they shared
                        </div>
                        <div className='engagement_model_leftpart_image'>
                            <img style={{width:matches?'310px':'370px',height:'300px'}} src={engage}/>
                </div>
                    </div>
                </Grid>
                <Grid item sm={12} md={6} lg={6}>
                    <div className='engagement_model_call' >
                        <div className='engagement_model_call1'>
                          
                            <EngagementModelRight heading="Success-Driven School Data Analysis" description="Fully managed service to ensure the success of your school data Analysis."
                            image={productdevelopement}
                            />
                       </div>
                        <div className='engagement_model_call2'>
                        <EngagementModelRight heading="Tailored Dashboards" description="Customized dashboards that capture your organization's unique goals and priorities."
                            image={dedicateddeveloper}
                            />
                       </div>
                        <div className='engagement_model_call3'>
                        <EngagementModelRight heading="Rapid Integration and Platform Setup" description="Quick integration and platform setup, delivering value in weeks, not months."
                            image={staff}
                            />
                       </div>
                      
               </div>
                </Grid>
            </Grid>
            <div className='engagementmodel_view_pricing'>  <button>View Pricing </button></div>
        </div>
  </div>;
};

export default EngagementModel;



export const EngagementModelRight = ({heading,description,image}) => {
    return <div className='engagementmodelright_staff_main'>
        <Grid container spacing={2} justify="center">
            <Grid item xs={12} lg={2}> <img style={{width:'55px',height:'55px'}} src={ image}/> </Grid>
            <Grid item xs={12} lg={10}>
                <div >
                    <div className='engagementmodel_staff'>{ heading}</div>
                    <div className='engagementmodel_staff_description'>{ description}</div>
                    </div>

            </Grid>
      </Grid>
        
  </div>;
};


