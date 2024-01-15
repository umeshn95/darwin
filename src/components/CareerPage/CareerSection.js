import React from 'react';
import { Box, Grid, Button, Typography, useTheme, useMediaQuery } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import { Link } from 'react-router-dom';

const CareerSection = ({heading, image, subtitle, description, show }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: "#cceff6", // Subtle background color
        py: theme.spacing(8), // Vertical padding
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={6} sx={{ order: { xs: 2, md: 1 } }}>
          <Box
            component="img"
            sx={{
              width: '100%', // Full width on small screens
              maxWidth: { md: '500px' }, // Max width on medium screens and up
              height: 'auto',
              display: 'block', // Fixes any spacing issue
              marginLeft: 'auto', // Centers the image
              marginRight: 'auto', // Centers the image
            }}
            src={image}
            alt="Career opportunities"
          />
        </Grid>
        <Grid item xs={12} md={6} sx={{ order: { xs: 1, md: 2 }, textAlign: { xs: 'center', md: 'left' } }}>
          <Typography variant={isMobile ? 'h4' : 'h2'} component="h1" sx={{ fontWeight: 'bold', mb: 2 }}>
            {/* Dynamic typography for different screen sizes */}
            {heading}
          </Typography>
          <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
            {subtitle}
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            {description}
          </Typography>
          {show && (
            <Link to='/opening' style={{ textDecoration: 'none' }}>
              <Button
                variant="contained"
                color="primary"
                endIcon={<LaunchIcon />}
                sx={{
                  mt: 2, // Margin top
                  px: 4, // Horizontal padding
                  py: 1.5, // Vertical padding
                  backgroundColor: theme.palette.primary.main,
                  '&:hover': {
                    backgroundColor: theme.palette.primary.dark,
                  },
                  alignSelf: { xs: 'center', md: 'flex-start' } // Align self for different screen sizes
                }}
              >
                View Our Openings
              </Button>
            </Link>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default CareerSection;


      