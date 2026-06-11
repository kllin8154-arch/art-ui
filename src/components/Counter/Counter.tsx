import React,{useState,useEffect,useRef}from'react';import styles from'./Counter.module.css';

interface CounterProps{end:number;duration?:number;prefix?:string;suffix?:string;label?:string;decimals?:number;className?:string}
export function Counter({end,duration=2000,prefix='',suffix='',label,decimals=0,className=''}:CounterProps){
  const[val,setVal]=useState(0);const ref=useRef<HTMLDivElement>(null);const started=useRef(false);
  useEffect(()=>{
    const el=ref.current;if(!el)return;
    const obs=new IntersectionObserver(([entry])=>{
      if(entry.isIntersecting&&!started.current){started.current=true;obs.unobserve(el);
        const start=performance.now();
        const tick=(now:number)=>{const p=Math.min((now-start)/duration,1);const e=p<.5?2*p*p:-1+(4-2*p)*p;setVal(Math.round(e*end*Math.pow(10,decimals))/Math.pow(10,decimals));if(p<1)requestAnimationFrame(tick)};
        requestAnimationFrame(tick);
      }
    },{threshold:.3});
    obs.observe(el);return()=>obs.disconnect();
  },[end,duration,decimals]);
  return <div ref={ref} className={`${styles.counter} ${className}`}>{prefix}{val.toLocaleString()}{suffix}{label&&<div className={styles.label}>{label}</div>}</div>;
}
