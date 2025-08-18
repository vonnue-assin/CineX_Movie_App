import React from 'react';
import { toast } from 'react-toastify';

import { useToggleWatchListMovies } from '../../apis/movie';
import { useGetUserDetails } from '../../apis/user';
import { POSTER_BASE_URL } from '../../constants/posterLink';
import { StarRating } from '../StarRating';

import VideoIcon from '../../assets/images/video.png';
import { ReactComponent as WatchListIcon } from '../../assets/svg/watchLists.svg';

import './styles.css';

type NowPlayingMovieCardProps = {
  id: number;
  backdropPath: string;
  posterPath: string;
  title: string;
  overview: string;
  releaseDate: string;
  voteAverage: number;
  originalLanguage: string;
  video: boolean;
  isWatchList?: boolean;
  originalTitle: string;
};

export const NowPlayingMovieCard: React.FC<NowPlayingMovieCardProps> = ({
  backdropPath,
  originalLanguage,
  originalTitle,
  posterPath,
  releaseDate,
  title,
  video,
  voteAverage,
  overview,
  id,
  isWatchList = false,
}) => {
  const { mutate: toggleWatchLists } = useToggleWatchListMovies();

  const { data: userDetails } = useGetUserDetails();

  const handleWatchListsClick = () => {
    if (!userDetails || userDetails.length === 0) {
      toast.error('User details not available to manage watchLists.');
      return;
    }

    const userId = userDetails[0].id;

    toggleWatchLists(
      {
        userId,
        id,
        isWatchable: !isWatchList,
      },
      {
        onSuccess: () => {
          toast.success(
            !isWatchList
              ? 'Successfully added to the watch lists!'
              : 'Successfully removed from the watch lists!',
          );
        },
        onError: error =>
          toast.error(
            `Error ${!isWatchList ? 'adding' : 'removing'} from watchlists: ${
              error.message
            }`,
          ),
      },
    );
  };

  return (
    <div className="movieList-details-container">
      <div className="movie-images-scroller">
        {posterPath && (
          <div className="movie-image-card">
            <div className="flip-wrapper">
              <div className="flip-inner">
                <div className="flip-front">
                  <img
                    className="movie-image"
                    src={`${POSTER_BASE_URL}${posterPath}`}
                    alt={`${title} poster`}
                  />
                </div>
                <div className="flip-back">
                  <p className="movie-overview">{overview}</p>
                </div>
              </div>
            </div>
          </div>
        )}
        {backdropPath && (
          <div className="movie-image-card">
            <img
              className="movie-image-backdrop"
              src={`${POSTER_BASE_URL}${backdropPath}`}
              alt={`${title} backdrop`}
            />
          </div>
        )}
      </div>
      <div className="movieList-details-card">
        <WatchListIcon
          width={'30px'}
          height={'30px'}
          className={`watchlist_icon ${isWatchList ? 'watchlisted' : ''}`}
          onClick={handleWatchListsClick}
        />

        <StarRating rating={voteAverage} />

        <h2 className="original-movie-title">{originalTitle}</h2>
        <p className="movie-title">{title}</p>
        <p>Original Language: {originalLanguage.toLocaleUpperCase()}</p>
        <p>Release Date: {releaseDate}</p>

        {video && (
          <p className="videoIcon">
            <VideoIcon /> Video Available
          </p>
        )}
      </div>
    </div>
  );
};
