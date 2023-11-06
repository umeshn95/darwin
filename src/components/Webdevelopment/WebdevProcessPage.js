// automate script

import './styles.css'
import React from 'react';
import webdevprocessimages from '../../images/wedevprocessimage.svg'
import  Grid  from '@mui/material/Grid';

const WebdevProcessPage = () => {
    return <div className='WebdevProcessPage_main'>
      
        <div className='WebdevProcessPagel_sub'>
            <div className='WebdevProcessPage_heading'>How <span style={{color:'#2176ff'}}>Data Analytics platform </span> <br/>
of Darwin Works?</div>
            <Grid container>
                <Grid align='center' justify='center' item xs={12} sm={12} md={6}  lg={6} xl={6}>
                    <img className='WebdevProcessPage_image' src={webdevprocessimages}></img>
                </Grid>
                <Grid item xs={12} sm={12} md={6}  lg={6} xl={6}>
                    <Grid direction='column' container>
                        <Grid  xs={12} sm={12} md={12}  lg={12} xl={12} item>
                            <WebdevProcessPageRight/>
                        </Grid>
                </Grid>
                </Grid>
            </Grid>


        </div>
  </div>;
};

export default WebdevProcessPage;


export const WebdevProcessPageRight = () => {
    return <div className='WebdevProcessPageRight_main'>
        <Grid container>
            <Grid item xs={1} sm={1} lg={0.9}>
                <div className='WebdevProcessPageRight_discuss_circle'></div>
            </Grid>
            <Grid item xs={11} sm={11} lg={11.1}>
                <div className='WebdevProcessPageRight_discuss_heading'>Personalize Your Analytics Program</div>
                <div className='WebdevProcessPageRight_discuss_description'>We strategize your objectives with a tested approach to 
                <br/> creating a data platform that improves desired outcomes.</div>
            </Grid>
      </Grid>
        <Grid container>
            <Grid item xs={1} sm={1} lg={0.9}>
                <div className='WebdevProcessPageRight_discuss_circle2'></div>
            </Grid>
            <Grid item xs={11} sm={11} lg={11.1}>
                <div className='WebdevProcessPageRight_discuss_heading'>Integrate Your Data</div>
                <div className='WebdevProcessPageRight_discuss_description'>We are experts in building and managing your data analytics infrastructure.
                </div>
            </Grid>
      </Grid>
            <Grid container>
                <Grid item xs={1} sm={1} lg={0.9}>
                    <div className='WebdevProcessPageRight_discuss_circle3'></div>
                </Grid>
                <Grid item xs={11} sm={11} lg={11.1}>
                    <div className='WebdevProcessPageRight_discuss_heading'>Build Your Predictive Analytics Models</div>
                    <div className='WebdevProcessPageRight_discuss_description'>After integrating your data, we build predictive analytics.
                    <br/>   </div>
                </Grid>
        </Grid>
            <Grid container>
                <Grid item xs={1} sm={1} lg={0.9}>
                    <div className='WebdevProcessPageRight_discuss_circle4'></div>
                </Grid>
                <Grid item xs={11} sm={11} lg={11.1}>
                    <div className='WebdevProcessPageRight_discuss_heading'>Customize Role-Based Data Dashboards</div>
                    <div className='WebdevProcessPageRight_discuss_description'>Based on your objectives and outcomes, we build easy-to-use 
                    <br/> dashboards that reflect the needs of different users. </div>
                </Grid>
        </Grid>
            <Grid container>
                <Grid item xs={1} sm={1} lg={0.9}>
                    <div className='WebdevProcessPageRight_discuss_circle5'></div>
                </Grid>
                <Grid item xs={11} sm={11} lg={11.1}>
                    <div className='WebdevProcessPageRight_discuss_heading'>Mobilize Your Analytics Data</div>
                    <div className='WebdevProcessPageRight_discuss_description'>Disseminate your analytics data across your entire organization.
                    <br/> </div>
                </Grid>
        </Grid>
       
      
      
     
  </div>;
};

