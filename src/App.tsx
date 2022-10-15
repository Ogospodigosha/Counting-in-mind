import React from 'react';
import Calculator from './components/calculator';
import Theory from './components/theory';

import s from './scss/index.module.scss';

function App() {
  return (
    <div className={s.container}>
      <Calculator />
      <Theory />
    </div>
  );
}

export default App;
