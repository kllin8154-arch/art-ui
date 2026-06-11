import React,{useEffect}from'react';import styles from'./Drawer.module.css';
interface DrawerProps{isOpen:boolean;onClose:()=>void;title?:string;side?:'left'|'right';children:React.ReactNode;className?:string}
export function Drawer({isOpen,onClose,title,side='right',children,className=''}:DrawerProps){
  useEffect(()=>{const h=(e:KeyboardEvent)=>{if(e.key==='Escape')onClose()};if(isOpen){document.addEventListener('keydown',h);document.body.style.overflow='hidden'}return()=>{document.removeEventListener('keydown',h);document.body.style.overflow=''}},[isOpen,onClose]);
  return <><div className={`${styles.overlay} ${isOpen?styles.open:''}`} onClick={onClose}/>
    <div className={`${styles.panel} ${styles[side]} ${isOpen?styles.open:''} ${className}`}>
      <div className={styles.header}><h2 className={styles.title}>{title||''}</h2><button className={styles.closeBtn} onClick={onClose}>✕</button></div>
      <div className={styles.body}>{children}</div>
    </div></>;
}
