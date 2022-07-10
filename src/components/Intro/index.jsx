import React from 'react';

import './intro.scss';
import intro_img from '../../img/intro_img.svg';

const Intro = () => {
  return (
    <div id="home" className="intro">
      <div className="wrapper">
        <div className="intro__inner">
          <div>
            <div className="intro__inner__text">
              <h2>Студия дизайна</h2>
              <h3>Полного цикла</h3>
              <p>От дизайна визиток до дизайна сайтов</p>
            </div>
            <div className="intro__inner__buttons">
              <div className="buttons__block">
                <button className="buttons__element">Комплексные решения</button>
              </div>
              <div className="buttons__block">
                <button className="buttons__element">СММ</button>
                <button className="buttons__element">Дизайн</button>
              </div>
            </div>
          </div>
          <img src={intro_img} className="intro__inner__img" alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
