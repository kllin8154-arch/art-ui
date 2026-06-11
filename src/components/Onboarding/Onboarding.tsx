import React,{useState,useEffect,useCallback}from'react';import styles from'./Onboarding.module.css';

type ArrowPos='top'|'bottom'|'left'|'right';
interface TourStep{target:string;title:string;content:string;arrow?:ArrowPos}
interface OnboardingProps{steps:TourStep[];active:boolean;onFinish?:()=>void;className?:string}
export function Onboarding({steps,active,onFinish,className=''}:OnboardingProps){
  const[step,setStep]=useState(0);const[pos,setPos]=useState({x:0,y:0,w:0,h:0});
  const calcPos=useCallback(()=>{
    if(!active||step>=steps.length)return;
    const el=document.querySelector(steps[step].target);if(!el)return;
    const r=el.getBoundingClientRect();setPos({x:r.left-8,y:r.top-8,w:r.width+16,h:r.height+16});
  },[active,step,steps]);
  useEffect(()=>{calcPos();window.addEventListener('resize',calcPos);return()=>window.removeEventListener('resize',calcPos)},[calcPos]);
  if(!active||step>=steps.length)return null;
  const s=steps[step];const arrow=s.arrow||'bottom';
  const tX=pos.x+pos.w/2;const tY=pos.y+pos.h/2;
  let toolStyle:React.CSSProperties={};
  if(arrow==='bottom')toolStyle={left:tX,top:pos.y+pos.h+16,transform:'translateX(-50%)'};
  else if(arrow==='top')toolStyle={left:tX,top:pos.y-16,transform:'translate(-50%,-100%)'};
  else if(arrow==='right')toolStyle={left:pos.x+pos.w+16,top:tY,transform:'translateY(-50%)'};
  else toolStyle={left:pos.x-16,top:tY,transform:'translate(-100%,-50%)'};
  const arrowCls=arrow==='top'?styles.arrowTop:arrow==='bottom'?styles.arrowBottom:arrow==='left'?styles.arrowLeft:styles.arrowRight;
  return <div className={`${styles.overlay} ${className}`} onClick={()=>{}}>
    <div className={styles.spotlight} style={{left:pos.x,top:pos.y,width:pos.w,height:pos.h}}/>
    <div className={`${styles.tooltip} ${arrowCls}`} style={toolStyle} onClick={e=>e.stopPropagation()}>
      <div className={styles.title}>{s.title}</div><div className={styles.content}>{s.content}</div>
      <div className={styles.footer}>
        <span className={styles.steps}>{step+1}/{steps.length}</span>
        <div className={styles.actions}>
          {step>0&&<button className={styles.skip} onClick={()=>setStep(s=>s-1)}>上一步</button>}
          {step<steps.length-1?<button className={styles.next} onClick={()=>setStep(s=>s+1)}>下一步</button>:<button className={styles.next} onClick={()=>{setStep(0);onFinish?.()}}>完成</button>}
        </div>
      </div>
    </div>
  </div>;
}