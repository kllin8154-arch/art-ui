import React from'react';import styles from'./Pagination.module.css';
interface PaginationProps{current:number;total:number;onChange:(p:number)=>void;className?:string}
export function Pagination({current,total,onChange,className=''}:PaginationProps){
  const pages:number[]=[];for(let i=1;i<=total;i++)pages.push(i);
  return <div className={`${styles.wrap} ${className}`}><button className={styles.btn} disabled={current===1} onClick={()=>onChange(current-1)}>‹</button>{pages.map(p=><button key={p} className={`${styles.btn} ${p===current?styles.active:''}`} onClick={()=>onChange(p)}>{p}</button>)}<button className={styles.btn} disabled={current===total} onClick={()=>onChange(current+1)}>›</button></div>;
}
