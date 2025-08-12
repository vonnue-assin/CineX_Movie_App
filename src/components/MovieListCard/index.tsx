import React from 'react';
import { toast } from 'react-toastify';

import {
  useAddMovieToFavourites,
  useRemoveMovieFromFavorites,
} from '../../apis/movie';
import { useGetUserDetails } from '../../apis/user';
import { StarRating } from '../StarRating';

import { ReactComponent as FavoriteIcon } from '../../assets/svg/favoriteIcon.svg';

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
  id: number;
  isFavorite?: boolean;
};

export const MovieListCard: React.FC<MovieListCardProps> = ({
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
  isFavorite = false,
}) => {
  const { mutate: addMovieToFavorites } = useAddMovieToFavourites();
  const { mutate: removeMovieFromFavorites } = useRemoveMovieFromFavorites();
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
      removeMovieFromFavorites(
        { userId, id },
        {
          onSuccess: handleFavoritesRemoveSaveBtn,
          onError: error =>
            toast.error(`Error removing from favorites: ${error.message}`),
        },
      );
    } else {
      addMovieToFavorites(
        { userId, id },
        {
          onSuccess: handleSuccessSaveBtn,
          onError: error =>
            toast.error(`Error adding to favorites: ${error.message}`),
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
        <FavoriteIcon
          width={'30px'}
          height={'30px'}
          className={`favorite_icon ${isFavorite ? 'favorited' : ''}`}
          onClick={handleFavoriteClick}
        />
        <h2 className="original-movie-title">{original_title}</h2>
        <p>Original Language: {original_language.toLocaleUpperCase()}</p>
        <p>Release Date: {release_date}</p>

        {video && <p>🎬 Video Available</p>}
      </div>
    </div>
  );
};
