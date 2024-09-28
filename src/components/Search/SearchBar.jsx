import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TextField, Button, Box } from '@mui/material';

const SearchBar = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSearch = () => {
    if (!inputValue) return;
    onSearch(inputValue);
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  }

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '20px' }}>
      <TextField
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Digite algo aqui..."
        variant="outlined"
        fullWidth
        size='small'
      />
      <Button 
        variant="contained" 
        color="primary" 
        onClick={handleSearch}
      >
        Buscar
      </Button>
    </Box>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired
};

export default SearchBar;
