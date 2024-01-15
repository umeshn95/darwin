import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '16px',
  },
  heading: {
    fontWeight: 'bold',
  },
  description: {
    marginBottom: '8px',
  },
  countContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  countItem: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
}));

function ResponsiveCountComponent() {
  const classes = useStyles();
  

  const maxCounts = {
    schools: 10,
    students: 20,
    countries: 30,
    states: 40,
  };
  const intervalDurations = {
    schools: 1000,
    students: 1000,
    countries: 1000,
    states: 1000,
  };

  const [countData, setCountData] = useState({
    schools: 0,
    students: 0,
    countries: 0,
    states: 0,
  });

  useEffect(() => {
    const intervals = Object.keys(maxCounts).map((key) =>
      setInterval(() => {
        setCountData((prevData) => {
          const newCount = {
            ...prevData,
            [key]:
              prevData[key] + 1 <= maxCounts[key] ? prevData[key] + 1 : maxCounts[key],
          };

          return newCount;
        });
      }, intervalDurations[key])
    );

    return () => {
      intervals.forEach((interval) => clearInterval(interval));
    };
  }, [maxCounts, intervalDurations]);




  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <p variant="h4" className={classes.heading}>
            Heading
          </p>
          <p variant="body1" className={classes.description}>
            This is a description for the left column.
          </p>
        </Grid>
        <Grid item xs={12} md={6} className={classes.countContainer}>
          <p variant="h6" className={classes.countItem}>
            Schools: {countData.schools}
          </p>
          <p variant="h6" className={classes.countItem}>
            Students: {countData.students}
          </p>
          <p variant="h6" className={classes.countItem}>
            Countries: {countData.countries}
          </p>
          <p variant="h6" className={classes.countItem}>
            States: {countData.states}
          </p>
        </Grid>
      </Grid>
    </div>
  );
}

export default ResponsiveCountComponent;
