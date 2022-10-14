import React, {useState} from 'react';
import {v1} from 'uuid';
import Calculator from './components/calculator';

import s from './scss/index.module.scss';
import {Test} from "./components/Test";

export type TaskObjType = {
    id: string
    title: string
}

function App() {
    const [tasks, setTask] = useState<TaskObjType[]>([
        {id: v1(), title: "1 + 2 "},
        {id: v1(), title: "2 * 2 "},
        {id: v1(), title: "3 + 5 "}
    ])
    const [index, setIndex] = useState(0);

    function addElement(tasks:TaskObjType[]) {
        setIndex(index + 1);
    }

    function getElements(tasks:TaskObjType[], index:number) {
        return tasks.slice(0, index).map(el => {
            return <div key={el.id}>{el.title}</div>;
        });
    }

    return (
        <div className={s.container}>
            <Calculator tasks={tasks}/>
            <div className={s.theory}>

                <input type="text" readOnly className={s.theory__area}/>
                <button onClick={()=>addElement(tasks)}>Add item</button>
                {getElements(tasks, index)}
            </div>
        </div>
    );
}

export default App;
