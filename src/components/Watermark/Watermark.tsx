import React from'react';import styles from'./Watermark.module.css';

type Position='tl'|'tr'|'bl'|'br'|'center';
interface WatermarkProps{text?:string;imageUrl?:string;position?:Position;fontSize?:string;opacity?:number;className?:string;children?:React.ReactNode}
export function Watermark({text,imageUrl,position='br',fontSize='.9rem',opacity:.8,className='',children}:WatermarkProps){
  return <div className={`${styles.wrap} ${className}`}>
    {children}
    {text&&<span className={`${styles.text} ${styles[position]}`} style={{fontSize,opacity}}>{text}</span>}
    {imageUrl&&<div className={styles.repeat} style={{backgroundImage:`url(${imageUrl})`}}/>}
  </div>;
}
