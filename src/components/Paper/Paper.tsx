import React from'react';import styles from'./Paper.module.css';
interface PaperProps{children:React.ReactNode;shadow?:'none'|'sm'|'md'|'lg';radius?:number|string;padding?:number|string;className?:string}
export function Paper({children,shadow='sm',radius,padding,className=''}:PaperProps){
  const s:React.CSSProperties={};
  if(radius!==undefined)s.borderRadius=typeof radius==='number'?`${radius}px`:radius;
  if(padding!==undefined)s.padding=typeof padding==='number'?`${padding}px`:padding;
  return <div className={`${styles.paper} ${styles['shadow-'+shadow]} ${className}`} style={s}>{children}</div>;
}
