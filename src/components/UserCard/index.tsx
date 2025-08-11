import React, { useState } from 'react';

import UserIcon from '../../assets/images/user .png';

import './styles.css';

type UsercardProps = {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  include_adult: boolean;
  username: string;
  id: number;
};

export const UserCard: React.FC<UsercardProps> = ({ id, username }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleMouseEnter = () => {
    setShowDetails(true);
  };

  const handleMouseLeave = () => {
    setShowDetails(false);
  };

  return (
    <div
      className="user-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={UserIcon} alt="User Icon" className="user-icon" />

      {showDetails && (
        <div className="user-card-details">
          <p className="user-card-username">{username}</p>
          <p className="user-card-id">ID: {id}</p>
        </div>
      )}
    </div>
  );
};
