import './index.css';

import { GetSignIn } from '../../components/GetSignIn';
import { GetLogIn } from '../../components/GetLogIn';

const SignIn = () => {
  return (
    <div className="signIn-body">
      <GetLogIn />
      <h1 className="logo">CineX</h1>
      <div className="signIn-heading">
        <h1 className="signIn-title">Welcome to CineX</h1>
        <h2 className="signIn-title-sub-heading">
          A wide array of movies, web series, live TV, and kids’ content,
          including regional language offerings.
        </h2>
        <p className="signIn-description">Enter your email to get started..</p>
      </div>
      <GetSignIn />
    </div>
  );
};

export default SignIn;
