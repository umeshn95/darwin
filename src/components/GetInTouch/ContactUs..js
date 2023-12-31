import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import contactimage from '../../images/contact_us.webp';
import Background from '../../images/contactus.svg';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    seeking: 'Data Modernization',
    howDidYouHear: 'Social Media',
    message: '',
  });

  const [validationErrors, setValidationErrors] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    // Basic frontend validation
    const errors = [];
    if (!formData.fullName.trim()) {
      errors.push({ field: 'fullName', msg: 'Full Name is required.' });
    }
    if (!formData.email.trim()) {
      errors.push({ field: 'email', msg: 'Email is required.' });
    }
    if (!formData.message.trim()) {
      errors.push({ field: 'message', msg: 'Message cannot be empty.' });
    }

    if (errors.length > 0) {
      // Set validation errors and return without submitting
      setValidationErrors(errors);
      return;
    }

    try {
      const response = await axios.post('https://contactapi-for-darwin.onrender.com/api/contact', formData);
      console.log(response.data); // Handle the response as needed

      // Reset validation errors
      setValidationErrors([]);

       // Clear form data upon successful submission
       setFormData({
        fullName: '',
        email: '',
        seeking: 'Data Modernization',
        howDidYouHear: 'Social Media',
        message: '',
      });

      // Set success message
      setSuccessMessage('Form submitted successfully!');
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data && error.response.data.errors) {
        // Set validation errors
        setValidationErrors(error.response.data.errors);
      } else {
        console.error('Error submitting contact form:', error);
      }
    }
  };

  return (
    <>
      <div className='GetInTouch_sub'>
        <Grid spacing={4} container>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <div className='GetInTouch_heading'>
              <span style={{ color: 'linear-gradient(265deg, #1ca3e9, rgb(29, 27, 110))' }}>
                Let’s build
              </span>{' '}
              Excellence Together: Your School Data Analytics Partner
            </div>
            <div className='GetInTouch_description'>
              We're Enthusiastic to Explore Your Data Analytics Ideas{' '}
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <div className='GetInTouch_main_form'>
              <div className='GetInTouch_sub_form'>
                <div className='GetInTouch_sub_talk'>
                  <div className='GetInTouch_sub_head'>Get in Touch</div>
                  <div className='GetInTouch_sub_description'>Let’s talk about your project.</div>
                </div>
                <div className='GetInTouch_sub_name'>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                      <div className='GetInTouch_full_name'>
                        <label>Full Name</label>
                        <input
                          type='text'
                          name='fullName'
                          onChange={handleChange}
                          value={formData.fullName}
                        />
                      </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                      <div className='GetInTouch_email'>
                        <label>Email</label>
                        <input
                          type='text'
                          name='email'
                          onChange={handleChange}
                          value={formData.email}
                        />
                      </div>
                    </Grid>
                  </Grid>
                </div>
                <div className='GetInTouch_sub_seeking'>
                  <div className='GetInTouch_sub_what_seeking'>
                    <label> What are you seeking? </label>
                    <select
                      id='seeking'
                      name='seeking'
                      onChange={handleChange}
                      value={formData.seeking}
                    >
                      <option value='Data Modernization'>Data Modernization</option>
                      <option value='Data Dashboard'>Data Dashboard</option>
                      <option value='Data Coaching'>Data Coaching</option>
                      <option value='Data Assessment'>Data Assessment</option>
                    </select>
                  </div>
                </div>
                <div className='GetInTouch_sub_hear'>
                  <div className='GetInTouch_sub_want_hear'>
                    <label> How did you hear about Darwin? </label>
                    <select
                      id='howDidYouHear'
                      name='howDidYouHear'
                      onChange={handleChange}
                      value={formData.howDidYouHear}
                    >
                      <option value='Social Media'>Social Media</option>
                      <option value='Linkedin'>Linkedin</option>
                      <option value='Direct Search'>Direct Search</option>
                      <option value='Friends'>Friends</option>
                    </select>
                  </div>
                </div>
                <div className='GetInTouch_sub_message'>
                  <div className='GetInTouch_sub_message_here'>
                    <label>Your Message</label>
                    <textarea
                      type='text'
                      name='message'
                      onChange={handleChange}
                      value={formData.message}
                    ></textarea>
                  </div>
                </div>
                <div className='GetInTouch_sub_button' style={{cursor:"pointer"}} onClick={handleSubmit}>
                  Send Message
                </div>
                {/* Display validation errors if any */}
                {validationErrors.length > 0 && (
                  <div className='validation-errors'>
                    <p style={{ color: 'red', textAlign: 'center', fontWeight: 'bold' }}>
                      Please fix the following errors:
                    </p>
                    <ul style={{ color: 'red', listStyleType: 'none', padding: 0 }}>
                      {validationErrors.map((error, index) => (
                        <li key={index}>{error.msg}</li>
                      ))}
                    </ul>
                  </div>
                )}

<div className='success-message'>
          <p style={{ color: 'green', textAlign: 'center', fontWeight: 'bold' }}>
            {successMessage}
          </p>
        </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default ContactUs;
