import React from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';

const ContentBlock = ({heading,description}) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ padding: theme.spacing(isSmallScreen ? 2 : 4), textAlign: 'center' }}>
      <Typography variant="h4" component="h4" gutterBottom>
        {heading}
      </Typography>
      <Typography variant="body1" sx={{ marginTop: theme.spacing(2) }} margin='auto'>
{description}
      </Typography>
      </Box>
      );
    };
    
    export default ContentBlock;
