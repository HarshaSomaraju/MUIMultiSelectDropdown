
# react-mui-multi_select_dropdown

A custom multi-select dropdown component built using Material-UI (MUI) for React. 

## GitHub Page

View the component in action: [Demo](https://HarshaSomaraju.github.io/react-mui-multi_select_dropdown)

## Installation

To use this component, clone the repository to your local machine:

```bash
git clone https://github.com/HarshaSomaraju/react-mui-multi_select_dropdown.git
```

## Usage

Here’s an example of how to use the `MultiSelectDropdown` component in your React project:

```jsx
import React, { useState } from 'react';
import { CssBaseline, Typography, Container } from '@mui/material';
import MultiSelectDropdown from './path_to_component/MultiSelectDropdown';

function App() {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  return (
    <div className="App">
      <CssBaseline />
      <Typography variant="h2" sx={{ mt: '2rem' }}>Sample Multi Dropdown</Typography>
      <Container sx={{ mt: '2rem' }} maxWidth="sm">
        <MultiSelectDropdown
          name="sample multi dropdown"
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
```

## Props

The `MultiSelectDropdown` component accepts the following props:

- **name**: `string` (required) - The name of the dropdown.
- **options**: `string[]` (required) - The list of options to be displayed.
- **selectedValues**: `string[]` (required) - The currently selected values.
- **setSelectedValues**: `React.Dispatch<React.SetStateAction<string[]>>` (required) - The function to update the selected values.
- **required**: `boolean` (optional) - Marks the dropdown as required.
- **className**: `string` (optional) - Additional classes for styling, e.g., `"container mt-2"`.
- **onChange**: `(event: SelectChangeEvent<string[]>) => void` (optional) - Function triggered on option selection.

## Customization

You can customize the component further by passing a `className` string for styling and an `onChange` function to handle option selection events.

## Contribution

Contributions are welcome! If you have ideas for new features or spot any bugs, please feel free to open an issue or submit a pull request.

## License

No specific license is applied to this project. Feel free to use and modify it as needed.
```

You can copy this content into your `README.md` file. Let me know if you need any changes!