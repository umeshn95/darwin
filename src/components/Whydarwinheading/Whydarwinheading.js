import React from 'react';
import './whydarwinheading.css'
import { Grid, Typography, Paper,Container } from '@mui/material';

const Whydarwinheading = () => {
  const imageUrl =
    'https://images.squarespace-cdn.com/content/5716af60356fb068327b23af/1610058386842-JQI7Z4ITJAZW2RJCRLCQ/image-asset.png';

  return (
    <>
    <Grid container spacing={2} className='whydarwingheading_main'>
      <Grid item xs={12} md={6}>
        <div  className='fontfamily1'>
          <p  className='fontfamily1 heading_whydarwinheading'>
          <span style={{color:"#2176FF"}}>Darwin,</span> The Top Choice For Educators
          </p>
          <p  className='fontfamily1 description_whydarwinheading' >
          It’s hard to choose an analytics platform that works for everyone on your team. Learn more about why districts picked Darwin.
          </p>
        </div>
      </Grid>
      <Grid item xs={12} md={6} align="center" >
        <img src={imageUrl} alt="Main Image" style={{ width: '60%' }} />
      </Grid>
    </Grid>
    <Awardwinning heading="Award-winning Team" description1="An easy-to-use, award-winning platform backed by a powerhouse of educators,
        researchers, developers, and data experts." point1="Recieved 30 Awards" pointimg1="https://images.squarespace-cdn.com/content/v1/5716af60356fb068327b23af/1580853113572-UFP1UFMAY8L3J75QK83Z/Why+BB+-+Awards.png?format=1500w" point2="Loved by 25K+ Schools" pointimg2="https://images.squarespace-cdn.com/content/v1/5716af60356fb068327b23af/1580853136600-PGZ52C3V1MSV2QSUVXJE/Why+BB+-+Schools.png?format=1500w" point3="Served 10M+ Students" pointimg3="https://images.squarespace-cdn.com/content/v1/5716af60356fb068327b23af/1580853291750-K6UVRFZ5UB9VGGA769U6/Why+BB+-+Students.png?format=1500w" description2="We are a group of dreamers and doers that have one thing in common: a mission to make a difference in the life of each student. We attract some of the brightest minds spanning industry and background, from district administrators to Emmy award-winning designers, all sharing a common purpose of leaving the world a tiny bit better than we found it. From the day BrightBytes was born, our focus has been on supporting thousands of organizations on their journey to harness the power of their data."/>

    <WorldClass/>

    <Awardwinning heading="Deeply Committed To Data Privacy" description1="We are fully and adamantly committed to data privacy and security." point1="Specialized service for PII protection" pointimg1="https://images.squarespace-cdn.com/content/v1/5716af60356fb068327b23af/1580852026335-JCRBVYR2J7RUPYYEDCFP/PPI+Protection.png?format=1500w" point2="FERPA, COPPA and SOPIPA compliant" pointimg2="https://images.squarespace-cdn.com/content/v1/5716af60356fb068327b23af/1580852088159-U2D9M2AX3U3GDAU94FYP/HIPPA+FERPA.png?format=1500w" point3="End-to-end encryption" pointimg3="https://images.squarespace-cdn.com/content/v1/5716af60356fb068327b23af/1580852114249-8U8ZUHD89KZPHCC1NL7B/end-to-end+encription.png?format=1500w" description2="Our expertise and capabilities allow us to handle PII data through a zero-knowledge approach that limits data access to those who are authorized. End user role-based permissions limit access to certain data to comply with school data privacy and access policies. We use end-to-end encryption and key management services to protect your data. We are compliant with FERPA, COPPA, and SOPIPA."/>

    </>
  );
};



export default Whydarwinheading;



