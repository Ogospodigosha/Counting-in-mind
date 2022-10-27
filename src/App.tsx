import React, { useState } from 'react';
import Calculator from './components/calculator';
import Theory from './components/theory';
import s from './scss/index.module.scss';



function App() {
    const [inputVal, setInputVal] = useState<string>("");
    return (

        <div className={s.container}>
            <Calculator setInputVal={setInputVal} inputVal={inputVal}/>
            <Theory/>
        </div>
    );
}

export default App;
