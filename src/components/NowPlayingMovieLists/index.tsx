import { useGetNowPlayingMovies } from '../../apis/movie';
import { toast } from 'react-toastify';
import { NowPlayingMovieCard } from '../NowPlayingMovieCard';

export const NowPlayingMovieLists = () => {
  const { data: movies, isLoading, isError } = useGetNowPlayingMovies();

  if (isLoading) {
    toast.success('Loading Movies..');
  }

  if (isError) {
    toast.error('Failed to load movies.Please try again');
  }
  if (!movies || movies.length === 0) return <p>No movies found.</p>;

  return (
    <>
      <h2>Movie Lists</h2>
      <div className="now-playing-movie-list-container">
        {movies.map(movie => (
          <NowPlayingMovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </>
  );
};
