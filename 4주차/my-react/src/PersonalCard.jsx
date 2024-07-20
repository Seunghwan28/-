import React, { useState } from 'react';
import './PersonalCard.css';

const PersonalCard = ({ initialName, initialAge, initialJob }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [personalInfo, setPersonalInfo] = useState({
    name: initialName,
    age: initialAge,
    job: initialJob,
  });
  const [newInfo, setNewInfo] = useState({
    name: initialName,
    age: initialAge,
    job: initialJob,
  });

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSave = () => {
    setPersonalInfo(newInfo);
    setIsFlipped(false);
  };

  return (
    <div className="card-container">
      <div className={`card ${isFlipped ? 'flipped' : ''}`}>
        <div className="card-front">
          <h2>Personal Information</h2>
          <p><strong>Name:</strong> {personalInfo.name}</p>
          <p><strong>Age:</strong> {personalInfo.age}</p>
          <p><strong>Job:</strong> {personalInfo.job}</p>
          <button onClick={handleFlip}>Flip Card</button>
        </div>
        <div className="card-back">
          <h2>Enter New Information</h2>
          <p>
            <label>Name: </label>
            <input type="text" name="name" value={newInfo.name} onChange={handleChange} />
          </p>
          <p>
            <label>Age: </label>
            <input type="text" name="age" value={newInfo.age} onChange={handleChange} />
          </p>
          <p>
            <label>Job: </label>
            <input type="text" name="job" value={newInfo.job} onChange={handleChange} />
          </p>
          <button onClick={handleSave}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default PersonalCard;
