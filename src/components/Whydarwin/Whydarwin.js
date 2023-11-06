import React from 'react'
import WebdevserviceMain from '../Webdevelopment/WebdevserviceMain'
import ReachOut from '../Reachout/ReachOut'
import WebdevFaq from '../Webdevelopment/WebdevFaq'
import { ecomm } from '../Reachout/reachoutdata'
import Whydarwinheading from '../Whydarwinheading/Whydarwinheading'

const Whydarwin = () => {
  return (
    <div>
                <div style={{width:'100%',height:'74px',background:'#2176FF',marginBottom:'50px'}}></div>

                <Whydarwinheading/>
                {/* <WebdevserviceMain heading={`Modernizing Educational `} variableText = 'Data'  description='Build your educational data strategy on a modernized data infrastructure to support the academic and overall well-being of all learners.' point1='Data Processing'  point2='Data Analytics' point3='Data Storage' 
                /> */}
                <ReachOut description='Darwin Data Modernization Infrastructure' heading1= {ecomm}  />
                {/* <HireDeveloper /> */}
                {/* <WebdevProcessPage /> */}
                {/* <DesignDev /> */}
                
                <WebdevFaq/>
            </div>
  )
}

export default Whydarwin