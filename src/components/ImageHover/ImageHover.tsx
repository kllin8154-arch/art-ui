import React from'react';import styles from'./ImageHover.module.css';

interface ImageHoverProps{src:string;alt?:string;title?:string;description?:string;aspectRatio?:string;className?:string}
export function ImageHover({src,alt,title,description,aspectRatio='4/3',className=''}:ImageHoverProps){
  return <div className={`${styles.wrap} ${className}`} style={{aspectRatio}}>
    <img className={styles.img} src={src} alt={alt||title||''}/>
    <div className={styles.overlay}>
      {title&&<h3 className={styles.title}>{title}</h3>}
      {description&&<p className={styles.desc}>{description}</p>}
    </div>
  </div>;
}
