import { Link } from 'react-router-dom';

import './styles.css';

export const GetSignIn = () => {
  return (
    <div className="getSignIn-attributes">
      <Link to="/home" className="getstarted-button">
        Get Started →
      </Link>
    </div>
  );
};
