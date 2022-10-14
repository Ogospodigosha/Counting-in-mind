import React from 'react';
import store from './store';

import s from '../scss/calculator.module.scss';
import {TaskObjType} from "../App";

type CalculatorPropsType  = {
    tasks: TaskObjType[]
}

function Calculator(props: CalculatorPropsType ) {
  return (
    <section className={s.calculator}>
      <div className={s.calculator__display}>
        <input type="text" readOnly className={s.calculator__input} />
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
