import React from 'react';
import { toast } from 'react-toastify';

import { useAddToWatchLists, useRemoveFromWatchLists } from '../../apis/movie';
import { useGetUserDetails } from '../../apis/user';
import { StarRating } from '../StarRating';

import { ReactComponent as WatchListIcon } from '../../assets/svg/watchLists.svg';

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
  isWatchList?: boolean;
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
        <h2 className="original-movie-title">{original_title}</h2>
        <WatchListIcon
          width={'30px'}
          height={'30px'}
          onClick={handleToWatchListClick}
          className={`watchlist_icon ${isWatchList ? 'watchlisted' : ''}`}
        />
        <p>Original Language: {original_language.toLocaleUpperCase()}</p>
        <p>Release Date: {release_date}</p>
        {video && <p>🎬 Video Available</p>}
      </div>
    </div>
  );
};
