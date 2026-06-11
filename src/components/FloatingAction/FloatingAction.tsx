import React,{useState}from'react';import styles from'./FloatingAction.module.css';

interface ActionItem{icon:React.ReactNode;label:string;onClick:()=>void}
interface FloatingActionProps{mainIcon?:React.ReactNode;actions:ActionItem[];className?:string}
export function FloatingAction({mainIcon='+',actions,className=''}:FloatingActionProps){
  const[open,setOpen]=useState(false);
  return <div className={`${styles.wrap} ${open?styles.open:''} ${className}`}>
    <button className={styles.btn} onClick={()=>setOpen(o=>!o)} style={open?{transform:'rotate(45deg)'}:{}}>{mainIcon}</button>
    <div className={styles.actions}>
      {actions.map((a,i)=><button key={i} className={styles.btn} style={{width:44,height:44,fontSize:'1rem'}} onClick={()=>{a.onClick();setOpen(false)}} title={a.label}>{a.icon}</button>)}
    </div>
  </div>;
}
