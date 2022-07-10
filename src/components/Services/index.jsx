import React from 'react';

import './services.scss';

import Card from './Card';

const Services = () => {
  return (
    <div id="services" className="services">
      <div className="wrapper">
        <div className="services__inner">
          <h2>Наши услуги</h2>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="services__inner__cards">
              <Card title={'Создание сайтов на тильде'} advantages={[1, 2, 3, 4, 5]} price={299} />
              <Card title={'Создание сайтов на тильде'} advantages={[1, 2, 3, 4, 5]} price={279} />
              <Card title={'Создание сайтов на тильде'} advantages={[1, 2, 3]} price={99} />
              <Card title={'Создание сайтов на тильде'} advantages={[1, 2, 3, 4]} price={149} />
              <Card title={'Создание сайтов на тильде'} advantages={[1, 2, 3, 4, 5]} price={279} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
