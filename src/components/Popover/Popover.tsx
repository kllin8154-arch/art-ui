import React,{useState,useRef,useEffect}from'react';import styles from'./Popover.module.css';
interface PopoverProps{content:React.ReactNode;position?:'top'|'bottom'|'left'|'right';className?:string;children:React.ReactNode}
export function Popover({content,position='top',className='',children}:PopoverProps){
  const[show,setShow]=useState(false);const wrapRef=useRef<HTMLDivElement>(null);
  useEffect(()=>{const h=(e:MouseEvent)=>{if(wrapRef.current&&!wrapRef.current.contains(e.target as Node))setShow(false)};document.addEventListener('mousedown',h);return()=>document.removeEventListener('mousedown',h)},[]);
  return <div ref={wrapRef} className={`${styles.wrap} ${className}`}><div onClick={()=>setShow(s=>!s)}>{children}</div>{show&&<div className={`${styles.popover} ${styles[position]}`}><div className={styles.arrow}/>{content}</div>}</div>;
}
