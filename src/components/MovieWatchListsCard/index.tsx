import React from 'react';

type MovieWatchListsCardProps = {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export const MovieWatchListsCard: React.FC<MovieWatchListsCardProps> = ({
  original_title,
  poster_path,
  title,
  original_language,
  release_date,
  overview,
  backdrop_path,
}) => {
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
        <h2 className="original-movie-title">{original_title}</h2>

        <p>Original Language: {original_language.toLocaleUpperCase()}</p>
        <p>Release Date: {release_date}</p>
      </div>
    </div>
  );
};
