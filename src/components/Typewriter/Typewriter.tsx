import React,{useState,useEffect,useRef}from'react';import styles from'./Typewriter.module.css';

interface TypewriterProps{texts:string[];typeSpeed?:number;deleteSpeed?:number;pause?:number;loop?:boolean;className?:string}
export function Typewriter({texts,typeSpeed=80,deleteSpeed=40,pause=2000,loop=true,className=''}:TypewriterProps){
  const[display,setDisplay]=useState('');const[textIdx,setTextIdx]=useState(0);const[charIdx,setCharIdx]=useState(0);const[deleting,setDeleting]=useState(false);
  useEffect(()=>{
    const current=texts[textIdx];
    if(!deleting&&charIdx<current.length){const t=setTimeout(()=>setCharIdx(c=>c+1),typeSpeed);return()=>clearTimeout(t)}
    if(!deleting&&charIdx===current.length){const t=setTimeout(()=>setDeleting(true),pause);return()=>clearTimeout(t)}
    if(deleting&&charIdx>0){const t=setTimeout(()=>setCharIdx(c=>c-1),deleteSpeed);return()=>clearTimeout(t)}
    if(deleting&&charIdx===0){setDeleting(false);setTextIdx(i=>(i+1)%texts.length);if(!loop&&textIdx===texts.length-1)return}
    setDisplay(current.slice(0,charIdx));
  },[charIdx,deleting,textIdx,texts,typeSpeed,deleteSpeed,pause,loop]);
  return <span className={`${styles.wrap} ${className}`}>{display}<span className={styles.cursor}>|</span></span>;
}
