import React from'react';import styles from'./Select.module.css';
interface SelectProps{label?:string;options:{value:string;label:string}[];value?:string;onChange?:(v:string)=>void;className?:string}
export function Select({label,options,value,onChange,className=''}:SelectProps){
  return <div className={`${styles.select} ${className}`}>{label&&<label style={{fontSize:'.85rem',fontWeight:500,marginBottom:4,display:'block'}}>{label}</label>}<select className={styles.field} value={value} onChange={e=>onChange?.(e.target.value)}>{options.map(o=><option key={o.value} value={o.value}>{o.label}</option>)}</select><span className={styles.arrow}>▼</span></div>;
}
