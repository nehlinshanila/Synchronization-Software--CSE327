import React from "react";
import "./navbar.css"; // Import the CSS file
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";



const Navbar = () => {
  return (
    <div  class="vertical-nav">
      <div>
        <h1 className="dashboard-title">This is the "DASHBOARD PAGE"</h1>
        <p className="dashboard-description">
          This is the third and final page a user appears at
        </p>
        <button className="dashboard-button">
          <Link to="/">Go back to frontpage</Link>
        </button>
      </div>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Files</a></li>
        <li><a href="#">Setting</a></li>
        <li><a href="#">Logout</a></li>
      </ul>
    </div>
  );
};

export default Navbar;
