import React from'react';import styles from'./Stack.module.css';
type StackDirection='row'|'column'|'row-reverse'|'column-reverse';
interface StackProps{children:React.ReactNode;direction?:StackDirection;gap?:number|string;align?:'start'|'center'|'end'|'stretch';justify?:'start'|'center'|'end'|'space-between'|'space-around';className?:string}
export function Stack({children,direction='column',gap,align='stretch',justify='start',className=''}:StackProps){
  const s:React.CSSProperties={flexDirection:direction};
  if(gap!==undefined)s.gap=typeof gap==='number'?`${gap}px`:gap;
  if(align!=='stretch')s.alignItems=align;
  if(justify!=='start')s.justifyContent=justify;
  return <div className={`${styles.stack} ${className}`} style={s}>{children}</div>;
}
