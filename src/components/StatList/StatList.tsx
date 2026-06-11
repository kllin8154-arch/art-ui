import React from'react';import styles from'./StatList.module.css';
interface StatListItem{icon?:string;label:string;desc?:string;value:string;meta?:string}
interface StatListProps{items:StatListItem[];className?:string}
export function StatList({items,className=''}:StatListProps){
  return <div className={`${styles.list} ${className}`}>{items.map((it,i)=><div key={i} className={styles.item}><div className={styles.left}>{it.icon&&<span className={styles.icon}>{it.icon}</span>}<div><div className={styles.label}>{it.label}</div>{it.desc&&<div className={styles.desc}>{it.desc}</div>}</div></div><div className={styles.right}><div className={styles.value}>{it.value}</div>{it.meta&&<div className={styles.meta}>{it.meta}</div>}</div></div>)}</div>;
}
