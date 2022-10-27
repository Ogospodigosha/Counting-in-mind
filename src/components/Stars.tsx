import React from 'react';
import { v1 } from 'uuid';
import s from '../scss/calculator.module.scss';
type StarsType ={
    starArray: Array<string>
}

export const Stars = (props: StarsType) => {
 const data =[
     {
         title: 'greenStar',
         image: "https://purepng.com/public/uploads/thumbnail//purepng.com-green-starstargeometricallydecagonconcavestardomclipartgreen-14215265037003xbua.png"

     },
     {
         title: 'redStar',
         image: "https://pngimg.com/uploads/red_star/small/red_star_PNG50.png"

     }
 ]


    return (
        <>
            {
                props.starArray.map((el, index) =>{
                  return  el === 'greenStar' ? <img key={v1()} src={data[0].image} className={s.image}/> : <img key={v1()} src={data[1].image} className={s.image}/>
                })
            }
        </>
    );
};

