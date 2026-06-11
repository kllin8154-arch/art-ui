import React,{useState,useCallback}from'react';import styles from'./CopyToClipboard.module.css';
interface CopyToClipboardProps{text:string;label?:string;className?:string}
export function CopyToClipboard({text,label='复制',className=''}:CopyToClipboardProps){
  const[copied,setCopied]=useState(false);
  const copy=useCallback(async()=>{await navigator.clipboard.writeText(text);setCopied(true);setTimeout(()=>setCopied(false),2000)},[text]);
  return <button className={`${styles.btn} ${copied?styles.copied:''} ${className}`} onClick={copy}>{copied?'✓ 已复制':`📋 ${label}`}</button>;
}
