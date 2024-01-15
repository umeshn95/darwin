import React from 'react';
import { makeStyles } from '@material-ui/styles'
import Grid from '@mui/material/Grid';
import './Mapgrowth.css'
import { FaArrowCircleRight } from "react-icons/fa";
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    leftContent: {
      textAlign: 'left',
    },
    image: {
      display: 'block', // Makes the image a block-level element
      marginLeft: 'auto', // Auto margin on the left
      marginRight: 'auto', // Auto margin on the right
      width: '100%', // Optional: makes the image responsive
      maxWidth: '60%', // Optional: replace with your desired max width
      height: '250px',
      borderRadius:"60px 60px 60px 0px"
    },
 
  }));

const MapgrowthCol = ({imageshow,heading,description,image1,image2}) => {
  const classes = useStyles();

  const buttonStyle = {
    background: 'transparent',
    border: '2px solid transparent',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px',
    cursor: 'pointer',
    margin:"20px 0px"
  };

  const textStyle = {
    marginRight: '8px', // Adjust the spacing between text and icon as needed
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>


        {/* Left Partition */}
        <Grid item xs={12} md={6} >
          <img
            className={classes.image}
            src={image2}
            alt="Your Image"
          />
          
        </Grid>



        <Grid item xs={12} md={6}>
          <div className={classes.leftContent}>
           
          {imageshow?<img
            className={classes.image1}
            src={image1}
            alt="Your Image"
          />:''}
          <p>{heading}</p>
            <p>
         {description}
            </p>

            <button style={buttonStyle}>
      <span style={textStyle}>Learn More</span>
      <FaArrowCircleRight style={{color:"#1D1E70"}} />
    </button>

          </div>
        </Grid>

        {/* Right Partition */}
        {/* <Grid item xs={12} md={6}>
          <img
            className={classes.image}
            src="https://drive.google.com/uc?export=download&id=1Q5CKIL87Xvy4W3iUvhefzdWH-a4ZDoQ7"
            alt="Your Image"
          />
        </Grid> */}
      </Grid>
    </div>

  );
};

export default MapgrowthCol;
