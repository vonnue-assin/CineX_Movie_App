import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import { toast } from 'react-toastify';

import { useGetMovieGenres, useGetMovieList } from '../../apis/movie';
import { routes } from '../../routes';
import Button from '../Button';
import { MovieGenresList } from '../MovieGenersList';
import { MovieListCard } from '../MovieListCard';

import './styles.css';

export const MovieList = () => {
  const {
    data: moviesData,
    isLoading: moviesLoading,
    isError: moviesError,
  } = useGetMovieList();

  const {
    data: genresData,
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

  const movies = moviesData ?? [];
  const genres = genresData ?? [];

  if (movies.length === 0) {
    return <p>No movies found</p>;
  }
  if (genres.length === 0) {
    return <p>No genres found</p>;
  }

  const filteredMovies = selectedGenreId
    ? movies.filter(movie => movie.genreIds.includes(selectedGenreId))
    : movies;

  if (filteredMovies.length === 0) {
    return (
      <>
        <p>No movies found for selected genre.</p>
        <Button>
          <Link to={routes.signIn} className="back-button">
            Back
          </Link>
        </Button>
      </>
    );
  }
  return (
    <>
      <h2 className="now-playing-movie-lists-title">Enjoy and Explore....</h2>

      <MovieGenresList
        genres={genres}
        selectedGenreId={selectedGenreId}
        onSelectGenre={setSelectedGenreId}
      />

      <div className="now-playing-movie-container">
        <div className="now-playing-movie-list-container">
          {filteredMovies.map(movie => (
            <MovieListCard key={movie.id} {...movie} />
          ))}
        </div>
      </div>
    </>
  );
};
