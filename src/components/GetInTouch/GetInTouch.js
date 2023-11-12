//automate main div-

import React from 'react';
import './styles.css';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import './st.scss'
import ContactUs from './ContactUs.';
const GetInTouch = () => {
    return <>
    <div className='GetInTouch_main' >
    <div style={{width:'100%',height:'74px', background: 'linear-gradient(' +
    '265deg, ' +
    '#1ca3e9, ' +
    'rgb(29, 27, 110)' +
    ')',marginBottom:'50px'}}></div>
      <ContactUs/>
</div>
       

        </>
};

export default GetInTouch;


// basic select




// react slick

