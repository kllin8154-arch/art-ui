import React from'react';import styles from'./Chip.module.css';
interface ChipProps{label:string;variant?:'default'|'accent';onClose?:()=>void;className?:string}
export function Chip({label,variant='default',onClose,className=''}:ChipProps){
  return <span className={`${styles.chip} ${variant==='accent'?styles.accent:''} ${className}`}>{label}{onClose&&<button className={styles.closeBtn} onClick={onClose}>✕</button>}</span>;
}
