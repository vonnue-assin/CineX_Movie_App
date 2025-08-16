import React from 'react';

import { MOVIE_BASE_URL } from '../../constants/posterLink';
import { KnownForMovie } from '../../types/PopularPeople';

import { ReactComponent as StarIcon } from '../../assets/svg/starIcon.svg';

import './styles.css';

type KnownForMoviesListProps = {
  movies: KnownForMovie[];
};

export const KnownForMoviesLists: React.FC<KnownForMoviesListProps> = ({
  movies,
}) => {
  return (
    <div className="movie-images-scroller">
      {movies.map((movie: KnownForMovie) => (
        <div key={movie.id} className="movie-image-card">
          {movie.posterPath && (
            <img
              className="movie-image"
              src={`${MOVIE_BASE_URL}${movie.posterPath}`}
              alt={`${movie.title} poster`}
            />
          )}
          <div className="movie-info">
            <p className="movie-title">{movie.title || movie.originalTitle}</p>
            <p>Release: {movie.releaseDate}</p>
            <p>
              Rating: <StarIcon width={'14px'} height={'14px'} />
              {movie.voteAverage}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
