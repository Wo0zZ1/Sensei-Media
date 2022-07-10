import React from 'react';

const advantagesList = [
  'Dedicated workplace',
  'Access to all facilities: printer, beverages, lockers, etc.',
  '24/7 access',
  'Conference room for 1 hour a day',
  'Invitations to all events',
];

const Card = ({ title, advantages, price }) => {
  return (
    <div className="cards__element">
      <div className="card">
        <div className="card__header">{title}</div>
        <div className="card__content">
          <ul>
            {advantages.map((advantage, index) => {
              return (
                <li key={index}>
                  <div className="mark"></div>
                  <p>{advantagesList[advantage - 1]}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="card__line">
          <div className="card__line__content"></div>
        </div>
        <div className="card__footer">
          <h3>
            <label>{`$${price} `}</label>
            Per month
          </h3>
        </div>
      </div>
      <button className="button">Подробнее</button>
    </div>
  );
};

export default Card;
