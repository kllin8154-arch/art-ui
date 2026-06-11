import React,{useState,useRef,useCallback}from'react';import styles from'./ImageCompare.module.css';

interface ImageCompareProps {
  beforeSrc:string;afterSrc:string;beforeAlt?:string;afterAlt?:string;
  beforeLabel?:string;afterLabel?:string;initialPosition?:number;className?:string;
}
export function ImageCompare({beforeSrc,afterSrc,beforeAlt,afterAlt,beforeLabel='Before',afterLabel='After',initialPosition=50,className=''}:ImageCompareProps){
  const[pos,setPos]=useState(initialPosition);const wrapRef=useRef<HTMLDivElement>(null);const dragging=useRef(false);
  const calcPos=useCallback((e:MouseEvent|React.MouseEvent)=>{const rect=wrapRef.current?.getBoundingClientRect();if(!rect)return;const x=e.clientX-rect.left;setPos(Math.max(0,Math.min(100,(x/rect.width)*100)))},[]);
  const onDown=()=>{dragging.current=true}
  const onMove=(e:React.MouseEvent)=>{if(dragging.current)calcPos(e)}
  const onUp=()=>{dragging.current=false}
  React.useEffect(()=>{const m=(e:MouseEvent)=>{if(dragging.current)calcPos(e)};const u=()=>{dragging.current=false};document.addEventListener('mousemove',m);document.addEventListener('mouseup',u);return()=>{document.removeEventListener('mousemove',m);document.removeEventListener('mouseup',u)}},[calcPos]);
  return(
    <div ref={wrapRef} className={`${styles.wrap} ${className}`} onMouseDown={onDown} onMouseMove={onMove} onMouseUp={onUp} onMouseLeave={onUp}>
      <img className={styles.img} src={beforeSrc} alt={beforeAlt||'Before'} draggable={false}/>
      <div className={styles.after} style={{width:`${pos}%`}}><img src={afterSrc} alt={afterAlt||'After'} draggable={false}/></div>
      <div className={styles.handle} style={{left:`${pos}%`}}><div className={styles.handleBtn}>⟷</div></div>
      <span className={`${styles.overlayLabel} ${styles.beforeLabel}`}>{beforeLabel}</span>
      <span className={`${styles.overlayLabel} ${styles.afterLabel}`}>{afterLabel}</span>
    </div>
  );
}
