import React from 'react';

import './footer.scss';
import logo from '../../img/logo.svg';

const Footer = () => {
  return (
    <footer id="contacts" className="footer">
      <div className="footer__inner">
        <div className="wrapper">
          <div className="footer__inner__content">
            <div className="content__first">
              <img src={logo} alt="logo" />
              <a href="#">Политика конфиденциальности</a>
              <button className="button">Обратная связь</button>
            </div>
            <div className="content__second">
              <div className="content__second__content">
                <h4>Информация</h4>
                <ul>
                  <li>
                    <a href="#home">Главная</a>
                  </li>
                  <li>
                    <a href="#services">Услуги</a>
                  </li>
                  <li>
                    <a href="#projects">Наши работы</a>
                  </li>
                  <li>
                    <a href="#contacts">Контакты</a>
                  </li>
                </ul>
              </div>
              <div className="content__second__content">
                <h4>Услуги</h4>
                <ul>
                  <li>
                    <a href="#">Реклама в интернете</a>
                  </li>
                  <li>
                    <a href="#">Дизайн вывесок и рекламы</a>
                  </li>
                  <li>
                    <a href="#">Дизайн сайтов на Тильде</a>
                  </li>
                  <li>
                    <a href="#">СММ</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <h3>© {new Date().getFullYear()} Все права защищены</h3>
      </div>
    </footer>
  );
};

export default Footer;
