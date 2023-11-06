import React from 'react'
import  Grid  from '@mui/material/Grid';
import contactimage from '../../images/contact_us.webp'
import Background from '../../images/contactus.svg'

const ContactUs = () => {
  return (
   <>
    <div className='GetInTouch_sub' >
            
            <Grid spacing={4} container>
                <Grid  item xs={12} sm={12} md={6} lg={6} xl={6} >
                    <div className='GetInTouch_heading'>
                    <span style={{color:'#2176FF'}}>Let’s build</span> Excellence Together: Your School Data Analytics Partner
                    </div>
                    <div className='GetInTouch_description'>
                    We're Enthusiastic to Explore Your Data Analytics Ideas 
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <div className='GetInTouch_main_form'>
                        <div className='GetInTouch_sub_form'>
                            <div className='GetInTouch_sub_talk' >
                            <div className='GetInTouch_sub_head' >
                            Get in Touch
                                </div>
                            <div className='GetInTouch_sub_description' >
                            Let’s talk about your project.
                                </div>
                            </div>
                            <div className='GetInTouch_sub_name' >
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                                        <div className='GetInTouch_full_name'  >
                                        <label>Full Name</label>
                                        <input type='text'></input>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                                    <div className='GetInTouch_email'  >
                                        <label>Email</label>
                                        <input type='text'  ></input>
                                        </div>
        
                                    </Grid>
                                </Grid>
                            </div>
                            <div className='GetInTouch_sub_seeking' >
        
                            <div  className='GetInTouch_sub_what_seeking'  >
                            <label> What are you seeking? </label>
                            <select id="cars" name="cars">
                            <option value="dteam">Data Modernization</option>
        <option value="fgigs">Data Dashboard</option>
        <option value="copportunity">Data Coaching</option>
        <option value="Ginquiry">Data Assessment</option>
        </select>
                                </div>
                               
                            </div>
                            <div className='GetInTouch_sub_hear' >
                            <div className='GetInTouch_sub_want_hear'  >
                            <label> How did you hear about Darwin? </label>
                            <select id="cars" name="cars">
        <option value="smedia">Social Media</option>
        <option value="linkedin">Linkedin</option>
        <option value="dsearch">Direct Search</option>
        <option value="Friends">Friends</option>
        </select>
                                        </div>
                            </div>
                            <div className='GetInTouch_sub_message' >
                                <div className='GetInTouch_sub_message_here'  >
                                        <label>Your Message</label>
                                        <textarea type='text'  ></textarea>
                                        </div>
                            </div>
                            <div className='GetInTouch_sub_button' >
                                Send Message
                            </div>
                    </div>
                    </div>
                </Grid>
        </Grid>
        </div>
        
        
        
        
      
      </>
  )
}

export default ContactUs