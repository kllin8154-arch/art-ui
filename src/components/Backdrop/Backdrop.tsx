import React from'react';import styles from'./Backdrop.module.css';
interface BackdropProps{children:React.ReactNode;className?:string;style?:React.CSSProperties}
export function Backdrop({children,className='',style}:BackdropProps){return <div className={`${styles.backdrop} ${className}`} style={style}>{children}</div>;}
