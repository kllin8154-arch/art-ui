import React from'react';import styles from'./Testimonial.module.css';
interface TestimonialProps{quote:string;name:string;role?:string;avatar?:string;rating?:number;className?:string}
export function Testimonial({quote,name,role,avatar,rating,className=''}:TestimonialProps){
  return <div className={`${styles.card} ${className}`}>{avatar&&<img className={styles.avatar} src={avatar} alt={name}/>}{rating&&<div className={styles.stars}>{'★'.repeat(rating)}{'☆'.repeat(5-rating)}</div>}<p className={styles.quote}>"{quote}"</p><div className={styles.name}>{name}</div>{role&&<div className={styles.role}>{role}</div>}</div>;
}
