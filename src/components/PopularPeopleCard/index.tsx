import React from 'react';

import { PopularPeople } from '../../types/PopularPeople';
import { KnownForMoviesLists } from '../KnownForMoviesLists.tsx';

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
        <KnownForMoviesLists movies={person.known_for} />
      </div>
    </div>
  );
};
