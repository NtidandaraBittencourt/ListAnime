import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import SelectFormatAnime from './SelectFormatAnime';
import { Box } from '@mui/material';

function Filter({ onSearch, onFormatSelect }) {
  return (
    <Box sx={{ marginTop: '15vh', marginX: '24px'}} >
      <SelectFormatAnime onFormatSelect={onFormatSelect} />
      <SearchBar onSearch={onSearch} />
    </Box>
  );
}

Filter.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onFormatSelect: PropTypes.func.isRequired,
};

export default Filter;
