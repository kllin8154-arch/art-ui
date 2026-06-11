import React,{useState,useRef,useCallback}from'react';import styles from'./Spotlight.module.css';

interface SpotlightProps{size?:number;color?:string;className?:string;style?:React.CSSProperties;children:React.ReactNode}
export function Spotlight({size=300,color,className='',style,children}:SpotlightProps){
  const[pos,setPos]=useState({x:-999,y:-999});const[visible,setVisible]=useState(false);const wrapRef=useRef<HTMLDivElement>(null);
  const onMove=useCallback((e:React.MouseEvent)=>{const r=wrapRef.current?.getBoundingClientRect();if(r){setPos({x:e.clientX-r.left,y:e.clientY-r.top});setVisible(true)}},[]
  );
  return <div ref={wrapRef} className={`${styles.wrap} ${className}`} style={style} onMouseMove={onMove} onMouseLeave={()=>setVisible(false)}>
    <div className={styles.spot} style={{width:size,height:size,left:pos.x,top:pos.y,opacity:visible?1:0,background:color?`radial-gradient(circle,${color}22 0%,transparent 70%)`:undefined}}/>
    {children}
  </div>;
}
