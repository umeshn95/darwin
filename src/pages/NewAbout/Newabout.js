import React from 'react'
import { About } from '../../components'
import WebdevserviceMain from '../../components/Webdevelopment/WebdevserviceMain'
import ReachOut from '../../components/Reachout/ReachOut'
import WebdevFaq from '../../components/Webdevelopment/WebdevFaq'
import { ecomm } from '../../components/Reachout/reachoutdata'
import './newabout.css'
import { Link } from 'react-router-dom/cjs/react-router-dom'
import WebinarBanner from '../../components/Webdevelopment/WebinarBanner'
import ResponsiveCountComponent from './ResponsiveCountComponent'
import Dreamer from './Dreamer'
import Ourvision from './Ourvision'
import CareerSection from '../../components/CareerPage/CareerSection'


const Newabout = () => {
  return (
    <>
    <div>
                {/* <div style={{width:'100%',height:'64px',background:'linear-gradient(
    265deg
    ,#1ca3e9,rgb(29, 27, 110))'}}></div> */}

                {/* <AboutHeading backgroundUrl="https://res.cloudinary.com/dvmqfke8w/image/upload/v1705127111/DALL_E_2024-01-13_11.53.19_-_Generate_an_image_of_two_very_natural-looking_young_girls_with_cheerful_smiles_sitting_casually_on_a_school_bench._They_should_be_dressed_in_simple_xe3aje.png"/> */}
                <div style={{width:'100%',height:'84px',background:"#000080"}}></div>

                <CareerSection heading="We are Darwin" subtitle="" description="We Shape Education" show={false} image="https://res.cloudinary.com/dvmqfke8w/image/upload/v1705336475/in_a_solid_yell_6a10eb36-884b-4901-96c9-021f4ddc9264_wilwla.png"/>
                {/* <WebinarBanner/> */}
                <Ourvision image1={"https://images.squarespace-cdn.com/content/v1/5716af60356fb068327b23af/1575582984208-TS0Y8GN033W91OAPLJOA/About+Lasting+Impact.png"} heading1="OUR VISION" description1="By leveraging data-driven insights, Our platform enables personalized learning experiences, pinpointing areas where students excel and identifying opportunities for growth" image2="https://images.squarespace-cdn.com/content/v1/5716af60356fb068327b23af/1616426292646-2YCIG91UCUMHRNJA8FQX/welovedata.png" heading2="WE LOVE STUDENTS" subheading2="A Greater Purpose" description2="Our faith lies in education's capacity to transform personal destinies and enhance community well-being.">  
                </Ourvision>
                <Dreamer/>
                {/* <ResponsiveCountComponent/> */}
                {/* <WebdevserviceMain heading={`Modernizing Educational `} variableText = 'Data'  description='Build your educational data strategy on a modernized data infrastructure to support the academic and overall well-being of all learners.' point1='Data Processing'  point2='Data Analytics' point3='Data Storage' 
                /> */}
                {/* <ReachOut description='Darwin Data Modernization Infrastructure' heading1= {ecomm}  /> */}
                {/* <HireDeveloper /> */}
                {/* <WebdevProcessPage /> */}
                {/* <DesignDev /> */}
                
                {/* <WebdevFaq/> */}
            </div>
    </>
  )
}

export default Newabout




export const AboutHeading = ({containercss,heading,description,backgroundUrl}) => {
  // Define the style object with the background image URL
  const backgroundStyle = {
    backgroundImage: `url(${backgroundUrl})`, // Replace with your image URL
    backgroundSize: 'cover', // Adjust as needed
    backgroundRepeat: 'no-repeat', // Adjust as needed
    backgroundPosition: 'center', // Adjust as needed
  };

  return (
    <div className={containercss?"index-section-wrapper_about":"index-section-wrapper_fnp"} style={backgroundStyle}>
      <div className="content-inner has-content" data-content-field="main-content">
        <div className="sqs-layout sqs-grid-12 columns-12" data-type="page" data-updated-on="1617340499503" id="page-5df0c8dc4ba53f72844528ed">
          <div className="row sqs-row">
            <div className="col sqs-col-12 span-12">
              <div className="row sqs-row">
                <div className="col sqs-col-9 span-9">
                  <div className="sqs-block html-block sqs-block-html" data-block-type="2" id="block-35d4a1e3abdb47f36baa">
                    <div className="sqs-block-content">
                      <div className="sqs-html-content">
                        <p className='main_heading_front' >
                          <strong>{heading}</strong>
                        </p>
                        <p className='main_description_front fontfamily1' >
                    {description}
                        </p>
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









