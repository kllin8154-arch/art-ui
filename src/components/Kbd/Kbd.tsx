import React from'react';import styles from'./Kbd.module.css';
interface KbdProps{children:React.ReactNode;size?:'sm'|'md'|'lg';className?:string}
export function Kbd({children,size='md',className=''}:KbdProps){
  return <kbd className={`${styles.kbd} ${styles[size]} ${className}`}>{children}</kbd>;
}
