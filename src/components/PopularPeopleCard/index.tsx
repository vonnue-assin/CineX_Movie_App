import React from 'react';

import { PopularPeople, KnownForMovie } from '../../types/PopularPeople';

import './styles.css';

type PopularPersonCardProps = {
  person: PopularPeople;
};

export const PopularPeopleCard: React.FC<PopularPersonCardProps> = ({
  person,
}) => {
  return (
    <div className="person-card-container">
      <div className="person-header">
        {person.profile_path && (
          <img
            className="person-profile-image"
            src={`https://image.tmdb.org/t/p/w300${person.profile_path}`}
            alt={`${person.name} profile`}
          />
        )}
        <div className="person-info">
          <h2>{person.name}</h2>
          <p>Known for: {person.known_for_department}</p>
          <p>Popularity: {person.popularity.toFixed(1)}</p>
        </div>
      </div>

      <div className="known-for-movies">
        <h3>Known For:</h3>
        <div className="movie-images-scroller">
          {person.known_for.map((movie: KnownForMovie) => (
            <div key={movie.id} className="movie-image-card">
              {movie.poster_path && (
                <img
                  className="movie-image"
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={`${movie.title} poster`}
                />
              )}
              <div className="movie-info">
                <p className="movie-title">
                  {movie.title || movie.original_title}
                </p>
                <p>Release: {movie.release_date}</p>
                <p>Rating: ⭐ {movie.vote_average}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
