import React,{useState,useCallback}from'react';import styles from'./MultiSelect.module.css';
interface MultiSelectOption{value:string;label:string}
interface MultiSelectProps{options:MultiSelectOption[];value?:string[];defaultValue?:string[];onChange?:(v:string[])=>void;placeholder?:string;disabled?:boolean;className?:string}
export function MultiSelect({options,value:cv,defaultValue=[],onChange,placeholder='Select...',disabled=false,className=''}:MultiSelectProps){
  const isCtrl=cv!==undefined;const[iv,si]=useState(defaultValue);const vals=isCtrl?cv:iv;const[open,setOpen]=useState(false);const[query,setQuery]=useState('');
  const selected=options.filter(o=>vals.includes(o.value));
  const filtered=options.filter(o=>o.label.toLowerCase().includes(query.toLowerCase())&&!vals.includes(o.value));
  const toggle=useCallback((v:string)=>{const next=vals.includes(v)?vals.filter(x=>x!==v):[...vals,v];if(!isCtrl)si(next);onChange?.(next)},[vals,isCtrl,onChange]);
  const remove=useCallback((v:string)=>{const next=vals.filter(x=>x!==v);if(!isCtrl)si(next);onChange?.(next)},[vals,isCtrl,onChange]);
  const hk=(e:React.KeyboardEvent)=>{if(e.key==='Backspace'&&!query&&vals.length>0){remove(vals[vals.length-1])}else if(e.key==='Escape'){setOpen(false)}};
  return <div className={`${styles.wrap} ${disabled?styles.disabled:''} ${className}`}>
    <div className={styles.inputWrap} onClick={()=>!disabled&&setOpen(true)}>
      <div className={styles.tags}>
        {selected.map(o=><span key={o.value} className={styles.tag}>{o.label}<button className={styles.tagClose} onClick={e=>{e.stopPropagation();remove(o.value)}} aria-label="Remove">&times;</button></span>)}
        <input className={styles.input} value={query} onChange={e=>setQuery(e.target.value)} onFocus={()=>setOpen(true)} onKeyDown={hk} placeholder={selected.length===0?placeholder:''} disabled={disabled}/>
      </div>
      <svg className={`${styles.chevron} ${open?styles.chevronOpen:''}`} width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 6l4 4 4-4"/></svg>
    </div>
    {open&&<><div className={styles.overlay} onClick={()=>setOpen(false)}/>
      <div className={styles.dropdown}>{filtered.length>0?filtered.map(o=><div key={o.value} className={styles.option} onClick={()=>toggle(o.value)}><span className={styles.check}>{vals.includes(o.value)?'✓':''}</span>{o.label}</div>):<div className={styles.empty}>No results</div>}</div></>}
  </div>;
}
