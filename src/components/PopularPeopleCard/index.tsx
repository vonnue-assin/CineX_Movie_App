import React from 'react';

import { PopularPeople } from '../../types/PopularPeople';
import { KnownForMoviesLists } from '../KnownForMoviesLists.tsx';
import { POPULAR_PEOPLE_IMAGE_BASE_URL } from '../../constants/posterLink';

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
        {person.profilePath && (
          <img
            className="person-profile-image"
            src={`${POPULAR_PEOPLE_IMAGE_BASE_URL}${person.profilePath}`}
            alt={`${person.name} profile`}
          />
        )}
        <div className="person-info">
          <h2>{person.name}</h2>
          <p>Known for: {person.knownForDepartment}</p>
          <p>Popularity: {person.popularity.toFixed(1)}</p>
        </div>
      </div>

      <div className="known-for-movies">
        <h3 className="known-movie-title">Acclaimed Movies:</h3>
        <KnownForMoviesLists movies={person.knownFor} />
      </div>
    </div>
  );
};
