import React from 'react';

import { MOVIE_BASE_URL, POSTER_BASE_URL } from '../../constants/posterLink';
import { NowShowingTVShow } from '../../types/TVShow';
import { StarRating } from '../StarRating';

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
}) => {
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
