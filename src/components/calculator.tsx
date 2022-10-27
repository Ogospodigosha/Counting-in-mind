import React, { useState} from 'react';
import store from './store';
import {BiX} from 'react-icons/bi';
import s from '../scss/calculator.module.scss';
import {v1} from 'uuid';
import {Stars} from './Stars';
import {TimerContainer} from "./TimerContainer";


type ObjTask = {
    id: string
    title: string
};

type CalculatorType = {
    setInputVal: (inputVal: string) => void
    inputVal: string
}

function Calculator(props: CalculatorType) {
    const initialTask = [
        {id: v1(), title: `1+1=`},
        {id: v1(), title: "2+1="},
        {id: v1(), title: "3+1="},
        {id: v1(), title: "4+7="},
        {id: v1(), title: "5+4="}
    ]
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
            props.setInputVal(task)
        } else {
            props.setInputVal("tasks are over")
        }
    }

    const onClickBtn = (value: number | string) => {

        props.setInputVal(props.inputVal + String(value));

        setTask(tasks.map(el => el.title === props.inputVal ? {...el, title: props.inputVal + value} : el))
        // console.log(tasks)

    };

    const onClickClose = () => {
        props.setInputVal('');
         setCount(0)
        setTask(initialTask)
    };
    let starArray: Array<string> = [];

    if (props.inputVal === "tasks are over") {
        tasks.map((el, index) => el.title === rezult[index].title ? starArray.push('greenStar') : starArray.push('redStar'))
    }
    console.log(starArray)
    const onClickDeleteHandler = () => {
        let currentIndex = props.inputVal.split('')
        currentIndex[currentIndex.length - 1] !== "=" && props.setInputVal(props.inputVal.split('').filter((el, index) => index < (currentIndex.length - 1)).join(''))
        currentIndex[currentIndex.length - 1] !== "=" && setTask(tasks.map(el => el.title === props.inputVal ? {
            ...el,
            title: props.inputVal.substring(0, props.inputVal.length - 1)
        } : el))
    }

    console.log(props.inputVal)
    console.log(tasks)
    return (
        <section className={s.calculator}>
            <div className={s.calculator__display}>
                <div style={{marginLeft: "170px"}}> <TimerContainer inputVal={props.inputVal} setInputVal={props.setInputVal}/></div>
                <p className={s.calculator__value}>{props.inputVal}</p>
                {/*{props.inputVal ? <BiX onClick={() => onClickClose()} className={s.calculator__close}/> : ''}*/}
                <Stars starArray={starArray}/>
            </div>
            <div className={s.calculator__buttons}>
                {store.buttons.map((item, id) => (
                    <button onClick={() => onClickBtn(item.val)} key={id} className={s.calculator__numbers} disabled={props.inputVal === "tasks are over" || count > tasks.length || props.inputVal === ""}>
                        {item.val}
                    </button>
                ))}
                <button onClick={() => addElement(tasks)} className={s.calculator__numbers}
                        disabled={count > tasks.length || props.inputVal === "tasks are over"}>
                    Add item
                </button>
                <button onClick={onClickDeleteHandler} className={s.calculator__numbers}
                        disabled={props.inputVal === "tasks are over"}>&#129092;</button>
                <button className={s.calculator__numbers} onClick={onClickClose} disabled={props.inputVal !== "tasks are over"}><span style={{fontSize: "30px"}}>&#8634;</span></button>
            </div>
        </section>
    );
}

export default Calculator;
