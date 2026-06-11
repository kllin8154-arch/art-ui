import React from'react';import styles from'./Checkbox.module.css';
interface CheckboxProps{checked:boolean;onChange:(v:boolean)=>void;label?:string;className?:string}
export function Checkbox({checked,onChange,label,className=''}:CheckboxProps){
  return <label className={`${styles.wrap} ${className}`}><input type="checkbox" className={styles.input} checked={checked} onChange={e=>onChange(e.target.checked)}/><span className={`${styles.box} ${checked?styles.checked:''}`}><span className={styles.check}>✓</span></span>{label}</label>;
}
