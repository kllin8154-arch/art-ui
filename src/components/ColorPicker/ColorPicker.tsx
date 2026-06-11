import React from'react';import styles from'./ColorPicker.module.css';
interface ColorPickerProps{value:string;onChange:(v:string)=>void;className?:string}
export function ColorPicker({value,onChange,className=''}:ColorPickerProps){
  return <div className={`${styles.wrap} ${className}`}><div className={styles.swatch} style={{background:value}}><input type="color" className={styles.swatchInput} value={value} onChange={e=>onChange(e.target.value)}/></div><span className={styles.value}>{value}</span></div>;
}
