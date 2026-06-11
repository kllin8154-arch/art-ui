import React from'react';import styles from'./Container.module.css';
type ContainerSize='xs'|'sm'|'md'|'lg'|'xl'|'fluid';
interface ContainerProps{children:React.ReactNode;size?:ContainerSize;className?:string}
const maxWidths:Record<ContainerSize,string>={xs:'480px',sm:'640px',md:'768px',lg:'1024px',xl:'1280px',fluid:'none'};
export function Container({children,size='lg',className=''}:ContainerProps){
  return <div className={`${styles.container} ${className}`}
    style={size!=='lg'?{maxWidth:maxWidths[size]}:undefined}>
    {children}
  </div>;
}
