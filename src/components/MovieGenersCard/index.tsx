import React from 'react';

type MovieGenersCardProps = {
  id: number;
  name: string;
};

export const MovieGenersCard: React.FC<MovieGenersCardProps> = ({
  id,
  name,
}) => {
  return (
    <div className="movieGenre-details-card">
      <h2>{id}</h2>
      <p>{name}</p>
    </div>
  );
};
