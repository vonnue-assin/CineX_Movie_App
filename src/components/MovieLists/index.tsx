import React, { useState } from 'react';
import { ClipLoader } from 'react-spinners';
import { toast } from 'react-toastify';

import { useGetMovieList } from '../../apis/movie';
import { useGetMovieGenres } from '../../apis/movie';
import { MovieListCard } from '../MovieListCard';
import { MovieGenresList } from '../MovieGenersList';

import './styles.css';

export const MovieList = () => {
  const {
    data: movies,
    isLoading: moviesLoading,
    isError: moviesError,
  } = useGetMovieList();
  const {
    data: genres,
    isLoading: genresLoading,
    isError: genresError,
  } = useGetMovieGenres();

  const [selectedGenreId, setSelectedGenreId] = useState<number | null>(null);

  if (moviesError || genresError) {
    toast.error('Failed to load movies or genres. Please try again.');
    return <p>Failed to load data. Please try again.</p>;
  }

  if (moviesLoading || genresLoading) {
    return (
      <div className="loader-container">
        <ClipLoader loading={true} color="red" size={60} />
      </div>
    );
  }

  if (!movies || movies.length === 0) return <p>No movies found</p>;

  if (!genres || genres.length === 0) return <p>No genres found</p>;

  // Filter movies by selected genre if any
  const filteredMovies = selectedGenreId
    ? movies.filter(movie => movie.genre_ids.includes(selectedGenreId))
    : movies;

  if (filteredMovies.length === 0)
    return <p>No movies found for selected genre.</p>;

  return (
    <>
      <h2 className="now-playing-movie-lists-title">Enjoy and Explore....</h2>

      <MovieGenresList
        genres={genres}
        selectedGenreId={selectedGenreId}
        onSelectGenre={setSelectedGenreId}
      />

      <div className="now-playing-movie-container">
        <div
          className="now-playing-movie-list-container"
          style={{
            display: 'flex',
            gap: '20px',
            overflowX: 'auto',
            paddingBottom: '20px',
            scrollSnapType: 'x mandatory',
          }}
        >
          {filteredMovies.map(movie => (
            <MovieListCard key={movie.id} {...movie} />
          ))}
        </div>
      </div>
    </>
  );
};
