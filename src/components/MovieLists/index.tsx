import React from 'react';
import { toast } from 'react-toastify';

import { GetFavouriteMovies, useGetMovieList } from '../../apis/movie';
import { MovieListCard } from '../MovieListCard';

import './styles.css';

export const MovieListSection: React.FC = () => {
  const { data: movies, isLoading, isError } = useGetMovieList();
  const { data: favoriteMovies } = GetFavouriteMovies();

  if (isLoading) {
    toast.success('Loading Movies..');
  }

  if (isError) {
    toast.error('Failed to load movies.Please try again');
  }

  if (isLoading || !movies) return <div>Loading...</div>;

  return (
    <>
      <h2 className="now-playing-movie-lists-title">Enjoy and Explore....</h2>
      <div className="now-playing-movie-container">
        <div className="now-playing-movie-list-container">
          {movies.map(movie => (
            <MovieListCard
              key={movie.id}
              {...movie}
              isFavorite={favoriteMovies?.some(fav => fav.id === movie.id)}
            />
          ))}
        </div>
      </div>
    </>
  );
};
