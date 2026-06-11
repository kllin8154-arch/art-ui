import React from'react';import styles from'./ExifDisplay.module.css';

export interface ExifData{aperture?:string;shutter?:string;iso?:string;focalLength?:string;camera?:string;lens?:string;date?:string;location?:string}
interface ExifDisplayProps{data:ExifData;className?:string}

const LABELS:Record<string,string>={aperture:'光圈',shutter:'快门',iso:'ISO',focalLength:'焦距',camera:'机身',lens:'镜头',date:'日期',location:'地点'};

export function ExifDisplay({data,className=''}:ExifDisplayProps){
  const entries=Object.entries(data).filter(([,v])=>v);
  if(entries.length===0)return null;
  return <div className={`${styles.table} ${className}`}>{
    entries.map(([k,v])=><div key={k} className={styles.row}><span className={styles.label}>{LABELS[k]||k}</span><span className={styles.value}>{v||<span className={styles.empty}>—</span>}</span></div>)
  }</div>;
}
