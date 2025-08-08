import { GetSignIn } from '../../components/GetStarted';

import './styles.css';

export const GetStarted = () => {
  return (
    <div className="signIn-body">
      <h1 className="logo">CineX</h1>
      <div className="signIn-heading">
        <h1 className="signIn-title">Welcome to CineX</h1>
        <h2 className="signIn-title-sub-heading">
          A wide array of movies, web series, live TV, and kids’ content,
          including regional language offerings.
        </h2>
      </div>
      <GetSignIn />
    </div>
  );
};
