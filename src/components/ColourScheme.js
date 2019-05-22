import React from 'react';

import { Typography, makeStyles } from '@material-ui/core';

import Swatch from './Swatch';

const useStyles = makeStyles(theme => ({
  root: {},
}));

const toRGBString = rgb => `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;

const ColourScheme = props => {
  const { colours } = props;
  const classes = useStyles();

  if (colours.length === 0)
    return (
      <Typography variant="subtitle1" color="textSecondary">
        Choose a colour to generate a colour scheme
      </Typography>
    );

  return (
    <div className={classes.root}>
      {colours.map(x => (
        <Swatch key={toRGBString(x)} colour={toRGBString(x)} />
      ))}
    </div>
  );
};

export default ColourScheme;
