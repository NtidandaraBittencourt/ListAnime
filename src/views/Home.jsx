import React from 'react';
import AnimeList from '../components/AnimeList';
import Button from '@mui/material/Button';

const Home = () => {
  return (
    <div>
      <AnimeList search="Naruto" page="1" rowsPerPage="10" />
      <div className="p-5">
      <Button variant="text">Text</Button>
    </div>
    </div>
  )
}

export default Home;