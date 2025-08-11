import React from 'react';
import { toast } from 'react-toastify';

import { useAddToWatchList } from '../../apis/movie/useAddMovieToWatchList';
import { useIsMovieInWatchList } from '../../apis/user/useIsMovieInWatchList';
import { StarRating } from '../StarRating';

import { ReactComponent as WatchList } from '../../assets/svg/watchList.svg';

import './styles.css';

type MovieListCardProps = {
  backdrop_path: string | null;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  id: number; 
  userId: number;
};

export const NowPlayingMovieCard: React.FC<MovieListCardProps> = ({
  backdrop_path,
  original_language,
  original_title,
  poster_path,
  release_date,
  title,
  video,
  vote_average,
  overview,
  id: movieId,
  userId,
}) => {
  const { data: isWishlisted = false, isLoading } = useIsMovieInWatchList(
    userId,
    movieId,
  );

  const { mutate: addToWatchlist, isPending } = useAddToWatchList();

  const handleWatchlistClick = () => {
    if (isLoading || isPending) return;

    addToWatchlist(
      { userId, id: movieId },
      {
        onSuccess: () => {
          toast.success(
            `Movie "${title}" ${
              isWishlisted ? 'removed from' : 'added to'
            } watchlist`,
          );
        },
        onError: () => {
          toast.error('Failed to update watchlist');
        },
      },
    );
  };

  return (
    <div className="movieList-details-container">
      <div className="movie-images-scroller">
        {poster_path && (
          <div className="movie-image-card">
            <div className="flip-wrapper">
              <div className="flip-inner">
                <div className="flip-front">
                  <img
                    className="movie-image"
                    src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                    alt={`${title} poster`}
                  />
                  <StarRating rating={vote_average} />
                </div>

                <div className="flip-back">
                  <p className="movie-overview">{overview}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {backdrop_path && (
          <div className="movie-image-card">
            <img
              className="movie-image-backdrop"
              src={`https://image.tmdb.org/t/p/w1280${backdrop_path}`}
              alt={`${title} backdrop`}
            />
          </div>
        )}
      </div>
      <div className="movieList-details-card">
        <WatchList
          width="30px"
          height="30px"
          style={{
            color: isWishlisted ? 'red' : '#fff',
            cursor: isPending ? 'not-allowed' : 'pointer',
            opacity: isPending ? 0.6 : 1,
          }}
          className="wishList_icon"
          onClick={handleWatchlistClick}
        />
        <h2 className="original-movie-title">{original_title}</h2>
        <p>Original Language: {original_language}</p>
        <p>Release Date: {release_date}</p>
        {video && <p>🎬 Video Available</p>}
      </div>
    </div>
  );
};
