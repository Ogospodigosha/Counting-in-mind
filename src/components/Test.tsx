import React, { useEffect, useState } from 'react';
import { v1 } from 'uuid';
import { Button } from './Button';
type ObjTask = {
  id: string;
  title: string;
};

export const Test = () => {
  const [tasks, setTask] = useState([
    { id: v1(), title: '1+1' },
    { id: v1(), title: '2+1' },
    { id: v1(), title: '3+1' },
    { id: v1(), title: '4+7' },
    { id: v1(), title: '5+4' },
  ]);
  // let [count, setCount] = useState("0")
  // const [inputVal, setInputVal] = useState<any>([]);
  //
  //
  // const onClickHandler = () => {
  //     if (inputVal.length > 0) {
  //         setInputVal("")
  //     }
  //     let task = tasks[+count].title
  //     setInputVal(String(task))
  //      setCount((+count + 1).toString())
  //     console.log(task)
  //     console.log(count)
  //
  // }
  //
  // const setCountHandler = () => {
  //     if (+count === tasks.length -1 ){
  //
  //         setCount(count)
  //
  //     }
  //
  //
  // }
  //
  // return (
  //     <div>
  //         {
  //            count === '' ? <h2>the end</h2>: <div>{inputVal}</div>
  //         }
  //         <Button callback={onClickHandler} nickName={"ADD ITEM"} setCount={setCountHandler}/>
  //     </div>
  // );

  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(0);

  function addElement(tasks: ObjTask[]) {
    setIndex(index + 1);
    setCount(count + 1);
  }

  // function getElements(tasks: ObjTask[], index: number) {
  //     return tasks.slice(0, index).map(el => {
  //         console.log(tasks)
  //         return <div key={el.id}>{el.title}</div>;
  //     });
  // }
  function getElements(tasks: ObjTask[], index: number) {
    return tasks
      .filter((el, i) => i + 1 === count)
      .slice(0, index)
      .map((el) => {
        return <div key={el.id}>{el.title}</div>;
      });
  }

  console.log(tasks);
  return (
    <div>
      <button onClick={() => addElement(tasks)} disabled={count > tasks.length}>
        Add item
      </button>
      {count <= tasks.length ? getElements(tasks, index) : <div>ЗАДАНИЯ ЗАКОНЧИЛИСЬ</div>}
    </div>
  );
};
