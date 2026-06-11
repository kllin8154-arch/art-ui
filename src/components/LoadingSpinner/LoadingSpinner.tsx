import React from 'react';
import { BaseProps } from '../../types';
import styles from './LoadingSpinner.module.css';

interface LoadingSpinnerProps extends BaseProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  fullscreen?: boolean;
}

/**
 * ArtUI 加载动画组件
 *
 * @example
 * <LoadingSpinner size="lg" text="正在加载作品..." />
 * <LoadingSpinner fullscreen text="Loading..." />
 */
export function LoadingSpinner({
  size = 'md',
  text,
  fullscreen,
  className = '',
  style,
}: LoadingSpinnerProps) {
  const content = (
    <div className={`${styles.spinner} ${styles[size]} ${className}`} style={style}>
      <div className={styles.ring} />
    </div>
  );

  if (fullscreen) {
    return (
      <div className={styles.fullscreen}>
        {content}
        {text && <span className={styles.text}>{text}</span>}
      </div>
    );
  }

  return content;
}
