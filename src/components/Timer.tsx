import React, {useEffect, useState} from 'react';



type TimerType = {
    setInputVal: (inputVal:string)=> void
}

export const Timer = (props: TimerType) => {
    console.log("Timer")
    const [timer, setTimer] = useState<number>(10)

        useEffect(()=>{
         timer > 0 ?   setTimeout(()=>{setTimer(timer -1)}, 1000) : setTimer(0)
        },[timer])

    if (timer === 0) {
        props.setInputVal("tasks are over")
    }
    return (
        <div style={{color: "red", fontSize: "20px"}}>
            {timer}
        </div>
    );
};
