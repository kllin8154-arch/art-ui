import React,{useState,useRef,useEffect}from'react';import styles from'./LazyImage.module.css';
interface LazyImageProps{src:string;alt?:string;aspectRatio?:string;className?:string}
export function LazyImage({src,alt,aspectRatio='16/9',className=''}:LazyImageProps){
  const[loaded,setLoaded]=useState(false);const[inView,setInView]=useState(false);const ref=useRef<HTMLDivElement>(null);
  useEffect(()=>{const el=ref.current;if(!el)return;const obs=new IntersectionObserver(([e])=>{if(e.isIntersecting){setInView(true);obs.unobserve(el)}},{rootMargin:'200px'});obs.observe(el);return()=>obs.disconnect()},[]);
  const onLoad=()=>setLoaded(true);
  return <div ref={ref} className={`${styles.wrap} ${className}`} style={{aspectRatio}}>
    <div className={`${styles.placeholder} ${loaded?styles.hidden:''}`}/>
    {inView&&<img className={`${styles.img} ${loaded?styles.loaded:''}`} src={src} alt={alt||''} onLoad={onLoad}/>}
  </div>;
}
