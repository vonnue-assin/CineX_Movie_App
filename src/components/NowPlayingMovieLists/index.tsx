import { toast } from 'react-toastify';

import { useGetNowPlayingMovies } from '../../apis/movie';
import { useGetUserDetails } from '../../apis/user';
import { NowPlayingMovieCard } from '../NowPlayingMovieCard';

import './styles.css';

let hasShownLoadingToast = false;
let hasShownErrorToast = false;

export const NowPlayingMovieLists = () => {
  const {
    data: movies,
    isLoading: isMoviesLoading,
    isError: isMoviesError,
  } = useGetNowPlayingMovies();

  const {
    data: users,
    isLoading: isUsersLoading,
    isError: isUsersError,
  } = useGetUserDetails();

  const isLoading = isMoviesLoading || isUsersLoading;
  const isError = isMoviesError || isUsersError;

  if (isLoading && !hasShownLoadingToast) {
    toast.info('Loading movies and user info...');
    hasShownLoadingToast = true;
    hasShownErrorToast = false;
  }

  if (isError && !hasShownErrorToast) {
    toast.error('Failed to load movies or user info. Please try again.');
    hasShownErrorToast = true;
    hasShownLoadingToast = false;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Something went wrong.</p>;
  }

  const userId = users?.[0]?.id;

  if (!userId) {
    return <p>User not found.</p>;
  }

  if (!movies || movies.length === 0) {
    return <p>No movies found.</p>;
  }

  return (
    <>
      <h2 className="now-playing-movie-lists-title">
        Now Playing Movie Lists...
      </h2>
      <div className="now-playing-movie-container">
        <div className="now-playing-movie-list-container">
          {movies.map(movie => (
            <NowPlayingMovieCard userId={userId} key={movie.id} {...movie} />
          ))}
        </div>
      </div>
    </>
  );
};
