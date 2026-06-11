import React from'react';import styles from'./Group.module.css';
interface GroupProps{children:React.ReactNode;gap?:number|string;align?:'start'|'center'|'end'|'stretch';justify?:'start'|'center'|'end'|'space-between'|'space-around';wrap?:boolean;className?:string}
export function Group({children,gap,align='center',justify='start',wrap=false,className=''}:GroupProps){
  return <div className={`${styles.group} ${className}`} style={{gap:gap!==undefined?typeof gap==='number'?`${gap}px`:gap:undefined,alignItems:align,justifyContent:justify,flexWrap:wrap?'wrap':'nowrap'}}>{children}</div>;
}
