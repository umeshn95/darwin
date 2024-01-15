// automate script

import './styles.css'
import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './st.scss'


const WebdevFaq = ({data}) => {
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
    <Simple1 data = {data}/>

        </div>
        </div>
  </div>;
};

export default WebdevFaq;



export function Simple1({data}) {
    return (
      <div>
        <div class="card">
  <h1>Frequently Asked Questions</h1>
  
  {data.map((data,index)=>{
    return(
      <details class={data.class}>
    <summary> {data.question}</summary>
    <p>{data.answer}</p> 

  </details>
    )
  })}
  
   
</div>
      </div>
    );
  }