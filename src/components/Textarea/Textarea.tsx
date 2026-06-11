import React from'react';import styles from'./Textarea.module.css';
interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement>{label?:string}
export function Textarea({label,className='',...props}:TextareaProps){
  return <div className={`${styles.wrapper} ${className}`}>{label&&<label className={styles.label}>{label}</label>}<textarea className={styles.textarea} {...props}/></div>;
}
