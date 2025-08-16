import React from 'react';
import { toast } from 'react-toastify';

import {
  useAddMovieToFavourites,
  useRemoveMovieFromFavorites,
} from '../../apis/movie';
import { useGetUserDetails } from '../../apis/user';
import { StarRating } from '../StarRating';
import { POSTER_BASE_URL } from '../../constants/posterLink';

import VideoIcon from '../../assets/images/video.png';

import { ReactComponent as FavoriteIcon } from '../../assets/svg/favoriteIcon.svg';

import './styles.css';

type MovieListCardProps = {
  id: number;
  backdropPath: string;
  posterPath: string;
  title: string;
  overview: string;
  releaseDate: string;
  voteAverage: number;
  originalLanguage: string;
  video: boolean;
  vote_average: number;
  isFavorite?: boolean;
  originalTitle: string;
};

export const MovieListCard: React.FC<MovieListCardProps> = ({
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
              src={`https://image.tmdb.org/t/p/w1280${backdropPath}`}
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
        <h2 className="original-movie-title">{originalTitle}</h2>
        <p>Original Language: {originalLanguage.toLocaleUpperCase()}</p>
        <p>Release Date: {releaseDate}</p>

        {video && <p>🎬 Video Available</p>}
      </div>
    </div>
  );
};
