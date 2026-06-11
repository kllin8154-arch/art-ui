import React,{useState}from'react';import styles from'./Sidebar.module.css';

interface SidebarProps{logo?:React.ReactNode;defaultExpanded?:boolean;children:React.ReactNode;className?:string}
export function Sidebar({logo,defaultExpanded=true,children,className=''}:SidebarProps){
  const[expanded,setExpanded]=useState(defaultExpanded);
  return <aside className={`${styles.sidebar} ${expanded?styles.expanded:styles.collapsed} ${className}`}>
    <div className={styles.header}>
      {logo&&<span className={styles.logo}>{logo}</span>}
      <button className={styles.toggle} onClick={()=>setExpanded(e=>!e)}><span className={styles.toggleIcon}>◀</span></button>
    </div>
    <nav className={styles.nav}>{children}</nav>
  </aside>;
}
