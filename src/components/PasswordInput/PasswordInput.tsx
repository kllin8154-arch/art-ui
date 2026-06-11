import React,{useState}from'react';import styles from'./PasswordInput.module.css';
interface PasswordInputProps{value:string;onChange:(v:string)=>void;placeholder?:string;className?:string}
export function PasswordInput({value,onChange,placeholder='输入密码...',className=''}:PasswordInputProps){
  const[show,setShow]=useState(false);
  return <div className={`${styles.inner} ${className}`}><input className={styles.input} type={show?'text':'password'} value={value} onChange={e=>onChange(e.target.value)} placeholder={placeholder}/><button className={styles.toggle} onClick={()=>setShow(s=>!s)}>{show?'🙈':'👁'}</button></div>;
}
