import React, {useEffect, useState} from 'react';
import store from './store';
import {BiX} from 'react-icons/bi';
import s from '../scss/calculator.module.scss';
import {v1} from 'uuid';
import { Stars } from './Stars';

type ObjTask = {
    id: string
    title: string
};


function Calculator() {
    const [tasks, setTask] = useState([
        {id: v1(), title: `1+1=`},
        {id: v1(), title: "2+1="},
        {id: v1(), title: "3+1="},
        {id: v1(), title: "4+7="},
        {id: v1(), title: "5+4="}
    ]);
    const [rezult, setRezult] = useState([
        {id: v1(), title: `1+1=2`},
        {id: v1(), title: "2+1=3"},
        {id: v1(), title: "3+1=4"},
        {id: v1(), title: "4+7=11"},
        {id: v1(), title: "5+4=9"}
    ]);
    const [count, setCount] = useState(0);

    function addElement(tasks: ObjTask[]) {
        setCount(count + 1);
        let taskObj = tasks.find((el, index) => index === count)
        if (taskObj) {
            let task = taskObj.title
            setInputVal(task)
        } else {
            setInputVal("tasks are over")
        }
    }

    const [inputVal, setInputVal] = useState<string>("");


    const onClickBtn = (value: number | string) => {

        setInputVal(inputVal + String(value));

        setTask(tasks.map(el => el.title === inputVal ? {...el, title: inputVal + value} : el))
        // console.log(tasks)

    };

    const onClickClose = () => {
        setInputVal('');
        // setCount(0)
    };
    let starArray: Array<string> = [];

    if (inputVal === "tasks are over") {
        tasks.map((el, index) => el.title === rezult[index].title ? starArray.push('greenStar')  : starArray.push('redStar'))
    }
    console.log(starArray)
    const onClickDeleteHandler = () => {
        let currentIndex = inputVal.split('')
        currentIndex[currentIndex.length-1] !== "=" &&  setInputVal(inputVal.split('').filter((el, index) => index < (currentIndex.length - 1)).join(''))
        currentIndex[currentIndex.length-1] !== "=" && setTask(tasks.map(el => el.title === inputVal ? {...el, title: inputVal.substring(0, inputVal.length - 1)} : el))
    }

    console.log(inputVal)
    console.log(tasks)
    return (
        <section className={s.calculator}>
            <div className={s.calculator__display}>
                <p className={s.calculator__value}>{inputVal}</p>
                {inputVal ? <BiX onClick={() => onClickClose()} className={s.calculator__close}/> : ''}
                <Stars starArray={starArray}/>
            </div>
            <div className={s.calculator__buttons}>
                {store.buttons.map((item, id) => (
                    <button onClick={() => onClickBtn(item.val)} key={id} className={s.calculator__numbers}>
                        {item.val}
                    </button>
                ))}
                <button onClick={() => addElement(tasks)} className={s.calculator__numbers}
                        disabled={count > tasks.length}>
                    Add item
                </button>
                <button onClick={onClickDeleteHandler} className={s.calculator__numbers}
                        disabled={inputVal === "tasks are over"}>&#129092;</button>
            </div>
        </section>
    );
}

export default Calculator;
