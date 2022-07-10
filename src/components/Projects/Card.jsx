import React from 'react';

const Card = ({ imgCompany, title, results, imgSystems }) => {
  return (
    <div className="card">
      <div className="card__top">
        <img src={imgCompany} alt="logo company" />
        <h3>{title}</h3>
      </div>
      <div className="card__result">
        <h2>Результат:</h2>
        <div className="card__result__block">
          {results.map((element, index) => {
            return (
              <div key={index} className="block__content">
                <h2>{element.h2}</h2>
                <p>{element.p}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="card__systems">
        <h3>Системы:</h3>
        <div className="systems__block">
          {imgSystems.map((imgSrc, index) => {
            return <img key={index} src={imgSrc} alt="logo company" />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
