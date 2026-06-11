import React from'react';import styles from'./Anchor.module.css';
type AnchorVariant='default'|'subtle'|'button';
interface AnchorProps{href?:string;children:React.ReactNode;variant?:AnchorVariant;target?:string;rel?:string;className?:string}
export function Anchor({href='#',children,variant='default',target,rel,className=''}:AnchorProps){
  return <a href={href} target={target} rel={rel}
    className={`${styles.anchor} ${variant!=='default'?styles[variant]:''} ${className}`} >
    {children}
  </a>;
}
