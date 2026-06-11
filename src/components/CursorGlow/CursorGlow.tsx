import React,{useEffect,useState,useCallback}from'react';import styles from'./CursorGlow.module.css';
interface CursorGlowProps{size?:number;color?:string;className?:string}
export function CursorGlow({size=200,color,className=''}:CursorGlowProps){
  const[pos,setPos]=useState({x:-999,y:-999});const[visible,setVisible]=useState(false);
  useEffect(()=>{const m=(e:MouseEvent)=>{setPos({x:e.clientX,y:e.clientY});setVisible(true)};const l=()=>setVisible(false);document.addEventListener('mousemove',m);document.addEventListener('mouseleave',l);return()=>{document.removeEventListener('mousemove',m);document.removeEventListener('mouseleave',l)}},[]);
  const bg=color?`radial-gradient(circle,${color}22 0%,transparent 70%)`:undefined;
  return <div className={`${styles.glow} ${className}`} style={{width:size,height:size,left:pos.x,top:pos.y,opacity:visible?1:0,background:bg}}/>;
}
