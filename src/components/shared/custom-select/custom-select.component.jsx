import { useState } from 'react';

const { Select, MenuItem } = require('@mui/material');

const CustomSelect = ({ options, onChange, ...selectProps }) => {
  const [value, setValue] = useState(options[0].value);

  const handleChange = (event) => {
    const { value } = event.target;

    setValue(value);
    onChange(value);
  };

  return (
    <Select onChange={handleChange} value={value} {...selectProps}>
      {options.map((option) => (
        <MenuItem key={option.label} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </Select>
  );
};

export default CustomSelect;
