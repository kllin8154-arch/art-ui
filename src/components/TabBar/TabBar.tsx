import React from'react';import styles from'./TabBar.module.css';
interface TabBarTab{icon?:React.ReactNode;label:string;active?:boolean;onClick?:()=>void}
interface TabBarProps{tabs:TabBarTab[];className?:string}
export function TabBar({tabs,className=''}:TabBarProps){
  return <nav className={`${styles.bar} ${className}`}>{tabs.map((t,i)=><div key={i} className={`${styles.tab} ${t.active?styles.active:''}`} onClick={t.onClick}>{t.icon&&<span className={styles.icon}>{t.icon}</span>}<span>{t.label}</span></div>)}</nav>;
}
