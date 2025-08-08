import React from 'react';

import { MovieGenre } from '../../types/MovieGenres';
import { MovieGenersCard } from '../MovieGenersCard';

type MovieGenresListProps = {
  genres: MovieGenre[];
};

export const MovieGenresList: React.FC<MovieGenresListProps> = ({ genres }) => {
  return (
    <div className="genres-container">
      {genres.length > 0 ? (
        genres.map(genre => (
          <MovieGenersCard key={genre.id} name={genre.name} />
        ))
      ) : (
        <p>No genres available.</p>
      )}
    </div>
  );
};
