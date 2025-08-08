import React from 'react';

import { StarRating } from '../StarRating';

import './styles.css';

type TVListCardProps = {
  backdrop_path: string | null;
  original_language: string;
  original_name: string;
  first_air_date: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export const TVListCard: React.FC<TVListCardProps> = ({
  backdrop_path,
  original_language,
  original_name,
  poster_path,
  first_air_date,
  title,
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
                    alt={`${title} poster`}
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
              alt={`${title} backdrop`}
            />
          </div>
        )}
      </div>

      <div className="TVList-details-card">
        <h2 className="original-tv-title">{original_name}</h2>
        <p>Original Language: {original_language}</p>
        <p>First Air Date: {first_air_date}</p>
        {video && <p>🎬 Video Available</p>}
      </div>
    </div>
  );
};