const Awardwinning = ({heading,description1,description2,point1,point2,point3,pointimg1,pointimg2,pointimg3}) => {
  return (
    <Container>
      {/* Heading in the center */}


      <h2 style={{ textAlign: 'center', whiteSpace: 'pre-wrap' }} className='fontfamily1'>
                        <strong>{heading}</strong>
                      </h2>

      {/* Description centered below the heading */}
      <p align="center" className='description_whydarwinheading1' >
        {description1}
      </p>

      {/* Three columns in a row, each containing an image and text */}
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={4}>
          <div style={{ textAlign: 'center' }}>
            <img src={pointimg1} alt="Image 1" width="100 px" height="100 px" />
            <p align="center" className='recieve_reward'>
            {point1}
            </p>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div style={{ textAlign: 'center' }}>
            <img src={pointimg2} alt="Image 2" width="100 px" height="100 px" />
            <p align="center" className='recieve_reward' >
            {point2}
            </p>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div style={{ textAlign: 'center' }}>
            <img src={pointimg3} alt="Image 3" width="100 px" height="100 px" />
            <p align="center" className='recieve_reward'>
            {point3}
            </p>
          </div>
        </Grid>
      </Grid>

      {/* Paragraph centered below the columns */}
      <p className='description_whydarwinheading' style={{padding:"30px",textAlign:"left"}} align="center">
      {description2} 
      </p>
    </Container>
  );
};


