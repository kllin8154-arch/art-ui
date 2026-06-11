import React,{useState}from'react';import styles from'./Accordion.module.css';

interface AccordionItem{title:string;content:React.ReactNode}
interface AccordionProps{items:AccordionItem[];allowMultiple?:boolean;className?:string}

export function Accordion({items,allowMultiple,className=''}:AccordionProps){
  const[openSet,setOpenSet]=useState<Set<number>>(new Set());
  const toggle=(i:number)=>{const next=new Set(allowMultiple?openSet:[]);if(next.has(i))next.delete(i);else next.add(i);setOpenSet(next)};
  return(
    <div className={className}>
      {items.map((item,i)=>(
        <div key={i} className={`${styles.item} ${openSet.has(i)?styles.open:''}`}>
          <button className={styles.trigger} onClick={()=>toggle(i)}>
            <span>{item.title}</span><span className={styles.icon}>+</span>
          </button>
          <div className={`${styles.content} ${openSet.has(i)?styles.openContent:''}`}>
            <div className={styles.inner}>{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
