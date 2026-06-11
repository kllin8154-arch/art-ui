import React from 'react';
import styles from './Divider.module.css';

interface DividerProps {
  /** 方向 */
  direction?: 'horizontal' | 'vertical';
  /** 变体 */
  variant?: 'default' | 'ornament' | 'fade';
  /** 间距大小 */
  spacing?: 'sm' | 'md' | 'lg';
  /** 装饰文字（仅 ornament 有效） */
  label?: string;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * ArtUI 分隔线组件
 *
 * @example
 * <Divider />
 * <Divider variant="ornament" label="✦" spacing="lg" />
 * <Divider variant="fade" />
 */
export function Divider({
  direction = 'horizontal',
  variant = 'default',
  spacing = 'md',
  label,
  className = '',
  style,
}: DividerProps) {
  if (variant === 'ornament' && label) {
    return (
      <div
        className={`${styles.divider} ${styles.ornament} ${styles[`spacing${spacing.charAt(0).toUpperCase() + spacing.slice(1)}`]} ${className}`}
        style={style}
        role="separator"
      >
        <span>{label}</span>
      </div>
    );
  }

  const cls = [
    styles.divider,
    styles[direction],
    variant !== 'default' && styles[variant],
    styles[`spacing${spacing.charAt(0).toUpperCase() + spacing.slice(1)}`],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <hr className={cls} style={style} role="separator" />;
}
