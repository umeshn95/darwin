import React from 'react';

import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';

// Custom styling
const useStyles = makeStyles((theme) => ({
  dataProcessContainer: {
    padding: "30px",
    backgroundImage: "url('https://res.cloudinary.com/dvmqfke8w/image/upload/v1705053776/Untitled_24_mvracg.png')",
    backgroundSize: 'cover',
    color: '#000',
  },
  box: {
    textAlign: 'center',
    padding: "20px",
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
  },
  boxHeading: {
    fontWeight: 'bold',
  },
  boxDescription: {
    color: 'gray',
  },
  heading:{
    fontSize:"30px",
    textAlign:"center",
    fontWeight:"bold"
  },
  description:{
    textAlign:"center",
    paddingBottom:"20px"
  }
}));

const DataProcess = ({
  hide3, img1, img2, img3, img4, img5, img6,
  heading, description,
  heading1, heading2, heading3, heading4, heading5, heading6,
  description1, description2, description3, description4, description5, description6
}) => {
  const classes = useStyles();

  return (
    <Paper className={classes.dataProcessContainer}>
      <Grid container spacing={2}>
        <Grid item xs={12} className={classes.heading}>
          <p  className={classes.heading}>{heading}</p>
        </Grid>
        <Grid item xs={12} md={12} className={classes.description}>
          <p className={classes.description}>{description}</p>
        </Grid>
        
        {/* Box 1 */}
        <Grid item xs={12} sm={6} md={4} className={classes.box}>
          <img src={img1} alt="Image 1" className={classes.image}/>
          <p variant="subtitle1" className={classes.boxHeading}>{heading1}</p>
          <p className={classes.boxDescription}>{description1}</p>
        </Grid>

        {/* Box 2 */}
        <Grid item xs={12} sm={6} md={4} className={classes.box}>
          <img src={img2} alt="Image 2" className={classes.image}/>
          <p variant="subtitle1" className={classes.boxHeading}>{heading2}</p>
          <p className={classes.boxDescription}>{description2}</p>
        </Grid>

        {/* Box 3 */}
        
          <Grid item xs={12} sm={6} md={4} className={classes.box}>
            <img src={img3} alt="Image 3" className={classes.image}/>
            <p variant="subtitle1" className={classes.boxHeading}>{heading3}</p>
            <p className={classes.boxDescription}>{description3}</p>
          </Grid>
        

        {/* Box 4 */}
      {!hide3 && (  <Grid item xs={12} sm={6} md={4} className={classes.box}>
          <img src={img4} alt="Image 4" className={classes.image}/>
          <p variant="subtitle1" className={classes.boxHeading}>{heading4}</p>
          <p className={classes.boxDescription}>{description4}</p>
        </Grid>)}

        {/* Box 5 */}
        {!hide3 && (<Grid item xs={12} sm={6} md={4} className={classes.box}>
          <img src={img5} alt="Image 5" className={classes.image}/>
          <p variant="subtitle1" className={classes.boxHeading}>{heading5}</p>
          <p className={classes.boxDescription}>{description5}</p>
        </Grid>)}

        {/* Box 6 */}
        {!hide3 && (<Grid item xs={12} sm={6} md={4} className={classes.box}>
          <img src={img6} alt="Image 6" className={classes.image}/>
          <p variant="subtitle1" className={classes.boxHeading}>{heading6}</p>
          <p className={classes.boxDescription}>{description6}</p>
        </Grid>)}
      </Grid>
    </Paper>
  );
};

export default DataProcess;
