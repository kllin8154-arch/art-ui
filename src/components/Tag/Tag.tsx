import React from'react';import styles from'./Tag.module.css';
type TagVariant='default'|'primary'|'success'|'warning'|'danger';
interface TagProps{label:string;variant?:TagVariant;className?:string}
export function Tag({label,variant='default',className=''}:TagProps){
  return <span className={`${styles.tag} ${styles[variant]} ${className}`}>{label}</span>;
}
