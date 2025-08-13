import React from 'react';

import { NowPlayingMovie } from '../../types/NowPlayingMovies';
import { MovieWatchListsCard } from '../MovieWatchListsCard';

import './styles.css';

type MovieWatchListsProps = {
  movies: NowPlayingMovie[];
};

export const MovieWatchLists: React.FC<MovieWatchListsProps> = ({ movies }) => {
  return (
    <div className="watchList-movie-main-container">
        <p className='watchlist-title'>Your WatchLists Movies..</p>
      <div className="now-playing-movie-list-container">
        {movies.length > 0 ? (
          movies.map(movie => <MovieWatchListsCard key={movie.id} {...movie} />)
        ) : (
          <p className='error-message'>No movies available.</p>
        )}
      </div>
    </div>
  );
};
