import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchAnimes } from '../services/anilistApi';  // O caminho para o fetchAnimes
import '../styles/AnimeList.css'

const AnimeList = ({ search, page, rowsPerPage }) => {
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ['animes', search, page, rowsPerPage],  // Chave única para cache
    queryFn: () => fetchAnimes(search, page, rowsPerPage),  // Função que faz a busca
    keepPreviousData: true,  // Mantém dados antigos enquanto os novos são carregados
    enabled: search.length === 0 || search.length >= 3,  // Condição para habilitar a query
  });

  if (isLoading) return <div>Carregando...</div>;
  if (error) {
    console.error('Erro na requisição:', error);  // Log para investigar o erro
    return <div>Erro: {error.message}</div>;
  }

  return (
    <div className="anime-grid">
      {data?.media?.length > 0 ? (
        <ul className="anime-list">
          {data.media.map((anime) => (
            <li key={anime.id} className="anime-card">
              <img src={anime.coverImage.large} alt={anime.title.romaji} className="anime-cover"/>
              <div className="anime-info">
                <h3>{anime.title.romaji}</h3>
                <div className="anime-genres">
                  {anime.genres.map((genre) => (
                    <span key={genre} className="genre-tag">{genre}</span>
                  ))}
                </div>
                <div className="anime-rating">{anime.averageScore}%</div>
                <div className="anime-format">{anime.format}</div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhum anime encontrado.</p>
      )}
      <button onClick={() => refetch()}>Recarregar</button>
    </div>
  );
};

export default AnimeList;
