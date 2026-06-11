import React from'react';import styles from'./ColorPalette.module.css';
interface ColorPaletteProps{colors:string[];className?:string}
export function ColorPalette({colors,className=''}:ColorPaletteProps){
  return <div className={`${styles.palette} ${className}`}>{colors.map((c,i)=><div key={i} className={styles.swatch} style={{background:c}}><span className={styles.swatchLabel}>{c}</span></div>)}</div>;
}
