import React from 'react';

import { MovieGenre } from '../../types/MovieGenres';

import './styles.css';

type MovieGenresListProps = {
  genres: MovieGenre[];
  selectedGenreId: number | null;
  onSelectGenre: (genreId: number | null) => void;
};

export const MovieGenresList: React.FC<MovieGenresListProps> = ({
  genres,
  selectedGenreId,
  onSelectGenre,
}) => {
  if (genres.length === 0) {
    return (
      <div className="genres-container">
        <p>No genres available.</p>
      </div>
    );
  }

  return (
    <div className="genres-container">
      <button
        onClick={() => onSelectGenre(null)}
        style={{
          cursor: 'pointer',
          padding: '6px 12px',
          borderRadius: '20px',
          border: 'none',
          backgroundColor: selectedGenreId === null ? '#ff6347' : '#eee',
          color: selectedGenreId === null ? '#fff' : '#000',
          fontWeight: selectedGenreId === null ? 'bold' : 'normal',
        }}
      >
        All
      </button>
      {genres.map(genre => (
        <button
          key={genre.id}
          className={`genre-chip ${
            selectedGenreId === genre.id ? 'selected' : ''
          }`}
          onClick={() => onSelectGenre(genre.id)}
          style={{
            cursor: 'pointer',
            padding: '6px 12px',
            borderRadius: '20px',
            border: 'none',
            backgroundColor: selectedGenreId === genre.id ? '#ff6347' : '#eee',
            color: selectedGenreId === genre.id ? '#fff' : '#000',
            fontWeight: selectedGenreId === genre.id ? 'bold' : 'normal',
          }}
        >
          {genre.name}
        </button>
      ))}
    </div>
  );
};
