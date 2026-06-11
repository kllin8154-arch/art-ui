import React from'react';import styles from'./Input.module.css';
interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>,'size'>{label?:string;required?:boolean;error?:string;hint?:string;fullWidth?:boolean}
export function Input({label,required,error,hint,fullWidth,className='',...props}:InputProps){
  return <div className={`${styles.wrapper} ${error?styles.error:''} ${fullWidth?'':''} ${className}`} style={fullWidth?{width:'100%'}:{}}>
    {label&&<label className={styles.label}>{label}{required&&<span className={styles.required}> *</span>}</label>}
    <input className={styles.input} {...props}/>
    {error&&<span className={styles.errorHint}>{error}</span>}
    {hint&&!error&&<span className={styles.hint}>{hint}</span>}
  </div>;
}
