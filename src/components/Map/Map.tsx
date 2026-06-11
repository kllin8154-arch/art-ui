import React from'react';import styles from'./Map.module.css';
interface MapProps{lat:number;lng:number;label?:string;zoom?:number;className?:string}
export function Map({lat,lng,label,zoom=14,className=''}:MapProps){
  const src=`https://www.openstreetmap.org/export/embed.html?bbox=${lng-0.02},${lat-0.01},${lng+0.02},${lat+0.01}&layer=mapnik&marker=${lat},${lng}`;
  return <div className={`${styles.wrap} ${className}`}><iframe className={styles.iframe} src={src} title="map"/>{label&&<div className={styles.info}><span className={styles.pin}>📍</span>{label}</div>}</div>;
}