const WorldClass = () => {
  return (
    <div id="world-class-user-experience1" className="index-section" data-url-id="world-class-user-experience1" data-collection-id="5e2b3dcb2f9ad9725dcd7e9f" data-edit-main-image="">
      <div className="promoted-gallery-wrapper"></div>

      <div className="index-section-wrapper page-content" id="yui_3_17_2_1_1699178235137_223">
        <div className="content-inner has-content" data-content-field="main-content" id="yui_3_17_2_1_1699178235137_222">
          <div className="sqs-layout sqs-grid-12 columns-12" data-type="page" data-updated-on="1626801340976" id="page-5e2b3dcb2f9ad9725dcd7e9f">
            <div className="row sqs-row" id="yui_3_17_2_1_1699178235137_221">
              <div className="col sqs-col-12 span-12" id="yui_3_17_2_1_1699178235137_220">
                <div className="sqs-block html-block sqs-block-html" data-block-type="2" id="block-yui_3_17_2_1_1579892544674_10537">
                  <div className="sqs-block-content">
                    <div className="sqs-html-content">
                      <h2 style={{ textAlign: 'center', whiteSpace: 'pre-wrap' }}>
                        <strong>World Class User Experience</strong>
                      </h2>
                      <h3 className='fontfamily1' style={{ textAlign: 'center', whiteSpace: 'pre-wrap' }}>
                        We offer a simple, easy-to-use platform built for educators
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="row sqs-row">
                  <div className="col sqs-col-1 span-1">
                    <div className="sqs-block spacer-block sqs-block-spacer sized vsize-1" data-block-type="21" id="block-yui_3_17_2_1_1579892544674_43555">
                      <div className="sqs-block-content">&nbsp;</div>
                    </div>
                  </div>
                  <div className="col sqs-col-11 span-11">
                    <div className="row sqs-row">
                      <div className="col sqs-col-10 span-10">
                        <div className="sqs-block html-block sqs-block-html" data-block-type="2" id="block-yui_3_17_2_1_1579892544674_43618">
                          <div className="sqs-block-content">
                            <div className="sqs-html-content">
                              <p style={{ textAlign: 'center', whiteSpace: 'pre-wrap' }}>
                                You deserve a seamless data analytics experience so you can spend more time with your students and less time trying to make sense of confusing data. That’s why we built a platform that's easy to implement and use, and is packed with unmatched features that save you time and effort. Role-based dashboards are designed for each user to provide access to the insights that matter most.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col sqs-col-1 span-1">
                        <div className="sqs-block spacer-block sqs-block-spacer sized vsize-1" data-block-type="21" id="block-yui_3_17_2_1_1579892544674_46523">
                          <div className="sqs-block-content">&nbsp;</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sqs-block spacer-block sqs-block-spacer" data-aspect-ratio="2.156862745098039" data-block-type="21" id="block-yui_3_17_2_1_1579904738281_28875">
              <div className="sqs-block-content sqs-intrinsic" id="yui_3_17_2_1_1699178235137_421" style={{ paddingBottom: '2.15686%' }}>&nbsp;</div>
            </div>
            <div className="row sqs-row" id="yui_3_17_2_1_1699178235137_219">
              <div className="col sqs-col-4 span-4">
                <div className="sqs-block html-block sqs-block-html" data-block-type="2" id="block-581ea555125acbbef380">
                  <div className="sqs-block-content">
                    <div className="sqs-html-content">
                      <ul data-rte-list="default">
                        <li>
                          <p className="" style={{ whiteSpace: 'pre-wrap' }}>Advanced Filters for School, District, Programs, Grade Bands, Demographics, and More</p>
                        </li>
                        <li>
                          <p className="" style={{ whiteSpace: 'pre-wrap' }}>Monitor Progress Over Time</p>
                        </li>
                        <li>
                          <p className="" style={{ whiteSpace: 'pre-wrap' }}>Drill Down to Student-Level Detail</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col sqs-col-8 span-8" id="yui_3_17_2_1_1699178235137_218">
                <div className="sqs-block image-block sqs-block-image sqs-text-ready" data-aspect-ratio="89.8355754857997" data-block-type="5" id="block-634854ca477ec1c0b266">
                  <div className="sqs-block-content" id="yui_3_17_2_1_1699178235137_217">
                    <div className="image-block-outer-wrapper layout-caption-hidden design-layout-inline combination-animation-none individual-animation-none individual-text-animation-none">
                      <figure className="sqs-block-image-figure intrinsic" style={{ maxWidth: '1037px' }} id="yui_3_17_2_1_1699178235137_215">
                        <div className="image-block-wrapper" data-animation-role="image" id="yui_3_17_2_1_1699178235137_214">
                          <div className="sqs-image-shape-container-element has-aspect-ratio" style={{ position: 'relative', paddingBottom: '89.83557891845703%', overflow: 'hidden', WebkitMaskImage: '-webkit-radial-gradient(white, black)' }} id="yui_3_17_2_1_1699178235137_213">
                            <img
                              data-stretch="false"
                              data-src="https://images.squarespace-cdn.com/content/v1/5716af60356fb068327b23af/1626801321304-E9B44XC67COTT8GX2RK4/WhyBB-World-Class.png"
                              data-image="https://images.squarespace-cdn.com/content/v1/5716af60356fb068327b23af/1626801321304-E9B44XC67COTT8GX2RK4/WhyBB-World-Class.png"
                              data-image-dimensions="1037x933"
                              data-image-focal-point="0.5,0.5"
                              alt="WhyBB-World-Class.png"
                              data-load="false"
                              src="https://images.squarespace-cdn.com/content/v1/5716af60356fb068327b23af/1626801321304-E9B44XC67COTT8GX2RK4/WhyBB-World-Class.png"
                              width="1037"
                              height="933"
                              sizes="100vw"
                              style={{
                                display: 'block',
                                objectFit: 'cover',
                                width: '100%',
                                height: '100%',
                                objectPosition: '50% 50%',
                              }}
                              srcSet="https://images.squarespace-cdn.com/content/v1/5716af60356fb068327b23af/1626801321304-E9B44XC67COTT8GX2RK4/WhyBB-World-Class.png?format=100w 100w, https://images.squarespace-cdn.com/content/v1/5716af60356fb068327b23af/1626801321304-E9B44XC67COTT8GX2RK4/WhyBB-World-Class.png?format=300w 300w, https://images.squarespace-cdn.com/content/v1/5716af60356fb068327b23af/1626801321304-E9B44XC67COTT8GX2RK4/WhyBB-World-Class.png?format=500w 500w, https://images.squarespace-cdn.com/content/v1/5716af60356fb068327b23af/1626801321304-E9B44XC67COTT8GX2RK4/WhyBB-World-Class.png?format=750w 750w, https://images.squarespace-cdn.com/content/v1/5716af60356fb068327b23af/1626801321304-E9B44XC67COTT8GX2RK4/WhyBB-World-Class.png?format=1000w 1000w, https://images.squarespace-cdn.com/content/v1/5716af60356fb068327b23af/1626801321304-E9B44XC67COTT8GX2RK4/WhyBB-World-Class.png?format=1500w 1500w, https://images.squarespace-cdn.com/content/v1/5716af60356fb068327b23af/1626801321304-E9B44XC67COTT8GX2RK4/WhyBB-World-Class.png?format=2500w 2500w"
                              loading="lazy"
                              decoding="async"
                              data-loader="sqs"
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



const Dataprivacy = () => {
  return (
    <>
<div
  id="deeply-committed"
  className="index-section"
  data-url-id="deeply-committed"
  data-collection-id="5e2f8001c265bf1f973e6549"
  data-edit-main-image=""
>
  <div className="promoted-gallery-wrapper" />
  <div
    className="index-section-wrapper page-content"
    id="yui_3_17_2_1_1699178235137_314"
  >
    <div
      className="content-inner has-content"
      data-content-field="main-content"
      id="yui_3_17_2_1_1699178235137_313"
    >
      <div
        className="sqs-layout sqs-grid-12 columns-12"
        data-type="page"
        data-updated-on={1696891005712}
        id="page-5e2f8001c265bf1f973e6549"
      >
        <div className="row sqs-row" id="yui_3_17_2_1_1699178235137_312">
          <div
            className="col sqs-col-12 span-12"
            id="yui_3_17_2_1_1699178235137_311"
          >
            <div className="row sqs-row">
              <div className="col sqs-col-1 span-1">
                <div
                  className="sqs-block spacer-block sqs-block-spacer sized vsize-1"
                  data-aspect-ratio="125.35211267605634"
                  data-block-type={21}
                  id="block-80059630fe0dcf78604e"
                >
                  <div
                    className="sqs-block-content sqs-intrinsic"
                    id="yui_3_17_2_1_1699178235137_424"
                    style={{ paddingBottom: "125.352%" }}
                  >
                    &nbsp;
                  </div>
                </div>
              </div>
              <div className="col sqs-col-10 span-10">
                <div
                  className="sqs-block html-block sqs-block-html"
                  data-block-type={2}
                  id="block-2cf32f59a2b92bac209d"
                >
                  <div className="sqs-block-content">
                    <div className="sqs-html-content">
                      <h2
                        style={{ textAlign: "center", whiteSpace: "pre-wrap" }}
                      >
                        <strong>Deeply Committed to Data Privacy</strong>
                      </h2>
                      <h3
                        style={{ textAlign: "center", whiteSpace: "pre-wrap" }}
                      >
                        We are fully and adamantly committed to data privacy and
                        security.
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col sqs-col-1 span-1">
                <div
                  className="sqs-block spacer-block sqs-block-spacer sized vsize-1"
                  data-aspect-ratio="130.98591549295776"
                  data-block-type={21}
                  id="block-41c852c2956a032aa970"
                >
                  <div
                    className="sqs-block-content sqs-intrinsic"
                    id="yui_3_17_2_1_1699178235137_427"
                    style={{ paddingBottom: "130.986%" }}
                  >
                    &nbsp;
                  </div>
                </div>
              </div>
            </div>
            <div className="row sqs-row" id="yui_3_17_2_1_1699178235137_310">
              <div
                className="col sqs-col-4 span-4"
                id="yui_3_17_2_1_1699178235137_309"
              >
                <div
                  className="row sqs-row"
                  id="yui_3_17_2_1_1699178235137_308"
                >
                  <div className="col sqs-col-1 span-1">
                    <div
                      className="sqs-block spacer-block sqs-block-spacer sized vsize-1"
                      data-block-type={21}
                      id="block-yui_3_17_2_1_1580513106895_23499"
                    >
                      <div className="sqs-block-content">&nbsp;</div>
                    </div>
                  </div>
                  <div
                    className="col sqs-col-2 span-2"
                    id="yui_3_17_2_1_1699178235137_307"
                  >
                    <div
                      className="sqs-block image-block sqs-block-image sqs-text-ready"
                      data-aspect-ratio="0.7042253521126761"
                      data-block-type={5}
                      id="block-yui_3_17_2_1_1580506710424_12943"
                    >
                      <div
                        className="sqs-block-content"
                        id="yui_3_17_2_1_1699178235137_306"
                      >
                        <div
                          className="image-block-outer-wrapper
    layout-caption-hidden
    design-layout-inline
    combination-animation-none
    individual-animation-none
    individual-text-animation-none
   sqs-narrow-width"
                          data-test="image-block-inline-outer-wrapper"
                          id="yui_3_17_2_1_1699178235137_305"
                        >
                          <figure
                            className="
        sqs-block-image-figure
        intrinsic
      "
                            style={{ maxWidth: 201 }}
                            id="yui_3_17_2_1_1699178235137_304"
                          >
                            <div
                              className="image-block-wrapper"
                              data-animation-role="image"
                              id="yui_3_17_2_1_1699178235137_303"
                            >
                              <div
                                className="sqs-image-shape-container-element
        
    
  
        has-aspect-ratio
      "
                                style={{
                                  position: "relative",
                                  paddingBottom: "0.7042253613471985%",
                                  overflow: "hidden",
                                  WebkitMaskImage:
                                    "-webkit-radial-gradient(white, black)"
                                }}
                                id="yui_3_17_2_1_1699178235137_302"
                              >
                                <img
                                  data-stretch="false"
                                  data-src="https://images.squarespace-cdn.com/content/v1/5716af60356fb068327b23af/1580852026335-JCRBVYR2J7RUPYYEDCFP/PPI+Protection.png"
                                  data-image="https://images.squarespace-cdn.com/content/v1/5716af60356fb068327b23af/1580852026335-JCRBVYR2J7RUPYYEDCFP/PPI+Protection.png"
                                  data-image-dimensions="201x201"
                                  data-image-focal-point="0.5,0.5"
                                  alt="PPI Protection.png"
                                  data-load="false"
                                  src="https://images.squarespace-cdn.com/content/v1/5716af60356fb068327b23af/1580852026335-JCRBVYR2J7RUPYYEDCFP/PPI+Protection.png"
                                  width={201}
                                  height={201}
                                  sizes="100vw"
                                  style={{
                                    display: "block",
                                    objectFit: "cover",
                                    width: "100%",
                                    height: "100%",
                                    objectPosition: "50% 50%"
                                  }}
                                  srcSet="https://images.squarespace-cdn.com/content/v1/5716af60356fb068327b23af/1580852026335-JCRBVYR2J7RUPYYEDCFP/PPI+Protection.png?format=100w 100w, https://images.squarespace-cdn.com/content/v1/5716af60356fb068327b23af/1580852026335-JCRBVYR2J7RUPYYEDCFP/PPI+Protection.png?format=300w 300w, https://images.squarespace-cdn.com/content/v1/5716af60356fb068327b23af/1580852026335-JCRBVYR2J7RUPYYEDCFP/PPI+Protection.png?format=500w 500w, https://images.squarespace-cdn.com/content/v1/5716af60356fb068327b23af/1580852026335-JCRBVYR2J7RUPYYEDCFP/PPI+Protection.png?format=750w 750w, https://images.squarespace-cdn.com/content/v1/5716af60356fb068327b23af/1580852026335-JCRBVYR2J7RUPYYEDCFP/PPI+Protection.png?format=1000w 1000w, https://images.squarespace-cdn.com/content/v1/5716af60356fb068327b23af/1580852026335-JCRBVYR2J7RUPYYEDCFP/PPI+Protection.png?format=1500w 1500w, https://images.squarespace-cdn.com/content/v1/5716af60356fb068327b23af/1580852026335-JCRBVYR2J7RUPYYEDCFP/PPI+Protection.png?format=2500w 2500w"
                                  loading="lazy"
                                  decoding="async"
                                  data-loader="sqs"
                                />
                              </div>
                            </div>
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col sqs-col-1 span-1">
                    <div
                      className="sqs-block spacer-block sqs-block-spacer sized vsize-1"
                      data-block-type={21}
                      id="block-yui_3_17_2_1_1580513106895_18137"
                    >
                      <div className="sqs-block-content">&nbsp;</div>
                    </div>
                  </div>
                </div>
                <div
                  className="sqs-block html-block sqs-block-html"
                  data-block-type={2}
                  id="block-6539dad445b152376420"
                >
                  <div className="sqs-block-content">
                    <div className="sqs-html-content">
                      <p
                        style={{ textAlign: "center", whiteSpace: "pre-wrap" }}
                        className=""
                      >
                        <strong>Specialized service for PII protection </strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col sqs-col-4 span-4"
                id="yui_3_17_2_1_1699178235137_326"
              >
                <div
                  className="row sqs-row"
                  id="yui_3_17_2_1_1699178235137_325"
                >
                  <div className="col sqs-col-1 span-1">
                    <div
                      className="sqs-block spacer-block sqs-block-spacer sized vsize-1"
                      data-block-type={21}
                      id="block-yui_3_17_2_1_1580513106895_26084"
                    >
                      <div className="sqs-block-content">&nbsp;</div>
                    </div>
                  </div>
                  <div
                    className="col sqs-col-2 span-2"
                    id="yui_3_17_2_1_1699178235137_324"
                  >
                    <div
                      className="sqs-block image-block sqs-block-image sqs-text-ready"
                      data-aspect-ratio="0.7042253521126761"
                      data-block-type={5}
                      id="block-282f0e2144d07256b420"
                    >
                      <div
                        className="sqs-block-content"
                        id="yui_3_17_2_1_1699178235137_323"
                      >
                        <div
                          className="image-block-outer-wrapper
    layout-caption-hidden
    design-layout-inline
    combination-animation-none
    individual-animation-none
    individual-text-animation-none
   sqs-narrow-width"
                          data-test="image-block-inline-outer-wrapper"
                          id="yui_3_17_2_1_1699178235137_322"
                        >
                          <figure
                            className="
        sqs-block-image-figure
        intrinsic
      "
                            style={{ maxWidth: 201 }}
                            id="yui_3_17_2_1_1699178235137_321"
                          >
                            <div
                              className="image-block-wrapper"
                              data-animation-role="image"
                              id="yui_3_17_2_1_1699178235137_320"
                            >
                              <div
                                className="sqs-image-shape-container-element
        
    
  
        has-aspect-ratio
      "
                                style={{
                                  position: "relative",
                                  paddingBottom: "0.7042253613471985%",
                                  overflow: "hidden",
                                  WebkitMaskImage:
                                    "-webkit-radial-gradient(white, black)"
                                }}
                                id="yui_3_17_2_1_1699178235137_319"
                              >
                                <img
                                  data-stretch="false"
                                  data-src="https://images.squarespace-cdn.com/content/v1/5716af60356fb068327b23af/1580852088159-U2D9M2AX3U3GDAU94FYP/HIPPA+FERPA.png"
                                  data-image="https://images.squarespace-cdn.com/content/v1/5716af60356fb068327b23af/1580852088159-U2D9M2AX3U3GDAU94FYP/HIPPA+FERPA.png"
                                  data-image-dimensions="201x201"
                                  data-image-focal-point="0.5,0.5"
                                  alt="HIPPA FERPA.png"
                                  data-load="false"
                                  src="https://images.squarespace-cdn.com/content/v1/5716af60356fb068327b23af/1580852088159-U2D9M2AX3U3GDAU94FYP/HIPPA+FERPA.png"
                                  width={201}
                                  height={201}
                                  sizes="100vw"
                                  style={{
                                    display: "block",
                                    objectFit: "cover",
                                    width: "100%",
                                    height: "100%",
                                    objectPosition: "50% 50%"
                                  }}
                                  srcSet="https://images.squarespace-cdn.com/content/v1/5716af60356fb068327b23af/1580852088159-U2D9M2AX3U3GDAU94FYP/HIPPA+FERPA.png?format=100w 100w, https://images.squarespace-cdn.com/content/v1/5716af60356fb068327b23af/1580852088159-U2D9M2AX3U3GDAU94FYP/HIPPA+FERPA.png?format=300w 300w, https://images.squarespace-cdn.com/content/v1/5716af60356fb068327b23af/1580852088159-U2D9M2AX3U3GDAU94FYP/HIPPA+FERPA.png?format=500w 500w, https://images.squarespace-cdn.com/content/v1/5716af60356fb068327b23af/1580852088159-U2D9M2AX3U3GDAU94FYP/HIPPA+FERPA.png?format=750w 750w, https://images.squarespace-cdn.com/content/v1/5716af60356fb068327b23af/1580852088159-U2D9M2AX3U3GDAU94FYP/HIPPA+FERPA.png?format=1000w 1000w, https://images.squarespace-cdn.com/content/v1/5716af60356fb068327b23af/1580852088159-U2D9M2AX3U3GDAU94FYP/HIPPA+FERPA.png?format=1500w 1500w, https://images.squarespace-cdn.com/content/v1/5716af60356fb068327b23af/1580852088159-U2D9M2AX3U3GDAU94FYP/HIPPA+FERPA.png?format=2500w 2500w"
                                  loading="lazy"
                                  decoding="async"
                                  data-loader="sqs"
                                />
                              </div>
                            </div>
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col sqs-col-1 span-1">
                    <div
                      className="sqs-block spacer-block sqs-block-spacer sized vsize-1"
                      data-block-type={21}
                      id="block-yui_3_17_2_1_1580513106895_19744"
                    >
                      <div className="sqs-block-content">&nbsp;</div>
                    </div>
                  </div>
                </div>
                <div
                  className="sqs-block html-block sqs-block-html"
                  data-block-type={2}
                  id="block-efa1271ce336fcbbe0d4"
                >
                  <div className="sqs-block-content">
                    <div className="sqs-html-content">
                      <p
                        style={{ textAlign: "center", whiteSpace: "pre-wrap" }}
                        className=""
                      >
                        <strong>FERPA, COPPA and SOPIPA compliant</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col sqs-col-4 span-4"
                id="yui_3_17_2_1_1699178235137_338"
              >
                <div
                  className="row sqs-row"
                  id="yui_3_17_2_1_1699178235137_337"
                >
                  <div className="col sqs-col-1 span-1">
                    <div
                      className="sqs-block spacer-block sqs-block-spacer sized vsize-1"
                      data-block-type={21}
                      id="block-yui_3_17_2_1_1580513106895_28748"
                    >
                      <div className="sqs-block-content">&nbsp;</div>
                    </div>
                  </div>
                  <div
                    className="col sqs-col-2 span-2"
                    id="yui_3_17_2_1_1699178235137_336"
                  >
                    <div
                      className="sqs-block image-block sqs-block-image sqs-text-ready"
                      data-aspect-ratio="0.7042253521126761"
                      data-block-type={5}
                      id="block-8bbc1a47890a101f356b"
                    >
                      <div
                        className="sqs-block-content"
                        id="yui_3_17_2_1_1699178235137_335"
                      >
                        <div
                          className="image-block-outer-wrapper
    layout-caption-hidden
    design-layout-inline
    combination-animation-none
    individual-animation-none
    individual-text-animation-none
   sqs-narrow-width"
                          data-test="image-block-inline-outer-wrapper"
                          id="yui_3_17_2_1_1699178235137_334"
                        >
                          <figure
                            className="
        sqs-block-image-figure
        intrinsic
      "
                            style={{ maxWidth: 201 }}
                            id="yui_3_17_2_1_1699178235137_333"
                          >
                            <div
                              className="image-block-wrapper"
                              data-animation-role="image"
                              id="yui_3_17_2_1_1699178235137_332"
                            >
                              <div
                                className="sqs-image-shape-container-element
        
    
  
        has-aspect-ratio
      "
                                style={{
                                  position: "relative",
                                  paddingBottom: "0.7042253613471985%",
                                  overflow: "hidden",
                                  WebkitMaskImage:
                                    "-webkit-radial-gradient(white, black)"
                                }}
                                id="yui_3_17_2_1_1699178235137_331"
                              >
                                <img
                                  data-stretch="false"
                                  data-src="https://images.squarespace-cdn.com/content/v1/5716af60356fb068327b23af/1580852114249-8U8ZUHD89KZPHCC1NL7B/end-to-end+encription.png"
                                  data-image="https://images.squarespace-cdn.com/content/v1/5716af60356fb068327b23af/1580852114249-8U8ZUHD89KZPHCC1NL7B/end-to-end+encription.png"
                                  data-image-dimensions="201x201"
                                  data-image-focal-point="0.5,0.5"
                                  alt="end-to-end encription.png"
                                  data-load="false"
                                  src="https://images.squarespace-cdn.com/content/v1/5716af60356fb068327b23af/1580852114249-8U8ZUHD89KZPHCC1NL7B/end-to-end+encription.png"
                                  width={201}
                                  height={201}
                                  sizes="100vw"
                                  style={{
                                    display: "block",
                                    objectFit: "cover",
                                    width: "100%",
                                    height: "100%",
                                    objectPosition: "50% 50%"
                                  }}
                                  srcSet="https://images.squarespace-cdn.com/content/v1/5716af60356fb068327b23af/1580852114249-8U8ZUHD89KZPHCC1NL7B/end-to-end+encription.png?format=100w 100w, https://images.squarespace-cdn.com/content/v1/5716af60356fb068327b23af/1580852114249-8U8ZUHD89KZPHCC1NL7B/end-to-end+encription.png?format=300w 300w, https://images.squarespace-cdn.com/content/v1/5716af60356fb068327b23af/1580852114249-8U8ZUHD89KZPHCC1NL7B/end-to-end+encription.png?format=500w 500w, https://images.squarespace-cdn.com/content/v1/5716af60356fb068327b23af/1580852114249-8U8ZUHD89KZPHCC1NL7B/end-to-end+encription.png?format=750w 750w, https://images.squarespace-cdn.com/content/v1/5716af60356fb068327b23af/1580852114249-8U8ZUHD89KZPHCC1NL7B/end-to-end+encription.png?format=1000w 1000w, https://images.squarespace-cdn.com/content/v1/5716af60356fb068327b23af/1580852114249-8U8ZUHD89KZPHCC1NL7B/end-to-end+encription.png?format=1500w 1500w, https://images.squarespace-cdn.com/content/v1/5716af60356fb068327b23af/1580852114249-8U8ZUHD89KZPHCC1NL7B/end-to-end+encription.png?format=2500w 2500w"
                                  loading="lazy"
                                  decoding="async"
                                  data-loader="sqs"
                                />
                              </div>
                            </div>
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col sqs-col-1 span-1">
                    <div
                      className="sqs-block spacer-block sqs-block-spacer sized vsize-1"
                      data-block-type={21}
                      id="block-yui_3_17_2_1_1580513106895_21531"
                    >
                      <div className="sqs-block-content">&nbsp;</div>
                    </div>
                  </div>
                </div>
                <div
                  className="sqs-block html-block sqs-block-html"
                  data-block-type={2}
                  id="block-789f64e1724b2a6c5642"
                >
                  <div className="sqs-block-content">
                    <div className="sqs-html-content">
                      <p
                        style={{ textAlign: "center", whiteSpace: "pre-wrap" }}
                        className=""
                      >
                        <strong>End-to-end encryption</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="sqs-block html-block sqs-block-html"
              data-block-type={2}
              id="block-yui_3_17_2_1_1580171730149_41143"
            >
              <div className="sqs-block-content">
                <div className="sqs-html-content">
                  <p className="" style={{ whiteSpace: "pre-wrap" }}>
                    Our expertise and capabilities allow us to handle PII data
                    through a zero-knowledge approach that limits data access to
                    those who are authorized. End user role-based permissions
                    limit access to certain data to comply with school data
                    privacy and access policies. We use end-to-end encryption
                    and key management services to protect your data. We are
                    compliant with FERPA, COPPA, and SOPIPA.
                  </p>
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







