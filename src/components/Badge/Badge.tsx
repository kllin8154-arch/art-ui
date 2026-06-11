import React from'react';import styles from'./Badge.module.css';
interface BadgeProps{children?:React.ReactNode;variant?:'default'|'accent'|'success'|'warning'|'danger';dot?:boolean;size?:'sm'|'md';className?:string}
export function Badge({children,variant='default',dot=false,size='md',className=''}:BadgeProps){
  return <span className={`${styles.badge} ${styles[variant]} ${dot?styles.dot:''} ${styles[size]} ${className}`}>
    {dot?<span className={styles.indicator}/>:children}
  </span>;
}
