import React from 'react';
import Calculator from './components/calculator';

import s from './scss/index.module.scss';

function App() {
  return (
    <div className={s.container}>
      <Calculator />
      <div className={s.theory}>
        <input type="text" readOnly className={s.theory__area} />
      </div>
    </div>
  );
}

export default App;
