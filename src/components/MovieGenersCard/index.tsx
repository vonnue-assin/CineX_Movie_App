import React from 'react';

type MovieGenersCardProps = {
  name: string;
};

export const MovieGenersCard: React.FC<MovieGenersCardProps> = ({ name }) => {
  return (
    <div className="movieGenre-details-card">
      <p>{name}</p>
    </div>
  );
};
