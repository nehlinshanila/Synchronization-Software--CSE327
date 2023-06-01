import React from "react";
import { Link } from "react-router-dom";
import "./signup.css"; // Import the CSS file

const Signup = () => {
  return (
    <div className="signup-container">
      <h1 className="signup-heading">Sign Up</h1>
      <form className="signup-form">
        <input type="text" placeholder="Username" className="signup-input" />
        <input type="email" placeholder="Email" className="signup-input" />
        <input
          type="password"
          placeholder="Password"
          className="signup-input"
        />
      </form>
      <div className="signup-buttons">
        <Link to="/" className="signup-nav-button">Back</Link>
        <Link to="/login" className="signup-nav-button">Signup</Link>
      </div>
    </div>
  );
};

export default Signup;
