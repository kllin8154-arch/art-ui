import React from'react';import styles from'./Grid.module.css';
interface GridProps{children:React.ReactNode;cols?:number|string;rows?:number|string;gap?:number|string;align?:'start'|'center'|'end'|'stretch';justify?:'start'|'center'|'end'|'space-between'|'space-around';className?:string}
export function Grid({children,cols,rows,gap,align='stretch',justify='start',className=''}:GridProps){
  const s:React.CSSProperties={};
  if(cols!==undefined)s.gridTemplateColumns=typeof cols==='number'?`repeat(${cols},1fr)`:cols;
  if(rows!==undefined)s.gridTemplateRows=typeof rows==='number'?`repeat(${rows},1fr)`:rows;
  if(gap!==undefined)s.gap=typeof gap==='number'?`${gap}px`:gap;
  if(align!=='stretch')s.alignItems=align;
  if(justify!=='start')s.justifyContent=justify;
  return <div className={`${styles.grid} ${className}`} style={s}>{children}</div>;
}
