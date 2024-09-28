import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Box } from '@mui/material';

const formats = [
  {
    title:'All Formats',
    code: ''
  },
  {
    title:'TV Show',
    code: 'TV'
  }, 
  {
    title: 'Movie',
    code: 'MOVIE'
  },{
    title: 'TV Short',
    code: 'TV_SHORT'
  },
  {
    title: 'Special',
    code: 'SPECIAL'
  },
  {
    title: 'OVA',
    code: 'OVA'
  },
  {
    title: 'ONA',
    code: 'ONA'
  },
  {
    title: 'Music',
    code: 'MUSIC'
  }
];

const SelectFormatAnime = ({ onFormatSelect }) => {
  const [selectedFormat, setSelectedFormat] = useState('All Formats');

  const handleFormatChange = (format) => {
    setSelectedFormat(format.title);
    onFormatSelect(format.code);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '20px', flexDirection: { xs: 'column', sm: 'row' } }}>
      {formats.map((format, index) => (
        <Button
          key={index}
          variant={selectedFormat === format.title ? 'contained' : 'outlined'}
          onClick={() => handleFormatChange(format)}
        >
          {format.title}
        </Button>
      ))}
    </Box>
  );
};

SelectFormatAnime.propTypes = {
  onFormatSelect: PropTypes.func.isRequired
};


export default SelectFormatAnime;
