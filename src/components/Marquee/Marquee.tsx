import React from 'react';
import styles from './Marquee.module.css';

interface MarqueeProps {
  items: string[];
  speed?: number;
  className?: string;
}
export function Marquee({ items, speed = 20, className = '' }: MarqueeProps) {
  const doubled = [...items, ...items];
  return (
    <div className={`${styles.wrap} ${className}`}>
      <div className={styles.track} style={{ animationDuration: `${speed}s` }}>
        {doubled.map((text, i) => (
          <span key={i} className={styles.item}>
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
