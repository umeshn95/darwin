import { Grid } from '@mui/material'
import React from 'react'
import Background from '../../images/contactus.svg'
const Projectcompletion = () => {
  return (
    <>
    <Grid container spacing={4} style={{background: `url(${Background}) no-repeat`, backgroundSize:"cover"  }}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <div className='zetamonk_contact_global_heading'>Dedicated to Delivering Trusted School Data Analytics Solutions</div>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={4} lg={2} xl={2}></Grid>
            <Grid item xs={12} sm={12} md={4} lg={2} xl={2}  align='center'>
              <div>
                <div className='zetamonk_contacus_numbers'>30+</div>
                <div className='zetamonk_contacus_numbers_text'>SUCCESSFUL PROJECTS</div>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={2} xl={2} align='center'>
            <div>
                <div className='zetamonk_contacus_numbers'>97%</div>
                <div className='zetamonk_contacus_numbers_text'>SCHOOL SATISFACTION RATE</div>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={2} xl={2} align='center'>
            <div>
                <div className='zetamonk_contacus_numbers'>50+</div>
                <div className='zetamonk_contacus_numbers_text'>DEVELOPERS AND ENGINEERS</div>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={2} xl={2} align='center'>
            <div>
                <div className='zetamonk_contacus_numbers'>8+</div>
                <div className='zetamonk_contacus_numbers_text'>YEARS OF EXPERIENCE</div>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={2} xl={2}></Grid>
          </Grid>
        </Grid>
        </Grid>
    </>
  )
}

export default Projectcompletion