import React from'react';import styles from'./EmptyState.module.css';
interface EmptyStateProps{icon?:string;title?:string;description?:string;action?:React.ReactNode;className?:string}
export function EmptyState({icon='📭',title='暂无内容',description,action,className=''}:EmptyStateProps){
  return <div className={`${styles.wrap} ${className}`}><div className={styles.icon}>{icon}</div><h3 className={styles.title}>{title}</h3>{description&&<p className={styles.desc}>{description}</p>}{action&&<div className={styles.action}>{action}</div>}</div>;
}
