import React,{useRef,useCallback,useState}from'react';import styles from'./TiltCard.module.css';

interface TiltCardProps{maxTilt?:number;glareColor?:string;className?:string;style?:React.CSSProperties;children:React.ReactNode}
export function TiltCard({maxTilt=12,glareColor='rgba(255,255,255,.25)',className='',style,children}:TiltCardProps){
  const cardRef=useRef<HTMLDivElement>(null);const[glow,setGlow]=useState({x:50,y:50,o:0});
  const onMove=useCallback((e:React.MouseEvent)=>{const c=cardRef.current;if(!c)return;const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-0.5,y=(e.clientY-r.top)/r.height-0.5;c.style.transform=`rotateY(${x*maxTilt}deg) rotateX(${-y*maxTilt}deg) scale3d(1.02,1.02,1.02)`;setGlow({x:(e.clientX-r.left)/r.width*100,y:(e.clientY-r.top)/r.height*100,o:.7})},[maxTilt]);
  const onLeave=useCallback(()=>{cardRef.current?.style.setProperty('transform','rotateY(0) rotateX(0) scale3d(1,1,1)');setGlow(p=>({...p,o:0}))},[]);
  return <div className={`${styles.scene} ${className}`} style={style}>
    <div ref={cardRef} className={styles.card} onMouseMove={onMove} onMouseLeave={onLeave} style={{borderRadius:'inherit'}}>
      <div className={styles.layer}>{children}</div>
      <div className={styles.glare} style={{background:`radial-gradient(circle at ${glow.x}% ${glow.y}%,${glareColor} 0%,transparent 60%)`,opacity:glow.o}}/>
    </div>
  </div>;
}
