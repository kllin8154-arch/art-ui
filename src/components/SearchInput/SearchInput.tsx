import React from'react';import styles from'./SearchInput.module.css';
interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement>{className?:string}
export function SearchInput({className='',...props}:SearchInputProps){
  return <div className={`${styles.wrap} ${className}`}><span className={styles.icon}>🔍</span><input className={styles.input} type="search" {...props}/></div>;
}
