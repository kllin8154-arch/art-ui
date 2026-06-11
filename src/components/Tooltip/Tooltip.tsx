import React from 'react';
import styles from './Tooltip.module.css';

interface TooltipProps {
  content: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  children: React.ReactNode;
  className?: string;
}

export function Tooltip({ content, position = 'top', children, className = '' }: TooltipProps) {
  return (
    <span className={`${styles.wrapper} ${className}`}>
      {children}
      <span className={`${styles.tooltip} ${styles[position]}`}>{content}</span>
    </span>
  );
}
