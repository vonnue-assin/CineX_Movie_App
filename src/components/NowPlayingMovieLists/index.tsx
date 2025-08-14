import { ClipLoader } from 'react-spinners';
import { toast } from 'react-toastify';

import { useGetNowPlayingMovie } from '../../apis/movie';
import { NowPlayingMovieCard } from '../NowPlayingMovieCard';
import { NowPlayingMovie } from '../../types/NowPlayingMovies';

import './styles.css';

export const NowPlayingMovieLists = () => {
  const { data: movieData, isLoading, isError } = useGetNowPlayingMovie();

  if (isLoading) {
    return (
      <div className="loader-container">
        <ClipLoader color="red" loading={isLoading} size={100} />
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
          {(movies ?? []).map((movie: NowPlayingMovie) => (
            <NowPlayingMovieCard key={movie.id} {...movie} />
          ))}
        </div>
      </div>
    </>
  );
};
