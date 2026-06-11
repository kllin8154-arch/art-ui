import React from 'react';
import styles from './Skeleton.module.css';

interface SkeletonProps {
  variant?: 'text'|'title'|'avatar'|'image'|'card';
  width?: string; height?: string;
  count?: number; className?: string;
}
export function Skeleton({ variant = 'text', width, height, count = 1, className = '' }: SkeletonProps) {
  const items = Array.from({ length: count });
  return (
    <>
      {items.map((_, i) => (
        <div key={i} className={`${styles.sk} ${styles[variant]} ${className}`}
          style={{ width, height, ...(variant==='avatar' ? {width:width||'48px',height:height||'48px'} : {}) }}
        />
      ))}
    </>
  );
}
