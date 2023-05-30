import React from 'react';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";


const Login = () => {

  return (
    <div>
      <h1>This is the "LOGIN PAGE"</h1>
      <p>This is the second page a user appears at</p>
      <button><Link to="/frontpage">Go back to Frontpage</Link></button>
      <button><Link to="/dashboard">Go back to Dashboard</Link></button>

    </div>
  );
};

export default Login;
