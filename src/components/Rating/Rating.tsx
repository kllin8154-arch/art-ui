import React from'react';import styles from'./Rating.module.css';
interface RatingProps{value:number;max?:number;onChange?:(v:number)=>void;readonly?:boolean;className?:string}
export function Rating({value,max=5,onChange,readonly,className=''}:RatingProps){
  return <div className={`${styles.stars} ${readonly?styles.readonly:''} ${className}`}>{Array.from({length:max},(_,i)=><span key={i} className={`${styles.star} ${i<value?styles.filled:''}`} onClick={()=>!readonly&&onChange?.(i+1)}>{i<value?'★':'☆'}</span>)}</div>;
}
