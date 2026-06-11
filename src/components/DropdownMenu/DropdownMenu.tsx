import React,{useState,useRef,useEffect}from'react';import styles from'./DropdownMenu.module.css';

interface MenuItem{label:string;icon?:string;danger?:boolean;onClick:()=>void;divider?:boolean}
interface DropdownMenuProps{trigger:React.ReactNode;items:MenuItem[];className?:string}

export function DropdownMenu({trigger,items,className=''}:DropdownMenuProps){
  const[open,setOpen]=useState(false);const ref=useRef<HTMLDivElement>(null);
  useEffect(()=>{const h=(e:MouseEvent)=>{if(ref.current&&!ref.current.contains(e.target as Node))setOpen(false)};document.addEventListener('mousedown',h);return()=>document.removeEventListener('mousedown',h)},[]);
  return <div ref={ref} className={`${styles.wrap} ${className}`}><div onClick={()=>setOpen(o=>!o)}>{trigger}</div>{open&&<div className={styles.menu}>{items.map((it,i)=><React.Fragment key={i}>{it.divider?<div className={styles.divider}/>:null}<div className={`${styles.item} ${it.danger?styles.danger:''}`} onClick={()=>{it.onClick();setOpen(false)}}>{it.icon&&<span className={styles.icon}>{it.icon}</span>}{it.label}</div></React.Fragment>)}</div>}</div>;
}
