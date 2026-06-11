import React,{useState}from'react';import styles from'./Segmented.module.css';
interface SegmentedProps{items:string[];value?:number;onChange?:(i:number)=>void;className?:string}
export function Segmented({items,value=0,onChange,className=''}:SegmentedProps){
  const[active,setActive]=useState(value);
  return <div className={`${styles.seg} ${className}`}>{items.map((it,i)=><div key={i} className={`${styles.item} ${i===active?styles.active:''}`} onClick={()=>{setActive(i);onChange?.(i)}}>{it}</div>)}</div>;
}
