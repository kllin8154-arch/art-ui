import React,{useRef,useState,useCallback}from'react';import styles from'./DragSlider.module.css';
interface DragSliderProps{value:number;onChange:(v:number)=>void;min?:number;max?:number;className?:string}
export function DragSlider({value,onChange,min=0,max=100,className=''}:DragSliderProps){
  const trackRef=useRef<HTMLDivElement>(null);const[active,setActive]=useState(false);
  const calc=useCallback((e:MouseEvent|React.MouseEvent)=>{const r=trackRef.current?.getBoundingClientRect();if(!r)return;onChange(Math.round(Math.max(min,Math.min(max,((e.clientX-r.left)/r.width)*(max-min)+min))))},[min,max,onChange]);
  const onDown=useCallback(()=>{setActive(true)},[]);
  React.useEffect(()=>{if(!active)return;const m=(e:MouseEvent)=>calc(e);const u=()=>setActive(false);document.addEventListener('mousemove',m);document.addEventListener('mouseup',u);return()=>{document.removeEventListener('mousemove',m);document.removeEventListener('mouseup',u)}},[active,calc]);
  const pct=((value-min)/(max-min))*100;
  return <div className={`${styles.slider} ${className}`} onMouseDown={e=>{onDown();calc(e)}} ref={trackRef}><div className={styles.track}><div className={styles.fill} style={{width:`${pct}%`}}/></div><div className={styles.thumb} style={{left:`${pct}%`}}/></div>;
}
