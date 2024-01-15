import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

const images = [
  'https://res.cloudinary.com/dvmqfke8w/image/upload/v1705257675/smiling-face-graphics-designer-with-background-col_2_hwjpcp.jpg',
  'https://res.cloudinary.com/dvmqfke8w/image/upload/v1705257675/smiling-face-graphics-designer-with-background-col_3_eqhrum.jpg',
  'https://res.cloudinary.com/dvmqfke8w/image/upload/v1705257675/smiling-face-graphics-designer-with-background-col_zwwtjx.jpg',
  'https://res.cloudinary.com/dvmqfke8w/image/upload/v1705257985/smiling-face-professional-with-background-color-f_3_e3mtgs.jpg',
];

const texts = [
  'Code What Matters',
  'Teach What Matters',
  'Design What Matters',
  'Together We are Darwin',
];

const CareerPeople = () => {
  return (
    <Box sx={{  p: 4 }}>
    <Grid container>
      {/* Manually control the sequence of elements */}

      {/* Text 1 */}
      <Grid item xs={6} md={3} sx={{backgroundColor: '#FDB913'}}  >
        <Typography variant='h4' sx={{ p: 2 }}>{texts[0]}</Typography>
      </Grid>
      {/* Image 1 */}
      <Grid item xs={6} md={3} sx={{backgroundColor: '#FDB913'}}>
        <Box
          component="img"
          src={images[0]}
          alt="Image 1"
          sx={{ width: '100%' }}
        />
      </Grid>
      {/* Text 2 */}
      <Grid item xs={6} md={3} sx={{backgroundColor: '#FDB913'}}>
        <Typography variant='h4' sx={{ p: 2 }}>{texts[1]}</Typography>
      </Grid>
      {/* Image 2 */}
      <Grid item xs={6} md={3}>
        <Box
          component="img"
          src={images[1]}
          alt="Image 2"
          sx={{ width: '100%' }}
        />
      </Grid>
      {/* Image 3 */}
      <Grid item xs={6} md={3}>
        <Box
          component="img"
          src={images[2]}
          alt="Image 3"
          sx={{ width: '100%' }}
        />
      </Grid>
      {/* Text 3 */}
      <Grid item xs={6} md={3} sx={{backgroundColor: '#FDB913'}}>
        <Typography variant='h4' sx={{ p: 2 }}>{texts[2]}</Typography>
      </Grid>
      {/* Image 4 */}
      <Grid item xs={6} md={3}>
        <Box
          component="img"
          src={images[3]}
          alt="Image 4"
          sx={{ width: '100%'}}
        />
      </Grid>
      {/* Text 4 */}
      <Grid item xs={6} md={3} sx={{backgroundColor: '#FDB913'}}>
        <Typography variant='h4' sx={{ p: 2 }}>{texts[3]}</Typography>
      </Grid>
    </Grid>
  </Box>
  );
};

export default CareerPeople;

