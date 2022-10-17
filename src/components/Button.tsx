import React from 'react';

type ButtonPropsType = {
    callback: ()=>void
    nickName: string
    set: ()=>void
    className: string
    disabled: boolean

}
export const Button = (props: ButtonPropsType) => {
    const onClickHandler =()=>{
        props.callback()
        props.set()

    }
    return (
        <button onClick={onClickHandler}>{props.nickName}</button>
    );
};
