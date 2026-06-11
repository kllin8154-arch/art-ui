import React,{useEffect,useCallback}from'react';import styles from'./Sheet.module.css';
interface SheetProps{open:boolean;onClose:()=>void;title?:string;side?:'left'|'right'|'top'|'bottom';size?:'sm'|'md'|'lg'|'full';children:React.ReactNode;className?:string}
export function Sheet({open,onClose,title,side='right',size='md',children,className=''}:SheetProps){
  useEffect(()=>{const h=(e:KeyboardEvent)=>{if(e.key==='Escape')onClose()};if(open){document.addEventListener('keydown',h);document.body.style.overflow='hidden'}return()=>{document.removeEventListener('keydown',h);document.body.style.overflow=''}},[open,onClose]);
  const handleOverlay=useCallback(()=>onClose(),[onClose]);
  return <>{open&&<div className={styles.overlay} onClick={handleOverlay}/>}
    <div className={`${styles.sheet} ${styles[side]} ${styles[size]} ${open?styles.open:''} ${className}`} role="dialog" aria-modal="true">
      {title&&<div className={styles.header}><h2 className={styles.title}>{title}</h2><button className={styles.close} onClick={onClose} aria-label="Close"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg></button></div>}
      <div className={styles.body}>{children}</div>
    </div></>;
}
