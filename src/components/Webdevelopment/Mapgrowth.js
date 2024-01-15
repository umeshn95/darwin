import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Grid from '@mui/material/Grid';
import { FaArrowCircleRight } from "react-icons/fa";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "30px", // Added padding around the grid
  },
  leftContent: {
    textAlign: 'left',
    padding: "20px",
    margin:'0 auto' // Added padding for spacing
  },
  image: {
    display: 'block',
    maxWidth: '100%',
    maxHeight: '300px', // Set a maximum height for the image
    height: 'auto', // Maintains aspect ratio
    borderRadius: '15px',
    objectFit: 'contain',
    margin:'0 auto'
  },
  heading: {
    fontWeight: 'bold',
    marginBottom: "20px",
    fontSize: '1.5rem',
  },
  description: {
    marginBottom: "20px",
    fontSize: '1rem',
  },
  learnMoreButton: {
    background: '#1D1E70',
    border: 'none',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: "10px",
    cursor: 'pointer',
    marginTop: "20px",
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      backgroundColor: '#2e3187',
    },
  },
  learnMoreText: {
    marginRight: "10px",
  },
  icon: {
    color: "white",
  },
}));

const Mapgrowth = ({ order,imageshow, heading, headingwidth, description, image1, image2 }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        {/* Left Partition */}
        <Grid item xs={12} md={6} order={isMobile ? 1 : order}>
          <div className={classes.leftContent}>
            {imageshow && (
              <img
                style={{ width: headingwidth ? '247px' : '197px', height: '35px' }}
                src={image1}
                alt="Your Image"
              />
            )}
            <h3 className={classes.heading}>{heading}</h3>
            <p className={classes.description}>{description}</p>
            <button className={classes.learnMoreButton}>
              <span className={classes.learnMoreText}>Learn More</span>
              <FaArrowCircleRight />
            </button>
          </div>
        </Grid>

        {/* Right Partition */}
        <Grid item xs={12} md={6}>
<img
         className={classes.image}
         src={image2}
         alt="Your Image"
       />
</Grid>
</Grid>
</div>
);
};

export default Mapgrowth;


