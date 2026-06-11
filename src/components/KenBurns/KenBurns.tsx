import React from'react';import styles from'./KenBurns.module.css';
interface KenBurnsProps{src:string;alt?:string;duration?:number;aspectRatio?:string;className?:string}
export function KenBurns({src,alt,duration=12,aspectRatio='16/9',className=''}:KenBurnsProps){
  return <div className={`${styles.wrap} ${className}`} style={{aspectRatio}}><img className={styles.img} src={src} alt={alt||''} style={{animationDuration:`${duration}s`}}/></div>;
}
