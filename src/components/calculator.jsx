import React from 'react';
import s from '../scss/calculator.module.scss';
import store from './store';

function Calculator() {
  return (
    <section className={s.calculator}>
      <div className={s.calculator__display}>
        <input type="text" />
      </div>
      <div className={s.calculator__buttons}>
        {store.buttons.map((item, id) => (
          <button key={id} className={s.calculator__numbers}>
            {item.val}
          </button>
        ))}
      </div>
    </section>
  );
}

export default Calculator;
