import { toast } from 'react-toastify';

import { useGetMovieGenres } from '../../apis/movie/useGetMovieGenres';
import { MovieGenersCard } from '../MovieGenersCard';

export const MovieGenersList = () => {
  const { data: movies, isLoading, isError } = useGetMovieGenres();

  if (isLoading) {
    toast.success('Loading genres...');
  }

  if (isError) {
    toast.error('Failed to load genres.Plese try again later...');
  }

  if (!movies || movies.length === 0) {
    return <p>No genres available.</p>;
  }

  return (
    <>
      <h2>Trending Movie Genres..</h2>
      <div>
        {movies.map(movie => (
          <MovieGenersCard key={movie.id} id={movie.id} name={movie.name} />
        ))}
      </div>
    </>
  );
};
