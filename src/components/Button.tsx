import React from 'react';

type ButtonPropsType = {
    callback: ()=>void
    nickName: string
    setCount: ()=>void

}
export const Button = (props: ButtonPropsType) => {
    const onClickHandler =()=>{
        props.callback()
        props.setCount()

    }
    return (
        <button onClick={onClickHandler}>{props.nickName}</button>
    );
};
