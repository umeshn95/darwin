import React from 'react'
import '../Customerchoice/site.css'
import '../Customerchoice/custom.css'
import './Unifieddataplatform.css'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Icon from '@mui/material/Icon';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom/cjs/react-router-dom';


const items = [
    { icon: 'https://images.squarespace-cdn.com/content/v1/5716af60356fb068327b23af/1630398759762-HZNCDUJQLBOUOECZYJRT/image-asset.png?format=100w', text: 'Modern Learning' },
    { icon: 'https://images.squarespace-cdn.com/content/v1/5716af60356fb068327b23af/1630603514543-KZ9EQ2CEHY7T9Z0RLWWA/14.Solutions+ESSA+Reporting%3F.png?format=100w', text: 'ESSA Reporting' },
    { icon: 'https://images.squarespace-cdn.com/content/v1/5716af60356fb068327b23af/1630421321425-HDSV2D6RHEMR2TGZ4AST/Solutions+College+and+Career+Readiness.png?format=100w', text: 'College & Career Readiness' },
    { icon: 'https://images.squarespace-cdn.com/content/v1/5716af60356fb068327b23af/1630422159086-9ZW92JKBEQV96UUR08D3/17.Solutions+Operation.png?format=100w', text: 'Progress Monitoring' },
    { icon: 'https://images.squarespace-cdn.com/content/v1/5716af60356fb068327b23af/1630421358958-NDRNWWUEYZNHH4MMM0BR/5.Solutions+Behavior+and+Discipline.png?format=100w', text: 'Behavior & Discipline' },
    { icon: 'https://images.squarespace-cdn.com/content/v1/5716af60356fb068327b23af/1630421408265-V4IJSUZUI4EVQV31NTZG/Solutions+Attendance.png?format=100w', text: 'Attendance' },
    { icon: 'https://images.squarespace-cdn.com/content/v1/5716af60356fb068327b23af/1630420989028-W4VXXKJ3DBC2904BYVI8/Solutions+Early+Warning.png?format=100w', text: 'Early Warning' },
    { icon: 'https://images.squarespace-cdn.com/content/v1/5716af60356fb068327b23af/1630421234995-FIY9M7GBDPK5L2QWSDB2/Solutions+Social+and+Emotional+Learning.png?format=100w', text: 'Social and Emotional Learning' },
    { icon: 'https://images.squarespace-cdn.com/content/v1/5716af60356fb068327b23af/1630421070023-8GVXWK66X8YVPGA71KC4/Solutions+Whole+Child.png?format=100w', text: 'Whole Child' },
    
    
    
    { icon: 'https://images.squarespace-cdn.com/content/v1/5716af60356fb068327b23af/1630421385460-GFT00AUA4FGOSVFGG8M8/6.Solutions+Academics.png?format=100w', text: 'Academics' },
    
    { icon: 'https://images.squarespace-cdn.com/content/v1/5716af60356fb068327b23af/1630421433115-XAYKAV2XRVVFMBOZBOOM/8.Solutions+Assesments.png?format=100w', text: 'Assessments' },
    { icon: 'https://images.squarespace-cdn.com/content/v1/5716af60356fb068327b23af/1630421455694-AYRSJ3ULYVXC8KEB5JPB/9.Solutions+Enrollment.png?format=100w', text: 'Enrollment' },
    { icon: 'https://images.squarespace-cdn.com/content/v1/5716af60356fb068327b23af/1630601964682-FVZNA8FHVLUZ5JW9A9NS/10.Solutions+School+Climate+%26+Culture%3F.png?format=100w', text: 'School Climate & Culture' },
    { icon: 'https://images.squarespace-cdn.com/content/v1/5716af60356fb068327b23af/1630421760927-U2IT0R3GIZ4L9VR5GJOL/11.Solutions+Student+Interventions.png?format=100w', text: 'Intervention' },
    
    { icon: 'https://images.squarespace-cdn.com/content/v1/5716af60356fb068327b23af/1630421789735-P2707P1HSIB5YNZVWZTD/12.Solutions+Ed-Tech+Impact.png?format=100w', text: 'EdTech Impact' },
    { icon: 'https://images.squarespace-cdn.com/content/v1/5716af60356fb068327b23af/1630421824838-WTWF1A9QVSLPC2A2H81A/13.Solutions+Technology+and+Learning.png?format=100w', text: 'Technology & Learning' },
    
];
const Unifieddataplatform = () => {
    return (
    
    <div className='unified_data_platform_main'>
      <div className="index-section-wrapper1 page-content">
        <div className="content-inner has-content" data-content-field="main-content">
          <div
            className="sqs-layout sqs-grid-12 columns-12"
            data-type="page"
            data-updated-on="1629794061605"
            id="page-5dd79632f43c174dfb1904a6"
          >
            <div className="row sqs-row">
              <div className="col sqs-col-12 span-12">
                <div className="row sqs-row">
                  <div className="col sqs-col-1 span-1">
                    <div
                      className="sqs-block spacer-block sqs-block-spacer sized vsize-1"
                      data-block-type="21"
                      id="block-yui_3_17_2_1_1574411188464_5330"
                    >
                      <div className="sqs-block-content">&nbsp;</div>
                    </div>
                  </div>
                  <div className="col sqs-col-10 span-10">
                    <div
                      className="sqs-block html-block sqs-block-html"
                      data-block-type="2"
                      id="block-67a66a92c2b3e8b9add6"
                    >
                      <div className="sqs-block-content">
                        <div className="sqs-html-content">
                          <h2 style={{ textAlign: 'center', whiteSpace: 'pre-wrap' }}>
                            <strong>
                              Unified Data Platform Combining Quantitative And Qualitative Factors That Impact Learning
                            </strong>
                          </h2>
                          <p style={{ textAlign: 'center', whiteSpace: 'pre-wrap',lineHeight:"25px" }}>
                            We offer 200+ outcome-based dashboards for your most important priorities. You can start with one
                            dashboard, use them all, or create your own.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col sqs-col-1 span-1">
                    <div
                      className="sqs-block spacer-block sqs-block-spacer sized vsize-1"
                      data-block-type="21"
                      id="block-yui_3_17_2_1_1574411188464_6492"
                    >
                      <div className="sqs-block-content">&nbsp;</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="sqs-block gallery-block sqs-block-gallery"
              data-block-json="{&quot;hSize&quot;:null,&quot;floatDir&quot;:null,&quot;methodOption&quot;:&quot;existing&quot;,&quot;existingGallery&quot;:&quot;5dd79be88fff286a0ebfaaee&quot;,&quot;newWindow&quot;:false,&quot;aspect-ratio&quot;:&quot;widescreen&quot;,&quot;aspectRatio&quot;:null,&quot;auto-crop&quot;:true,&quot;blockAnimation&quot;:&quot;none&quot;,&quot;collectionId&quot;:&quot;5dd79be88fff286a0ebfaaee&quot;,&quot;design&quot;:&quot;grid&quot;,&quot;existingGalleryId&quot;:&quot;5dd79be88fff286a0ebfaaee&quot;,&quot;lightbox&quot;:false,&quot;padding&quot;:50,&quot;show-meta&quot;:true,&quot;show-meta-basic&quot;:true,&quot;show-meta-only-title&quot;:true,&quot;show-meta-only-description&quot;:false,&quot;square-thumbs&quot;:true,&quot;thumbnails-per-row&quot;:4,&quot;vSize&quot;:null}"
              data-block-type="8"
              id="block-yui_3_17_2_1_1574409878192_5737"
            >
              <div className="sqs-block-content">
                {/* Your gallery content */}
                <Grid container >
      {items.map((item, index) => (
        <Grid item xs={6} sm={3} key={index}>
          <Grid elevation={3} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: 1 }}>
            <img style={{height:"38px", width:"38px"}} sx={{  marginRight: 2 }} src={item.icon} alt={item.icon}></img>
            <Typography variant="subtitle1" sx={{ marginLeft: 2 }}>{item.text}</Typography>
          </Grid>
        </Grid>
      ))}

<Grid container justifyContent="center" style={{ marginTop: '16px' }}>
      <Link to='/contact'>
      <button variant="contained" color="primary" className='software_consulting_web_design_and_development_learn_more'>
          Learn More
        </button>
      </Link>
      </Grid>
    </Grid>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Unifieddataplatform