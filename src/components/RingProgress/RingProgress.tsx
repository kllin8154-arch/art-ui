import React from'react';import styles from'./RingProgress.module.css';
interface RingProgressProps{value:number;size?:number;strokeWidth?:number;color?:string;label?:string;showValue?:boolean;className?:string}
export function RingProgress({value,size=100,strokeWidth=8,color='var(--art-color-accent)',label,showValue=true,className=''}:RingProgressProps){
  const r=(size-strokeWidth)/2;const circ=2*Math.PI*r;const pct=Math.max(0,Math.min(100,value));
  const offset=circ-(pct/100)*circ;
  return <div className={`${styles.wrap} ${className}`} style={{width:size,height:size}}>
    <svg className={styles.svg} viewBox={`0 0 ${size} ${size}`}>
      <circle className={styles.track} cx={size/2} cy={size/2} r={r} strokeWidth={strokeWidth}/>
      <circle className={styles.fill} cx={size/2} cy={size/2} r={r} strokeWidth={strokeWidth} stroke={color} strokeDasharray={circ} strokeDashoffset={offset} strokeLinecap="round" transform={`rotate(-90 ${size/2} ${size/2})`}/>
    </svg>
    <div className={styles.center}>
      {showValue&&<span className={styles.value}>{Math.round(pct)}%</span>}
      {label&&<span className={styles.label}>{label}</span>}
    </div>
  </div>;
}
