import React,{useState} from'react';import styles from'./Alert.module.css';
type AlertVariant='info'|'success'|'warning'|'error';
interface AlertProps{title?:string;children:React.ReactNode;variant?:AlertVariant;dismissible?:boolean;className?:string}
export function Alert({title,children,variant='info',dismissible=false,className=''}:AlertProps){
  const[closed,setClosed]=useState(false);
  if(closed)return null;
  const icons={info:'ℹ',success:'✓',warning:'⚠',error:'✕'};
  return <div className={`${styles.alert} ${styles[variant]} ${className}`}>
    <span className={styles.icon}>{icons[variant]}</span>
    <div className={styles.body}>
      {title&&<div className={styles.title}>{title}</div>}
      <div className={styles.text}>{children}</div>
    </div>
    {dismissible&&<button className={styles.close} onClick={()=>setClosed(true)} aria-label="Close">×</button>}
  </div>;
}
