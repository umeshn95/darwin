import React from 'react'
import { About } from '../../components'
import WebdevserviceMain from '../../components/Webdevelopment/WebdevserviceMain'
import ReachOut from '../../components/Reachout/ReachOut'
import WebdevFaq from '../../components/Webdevelopment/WebdevFaq'
import { ecomm } from '../../components/Reachout/reachoutdata'
import './newabout.css'
import { Link } from 'react-router-dom/cjs/react-router-dom'

const Newabout = () => {
  return (
    <>
    <div>
                {/* <div style={{width:'100%',height:'64px',background:'#2176FF'}}></div> */}

                <AboutHeading/>
                <OurVision/>
                {/* <WebdevserviceMain heading={`Modernizing Educational `} variableText = 'Data'  description='Build your educational data strategy on a modernized data infrastructure to support the academic and overall well-being of all learners.' point1='Data Processing'  point2='Data Analytics' point3='Data Storage' 
                /> */}
                <ReachOut description='Darwin Data Modernization Infrastructure' heading1= {ecomm}  />
                {/* <HireDeveloper /> */}
                {/* <WebdevProcessPage /> */}
                {/* <DesignDev /> */}
                
                <WebdevFaq/>
            </div>
    </>
  )
}

export default Newabout




export const AboutHeading = () => {
  // Define the style object with the background image URL
  const backgroundStyle = {
    backgroundImage: 'url("https://images.squarespace-cdn.com/content/5716af60356fb068327b23af/1618503106278-HIOZ65Y6LZOI4W95C4BN/About+Header.jpg")', // Replace with your image URL
    backgroundSize: 'cover', // Adjust as needed
    backgroundRepeat: 'no-repeat', // Adjust as needed
    backgroundPosition: 'center', // Adjust as needed
  };

  return (
    <div className="index-section-wrapper_about page-content" style={backgroundStyle}>
      <div className="content-inner has-content" data-content-field="main-content">
        <div className="sqs-layout sqs-grid-12 columns-12" data-type="page" data-updated-on="1617340499503" id="page-5df0c8dc4ba53f72844528ed">
          <div className="row sqs-row">
            <div className="col sqs-col-12 span-12">
              <div className="row sqs-row">
                <div className="col sqs-col-9 span-9">
                  <div className="sqs-block html-block sqs-block-html" data-block-type="2" id="block-35d4a1e3abdb47f36baa">
                    <div className="sqs-block-content">
                      <div className="sqs-html-content">
                        <h1 style={{ whiteSpace: 'pre-wrap',color:"white" }}>
                          <strong>Data Analytics To Improve Student Outcomes For All</strong>
                        </h1>
                        <h3 style={{ whiteSpace: 'pre-wrap',color:"white" }} className="fontfamily1">
                          Our mission is to actualize the expansive promise of education by transforming data into actionable insights that positively impact students’ academic and overall well-being.
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col sqs-col-3 span-3">
                  <div className="sqs-block spacer-block sqs-block-spacer sized vsize-1" data-block-type="21" id="block-yui_3_17_2_1_1576061184050_10933">
                    <div className="sqs-block-content">&nbsp;</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}




const OurVision = () => {
  return (
    <div id="n-our-vision" className="index-section" data-url-id="n-our-vision" data-collection-id="5dcb1da7742e65301b19949f" data-edit-main-image="">
      <div className="promoted-gallery-wrapper"></div>
      <div className="index-section-wrapper page-content" id="yui_3_17_2_1_1699242576830_133">
        <div className="content-inner has-content" data-content-field="main-content" id="yui_3_17_2_1_1699242576830_132">
          <div className="sqs-layout sqs-grid-12 columns-12" data-type="page" data-updated-on="1616426355861" id="page-5dcb1da7742e65301b19949f">
            <div className="row sqs-row" id="yui_3_17_2_1_1699242576830_131">
              <div className="col sqs-col-6 span-6" id="yui_3_17_2_1_1699242576830_128">
                <div className="sqs-block image-block sqs-block-image sqs-text-ready" data-aspect-ratio="65.51724137931035" data-block-type="5" id="block-206adda453289bce75b8">
                  <div className="sqs-block-content" id="yui_3_17_2_1_1699242576830_127">
                    <div className="image-block-outer-wrapper layout-caption-hidden design-layout-inline combination-animation-fade-in individual-animation-none individual-text-animation-none animation-loaded" data-test="image-block-inline-outer-wrapper" id="yui_3_17_2_1_1699242576830_126">
                      <figure className="sqs-block-image-figure intrinsic" style={{ maxWidth: '597px' }} id="yui_3_17_2_1_1699242576830_125">
                        <div className="image-block-wrapper" data-animation-role="image" data-animation-override="" id="yui_3_17_2_1_1699242576830_124">
                          <div className="sqs-image-shape-container-element has-aspect-ratio" style={{ position: 'relative', paddingBottom: '65.51724243164062%', overflow: 'hidden', WebkitMaskImage: '-webkit-radial-gradient(white, black)' }} id="yui_3_17_2_1_1699242576830_123">
                            <img
                              src="https://images.squarespace-cdn.com/content/v1/5716af60356fb068327b23af/1575582984208-TS0Y8GN033W91OAPLJOA/About+Lasting+Impact.png"
                              alt="About Lasting Impact.png"
                              style={{ display: 'block', objectFit: 'cover', width: '100%', height: '100%', objectPosition: '50% 50%' }}
                            />
                          </div>
                        </div>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col sqs-col-6 span-6">
                <div className="sqs-block html-block sqs-block-html" data-block-type="2" id="block-d25f6fa1655634d08c00">
                  <div className="sqs-block-content">
                    <div className="sqs-html-content">
                      <p className="fontfamily1" style={{ whiteSpace: 'pre-wrap' }} ><strong>OUR VISION</strong></p>
                      <h2 style={{ whiteSpace: 'pre-wrap' }} className="fontfamily1" ><strong>Empowering You to Make A Lasting Impact</strong></h2>
                      <p className="fontfamily1" style={{ whiteSpace: 'pre-wrap', lineHeight:"1.6" }} >Darwin believes that the promise of education expands far beyond academics. We empower you with easy data insights so that you can empower your students to live up to their potential, enjoy their learning experience, and emerge ready to take on the world.&nbsp;</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sqs-block spacer-block sqs-block-spacer sized vsize-1" data-block-type="21" id="block-yui_3_17_2_1_1574128174714_32935">
              <div className="sqs-block-content">&nbsp;</div>
            </div>
            <div className="row sqs-row" id="yui_3_17_2_1_1699242576830_145">
              <div className="col sqs-col-6 span-6">
                <div className="sqs-block html-block sqs-block-html" data-block-type="2" id="block-yui_3_17_2_1_1574128174714_25092">
                  <div className="sqs-block-content">
                    <div className="sqs-html-content">
                      <p className="fontfamily1" style={{ whiteSpace: 'pre-wrap' }}><strong>WE LOVE DATA</strong></p>
                      <h2 style={{ whiteSpace: 'pre-wrap' }} className='fontfamily1'><strong>Analyzing data shows opportunities to learn</strong></h2>
                      <p className="fontfamily1" style={{ whiteSpace: 'pre-wrap',lineHeight:"1.8" }}>We eat, sleep, and breathe data and data analysis. We’re data nerds with a passion for helping educators use data, meaning we go the extra mile in how we build our platform.</p>
                    </div>
                  </div>
                </div>
                <div className="sqs-block button-block sqs-block-button" data-block-type="53" id="block-yui_3_17_2_1_1574128174714_26795">
                  <div className="sqs-block-content" id="yui_3_17_2_1_1699242576830_287">
                    <div className="sqs-block-button-container sqs-block-button-container--left" data-animation-role="button" data-alignment="left" data-button-size="small" data-button-type="tertiary" id="yui_3_17_2_1_1699242576830_286">
                      <Link to="/contact" className="software_consulting_web_design_and_development_learn_more" data-initialized="true">
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col sqs-col-6" id="yui_3_17_2_1_1699242576830_144">
                <div className="sqs-block image-block sqs-block-image sqs-text-ready" data-block-type="5" id="block-yui_3_17_2_1_1574128174714_27769">
                  <div className="sqs-block-content" id="yui_3_17_2_1_1699242576830_143">
                    <div className="image-block-outer-wrapper layout-caption-below design-layout-inline combination-animation-fade-in individual-animation-none individual-text-animation-none animation-loaded" data-test="image-block-inline-outer-wrapper" id="yui_3_17_2_1_1699242576830_142">
                      <figure className="sqs-block-image-figure intrinsic" style={{ maxWidth: '2500px' }} id="yui_3_17_2_1_1699242576830_141">
                        <div className="image-block-wrapper" data-animation-role="image" data-animation-override="" id="yui_3_17_2_1_1699242576830_140">
                          <div className="sqs-image-shape-container-element has-aspect-ratio" style={{ position: 'relative', paddingBottom: '65.12000274658203%', overflow: 'hidden', WebkitMaskImage: '-webkit-radial-gradient(white, black)' }} id="yui_3_17_2_1_1699242576830_139">
                            <img
                              src="https://images.squarespace-cdn.com/content/v1/5716af60356fb068327b23af/1616426292646-2YCIG91UCUMHRNJA8FQX/welovedata.png"
                              alt="welovedata.png"
                              style={{ display: 'block', objectFit: 'cover', width: '100%', height: '100%', objectPosition: '50% 50%' }}
                            />
                          </div>
                        </div>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};




