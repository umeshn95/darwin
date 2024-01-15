import React from 'react';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';

const Customerchoice = ({ heading, description }) => {
    return (
        <Container maxWidth="lg" sx={{ padding: '24px' }}>
            <Grid container spacing={2} alignItems="center" justifyContent="center">
                <Grid item xs={12} md={10} sx={{ padding: '16px', border: '1px solid #eee', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                    <Typography variant="h4" align="center" gutterBottom>
                        <strong>{heading}</strong>
                    </Typography>
                    <Typography variant="body1" align="center" paragraph>
                        {description}
                    </Typography>
                    <video autoPlay loop width="100%" muted style={{ maxWidth: '100%', borderRadius: '4px' }}>
                        <source src="https://res.cloudinary.com/duoha2ui0/video/upload/v1705138429/DemoCreatorRec_2023-12-31_14-11-33_online-video-cutter.com_1_pxl4eg.mp4" type="video/mp4" />
                    </video>
                    <Typography variant="body2" align="center" fontStyle="italic" sx={{ marginTop: '16px' }}>
                        Not actual customer data
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Customerchoice;
