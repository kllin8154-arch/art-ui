import React from'react';import styles from'./GridOverlay.module.css';
type GridType='ruleOfThirds'|'goldenRatio';
interface GridOverlayProps{type?:GridType;visible?:boolean;className?:string;children?:React.ReactNode}
export function GridOverlay({type='ruleOfThirds',visible=true,className='',children}:GridOverlayProps){
  return <div style={{position:'relative'}} className={className}>{children}{visible&&<div className={`${styles.grid} ${styles[type]}`}/>}</div>;
}
