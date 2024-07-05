
import React from 'react';
import './Card.scss';
import StarRate from './StarRate';

const Card = ({ photo, stars, name, review }) => {
  return (
    <div className="card">
      <div className="card-header">
        <img src={photo} alt={name} className="card-photo" />
        <div><StarRate /></div>
      </div>
      <div className="card-body">
        <h3 className="card-name">{name}</h3>
        <p className="card-review">{review}</p>
      </div>
    </div>
  );
};

export default Card;