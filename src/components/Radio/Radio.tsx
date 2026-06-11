import React from'react';import styles from'./Radio.module.css';
interface RadioProps{checked:boolean;onChange:()=>void;label?:string;className?:string}
export function Radio({checked,onChange,label,className=''}:RadioProps){
  return <label className={`${styles.wrap} ${className}`}><input type="radio" className={styles.input} checked={checked} onChange={onChange}/><span className={`${styles.circle} ${checked?styles.checked:''}`}><span className={styles.dot}/></span>{label}</label>;
}
