import { useGetMovieGenres } from '../../apis/user';
import { MovieGenersCard } from '../MovieGenersCard';

export const MovieGenersList = () => {
  const { data: movies, isLoading, isError } = useGetMovieGenres();

  if (isLoading) {
    return <p>Loading Users...</p>;
  }

  if (isError) {
  }

  return (
    <>
      <h2>Trending Movie Genres..</h2>
      <div>
        {movies?.genres?.map(movie => (
          <MovieGenersCard key={movie.id} name={movie.name} />
        ))}
      </div>
    </>
  );
};
