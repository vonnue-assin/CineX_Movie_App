import React from 'react';

import { MovieGenre } from '../../types/MovieGenres';
import { MovieGenersCard } from '../MovieGenersCard';

type MovieGenresListProps = {
  genres: MovieGenre[];
};

export const MovieGenresList: React.FC<MovieGenresListProps> = ({ genres }) => {
  if (genres.length === 0) {
    return (
      <div className="genres-container">
        <p>No genres available.</p>
      </div>
    );
  }

  return (
    <div className="genres-container">
      {genres.map(genre => (
        <MovieGenersCard key={genre.id} name={genre.name} />
      ))}
    </div>
  );
};
