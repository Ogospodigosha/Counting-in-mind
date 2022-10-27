import React from 'react';
import {Timer} from "./Timer";


type TimerContainerPropsType = {
    inputVal: string
    setInputVal: (inputVal: string) => void
}

export const TimerContainer = (props: TimerContainerPropsType) => {
    return (
        <>
            {props.inputVal && props.inputVal !== "tasks are over" ? <Timer setInputVal={props.setInputVal}/> : ""}
        </>
    );
};

