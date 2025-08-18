import React from 'react';
import { toast } from 'react-toastify';

import {
  useAddTVShowsToFavourites,
  useRemoveTvShowFromFavorites,
} from '../../apis/TV';
import { useGetUserDetails } from '../../apis/user';
import { MOVIE_BASE_URL, POSTER_BASE_URL } from '../../constants/posterLink';
import { NowShowingTVShow } from '../../types/TVShow';
import { StarRating } from '../StarRating';

import { ReactComponent as FavoriteIcon } from '../../assets/svg/favoriteIcon.svg';

import './styles.css';

type TVListCardProps = NowShowingTVShow;

export const TVListCard: React.FC<TVListCardProps> = ({
  backdropPath,
  originalLanguage,
  originalName,
  posterPath,
  video,
  voteAverage,
  overview,
  firstAirDate,
  name,
  isFavorite,
  id
}) => {
  const { mutate: addTvShowsToFavorites } = useAddTVShowsToFavourites();
  const { mutate: removeTvShowFromFavorites } = useRemoveTvShowFromFavorites();
  const { data: userDetails } = useGetUserDetails();

  const handleFavoriteClick = () => {
    if (!userDetails || userDetails.length === 0) {
      toast.error('User details not available to manage favorites.');
      return;
    }
    const userId = userDetails[0].id;

    const handleSuccessSaveBtn = () => {
      toast.success('Sucessfully added to the favorites lists!');
    };

    const handleFavoritesRemoveSaveBtn = () => {
      toast.success('Successfully removed from the favorites list!');
    };

    if (isFavorite) {
      removeTvShowFromFavorites(
        { userId, id },
        {
          onSuccess: handleFavoritesRemoveSaveBtn,
          onError: error =>
            toast.error(`Error removing from favourites:${error.message}`),
        },
      );
    } else {
      addTvShowsToFavorites(
        { userId, id },
        {
          onSuccess: handleSuccessSaveBtn,
          onError: error =>
            toast.error(`Error adding to favorites:${error.message}`),
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
        <FavoriteIcon
          width={'30px'}
          height={'30px'}
          className={`favorite_icon ${isFavorite ? 'favorited' : ''}`}
          onClick={handleFavoriteClick}
        />

        <p>Name:{name}</p>
        <p>Original Language: {originalLanguage.toUpperCase()}</p>
        <p>First Air Date: {firstAirDate}</p>
        {video && <p>🎬 Video Available</p>}
      </div>
    </div>
  );
};
