import { useGetNowPlayingMovies } from '../../apis/movie';
import { toast } from 'react-toastify';

export const NowPlayingMovieLists = () => {
  const { data: movies, isLoading, isError } = useGetNowPlayingMovies();

  if (isLoading) {
    return <p>Loading Movies..</p>;
  }

  if (isError) {
    return <p>Failed to load movies.Please try again</p>;
  }
  if (!movies || movies.length === 0) return <p>No movies found.</p>;

  return (
    <>
      <h2>Movie Lists</h2>
      <div className="now-playing-movie-list-container">
        {movies.map(movie => (
          <NowPlayingMovieLists key={movie.id} {...movie} />
        ))}
      </div>
    </>
  );
};
