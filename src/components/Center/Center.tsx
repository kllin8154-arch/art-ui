import React from'react';import styles from'./Center.module.css';
interface CenterProps{children:React.ReactNode;inline?:boolean;className?:string}
export function Center({children,inline=false,className=''}:CenterProps){
  return <div className={`${styles.center} ${inline?styles.inline:''} ${className}`}>{children}</div>;
}
