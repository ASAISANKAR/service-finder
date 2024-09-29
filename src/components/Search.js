import React from 'react';
import { TextField, Button, Box } from '@mui/material';

function Search() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 2 }}>
      <TextField label="Search" variant="outlined" sx={{ marginRight: 2 }} />
      <Button variant="contained" color="primary">Search</Button>
    </Box>
  );
}

export default Search;
