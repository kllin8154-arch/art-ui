import React,{useState}from'react';import styles from'./CookieConsent.module.css';
interface CookieConsentProps{message?:string;onAccept?:()=>void;className?:string}
export function CookieConsent({message='我们使用 Cookie 来改善您的浏览体验。',onAccept,className=''}:CookieConsentProps){
  const[visible,setVisible]=useState(()=>!localStorage.getItem('cookie-consent'));
  if(!visible)return null;
  return <div className={`${styles.bar} ${className}`}><p className={styles.text}>{message}</p><div className={styles.buttons}><button className={styles.decline} onClick={()=>{localStorage.setItem('cookie-consent','declined');setVisible(false)}}>拒绝</button><button className={styles.accept} onClick={()=>{localStorage.setItem('cookie-consent','accepted');setVisible(false);onAccept?.()}}>接受</button></div></div>;
}
