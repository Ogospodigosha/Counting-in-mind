import React from 'react';
import Calculator from './components/calculator';

import s from './scss/index.module.scss';
import {Test} from "./components/Test";

function App() {
  return (
    <div className={s.container}>
        <Test/>
      <Calculator />
      <div className={s.theory}>
        <input type="text" readOnly className={s.theory__area} />
      </div>
    </div>
  );
}

export default App;
