import React,{useState,useEffect,useCallback}from'react';import styles from'./ContextMenu.module.css';
interface CtxItem{label:string;icon?:string;onClick:()=>void;divider?:boolean}
interface ContextMenuProps{items:CtxItem[];children:React.ReactNode;className?:string}
export function ContextMenu({items,children,className=''}:ContextMenuProps){
  const[pos,setPos]=useState<{x:number;y:number}|null>(null);
  const onContext=useCallback((e:React.MouseEvent)=>{e.preventDefault();setPos({x:e.clientX,y:e.clientY})},[]);
  useEffect(()=>{if(!pos)return;const h=()=>setPos(null);document.addEventListener('click',h);return()=>document.removeEventListener('click',h)},[pos]);
  return <div onContextMenu={onContext} className={className}>{children}{pos&&<div className={styles.wrap} style={{left:pos.x,top:pos.y}}>{items.map((it,i)=><React.Fragment key={i}>{it.divider?<div className={styles.divider}/>:null}<div className={styles.item} onClick={()=>{it.onClick();setPos(null)}}>{it.icon&&<span className={styles.icon}>{it.icon}</span>}{it.label}</div></React.Fragment>)}</div>}</div>;
}
