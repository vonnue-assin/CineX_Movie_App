import React from 'react';

import { StarRating } from '../StarRating';

import './styles.css';

type MovieListCardProps = {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export const NowPlayingMovieCard: React.FC<MovieListCardProps> = ({
  backdrop_path,
  original_language,
  original_title,
  popularity,
  poster_path,
  release_date,
  title,
  video,
  vote_average,
  vote_count,
}) => {
  return (
    <div className="movieList-details-container">
      <div className="movie-images-scroller">
        {poster_path && (
          <div className="movie-image-card">
            <img
              className="movie-image"
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={`${title} poster`}
            />
            <StarRating rating={vote_average} />
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
        <p></p>
        <p>Original Language: {original_language}</p>
        <p>Release Date: {release_date}</p>
        {video && <p>🎬 Video Available</p>}
      </div>
    </div>
  );
};
