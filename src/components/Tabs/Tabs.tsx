import React,{useState}from'react';import styles from'./Tabs.module.css';

interface TabsProps{tabs:{label:string;content:React.ReactNode}[],defaultIndex?:number;className?:string}
export function Tabs({tabs,defaultIndex=0,className=''}:TabsProps){
  const[active,setActive]=useState(defaultIndex);
  return(
    <div className={className}>
      <div className={styles.tabs}>{tabs.map((t,i)=>(
        <button key={i} className={`${styles.tab} ${i===active?styles.active:''}`} onClick={()=>setActive(i)}>{t.label}</button>
      ))}</div>
      <div className={styles.panel}>{tabs[active]?.content}</div>
    </div>
  );
}
