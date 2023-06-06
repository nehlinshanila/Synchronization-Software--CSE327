import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./signup.css"; // Import the CSS file

const Signup = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSignup = (event) => {
    event.preventDefault();

    fetch("https://api.example.com/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data
        console.log(data);
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error(error);
      });
  };

  return (
    <div className="signup-container">
      <h1 className="signup-heading">Sign Up</h1>
      <form className="signup-form">
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="signup-input"
          value={userData.username}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="signup-input"
          value={userData.email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="signup-input"
          value={userData.password}
          onChange={handleInputChange}
        />
      </form>
      <div className="signup-buttons">
        <Link to="/" className="signup-nav-button">
          Back
        </Link>
        <button className="signup-nav-button" onClick={handleSignup}>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Signup;
