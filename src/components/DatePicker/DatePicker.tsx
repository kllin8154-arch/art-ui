import React,{useState,useMemo,useEffect,useRef}from'react';import styles from'./DatePicker.module.css';

const MONTHS=['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'];
const WDAYS=['日','一','二','三','四','五','六'];

interface DatePickerProps{value:string;onChange:(v:string)=>void;placeholder?:string;className?:string}
export function DatePicker({value,onChange,placeholder='选择日期...',className=''}:DatePickerProps){
  const[open,setOpen]=useState(false);
  const today=new Date();const tY=today.getFullYear(),tM=today.getMonth(),tD=today.getDate();
  const initDate=value?new Date(value+'T00:00:00'):today;
  const[vY,setVY]=useState(initDate.getFullYear());const[vM,setVM]=useState(initDate.getMonth());
  const wrapRef=useRef<HTMLDivElement>(null);
  useEffect(()=>{const h=(e:MouseEvent)=>{if(wrapRef.current&&!wrapRef.current.contains(e.target as Node))setOpen(false)};document.addEventListener('mousedown',h);return()=>document.removeEventListener('mousedown',h)},[]);

  const days=useMemo(()=>{
    const first=new Date(vY,vM,1);const start=new Date(vY,vM,1-first.getDay());
    const result:Array<{date:Date;empty:boolean;other:boolean}>=[];
    for(let i=0;i<42;i++){const d=new Date(start);d.setDate(start.getDate()+i);const empty=i<first.getDay();const other=d.getMonth()!==vM;result.push({date:d,empty,other})}
    return result;
  },[vY,vM]);

  const selected=value?new Date(value+'T00:00:00'):null;
  const isToday=(d:Date)=>d.getFullYear()===tY&&d.getMonth()===tM&&d.getDate()===tD;
  const isSel=(d:Date)=>!!selected&&d.getFullYear()===selected.getFullYear()&&d.getMonth()===selected.getMonth()&&d.getDate()===selected.getDate();
  const fmt=(d:Date)=>`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;

  return <div ref={wrapRef} className={`${styles.wrapper} ${className}`}>
    <button className={styles.trigger} onClick={()=>setOpen(o=>!o)}><span className={styles.triggerIcon}>📅</span><span className={value?'':styles.placeholder}>{value||placeholder}</span></button>
    {open&&<div className={styles.dropdown}>
      <div className={styles.header}><button className={styles.navBtn} onClick={()=>{if(vM===0){setVY(y=>y-1);setVM(11)}else setVM(m=>m-1)}}>◀</button><span className={styles.monthYear}>{MONTHS[vM]} {vY}</span><button className={styles.navBtn} onClick={()=>{if(vM===11){setVY(y=>y+1);setVM(0)}else setVM(m=>m+1)}}>▶</button></div>
      <div className={styles.weekdays}>{WDAYS.map(w=><div key={w} className={styles.weekday}>{w}</div>)}</div>
      <div className={styles.days}>{days.map(({date,empty,other},i)=>{
        const cls=[styles.day];if(empty)cls.push(styles.empty);if(other)cls.push(styles.otherMonth);if(isToday(date))cls.push(styles.today);if(isSel(date))cls.push(styles.selected);
        return <div key={i} className={cls.join(' ')} onClick={()=>{if(!empty){onChange(fmt(date));setOpen(false)}}}>{!empty?date.getDate():''}</div>
      })}</div>
    </div>}
  </div>;
}
