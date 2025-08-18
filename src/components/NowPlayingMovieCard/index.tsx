import React from 'react';
import { toast } from 'react-toastify';

import { useAddToWatchLists, useRemoveFromWatchLists } from '../../apis/movie';
import { useGetUserDetails } from '../../apis/user';
import { POSTER_BASE_URL } from '../../constants/posterLink';
import { StarRating } from '../StarRating';

import { ReactComponent as WatchListIcon } from '../../assets/svg/watchLists.svg';
import VideoIcon from '../../assets/images/video.png';

import './styles.css';

type MovieListCardProps = {
  backdropPath: string;
  posterPath: string;
  title: string;
  overview: string;
  releaseDate: string;
  voteAverage: number;
  video: boolean;
  voteCount: number;
  id: number;
  isWatchList?: boolean;
  originalLanguage: string;
  originalTitle: string;
};

export const NowPlayingMovieCard: React.FC<MovieListCardProps> = ({
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
  const { mutate: addToWatchLists } = useAddToWatchLists();
  const { mutate: removeFromWatchLists } = useRemoveFromWatchLists();
  const { data: userDetails } = useGetUserDetails();

  const handleToWatchListClick = () => {
    if (!userDetails || userDetails.length === 0) {
      toast.error('User details not available to manage the watchlists.');
      return;
    }

    const userId = userDetails[0].id;
    const handleSuccessSaveBtn = () => {
      toast.success('Successfully added to the watchLists.');
    };

    const handleWatchListsRemoveBSavetn = () => {
      toast.success('Successfully removed from the watchlists..');
    };

    if (isWatchList) {
      removeFromWatchLists(
        { userId, id },
        {
          onSuccess: handleWatchListsRemoveBSavetn,
          onError: error => `Error removing from watchLists:${error.message}`,
        },
      );
    } else {
      addToWatchLists(
        { userId, id },
        {
          onSuccess: handleSuccessSaveBtn,
          onError: error =>
            toast.error(`Error adding to watchlists:${error.message}`),
        },
      );
    }
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
        <h2 className="original-movie-title">{originalTitle}</h2>
        <WatchListIcon
          width={'30px'}
          height={'30px'}
          onClick={handleToWatchListClick}
          className={`watchlist_icon ${isWatchList ? 'watchlisted' : ''}`}
        />
        <p>Original Language: {originalLanguage.toLocaleUpperCase()}</p>
        <p>Release Date: {releaseDate}</p>
        {video && <p>🎬 Video Available</p>}
        <StarRating rating={voteAverage} />

        <h2 className="original-movie-title">{originalTitle}</h2>
        <h2 className="movie-title">{title}</h2>
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
