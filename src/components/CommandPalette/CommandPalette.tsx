import React,{useState,useEffect,useCallback}from'react';import styles from'./CommandPalette.module.css';

interface CommandItem{id:string;label:string;icon?:React.ReactNode;shortcut?:string;onSelect:()=>void}
interface CommandPaletteProps{isOpen:boolean;onClose:()=>void;commands:CommandItem[];placeholder?:string}

export function CommandPalette({isOpen,onClose,commands,placeholder='输入命令...'}:CommandPaletteProps){
  const[q,setQ]=useState('');const[focused,setFocused]=useState(0);
  const filtered=commands.filter(c=>c.label.toLowerCase().includes(q.toLowerCase()));
  useEffect(()=>{setFocused(0);setQ('')},[isOpen]);
  useEffect(()=>{const h=(e:KeyboardEvent)=>{if(!isOpen)return;if(e.key==='Escape')onClose();if(e.key==='ArrowDown'){e.preventDefault();setFocused(f=>(f+1)%Math.max(filtered.length,1))}if(e.key==='ArrowUp'){e.preventDefault();setFocused(f=>(f-1+filtered.length)%Math.max(filtered.length,1))}if(e.key==='Enter'&&filtered[focused]){filtered[focused].onSelect();onClose()}};document.addEventListener('keydown',h);return()=>document.removeEventListener('keydown',h)},[isOpen,focused,filtered,onClose]);
  if(!isOpen)return null;
  return <div className={styles.overlay} onClick={onClose}>
    <div className={styles.panel} onClick={e=>e.stopPropagation()}>
      <div className={styles.search}><span className={styles.searchIcon}>🔍</span><input className={styles.input} placeholder={placeholder} value={q} onChange={e=>setQ(e.target.value)} autoFocus/></div>
      <div className={styles.list}>{filtered.map((c,i)=><div key={c.id} className={`${styles.item} ${i===focused?styles.focused:''}`} onClick={()=>{c.onSelect();onClose()}}><span className={styles.icon}>{c.icon||'→'}</span><span className={styles.label}>{c.label}</span>{c.shortcut&&<span className={styles.shortcut}>{c.shortcut}</span>}</div>)}</div>
    </div></div>;
}
