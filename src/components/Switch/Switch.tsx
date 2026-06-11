import React from'react';import styles from'./Switch.module.css';
interface SwitchProps{checked:boolean;onChange:(v:boolean)=>void;label?:string;className?:string}
export function Switch({checked,onChange,label,className=''}:SwitchProps){
  return <label className={`${styles.switch} ${checked?styles.on:''} ${className}`}><input type="checkbox" checked={checked} onChange={e=>onChange(e.target.checked)} style={{position:'absolute',opacity:0,pointerEvents:'none'}}/><span className={styles.track}><span className={styles.thumb}/></span>{label&&<span className={styles.label}>{label}</span>}</label>;
}
