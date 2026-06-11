import React from'react';import styles from'./SidebarItem.module.css';
interface SidebarItemProps{icon?:React.ReactNode;label:string;active?:boolean;badge?:string|number;onClick?:()=>void;className?:string}
export function SidebarItem({icon,label,active,badge,onClick,className=''}:SidebarItemProps){
  return <div className={`${styles.item} ${active?styles.active:''} ${className}`} onClick={onClick} role="button" tabIndex={0} onKeyDown={e=>{if(e.key==='Enter')onClick?.()}}>
    {icon&&<span className={styles.icon}>{icon}</span>}<span className={styles.label}>{label}</span>{badge&&<span className={styles.badge}>{badge}</span>}
  </div>;
}
