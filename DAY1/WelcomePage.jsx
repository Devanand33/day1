import React from 'react';
import './WelcomePage.css';

const WelcomePage = ({ onToggleLogin }) => {
  return (
    <div className="welcome-container">
      <h1>Home Appliances</h1>
      <br/><br/>
      <button onClick={onToggleLogin}>LOGIN</button>
    </div>
  );
};

export default WelcomePage;