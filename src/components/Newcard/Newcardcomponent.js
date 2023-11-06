import React from 'react';
import { AiOutlineCheck } from "react-icons/ai";
import { IconContext } from 'react-icons/lib';
import './Newcard.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
const Newcardcomponent = ({plan,popularchoice,icon,price,service1,service2,service3}) => {
  return <div
 
  >
    <div className='newccardcomponenr_main_div' >
    <div className='newccardcomponent_sub_div'>
        <div className='newcardcomponrnt_basic_div'>{plan} {popularchoice?<div className='newcard_popularchoice' style={{transform:'rotate(45deg)',maxWidth:'13px',fontSize:'8px',position:'absolute',top:'14px',right:'50px',color:'white',zIndex:'99'}}>popular choice</div>:<></>} </div>
        <div className='newcardcomponrnt_logo_div'><img  src={icon} style={{height:'80px', width:'80px',zIndex:'2'}}></img></div>
        <div className='newcardcomponrnt_price_div'><h6 className='card_dollar'>$</h6> <h6 className='card_price'>{price}</h6> <h6 className='card_period'> /mo</h6></div>
        <div className='newcardcomponrnt_button_div'><Link to='/contact'>
        <button className='newcard_button_getstarted'> Get Started</button>
        </Link></div>
        <div className='newcardcomponrnt_button_list'>
            
            <ul className='newcarrd_ul'>
                <li className="pricing_item"><div className='feature_text'> <IconContext.Provider value={{ size: 15}}><AiOutlineCheck className='newcard_check_icon'/></IconContext.Provider>{service1}</div></li>
                <li className="pricing_item"><div className='feature_text'> <IconContext.Provider value={{ size: 15}}><AiOutlineCheck className='newcard_check_icon'/></IconContext.Provider>{service2} </div></li>
                <li className="pricing_item"><div className='feature_text'> <IconContext.Provider value={{ size: 15}}><AiOutlineCheck className='newcard_check_icon'/></IconContext.Provider>{service3}</div></li>
           
              
               
            </ul>
        </div>
    </div>
</div>
  </div>;
};

export default Newcardcomponent;
