import React from'react';import styles from'./StatCard.module.css';
interface StatCardProps{value:string|number;label:string;trend?:{value:string;up:boolean};className?:string}
export function StatCard({value,label,trend,className=''}:StatCardProps){
  return <div className={`${styles.card} ${className}`}><div className={styles.value}>{value}</div><div className={styles.label}>{label}</div>{trend&&<div className={`${styles.trend} ${trend.up?styles.up:styles.down}`}>{trend.up?'↑':'↓'} {trend.value}</div>}</div>;
}
