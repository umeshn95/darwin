import React from 'react';
import { Grid, Typography, Paper } from '@mui/material';
import { makeStyles } from '@material-ui/styles';

// Custom styles using makeStyles
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: 'url(https://www.nwea.org/uploads/2023/02/Midnight-background-AboutUs.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: '50% 18%',
    minHeight: '380px',
    padding: "40px",
    
  },
  title: {
    fontSize: '2.75rem',
    textAlign: 'center',
    marginBottom: "20px",
    color:"white"
  },
  description: {
    fontSize: '1.35rem',
    textAlign: 'center',
    color:"white"
  },
  contentContainer: {
    flexBasis: '70%',
  },
}));

const Dreamer = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} md={10} lg={8} className={classes.contentContainer}>
          <p  className={classes.title}>
          Enriching the Educational Journey for Every Learner
          </p>
          <p  className={classes.description}>
          Today's scholars are tomorrow's leaders.Darwin spreads educational resources to a legion of learners and educationalists—revolutionizing life paths, reinforcing community foundations, and building a society that is just and inclusive for every individual.
          </p>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Dreamer;
