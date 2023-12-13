import React from 'react';
import './ThanksPage.css';
const ThanksPage = ({ onDismissThanks }) => {
  return (
    <div className="thanks-container">
      <h1>Thank you!</h1>
      <br/><br/>
      <button onClick={onDismissThanks}>Dismiss</button>
    </div>
  );
};

export default ThanksPage;