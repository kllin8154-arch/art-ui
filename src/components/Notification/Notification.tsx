import React,{createContext,useContext,useState,useCallback}from'react';import styles from'./Notification.module.css';

type NType='info'|'success'|'warning'|'error';
interface Notif{id:number;title:string;message?:string;type:NType}
interface NCtx{notify:(title:string,message?:string,type?:NType)=>void}
const Ctx=createContext<NCtx|null>(null);
export function useNotification(){const c=useContext(Ctx);if(!c)throw new Error('useNotification must be used within NotificationProvider');return c}

export function NotificationProvider({children}:{children:React.ReactNode}){
  const[list,setList]=useState<Notif[]>([]);
  const notify=useCallback((title:string,message?:string,type:NType='info')=>{
    const id=Date.now();setList(p=>[...p,{id,title,message,type}]);setTimeout(()=>setList(p=>p.filter(n=>n.id!==id)),5000);
  },[]);
  const dismiss=useCallback((id:number)=>setList(p=>p.filter(n=>n.id!==id)),[]);
  return <Ctx.Provider value={{notify}}>{children}<div className={styles.wrap}>{list.map(n=><div key={n.id} className={styles.card}><span className={`${styles.dot} ${styles[n.type]}`}/><div className={styles.body}><div className={styles.title}>{n.title}</div>{n.message&&<div className={styles.msg}>{n.message}</div>}</div><button className={styles.close} onClick={()=>dismiss(n.id)}>✕</button></div>)}</div></Ctx.Provider>;
}
