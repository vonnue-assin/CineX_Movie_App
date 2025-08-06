import { useGetMovieGenres } from '../../apis/user/useGetMovieGenres';
import { MovieGenersCard } from '../MovieGenersCard';

export const MovieGenersList = () => {
  const { data: movies, isLoading, isError } = useGetMovieGenres();

  if (isLoading) {
    return <p>Loading genres...</p>;
  }

  if (isError) {
    return <p>Failed to load genres. Please try again later.</p>;
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
