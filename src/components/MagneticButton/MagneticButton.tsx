import React,{useRef,useCallback}from'react';import styles from'./MagneticButton.module.css';
interface MagneticButtonProps{children:React.ReactNode;className?:string;onClick?:()=>void}
export function MagneticButton({children,className='',onClick}:MagneticButtonProps){
  const btnRef=useRef<HTMLButtonElement>(null);
  const onMove=useCallback((e:React.MouseEvent)=>{const b=btnRef.current;if(!b)return;const r=b.getBoundingClientRect(),x=e.clientX-r.left-r.width/2,y=e.clientY-r.top-r.height/2;b.style.transform=`translate(${x*.25}px,${y*.25}px)`},[]);
  const onLeave=useCallback(()=>{btnRef.current?.style.setProperty('transform','translate(0,0)')},[]);
  return <button ref={btnRef} className={`${styles.btn} ${className}`} onMouseMove={onMove} onMouseLeave={onLeave} onClick={onClick}>{children}</button>;
}
