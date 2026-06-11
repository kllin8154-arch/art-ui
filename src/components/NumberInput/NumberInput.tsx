import React,{useState}from'react';import styles from'./NumberInput.module.css';
interface NumberInputProps{value:number;onChange:(v:number)=>void;min?:number;max?:number;step?:number;className?:string}
export function NumberInput({value,onChange,min,max,step=1,className=''}:NumberInputProps){
  const change=(v:number)=>{if(min!=null&&v<min)v=min;if(max!=null&&v>max)v=max;onChange(v)};
  return <div className={`${styles.wrap} ${className}`}><button className={styles.btn} onClick={()=>change(value-step)}>−</button><input className={styles.input} type="number" value={value} onChange={e=>change(Number(e.target.value))} min={min} max={max} step={step}/><button className={styles.btn} onClick={()=>change(value+step)}>+</button></div>;
}
