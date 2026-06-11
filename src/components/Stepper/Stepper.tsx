import React from'react';import styles from'./Stepper.module.css';
interface StepperStep{title:string;done?:boolean}
interface StepperProps{steps:StepperStep[];current:number;className?:string}
export function Stepper({steps,current,className=''}:StepperProps){
  return <div className={`${styles.stepper} ${className}`}>{steps.map((s,i)=>(
    <div key={i} className={`${styles.step} ${i<current?styles.done:''} ${i===current?styles.active:''}`}>
      <div className={`${styles.line} ${i<current?styles.activeLine:''}`}/>
      <div className={styles.dot}>{i<current?'✓':i+1}</div>
      <div className={styles.stepTitle}>{s.title}</div>
    </div>
  ))}</div>;
}
