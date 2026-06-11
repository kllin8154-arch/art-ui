import React from'react';import styles from'./VisuallyHidden.module.css';
interface VisuallyHiddenProps{children:React.ReactNode;as?:keyof JSX.IntrinsicElements;className?:string}
export function VisuallyHidden({children,as:Tag='span',className=''}:VisuallyHiddenProps){
  return <Tag className={`${styles.srOnly} ${className}`}>{children}</Tag>;
}
