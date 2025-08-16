import { useState } from 'react';
import UserIcon from '../../assets/images/user .png';

import './styles.css';

type UsercardProps = {
  name: string;
  username: string;
  id: number;
};

export const UserCard: React.FC<UsercardProps> = ({ id, username }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleClick = () => {
    setShowDetails(prevDetails => !prevDetails);
  };

  return (
    <div className="user-card">
      <img
        src={UserIcon}
        alt="User Icon"
        className="user-icon"
        onClick={handleClick}
      />

      {showDetails && (
        <div className="user-card-details">
          <p className="user-card-username">Username:{username}</p>
          <p className="user-card-id">ID: {id}</p>
        </div>
      )}
    </div>
  );
};
