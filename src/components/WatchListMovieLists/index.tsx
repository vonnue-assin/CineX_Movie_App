import { toast } from 'react-toastify';

import { useGetMovieWatchList } from '../../apis/movie';
import { WatchListMovieCard } from '../WatchListMovieCard';

import './styles.css';

export const WatchListMovieLists = () => {
  const { data: movies, isLoading, isError } = useGetMovieWatchList();

  if (isLoading) {
    toast.success('Loading Movies..');
  }

  if (isError) {
    toast.error('Failed to load movies.Please try again');
  }
  if (!movies || movies.length === 0) return <p>No movies found.</p>;

  return (
    <>
      <h2 className="now-playing-movie-lists-title">WatchList Movies...</h2>
      <div className="now-playing-movie-container">
        <div className="now-playing-movie-list-container">
          {movies.map(movie => (
            <WatchListMovieCard key={movie.id} {...movie} />
          ))}
        </div>
      </div>
    </>
  );
};
