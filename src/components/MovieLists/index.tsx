import { useGetMovieList } from '../../apis/Movie';
import { MovieListCard } from '../MovieListCard';

export const MovieList = () => {
  const { data: movieList, isLoading, isError } = useGetMovieList();

  if (isLoading) {
    return <p>Loading movies..</p>;
  }

  if (isError) {
    return <p>Failed to load movies. Please try again later.</p>;
  }

  if (!movieList || movieList.length === 0) {
    return <p>No movies found.</p>;
  }

  return (
    <>
      <h2>Movie Lists</h2>
      <div className="movie-list-container">
        {movieList.map(movie => (
          <MovieListCard key={movie.id} {...movie} />
        ))}
      </div>
    </>
  );
};
