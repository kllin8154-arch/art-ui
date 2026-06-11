import React,{useRef,useEffect,useCallback}from'react';import styles from'./GlitchText.module.css';

interface GlitchTextProps{text:string;intensity?:number;className?:string;style?:React.CSSProperties}

function randomClip(){const h=20+Math.random()*60;const y=Math.random()*80;return`inset(${y}% 0 ${100-y-h}% 0)`}
function randomX(){return Math.random()*8-4}

export function GlitchText({text,intensity=1,className='',style}:GlitchTextProps){
  const redRef=useRef<HTMLSpanElement>(null);const cyanRef=useRef<HTMLSpanElement>(null);
  const glitch=useCallback(()=>{
    const r=redRef.current,c=cyanRef.current;if(!r||!c)return;
    if(Math.random()>.7){
      r.style.opacity='1';r.style.clipPath=randomClip();r.style.transform=`translateX(${randomX()*intensity}px)`;
      c.style.opacity='1';c.style.clipPath=randomClip();c.style.transform=`translateX(${randomX()*intensity}px)`;
    }
    const dur=80+Math.random()*200;
    setTimeout(()=>{r.style.opacity='0';c.style.opacity='0';schedule()},dur);
  },[]);
  const schedule=useCallback(()=>{const d=100+Math.random()*1500;setTimeout(glitch,d)},[glitch]);
  useEffect(()=>{schedule()},[schedule]);
  return <span className={`${styles.wrap} ${className}`} style={style}>
    <span className={styles.base}>{text}</span>
    <span ref={redRef} className={`${styles.slice} ${styles.red}`} aria-hidden>{text}</span>
    <span ref={cyanRef} className={`${styles.slice} ${styles.cyan}`} aria-hidden>{text}</span>
  </span>;
}
