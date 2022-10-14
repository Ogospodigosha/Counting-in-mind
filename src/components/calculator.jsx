import React from 'react';
import store from './store';
import { BiX } from 'react-icons/bi';

import s from '../scss/calculator.module.scss';

function Calculator() {
  const [inputVal, setInputVal] = React.useState([]);

  const onClickBtn = (value) => {
    setInputVal(inputVal + String(value));
  };

  const onClickClose = () => {
    setInputVal('');
  };

  return (
    <section className={s.calculator}>
      <div className={s.calculator__display}>
        <p className={s.calculator__value}>{inputVal}</p>
        {inputVal ? <BiX onClick={() => onClickClose()} className={s.calculator__close} /> : ''}
      </div>
      <div className={s.calculator__buttons}>
        {store.buttons.map((item, id) => (
          <button onClick={() => onClickBtn(item.val)} key={id} className={s.calculator__numbers}>
            {item.val}
          </button>
        ))}
      </div>
    </section>
  );
}

export default Calculator;
