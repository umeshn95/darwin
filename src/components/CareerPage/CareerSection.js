import React from 'react';
import { Box, Grid, Button, Typography, useTheme } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import { Link } from 'react-router-dom/cjs/react-router-dom';

const CareerSection = () => {
  const theme = useTheme();

  return (
    <Box sx={{ flexGrow: 1, backgroundColor: '#cceff6',height:'85vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Grid container spacing={2} sx={{ backgroundColor: '#cceff6' }}>
        <Grid item xs={12} md={6} order={{ xs: 2, md: 2 }}>
          <Box component="figure" sx={{ margin: 0 }}>
            <Box
              component="img"
              sx={{ maxWidth: '100%', height: 'auto' }}
              src="https://res.cloudinary.com/dvmqfke8w/image/upload/v1705235064/there-are-two-individuals-depicted-one-woman-and_6_njbqlq.jpg"
              alt="Hero careers"
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} order={{ xs: 1, md: 1 }} sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Typography variant="h1" sx={{ fontWeight: 'bold', marginBottom: theme.spacing(2) }}>
            {/* Title goes here */}
            
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: theme.spacing(2) }}>
            {/* Subtitle goes here */}
            Darwin Careers
          </Typography>
          <Typography variant="h3" sx={{ marginBottom: theme.spacing(4) }}>
            {/* Description goes here */}
            Do What That Matters
          </Typography>
          <Link to='/opening'>
          <Button
            variant="contained"
            color="primary"
            endIcon={<LaunchIcon />}
            href=""
            target="_blank"
            rel="noopener noreferrer"
            title="View OUR OPENINGS"
            aria-label="View OUR OPENINGS"
            sx={{ alignSelf: 'center' }}
          >
            View Our Openings
          </Button>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CareerSection;
