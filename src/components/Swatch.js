import React from 'react';

import { Grid, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2, 0),
  },
  swatch: {
    marginRight: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    width: 48,
    height: 48,

    boxShadow: '0 0 0 1px rgba(0, 0, 0, .25) inset',
  },
}));

const Swatch = props => {
  const { colour } = props;
  const classes = useStyles();

  return (
    <Grid
      container
      justify="flex-start"
      alignItems="center"
      className={classes.root}
    >
      <div
        className={classes.swatch}
        style={{
          backgroundColor: colour,
        }}
      />
      <Typography>{colour}</Typography>
    </Grid>
  );
};

export default Swatch;
