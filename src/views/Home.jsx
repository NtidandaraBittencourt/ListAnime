import {useState} from 'react';
import AnimeList from '../components/ListAnime/AnimeList';
import Filter from '../components/Search/Filter';

const Home = () => {
  const [searchText, setSearchText] = useState('');
  const [selectedFormat, setSelectedFormat] = useState('');

  const handleSearch = (text) => {
    setSearchText(text);
  };

  const handleFormatSelect = (format) => {
    setSelectedFormat(format);
  };

  return (
    <div>
      <Filter onSearch={handleSearch} onFormatSelect={handleFormatSelect} />
      <AnimeList search={searchText} format={selectedFormat} page="1" rowsPerPage="12" />
    </div>
  )
}

export default Home;