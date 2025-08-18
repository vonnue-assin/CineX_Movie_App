import { ClipLoader } from 'react-spinners';
import { toast } from 'react-toastify';

import { useGetNowPlayingMovie, useGetWatchListMovies } from '../../apis/movie';
import { NowPlayingMovie } from '../../types/NowPlayingMovies';
import { NowPlayingMovieCard } from '../NowPlayingMovieCard';

import './styles.css';

export const NowPlayingMovieLists = () => {
  const { data: movieData, isLoading, isError } = useGetNowPlayingMovie();
  const { data: watchListMovies } = useGetWatchListMovies();

  if (isLoading) {
    return (
      <div className="loader-container">
        <ClipLoader color="green" loading={isLoading} size={100} />
      </div>
    );
  }

  if (isError) {
    toast.error('Failed to load movies. Please try again');

    return null;
  }

  const movies = movieData?.results;

  if (movies?.length === 0) {
    return <p>No movies found</p>;
  }

  return (
    <>
      <h2 className="now-playing-movie-lists-title">
        Now Playing Movie Lists...
      </h2>
      <div className="now-playing-movie-container">
        <div className="now-playing-movie-list-container">
          {(movies ?? []).map(movie => (
            <NowPlayingMovieCard
              key={movie.id}
              {...movie}
              isWatchList={watchListMovies?.results.some(
                (watchlist: NowPlayingMovie) => watchlist.id === movie.id,
              )}
            />
          ))}
        </div>
      </div>
    </>
  );
};
