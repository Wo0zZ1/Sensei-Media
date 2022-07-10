import React from 'react';

import './header.scss';

const Header = () => {
  const burgerRef = React.useRef();

  const [active, setActive] = React.useState(false);

  return (
    <header className="header">
      <div className="wrapper">
        <div className="header__inner">
          <div className="header__inner__logo"></div>
          <nav className="header__inner__nav">
            <a href="#home" className="nav__element">
              Главная
            </a>
            <a href="#services" className="nav__element">
              Услуги
            </a>
            <a href="#projects" className="nav__element">
              Наши работы
            </a>
            <a href="#contacts" className="nav__element">
              Контакты
            </a>
          </nav>
          <button className="button">Обратная связь</button>
          <div
            ref={burgerRef}
            onClick={() => {
              setActive(!active);
            }}
            className={`header__inner__burger${active ? ' active' : ''}`}>
            <div className="burger__element"></div>
            <div className="burger__element"></div>
            <div className="burger__element"></div>
          </div>
        </div>
      </div>
      <div className={`header__menu${active ? ' active' : ''}`}>
        <ul>
          <li>
            <a
              onClick={() => {
                setActive(false);
              }}
              href="#home">
              Главная
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setActive(false);
              }}
              href="#services">
              Услуги
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setActive(false);
              }}
              href="#projects">
              Наши работы
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setActive(false);
              }}
              href="#contacts">
              Контакты
            </a>
          </li>
          <li>
            <div className="button">Обратная связь</div>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
