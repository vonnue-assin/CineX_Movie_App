import React from 'react';

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
          {movie.poster_path && (
            <img
              className="movie-image"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={`${movie.title} poster`}
            />
          )}
          <div className="movie-info">
            <p className="movie-title">{movie.title || movie.original_title}</p>
            <p>Release: {movie.release_date}</p>
            <p>
              Rating: <StarIcon width={'14px'} height={'14px'} />
              {movie.vote_average}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
