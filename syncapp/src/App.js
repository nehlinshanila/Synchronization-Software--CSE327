import React, { useState } from 'react';
import Frontpage from './components/Frontpage/frontpage';
import Login from './components/login/login';
import Dashboard from './components/Dashboard/dashboard';

const App = () => {
  const [currentPage, setCurrentPage] = useState('frontpage');

  const handleLoginClick = () => {
    setCurrentPage('login');
  };

  const handleEnterClick = () => {
    setCurrentPage('dashboard');
  };

  const handleBackClick = () => {
    setCurrentPage('frontpage');
  };

  const handleHomeClick = () => {
    setCurrentPage('frontpage');
  };

  return (
    <div>
      {currentPage === 'frontpage' && (
        <Frontpage onLoginClick={handleLoginClick} />
      )}
      {currentPage === 'login' && (
        <Login
          onBackClick={handleBackClick}
          onEnterClick={handleEnterClick}
        />
      )}
      {currentPage === 'dashboard' && (
        <Dashboard onHomeClick={handleHomeClick} />
      )}
    </div>
  );
};

export default App;