import React,{useState,useEffect}from'react';import styles from'./ProgressBar.module.css';

export function ProgressBar(){
  const[pct,setPct]=useState(0);
  useEffect(()=>{const h=()=>{const h=document.documentElement;setPct((h.scrollTop/(h.scrollHeight-h.clientHeight))*100)};window.addEventListener('scroll',h,{passive:true});return()=>window.removeEventListener('scroll',h)},[]);
  return <div className={styles.bar}><div className={styles.fill} style={{width:`${pct}%`}}/></div>;
}
