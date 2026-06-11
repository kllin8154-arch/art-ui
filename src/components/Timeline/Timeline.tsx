import React from 'react';
import styles from './Timeline.module.css';

interface TimelineEvent { date?: string; title: string; description?: string }
interface TimelineProps { events: TimelineEvent[]; alternate?: boolean; className?: string }

export function Timeline({ events, alternate, className = '' }: TimelineProps) {
  const cls = `${styles.tl} ${alternate ? styles.tlAlt : ''} ${className}`;
  return (
    <div className={cls}>
      {events.map((e, i) => (
        <div key={i} className={styles.item}>
          <span className={styles.dot} />
          {e.date && <div className={styles.date}>{e.date}</div>}
          <h4 className={styles.title}>{e.title}</h4>
          {e.description && <p className={styles.desc}>{e.description}</p>}
        </div>
      ))}
    </div>
  );
}
