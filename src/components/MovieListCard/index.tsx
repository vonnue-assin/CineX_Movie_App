import React from 'react';

import { StarRating } from '../StarRating';
import { POSTER_BASE_URL } from '../../constants/posterLink';

import VideoIcon from '../../assets/images/video.png';

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
}) => {
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
          <img
            className="movie-image"
            src={`${POSTER_BASE_URL}${backdropPath}`}
            alt={`${title} poster`}
          />
        )}
      </div>

      <div className="movieList-details-card">

        <StarRating rating={voteAverage} />
        
        <h2 className="original-movie-title">{originalTitle}</h2>
        <p>Original Language: {originalLanguage}</p>
        <p>Release Date: {releaseDate}</p>
        {video && (
          <p className="videoIcon">
            <VideoIcon />
            Video Available
          </p>
        )}
      </div>
    </div>
  );
};
