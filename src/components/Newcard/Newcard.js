import { Container, Grid } from '@mui/material';
import React from 'react';
import Newcardcomponent from './Newcardcomponent';

const Newcard = () => {
  return <div className='newcard_main'>
<Container>
        <div className='new_pricinf_plan' > PRICING AND PLAN </div>
        <div className='new_monthly_fee' > 1 Month <span style={{color:'#086AD8'}}>Free</span> for <span style={{color:'#086AD8'}}>All services.</span> </div>
      <Grid container  spacing={3}>
<Grid item xs={12} sm={12} md={4}  lg={4}>  
<Newcardcomponent plan="Basic" icon='https://mitech.thememove.com/wp-content/uploads/2019/02/mitech-pricing-box-icon-01-90x90.png' price='9' service1='03 projects' service2='Quality & Customer' service3='Try for free, forever!'/>
</Grid>
<Grid item xs={12} sm={12} md={4}  lg={4}>  
<Newcardcomponent plan='Standard' popularchoice="True" icon='https://mitech.thememove.com/wp-content/uploads/2019/02/mitech-pricing-box-icon-02-88x88@2x.png' price='19' />
</Grid>
<Grid item xs={12} sm={12} md={4}  lg={4}>  
<Newcardcomponent plan='Premium' icon = 'https://mitech.thememove.com/wp-content/uploads/2019/02/mitech-pricing-box-icon-03-90x90.png' price='29' />
</Grid>



      </Grid>

  </Container>
  </div>;
};

export default Newcard;
