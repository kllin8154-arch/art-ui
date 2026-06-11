import React from'react';import styles from'./Markdown.module.css';
interface MarkdownProps{html:string;className?:string}
export function Markdown({html,className=''}:MarkdownProps){return <div className={`${styles.content} ${className}`} dangerouslySetInnerHTML={{__html:html}}/>;}