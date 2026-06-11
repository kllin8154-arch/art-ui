import React from 'react';
import styles from './AspectRatio.module.css';

const RATIO_MAP: Record<string, number> = {
  '1/1': 100,
  '4/3': 75,
  '3/4': 133.33,
  '16/9': 56.25,
  '9/16': 177.78,
  '3/2': 66.67,
  '2/3': 150,
  '21/9': 42.86,
};

interface AspectRatioProps {
  ratio?: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

/**
 * ArtUI 容器宽高比组件
 * 保持子元素固定宽高比
 *
 * @example
 * <AspectRatio ratio="16/9">
 *   <img src="/photo.jpg" alt="" />
 * </AspectRatio>
 */
export function AspectRatio({
  ratio = '16/9',
  className = '',
  style,
  children,
}: AspectRatioProps) {
  const percent = RATIO_MAP[ratio];

  return (
    <div
      className={`${styles.wrapper} ${className}`}
      style={{ paddingBottom: percent != null ? `${percent}%` : ratio, ...style }}
    >
      <div className={styles.inner}>
        {children}
      </div>
    </div>
  );
}
