import './index.css';

export const GetSignIn = () => {
  return (
    <div className="getSignIn-attributes">
      <input
        type="email"
        placeholder="Enter your Email"
        className="email-value"
      />
      <button className="getstarted-button">Get Started →</button>
    </div>
  );
};
