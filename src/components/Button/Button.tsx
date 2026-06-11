import React from 'react';
import { ButtonProps } from '../../types';
import styles from './Button.module.css';

/**
 * ArtUI 按钮组件
 *
 * @example
 * <Button variant="primary" size="lg">探索作品集</Button>
 * <Button variant="outline" href="/about">了解更多</Button>
 */
export function Button({
  variant = 'primary',
  size = 'md',
  href,
  disabled,
  loading,
  onClick,
  type = 'button',
  icon,
  fullWidth,
  rounded,
  className = '',
  children,
  style,
}: ButtonProps) {
  const cls = [
    styles.btn,
    styles[variant],
    styles[size],
    fullWidth && styles.fullWidth,
    rounded && styles.rounded,
    loading && styles.loading,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (href && !disabled) {
    return (
      <a href={href} className={cls} style={style}>
        {icon}
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={cls}
      disabled={disabled || loading}
      onClick={onClick}
      style={style}
    >
      {loading && <span className={styles.spinner} />}
      {icon}
      {children}
    </button>
  );
}
