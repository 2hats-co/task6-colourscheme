import React from 'react';

import { TextField, MenuItem } from '@material-ui/core';

const COLOURS = [
  { cmyk: 'cmyk(0, 77, 81, 0)', name: 'Red' },
  { cmyk: 'cmyk(0, 42, 100, 0)', name: 'Orange' },
  { cmyk: 'cmyk(0, 20, 100, 0)', name: 'Yellow' },
  { cmyk: 'cmyk(65, 0, 54, 15)', name: 'Green' },
  { cmyk: 'cmyk(64, 20, 0, 2)', name: 'Teal' },
  { cmyk: 'cmyk(100, 52, 0, 0)', name: 'Blue' },
  { cmyk: 'cmyk(59, 60, 0, 16)', name: 'Purple' },
  { cmyk: 'cmyk(0, 82, 67, 0)', name: 'Pink' },
];

const ColourSelect = props => {
  const { selectedColour, setSelectedColour } = props;

  const handleChange = event => setSelectedColour(event.target.value);

  return (
    <TextField
      select
      label="Colour"
      value={selectedColour}
      onChange={handleChange}
      margin="normal"
      fullWidth
      variant="outlined"
    >
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      {COLOURS.map(x => (
        <MenuItem key={x.cmyk} value={x.cmyk}>
          {x.name}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default ColourSelect;
