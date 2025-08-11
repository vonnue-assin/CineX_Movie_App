import React from 'react';

import './styles.css';

type UsercardProps = {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  include_adult: boolean;
  username: string;
  id: number;
};

export const UserCard: React.FC<UsercardProps> = ({ name, username }) => {
  return (
    <div className="user-card">
      <div className="user-card-content">
        <p className="user-card-greeting">Welcome Users</p>
        <p className="user-card-username">{username}</p>
        <p className="user-card-name">({name})</p>
      </div>
    </div>
  );
};
