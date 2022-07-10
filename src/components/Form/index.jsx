import React from 'react';

import './form.scss';
import form_img from '../../img/form_img.svg';

const Form = () => {
  return (
    <div className="form">
      <div className="wrapper">
        <div className="form__inner">
          <div className="form__inner__content">
            <h2>Заказать консультацию специалиста</h2>
            <p>Заполните форму и мы свяжемся с вами в ближайшее время!</p>
            <form>
              <div className="form__input-block">
                <input required placeholder="Ваше имя" className="form__input-block__first input" />
                <input
                  required
                  pattern="^[0-9]+$"
                  placeholder="Номер вашего телефона"
                  className="form__input-block__second input"
                />
              </div>
              <textarea
                required
                wrap="soft"
                placeholder="Ваш вопрос"
                className="form__text-input input"
              />
              <div className="form__checkbox">
                <input required type="checkbox" />
                <label>Я согласен с условиями обработки персональных данных </label>
              </div>
              <button className="button">Отправить</button>
            </form>
          </div>
          <img src={form_img} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Form;
