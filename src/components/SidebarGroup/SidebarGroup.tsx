import React,{useState}from'react';import styles from'./SidebarGroup.module.css';
interface SidebarGroupProps{title:string;defaultOpen?:boolean;children:React.ReactNode}
export function SidebarGroup({title,defaultOpen=true,children}:SidebarGroupProps){
  const[open,setOpen]=useState(defaultOpen);
  return <div className={`${styles.group} ${open?styles.open:''}`}>
    <div className={styles.trigger} onClick={()=>setOpen(o=>!o)}><span className={`${styles.arrow} ${open?styles.arrowOpen:''}`}>▶</span>{title}</div>
    <div className={styles.content}>{children}</div></div>;
}
