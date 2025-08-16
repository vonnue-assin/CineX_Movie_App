import { ClipLoader } from 'react-spinners';
import { toast } from 'react-toastify';

import { useGetTopRatedMovies } from '../../apis/movie';
import { TopRatedMovie } from '../../types/TopRatedMovies';
import { TopMovieCard } from '../TopMoviesCard';

import './styles.css';

export const TopMovieList = () => {
  const { data: movieData, isLoading, isError } = useGetTopRatedMovies();

  if (isLoading) {
    return (
      <div className="loader-container">
        <ClipLoader color="red" loading={isLoading} size={100} />
      </div>
    );
  }

  if (isError) {
    toast.error('Failed to load movies. Please try again');

    return null;
  }

  const TopRatedmovies = movieData?.results;

  if (TopRatedmovies?.length === 0) {
    return <p>No movies found</p>;
  }

  return (
    <>
      <h2 className="topListed-movie-lists-title">
        Explore the Top Rated Movies..
      </h2>
      <div className="topListed-movie-container">
        <div className="topListed-movies-list-container">
          {(TopRatedmovies ?? []).map((movie: TopRatedMovie) => (
            <TopMovieCard key={movie.id} {...movie} />
          ))}
        </div>
      </div>
    </>
  );
};
