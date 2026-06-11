import React,{useMemo}from'react';import styles from'./Particles.module.css';

interface ParticlesProps{count?:number;color?:string;minSize?:number;maxSize?:number;minDuration?:number;maxDuration?:number;className?:string}
export function Particles({count=30,color='var(--art-color-accent)',minSize=2,maxSize=8,minDuration=8,maxDuration=20,className=''}:ParticlesProps){
  const particles=useMemo(()=>Array.from({length:count},(_,i)=>({
    id:i,left:`${Math.random()*100}%`,size:`${minSize+Math.random()*(maxSize-minSize)}px`,
    duration:`${minDuration+Math.random()*(maxDuration-minDuration)}s`,
    delay:`${Math.random()*maxDuration}s`
  })),[count,minSize,maxSize,minDuration,maxDuration]);
  return <div className={`${styles.wrap} ${className}`}>
    {particles.map(p=><div key={p.id} className={styles.particle} style={{left:p.left,width:p.size,height:p.size,background:color,animationDuration:p.duration,animationDelay:p.delay}}/>)}
  </div>;
}
