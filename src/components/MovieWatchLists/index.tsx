import React from 'react';

import { NowPlayingMovie } from '../../types/NowPlayingMovies';
import { MovieWatchListsCard } from '../MovieWatchListsCard';

import './styles.css';

type MovieWatchListsProps = {
  movies: NowPlayingMovie[];
};

export const MovieWatchLists: React.FC<MovieWatchListsProps> = ({ movies }) => {
  if (movies.length === 0) {
    return (
      <div className="watchList-movie-main-container">
        <p className="watchlist-title">Your WatchLists Movies..</p>
        <p className="error-message">No movies available.</p>
      </div>
    );
  }

  return (
    <div className="watchList-movie-main-container">
      <p className="watchlist-title">Your WatchLists Movies..</p>
      <div className="now-playing-movie-list-container">
        {movies.map(movie => (
          <MovieWatchListsCard key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
};
