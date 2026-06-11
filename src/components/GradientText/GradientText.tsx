import React from 'react';
import styles from './GradientText.module.css';

type Preset='preset1'|'preset2'|'preset3'|'preset4'|'preset5'|'preset6'|'preset7'|'preset8';
interface GradientTextProps{customGradient?:string;preset?:Preset;animate?:boolean;as?:keyof JSX.IntrinsicElements;className?:string;style?:React.CSSProperties;children:React.ReactNode}

export function GradientText({customGradient,preset='preset1',animate:anim,as:Tag='span',className='',style,children}:GradientTextProps){
  const cls=[styles.text,styles[preset],anim&&styles.animate,className].filter(Boolean).join(' ');
  return React.createElement(Tag,{className:cls,style:{backgroundImage:customGradient,...style}},children);
}
