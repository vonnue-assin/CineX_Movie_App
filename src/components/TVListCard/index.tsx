import React from 'react';
import { toast } from 'react-toastify';

import {
  useAddTVShowsToFavourites,
  useRemoveTvShowFromFavorites,
} from '../../apis/TV';
import { useGetUserDetails } from '../../apis/user';
import { StarRating } from '../StarRating';

import { ReactComponent as FavoriteIcon } from '../../assets/svg/favoriteIcon.svg';

import './styles.css';

type TVListCardProps = {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  first_air_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  name: string;
  isFavorite: boolean | undefined;
};

export const TVListCard: React.FC<TVListCardProps> = ({
  backdrop_path,
  original_language,
  original_name,
  poster_path,
  first_air_date,
  video,
  vote_average,
  overview,
  isFavorite,
  id,
  name,
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
        {poster_path && (
          <div className="tv-image-card">
            <div className="flip-wrapper">
              <div className="flip-inner">
                <div className="flip-front">
                  <img
                    className="tv-image"
                    src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                    alt={`${original_name} poster`}
                  />
                  <StarRating rating={vote_average} />
                </div>
                <div className="flip-back">
                  <p className="tv-overview">{overview}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {backdrop_path && (
          <div className="tv-image-card">
            <img
              className="tv-image-backdrop"
              src={`https://image.tmdb.org/t/p/w1280${backdrop_path}`}
              alt={`${original_name} backdrop`}
            />
          </div>
        )}
      </div>

      <div className="TVList-details-card">
        <h2 className="original-tv-title">{original_name}</h2>
        <FavoriteIcon
          width={'30px'}
          height={'30px'}
          className={`favorite_icon ${isFavorite ? 'favorited' : ''}`}
          onClick={handleFavoriteClick}
        />

        <p>Name:{name}</p>
        <p>Original Language: {original_language.toUpperCase()}</p>
        <p>First Air Date: {first_air_date}</p>
        {video && <p>🎬 Video Available</p>}
      </div>
    </div>
  );
};
