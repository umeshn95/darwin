// automate script

import './styles.css'
import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './st.scss'


const WebdevFaq = () => {
    return <div className='WebdevFaq_main'>
      
        <div className='WebdevFaq_sub'>
            <div className="WebdevFaq_faq">
            Frequently Asked <span style={{ color: 'linear-gradient(' +
    '265deg, ' +
    '#1ca3e9, ' +
    'rgb(29, 27, 110)' +
    ')'}}>Questions</span>
        </div>
        <div className='WebdevFaq_faq_real'>
    <Simple1/>

        </div>
        </div>
  </div>;
};

export default WebdevFaq;



export function Simple1() {
    return (
      <div>
        <div class="card">
  <h1>Frequently Asked Questions</h1>
  
  <details class="warning">
    <summary> What reporting and visualization tools are available in Darwin Analytics?</summary>
    <p>Darwin data analytics provide reporting and visualization tools, such as dashboards, charts, and graphs, to help educators and administrators easily interpret data</p> 

  </details>
  
  <details class="info">
    <summary>How can Darwin Analytics benefit educational institutions?</summary>
    <p>Darwin Analytics help educational institutions in various ways, including improving student outcomes, identifying at-risk students, enhancing curriculum design, and streamlining administrative processes.</p>
    
  </details>
  
  <details class="alert">
    <summary>How can educators use Darwin Analytics to improve teaching methods?</summary>
    <p> Educators can use data from the platform to identify student needs, adapt teaching strategies, and provide targeted interventions for struggling students.</p> 
  
  </details>
</div>
      </div>
    );
  }