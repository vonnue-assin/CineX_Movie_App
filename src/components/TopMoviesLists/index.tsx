import { toast } from 'react-toastify';

import { useGetTopRatedMovies } from '../../apis/movie';
import { TopMovieCard } from '../TopMoviesCard';

import './styles.css';

export const TopMovieList = () => {
  const { data: movies, isLoading, isError } = useGetTopRatedMovies();

  if (isLoading) {
    toast.success('Loading Movies..');
  }

  if (isError) {
    toast.error('Failed to load movies.Please try again');
  }
  if (!movies || movies.length === 0) return <p>No movies found.</p>;

  return (
    <>
      <h2 className="now-playing-movie-lists-title">Enjoy and Explore....</h2>
      <div className="now-playing-movie-container">
        <div className="now-playing-movie-list-container">
          {movies.map(movie => (
            <TopMovieCard key={movie.id} {...movie} />
          ))}
        </div>
      </div>
    </>
  );
};
