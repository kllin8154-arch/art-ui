import React,{useEffect,useRef,useState}from'react';import styles from'./StaggerList.module.css';

interface StaggerListProps{items:React.ReactNode[];stagger?:number;threshold?:number;className?:string}
export function StaggerList({items,stagger=100,threshold=.15,className=''}:StaggerListProps){
  const ref=useRef<HTMLDivElement>(null);const[visible,setVisible]=useState(false);
  useEffect(()=>{const el=ref.current;if(!el)return;const obs=new IntersectionObserver(([e])=>{if(e.isIntersecting){setVisible(true);obs.unobserve(el)}},{threshold});obs.observe(el);return()=>obs.disconnect()},[threshold]);
  return <div ref={ref} className={className}>
    {items.map((item,i)=><div key={i} className={`${styles.item} ${visible?styles.visible:''}`} style={{transitionDelay:`${i*stagger}ms`}}>{item}</div>)}
  </div>;
}
