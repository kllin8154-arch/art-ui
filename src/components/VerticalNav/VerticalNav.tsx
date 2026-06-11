import React from'react';import styles from'./VerticalNav.module.css';
interface NavItem{icon?:React.ReactNode;label:string;description?:string;active?:boolean;onClick?:()=>void}
interface VerticalNavProps{items:NavItem[];className?:string}
export function VerticalNav({items,className=''}:VerticalNavProps){
  return <nav className={`${styles.nav} ${className}`}>{items.map((it,i)=><div key={i} className={`${styles.item} ${it.active?styles.active:''}`} onClick={it.onClick}>{it.icon&&<span className={styles.icon}>{it.icon}</span>}<span className={styles.label}>{it.label}</span>{it.description&&<span className={styles.desc}>{it.description}</span>}</div>)}</nav>;
}
