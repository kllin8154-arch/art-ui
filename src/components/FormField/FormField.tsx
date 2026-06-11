import React from'react';import styles from'./FormField.module.css';
interface FormFieldProps{label?:string;required?:boolean;error?:string;children:React.ReactNode;className?:string}
export function FormField({label,required,error,children,className=''}:FormFieldProps){
  return <div className={`${styles.wrap} ${className}`}>{label&&<label className={styles.label}>{label}{required&&<span className={styles.required}> *</span>}</label>}{children}{error&&<span className={styles.error}>{error}</span>}</div>;
}
