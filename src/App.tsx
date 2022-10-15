import React from 'react';
import Calculator from './components/calculator';
import Theory from './components/theory';

import s from './scss/index.module.scss';
import { Test } from './components/Test';

function App() {
  return (
    <div className={s.container}>
      <Test />
      <Calculator />
      <Theory />
    </div>
  );
}

export default App;
