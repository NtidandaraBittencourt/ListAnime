import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Chip, Box } from '@mui/material';

import { useTheme } from '@mui/material/styles';
import './AnimeCard.scss';

const AnimeCard = ({ anime }) => {
  const theme = useTheme();
  const [scoreClass, setScoreClass] = useState(anime.averageScore || 0);

  const getScoreClass = (score) => {
    if (score >= 80) {
      return 'isGreen';
    } else if (score >= 60) {
      return 'isYellow';
    } else {
      return 'isRed';
    }
  };

  return (
    <div className="anime-card">
      <LazyLoadImage
        src={anime.coverImage.large}
        alt={anime.title.romaji}
        effect="blur"
        placeholderSrc="placeholder-image-url.jpg"
        className="anime-cover"
      />
      <div className="anime-info">
        <Box className="anime-title">
          <h3>{anime.title.romaji}</h3>
          <div className="anime-genres">
            {anime.genres.map((genre) => (
              <Box key={genre}>
                <Chip label={genre} sx={{overflow:'visible', backgroundColor: theme.palette.primary.light}} />
              </Box>
            ))}
          </div>
        </Box>

        <div className="anime-rating">
          <span className={`score ${getScoreClass(scoreClass)} anime-format` }>
            {scoreClass}%
          </span>
        </div>
      </div>
    </div>
  );
};

AnimeCard.propTypes = {
  anime: PropTypes.shape({
    coverImage: PropTypes.shape({
      large: PropTypes.string.isRequired,
    }).isRequired,
    title: PropTypes.shape({
      romaji: PropTypes.string.isRequired,
    }).isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    averageScore: PropTypes.number.isRequired,
  }).isRequired,
};

export default AnimeCard;

