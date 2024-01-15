import React from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';

const ContentBlock = ({ heading, description }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box 
      sx={{ 
        padding: theme.spacing(isSmallScreen ? 2 : 4), 
        textAlign: 'center',
        borderRadius: theme.shape.borderRadius,
        boxShadow: '0px 3px 6px rgba(0,0,0,0.16)', // light shadow for depth
        maxWidth: '800px', // maximum width for large screens
        margin: 'auto', // centering in the parent
        mt: theme.spacing(4), // margin top for outer spacing
        mb: theme.spacing(4), // margin bottom for outer spacing
      }}
    >
      <Typography variant="h4" component="h4" gutterBottom sx={{ fontWeight: 'bold', color: theme.palette.primary.main }}>
        {heading}
      </Typography>
      <Typography variant="body1" sx={{ marginTop: theme.spacing(2), color: theme.palette.text.secondary }}>
        {description}
      </Typography>
    </Box>
  );
};

export default ContentBlock;
