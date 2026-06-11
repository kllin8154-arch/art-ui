import React,{useRef,useEffect,useState}from'react';import styles from'./ScrollReveal.module.css';

interface ScrollRevealProps{direction?:'up'|'down'|'left'|'right'|'zoom'|'fade';delay?:number;duration?:number;threshold?:number;once?:boolean;className?:string;style?:React.CSSProperties;children:React.ReactNode}

export function ScrollReveal({direction='up',delay=0,duration=.6,threshold=.15,once=true,className='',style,children}:ScrollRevealProps){
  const ref=useRef<HTMLDivElement>(null);const[active,setActive]=useState(false);
  useEffect(()=>{const el=ref.current;if(!el)return;const obs=new IntersectionObserver(([entry])=>{if(entry.isIntersecting){setActive(true);if(once)obs.unobserve(el)}else if(!once){setActive(false)}},{threshold});obs.observe(el);return()=>obs.disconnect()},[threshold,once]);
  const cls=[styles.reveal,styles[direction],active?styles.active:'',className].filter(Boolean).join(' ');
  return <div ref={ref} className={cls} style={{transitionDuration:`${duration}s`,transitionDelay:`${delay}s`,...style}}>{children}</div>;
}
