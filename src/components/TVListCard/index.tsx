import React from 'react';
import { toast } from 'react-toastify';

import {
  useAddToWatchLists,
  useRemoveTvShowsFromWatchLists,
} from '../../apis/TV';
import { useGetUserDetails } from '../../apis/user';
import { MOVIE_BASE_URL, POSTER_BASE_URL } from '../../constants/posterLink';
import { NowShowingTVShow } from '../../types/TVShow';
import { StarRating } from '../StarRating';

import { ReactComponent as WatchListsIcon } from '../../assets/svg/watchLists.svg';

import './styles.css';

type TVListCardProps = {
  adult: boolean;
  backdropPath: string | null;
  genreIds: number[];
  id: number;
  originalLanguage: string;
  originalName: string;
  overview: string;
  popularity: number;
  posterPath: string | null;
  firstAirDate: string;
  title: string;
  video: boolean;
  voteAverage: number;
  voteCount: number;
  name: string;
  isWatchList: boolean;
};

export const TVListCard: React.FC<TVListCardProps> = ({
  backdropPath,
  originalLanguage,
  originalName,
  posterPath,
  video,
  voteAverage,
  overview,
  isWatchList,
  id,
  firstAirDate,
  name,
}) => {
  const { mutate: addTvShowsToFavorites } = useAddToWatchLists();
  const { mutate: removeTvShowFromFavorites } =
    useRemoveTvShowsFromWatchLists();
  const { data: userDetails } = useGetUserDetails();

  const handleFavoriteClick = () => {
    if (!userDetails || userDetails.length === 0) {
      toast.error('User details not available to manage watchlists.');
      return;
    }
    const userId = userDetails[0].id;

    const handleSuccessSaveBtn = () => {
      toast.success('Sucessfully added to the watchlists!');
    };

    const handleFavoritesRemoveSaveBtn = () => {
      toast.success('Successfully removed from the watchlists!');
    };

    if (isWatchList) {
      removeTvShowFromFavorites(
        { userId, id },
        {
          onSuccess: handleFavoritesRemoveSaveBtn,
          onError: error =>
            toast.error(`Error removing from watchlists:${error.message}`),
        },
      );
    } else {
      addTvShowsToFavorites(
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
    <div className="TV-details-container">
      <div className="tv-images-scroller">
        {posterPath && (
          <div className="tv-image-card">
            <div className="flip-wrapper">
              <div className="flip-inner">
                <div className="flip-front">
                  <img
                    className="tv-image"
                    src={`${MOVIE_BASE_URL}${posterPath}`}
                    alt={`${originalName} poster`}
                  />
                </div>
                <div className="flip-back">
                  <p className="tv-overview">{overview}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {backdropPath && (
          <div className="tv-image-card">
            <img
              className="tv-image-backdrop"
              src={`${POSTER_BASE_URL}${backdropPath}`}
              alt={`${originalName} backdrop`}
            />
          </div>
        )}
      </div>

      <div className="TVList-details-card">
        <h2 className="original-tv-title">{originalName}</h2>
        <WatchListsIcon
          width={'30px'}
          height={'30px'}
          className={`watchlist_icon ${isWatchList ? 'watchlisted' : ''}`}
          onClick={handleFavoriteClick}
        />

        <p>Name:{name}</p>
        <p>Original Language: {originalLanguage.toUpperCase()}</p>
        <p>First Air Date: {firstAirDate}</p>
        <StarRating rating={voteAverage} />

        <h2 className="original-tv-title">{originalName}</h2>
        <p className="original-name-title">{name}</p>
        <p>Original Language: {originalLanguage.toUpperCase()}</p>
        <p>First Air Date: {firstAirDate}</p>
        {video && <p>🎬 Video Available</p>}
      </div>
    </div>
  );
};
