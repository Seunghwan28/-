import React, { useState } from 'react';
import './PersonalCard.css';

const PersonalCard = ({ name, age, job }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="card-container">
      <div className={`card ${isFlipped ? 'flipped' : ''}`}>
        <div className="card-front">
          <h2>Personal Information</h2>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Age:</strong> {age}</p>
          <p><strong>Job:</strong> {job}</p>
          <button onClick={handleFlip}>Flip Back</button>
        </div>
        <div className="card-back">
          <h2>Additional Information</h2>
          <p>This is the back of the card.</p>
          <button onClick={handleFlip}>Flip Back</button>
        </div>
      </div>
    </div>
  );
};

export default PersonalCard;
