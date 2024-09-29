import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@tanstack/react-query';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Add from '@mui/icons-material/Add';

import { fetchAnimes } from '../../../services/anilistApi';
import Loading from '../../../shared/Loading';

import AnimeCard from '../Card/AnimeCard';
import './AnimeList.scss'; 

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  marginTop: '24px',

  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '',
  }),
}));

const AnimeList = ({ search, page, rowsPerPage, format }) => {
  const [addRowsPerPage, setRowsPerPage] = useState(rowsPerPage);
  
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ['animes', search, page, addRowsPerPage, format],
    queryFn: () => fetchAnimes(search, page, addRowsPerPage, format),
    keepPreviousData: true,
    enabled: search.length === 0 || search.length >= 3,
  });

  useEffect(() => {
    setRowsPerPage(12);
    refetch()
  }, [search, format, refetch]);

  if (isLoading) return <div><Loading /></div>;
  if (error) {
    console.error('Erro na requisição:', error);
    return <div>Erro: {error.message}</div>;
  }
  const addAnime = () => {
    setRowsPerPage(addRowsPerPage + 12);
    refetch();
  }

  return (
    <Box sx={{ width: '100%', marginBottom: '54px' }}>
      <Grid 
        container 
        rowSpacing={1} 
        columnSpacing={{ xs: 2, sm: 4, md: 6 }}
        sx={{ display: 'flex', flexDirection: 'row', marginLeft: '24px', marginRight:'24px', justifyContent: 'space-between', gap: '10px' }}
      >
        {data?.media?.length > 0 ? (
          data.media.map((anime) => (
            <Grid xs={12} sm={8} md={3} key={anime.id}>
              <Item>
                <AnimeCard anime={anime} />
              </Item>
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <p>Nenhum anime encontrado.</p>
          </Grid>
        )}
         {data?.media?.length > 0 ?
         <Button 
          onClick={() => addAnime()} startIcon={<Add />}
          sx={{width: '100%'}}
          className="button-add"
          variant="contained"
        > 
          Ver mais
        </Button> : ''
        }
      </Grid>
    </Box>
  );
};

AnimeList.propTypes = {
  search: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
  rowsPerPage: PropTypes.string.isRequired,
  format: PropTypes.string.isRequired,
};

export default AnimeList;
