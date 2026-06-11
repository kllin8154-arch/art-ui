import React,{useEffect,useRef,useState}from'react';import styles from'./SplitText.module.css';

interface SplitTextProps{text:string;by?:'word'|'char';delay?:number;stagger?:number;threshold?:number;className?:string;style?:React.CSSProperties}
export function SplitText({text,by='word',delay=0,stagger=60,threshold=.3,className='',style}:SplitTextProps){
  const ref=useRef<HTMLDivElement>(null);const[visible,setVisible]=useState(false);
  useEffect(()=>{const el=ref.current;if(!el)return;const obs=new IntersectionObserver(([e])=>{if(e.isIntersecting){setVisible(true);obs.unobserve(el)}},{threshold});obs.observe(el);return()=>obs.disconnect()},[threshold]);
  const pieces=by==='word'?text.split(' '):text.split('');
  const cls=by==='word'?styles.word:styles.char;
  return <div ref={ref} className={className} style={style}>
    {pieces.map((p,i)=>(
      <span key={i} className={`${cls} ${visible?styles.visible:''}`} style={{transitionDelay:`${delay+i*stagger}ms`}}>
        {p}{by==='word'&&i<pieces.length-1?' ':''}
      </span>
    ))}
  </div>;
}
