import React, { useState } from 'react';

const Login = ({ onBackClick, onEnterClick }) => {
  const [isEntered, setIsEntered] = useState(false);

  const handleEnterClick = () => {
    setIsEntered(true);
    onEnterClick();
  };

  const handleBackClick = () => {
    setIsEntered(false);
    onBackClick();
  };

  return (
    <div>
      <h1>This is the "LOGIN PAGE"</h1>
      <p>This is the second page a user appears at</p>
      <button onClick={handleBackClick}>Back</button>
      {!isEntered && <button onClick={handleEnterClick}>Enter</button>}
    </div>
  );
};

export default Login;
