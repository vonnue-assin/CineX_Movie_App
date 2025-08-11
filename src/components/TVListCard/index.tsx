import React from 'react';

import { TVShow } from '../../types/TVShow';
import { StarRating } from '../StarRating';

import './styles.css';

type TVListCardProps = TVShow;

export const TVListCard: React.FC<TVListCardProps> = ({
  backdrop_path,
  original_language,
  original_name,
  poster_path,
  first_air_date,
  video,
  vote_average,
  overview,
}) => {
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
        <p>Original Language: {original_language.toUpperCase()}</p>
        <p>First Air Date: {first_air_date}</p>
        {video && <p>🎬 Video Available</p>}
      </div>
    </div>
  );
};
