import React from 'react';
import { toast } from 'react-toastify';
import { ClipLoader } from 'react-spinners';

import { GetFavouriteMovies, useGetMovieList } from '../../apis/movie';
import { MovieListCard } from '../MovieListCard';

import './styles.css';

export const MovieListSection: React.FC = () => {
  const { data: movieData, isLoading, isError } = useGetMovieList();
  const { data: favoriteMovies } = GetFavouriteMovies();

  if (isLoading) {
    return (
      <div className="loader-container">
        <ClipLoader loading={isLoading} color="green" size={100} />
      </div>
    );
  }

  if (isError) {
    toast.error('Failed to load movies.Please try again');
    return <ClipLoader color="red" size={100} />;
  }

  const movies = movieData?.results;

  if (movies?.length === 0) {
    return <p>No Movies Found..</p>;
  }

  return (
    <>
      <h2 className="now-playing-movie-lists-title">Enjoy and Explore....</h2>
      <div className="now-playing-movie-container">
        <div className="now-playing-movie-list-container">
          {(movies ?? []).map(movie => (
            <MovieListCard
              key={movie.id}
              {...movie}
              isFavorite={favoriteMovies?.results.some(
                fav => fav.id === movie.id,
              )}
            />
          ))}
        </div>
      </div>
    </>
  );
};
