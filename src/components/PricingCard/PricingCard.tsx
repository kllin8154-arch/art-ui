import React from'react';import styles from'./PricingCard.module.css';
interface PricingCardProps{name:string;price:string;period?:string;features:string[];popular?:boolean;action?:React.ReactNode;className?:string}
export function PricingCard({name,price,period='/月',features,popular,action,className=''}:PricingCardProps){
  return <div className={`${styles.card} ${popular?styles.popular:''} ${className}`}>{popular&&<span className={styles.badge}>推荐</span>}<div className={styles.name}>{name}</div><div className={styles.price}>{price}</div><div className={styles.period}>{period}</div><div className={styles.features}>{features.map((f,i)=><div key={i} className={styles.feature}><span className={styles.check}>✓</span>{f}</div>)}</div>{action}</div>;
}
