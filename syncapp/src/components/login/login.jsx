import React from "react";
import { Link } from "react-router-dom";
import "./login.css"; // Import the CSS file

const Login = () => {
  return (
    <div className="login-container">
      <h1 className="login-heading">Login</h1>
      <form className="login-form">
        <input type="text" placeholder="Username" className="login-input" />
        <input type="password" placeholder="Password" className="login-input" />
      </form>
      <div className="login-buttons">
        <Link to="/frontpage">
          <button className="login-nav-button">Home</button>
        </Link>
        <Link to="/dashboard">
          <button className="login-nav-button">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
