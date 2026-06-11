import React,{useState,useRef,useEffect,useCallback}from'react';import styles from'./Combobox.module.css';
export interface ComboboxOption{value:string;label:string;disabled?:boolean}
export interface ComboboxProps{options:ComboboxOption[];value?:string;defaultValue?:string;placeholder?:string;onChange?:(v:string)=>void;disabled?:boolean;clearable?:boolean;className?:string}
export function Combobox({options,value:cv,defaultValue='',placeholder='Search...',onChange,disabled=false,clearable=true,className=''}:ComboboxProps){
  const isCtrl=cv!==undefined;const[iv,si]=useState(defaultValue);const val=isCtrl?cv:iv;
  const[open,setOpen]=useState(false);const[q,setQ]=useState('');const[ix,setIx]=useState(-1);
  const ref=useRef<HTMLDivElement>(null);const inpRef=useRef<HTMLInputElement>(null);
  const selected=options.find(o=>o.value===val);
  const filtered=options.filter(o=>o.label.toLowerCase().includes(q.toLowerCase()));
  const select=useCallback((v:string)=>{if(!isCtrl)si(v);onChange?.(v);setOpen(false);setQ('')},[isCtrl,onChange]);
  useEffect(()=>{const h=(e:MouseEvent)=>{if(ref.current&&!ref.current.contains(e.target as Node))setOpen(false)};document.addEventListener('mousedown',h);return()=>document.removeEventListener('mousedown',h)},[]);
  const kd=(e:React.KeyboardEvent)=>{if(e.key==='ArrowDown'){e.preventDefault();setIx(p=>Math.min(p+1,filtered.length-1))}else if(e.key==='ArrowUp'){e.preventDefault();setIx(p=>Math.max(p-1,-1))}else if(e.key==='Enter'&&ix>=0){select(filtered[ix].value)}else if(e.key==='Escape'){setOpen(false)}};
  return <div ref={ref} className={`${styles.wrap} ${disabled?styles.disabled:''} ${className}`}>
    <div className={styles.control} onClick={()=>{if(!disabled){setOpen(true);inpRef.current?.focus()}}}>
      {open?<input ref={inpRef} className={styles.input} value={q} onChange={e=>{setQ(e.target.value);setIx(-1)}} onKeyDown={kd} placeholder={selected?.label||placeholder} autoFocus disabled={disabled}/>:<span className={`${styles.display} ${!selected?styles.placeholder:''}`}>{selected?.label||placeholder}</span>}
      <span className={styles.arrows}>
        {clearable&&val&&!disabled&&<button className={styles.clearBtn} onClick={e=>{e.stopPropagation();if(!isCtrl)si('');onChange?.('')}} aria-label="Clear"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg></button>}
        <svg className={`${styles.chev} ${open?styles.chevOpen:''}`} width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 6l4 4 4-4"/></svg>
      </span>
    </div>
    {open&&<div className={styles.dropdown}>{filtered.length===0?<div className={styles.empty}>No results</div>:filtered.map((o,i)=><div key={o.value} className={`${styles.option} ${i===ix?styles.highlighted:''} ${o.value===val?styles.selected:''} ${o.disabled?styles.optDisabled:''}`} onClick={()=>!o.disabled&&select(o.value)}>{o.label}</div>)}</div>}
  </div>;
}
