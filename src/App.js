import React, { useEffect, useState } from 'react';

import { Container, Typography, Divider, makeStyles } from '@material-ui/core';

import ColourSelect from './components/ColourSelect';
import ColourScheme from './components/ColourScheme';
import Swatch from './components/Swatch';

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(5),
  },

  divider: {
    marginTop: theme.spacing(5),
  },
  heading: {
    marginTop: theme.spacing(3),
  },
}));

function App() {
  const [selectedColour, setSelectedColour] = useState('');

  const classes = useStyles();

  return (
    <Container maxWidth="xs" className={classes.container}>
      <ColourSelect
        selectedColour={selectedColour}
        setSelectedColour={setSelectedColour}
      />

      <Typography variant="h6" className={classes.heading}>
        Selected colour
      </Typography>
      <Swatch
        colour={''} // Must be a string in the format rgb(123, 123, 123)
      />

      <Divider className={classes.divider} />

      <Typography variant="h6" className={classes.heading}>
        Colour scheme
      </Typography>
      <ColourScheme
        colours={[]}
        // Must be an array of colours in the format [R, G, B],
        // where R, G, B are integers
        // e.g. [ [123, 123, 123], [123, 123, 123], ...]
      />
    </Container>
  );
}

export default App;
