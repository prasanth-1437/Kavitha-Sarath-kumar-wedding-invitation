import React, { useEffect } from 'react';
import './WelcomeScreen.css';

const WelcomeScreen = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3500); // 2.5 seconds

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="welcome-screen">
      <h1>Kavitha <br></br>&nbsp;Weds 
      <br></br>Sarath Kumar</h1>
    </div>
  );
};

export default WelcomeScreen;
