import React from 'react'
import  Grid  from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import './site.css'
import './custom.css'
const Customerchoice = ({heading,description}) => {
  return (
    <>
    {/* <Grid container>
        <Grid item xs={12} md={12} lg={12} >
            <div></div>
        </Grid>
    </Grid> */}

<div  className="index-section customerchoice_main">
      <div className="promoted-gallery-wrapper"></div>
      
      <div className="index-section-wrapper page-content">
        <div className="content-inner has-content" >
          <div className="sqs-layout sqs-grid-12 columns-12">
            <div className="row sqs-row">
              <div className="col sqs-col-12 span-12">
                <div className="row sqs-row">
                  <div className="col sqs-col-1 span-1">
                    <div className="sqs-block spacer-block sqs-block-spacer sized vsize-1" data-block-type="21" id="block-yui_3_17_2_1_1587523680127_7161">
                      <div className="sqs-block-content">&nbsp;</div>
                    </div>
                  </div>
                  <div className="col sqs-col-10 span-10">
                    <div className="sqs-block html-block sqs-block-html" data-block-type="2" id="block-yui_3_17_2_1_1574411857670_6035">
                      <div className="sqs-block-content">
                        <div className="sqs-html-content">
                          <h2 style={{ textAlign: 'center', whiteSpace: 'pre-wrap' }}>
                            <strong>{heading}</strong>
                          </h2>
                          <p style={{ textAlign: 'center', whiteSpace: 'pre-wrap' }} className="advantage_description">
                            {description}&nbsp;
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="sqs-block code-block sqs-block-code" data-block-type="23" id="block-yui_3_17_2_1_1624536735575_8389">
                      <div className="sqs-block-content">
                    
                        {/* <video className="mp4-video-wrapper2" autoPlay loop width="100%" muted>
                          <source src="https://static1.squarespace.com/static/5716af60356fb068327b23af/t/60c2215020cd3a52137ffdec/1623335268945/Kapture+2020-01-14+at+14.26.21+trimmed.mp4?format=1000w" type="video/mp4" />
                        </video> */}
                        <video className="mp4-video-wrapper2" autoPlay loop width="100%" muted>
                          <source src="https://res.cloudinary.com/duoha2ui0/video/upload/v1705138429/DemoCreatorRec_2023-12-31_14-11-33_online-video-cutter.com_1_pxl4eg.mp4" type="video/mp4" />
                        </video>
                        <p style={{ fontStyle: 'italic' }}>
                          Not actual customer data
                        </p>
                      </div>
                    </div>
                    {/* <div className="sqs-block html-block sqs-block-html" data-block-type="2" id="block-yui_3_17_2_1_1612298778499_35690">
                      <div className="sqs-block-content">
                        <div className="sqs-html-content">
                          <p style={{ textAlign: 'center', whiteSpace: 'pre-wrap' }} className="customer_choice_heading">
                            <strong>We asked our customers what makes us special - here’s what they shared:</strong>
                          </p>
                        </div>
                      </div>
                    </div> */}
                  </div>
                  {/* <div className="col sqs-col-1 span-1">
                    <div className="sqs-block spacer-block sqs-block-spacer sized vsize-1" data-block-type="21" id="block-yui_3_17_2_1_1587523680127_8702">
                      <div className="sqs-block-content">&nbsp;</div>
                    </div>
                  </div> */}
                </div>
                {/* <div className="row sqs-row">
                  <div className="col sqs-col-6 span-6">
                    <div className="sqs-block html-block sqs-block-html">
                      <div className="sqs-block-content">
                        <div className="sqs-html-content">
                          <ul data-rte-list="default" className='customer_choice_list' >
                            <li>
                              <p className="" style={{ whiteSpace: 'pre-wrap' }}>Quick integration and platform setup, delivering value in weeks, not months&nbsp;&nbsp;</p>
                            </li>
                            <li>
                              <p className="" style={{ whiteSpace: 'pre-wrap' }}>Application of true AI and Machine Learning as opposed to human-informed metrics and statistical analysis</p>
                            </li>
                            <li>
                              <p className="" style={{ whiteSpace: 'pre-wrap' }}>Simple story-based visualizations making data accessible and always in context</p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col sqs-col-6 span-6">
                    <div className="sqs-block html-block sqs-block-html" data-block-type="2" id="block-yui_3_17_2_1_1612298778499_26362">
                      <div className="sqs-block-content">
                        <div className="sqs-html-content " >
                          <ul data-rte-list="default" style={{padding:"25px 0 0 0",lineHeight:"25px"}} >
                            <li>
                              <p className="" style={{ whiteSpace: 'pre-wrap' }}>Customized dashboards that capture your organization's unique goals and priorities</p>
                            </li>
                          </ul>
                          <ul data-rte-list="default" style={{padding:"5px 0 0 0",lineHeight:"25px"}} >
                            <li>
                              <p className="" style={{ whiteSpace: 'pre-wrap' }}>Fully managed service to ensure the success of your data program with ongoing support from certified Data Leadership Coaches</p>
                            </li>
                            <li>
                              <p className="" style={{ whiteSpace: 'pre-wrap' }}>A high-quality platform built by a team of the brightest minds spanning industry and background from former district administrators to Emmy award-winning designers</p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
                <div className="row sqs-row">
                  <div className="col sqs-col-5 span-5">
                    <div className="sqs-block spacer-block sqs-block-spacer sized vsize-1" data-block-type="21" id="block-yui_3_17_2_1_1612298778499_36700">
                      <div className="sqs-block-content">&nbsp;</div>
                    </div>
                  </div>
                  <div className="col sqs-col-7 span-7">
                    <div className="sqs-block button-block sqs-block-button" data-block-type="53" id="block-5469f644fb6bb57dfbe1">
                      <div className="sqs-block-content" id="yui_3_17_2_1_1698983074495_232">
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Customerchoice