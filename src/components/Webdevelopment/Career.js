import React from 'react'
import DesignDev from '../DesignDev/DesignDev'
import HireDeveloper from '../HireDeveloper/HireDeveloper'
import { SimpleAccordion } from '../Navbar/Navbar'
import ReachOut from '../Reachout/ReachOut'
import './styles.css'
import WebdevFaq from './WebdevFaq'
import WebdevProcessPage from './WebdevProcessPage'
import WebdevserviceMain from './WebdevserviceMain'
import mobileapp from '../../images/about_us_hero.webp'
import { mobileout } from '../Reachout/reachoutdata'
import CareerSection from '../CareerPage/CareerSection'
import ContentBlock from '../CareerPage/ContentBlock'
import CareerPeople from '../CareerPage/CareerPeople'
import Ourvision from '../../pages/NewAbout/Ourvision'
function Career() {

    return (
        <>
            <div>
                <div style={{width:'100%',height:'84px',background:"#000080"}}></div>
                <CareerSection heading="Join Our Team" subtitle="Darwin Careers" description="Do What That Matters" show={true} image="https://res.cloudinary.com/dvmqfke8w/image/upload/v1705235064/there-are-two-individuals-depicted-one-woman-and_6_njbqlq.jpg"/>
                <ContentBlock heading="Shape the Future of Education" description="        At Darwin, we bring learning to students and support teachers every step of the way. We are committed to transforming classrooms with our innovative technology experiences and creating environments where all learners can thrive."/>
                <CareerPeople/>
                <Ourvision image1={"https://images.squarespace-cdn.com/content/v1/5716af60356fb068327b23af/1575582984208-TS0Y8GN033W91OAPLJOA/About+Lasting+Impact.png"} heading1="Life at Darwin" description1="Our shared belief in the power of learning brings us all together to support educators and shape student success. Find out more about our purpose-driven culture." image2="https://res.cloudinary.com/dvmqfke8w/image/upload/v1705292764/In-this-image--we-see-two-people-engaged-in-a-community-activity--likely-a-mural-painting-project--Both-individuals-are-holding-red-plastic-cups-with-paintbrushes--indicating-they-are-contributing-to-_fpmtrc.jpg" heading2="Corporate Social Responsibility"  description2="We’re committed to making a difference through efforts such as our employee-led Cares Councils and annual Volunteer Week.">  
                </Ourvision>
            </div>
       </>
    )
}

export default Career