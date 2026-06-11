import React,{useState,useEffect}from'react';import styles from'./ScrollToTop.module.css';

interface ScrollToTopProps{threshold?:number;className?:string}
export function ScrollToTop({threshold=300,className=''}:ScrollToTopProps){
  const[visible,setVisible]=useState(false);
  useEffect(()=>{const h=()=>setVisible(window.scrollY>threshold);window.addEventListener('scroll',h,{passive:true});return()=>window.removeEventListener('scroll',h)},[threshold]);
  return(
    <button className={`${styles.btn} ${visible?styles.visible:''} ${className}`} onClick={()=>window.scrollTo({top:0,behavior:'smooth'})} aria-label="回到顶部">↑</button>
  );
}
