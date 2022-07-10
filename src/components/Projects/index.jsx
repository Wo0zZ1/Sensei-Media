import React from 'react';

import './projects.scss';
import google_logo from '../../img/google_logo.svg';
import yandex_logo from '../../img/yandex_logo.svg';
import alibaba_logo from '../../img/alibaba_logo.svg';
import macys_logo from '../../img/macys_logo.svg';

import Card from './Card';

const Projects = () => {
  return (
    <div id="projects" className="projects">
      <div className="wrapper">
        <div className="projects__inner">
          <h2>Наши работы</h2>
        </div>
      </div>
      <div className="wrapper">
        <div className="projects__arrow left" />
        <Card
          imgCompany={alibaba_logo}
          title={
            'Самая крупная в Финляндии компания по обработке камня и крупнейший в мире производитель теплоаккумулирующих печей каминов текст пример'
          }
          results={[
            { h2: '+ 83,51%', p: 'увеличение количества обращений с рекламы' },
            { h2: '+ 85,71%', p: 'увеличение конверсии' },
            { h2: '- 50,51%', p: 'снижение стоимости за обращение' },
          ]}
          imgSystems={[google_logo, yandex_logo]}
        />
        <Card
          imgCompany={macys_logo}
          title={
            'Самая крупная в Финляндии компания по обработке камня и крупнейший в мире производитель теплоаккумулирующих печейкаминов текст пример'
          }
          results={[
            { h2: '+ 83,51%', p: 'увеличение количества обращений с рекламы' },
            { h2: '+ 85,71%', p: 'увеличение конверсии' },
            { h2: '- 50,51%', p: 'снижение стоимости за обращение' },
          ]}
          imgSystems={[google_logo, yandex_logo]}
        />
        <div className="projects__arrow right" />
      </div>
    </div>
  );
};

export default Projects;
