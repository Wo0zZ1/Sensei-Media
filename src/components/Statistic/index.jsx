import React from 'react';

import './statistic.scss';

const Statistic = () => {
  return (
    <div className="statistic">
      <div className="wrapper">
        <div className="statistic__inner">
          <h2>Мы знаем толк в бизнесе!</h2>
          <div className="statistic__inner__list">
            <div className="list__element">
              <h3>
                <label>10</label> лет
              </h3>
              <p>В сфере рекламы</p>
            </div>
            <span className="list__border"></span>
            <div className="list__element">
              <h3>
                более <label>500</label>
              </h3>
              <p>Наших постоянных клиентов</p>
            </div>
            <span className="list__border"></span>
            <div className="list__element">
              <h3>
                <label>+10%</label>
              </h3>
              <p>Конверсия продаж</p>
            </div>
            <span className="list__border"></span>
            <div className="list__element">
              <h3>
                <label>-70%</label>
              </h3>
              <p>Ошибок менеджеров</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistic;
