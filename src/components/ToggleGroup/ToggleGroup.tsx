import React,{useState}from'react';import styles from'./ToggleGroup.module.css';
export interface ToggleOption{value:string;label:React.ReactNode;disabled?:boolean}
export interface ToggleGroupProps{options:ToggleOption[];value?:string[];defaultValue?:string[];multiple?:boolean;onChange?:(v:string[])=>void;className?:string}
export function ToggleGroup({options,value:cv,defaultValue=[],multiple=false,onChange,className=''}:ToggleGroupProps){
  const isCtrl=cv!==undefined;const[iv,si]=useState<string[]>(defaultValue);const val=isCtrl?cv:iv;
  const toggle=(v:string)=>{let next:string[];if(multiple){next=val.includes(v)?val.filter(x=>x!==v):[...val,v]}else{next=val.includes(v)?[]:[v]}if(!isCtrl)si(next);onChange?.(next)};
  return <div className={`${styles.group} ${className}`}>{options.map(o=>{const active=val.includes(o.value);return <button key={o.value} className={`${styles.item} ${active?styles.active:''} ${o.disabled?styles.disabled:''}`} onClick={()=>!o.disabled&&toggle(o.value)} disabled={o.disabled} type="button">{o.label}</button>})}</div>;
}
