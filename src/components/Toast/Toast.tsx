import React,{createContext,useContext,useState,useCallback}from'react';import styles from'./Toast.module.css';

type ToastType='success'|'error'|'info'|'warning';
interface ToastItem{id:number;message:string;type:ToastType}
interface ToastCtx{toast:(msg:string,type?:ToastType)=>void}
const Ctx=createContext<ToastCtx|null>(null);

export function useToast(){const c=useContext(Ctx);if(!c)throw new Error('useToast must be used within ToastProvider');return c}

export function ToastProvider({children}:{children:React.ReactNode}){
  const[toasts,setToasts]=useState<ToastItem[]>([]);
  const toast=useCallback((message:string,type:ToastType='info')=>{
    const id=Date.now();setToasts(p=>[...p,{id,message,type}]);setTimeout(()=>setToasts(p=>p.filter(t=>t.id!==id)),4000);
  },[]);
  const dismiss=useCallback((id:number)=>setToasts(p=>p.filter(t=>t.id!==id)),[]);
  return <Ctx.Provider value={{toast}}>{children}<div className={styles.toast}>{toasts.map(t=><div key={t.id} className={`${styles.item} ${styles[t.type]}`}>{t.message}<button className={styles.dismiss} onClick={()=>dismiss(t.id)}>✕</button></div>)}</div></Ctx.Provider>;
}
