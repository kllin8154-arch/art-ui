import React from'react';import styles from'./Dock.module.css';
interface DockItem{icon:React.ReactNode;label:string;active?:boolean;onClick?:()=>void}
interface DockProps{items:DockItem[];className?:string}
export function Dock({items,className=''}:DockProps){
  return <div className={`${styles.dock} ${className}`}>{items.map((it,i)=><div key={i} className={`${styles.item} ${it.active?styles.active:''}`} onClick={it.onClick} title={it.label}>{it.icon}</div>)}</div>;
}
