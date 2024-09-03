import React, { useState } from 'react';
import './App.css';
import MultiSelectDropdown from './MultiSelectDropDown';
import { Container, CssBaseline, Typography } from '@mui/material';

function App() {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  return (
    <div className="App">
      <CssBaseline />
      <Typography variant="h2" sx={{mt: '2rem'}}>Sample multi dropdown</Typography>
      <Container sx={{mt: '2rem'}} maxWidth="sm">
        <MultiSelectDropdown
          name='sample multi dropdown'
          options={["one", "two", "three", "four"]}
          selectedValues={selectedValues}
          setSelectedValues={setSelectedValues}
          required
        />
      </Container>

    </div>
  );
}

export default App;
