import { toast } from 'react-toastify';

import { useGetMovieList } from '../../apis/movie';
import { MovieListCard } from '../MovieListCard';

import './styles.css';

export const MovieList = () => {
  const { data: movies, isLoading, isError } = useGetMovieList();

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
            <MovieListCard key={movie.id} {...movie} />
          ))}
        </div>
      </div>
    </>
  );
};
