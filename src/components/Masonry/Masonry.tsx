import React, { useMemo } from 'react';
import { GalleryProps } from '../../types';
import { useBreakpoint } from '../../hooks/useMediaQuery';
import styles from './Masonry.module.css';

/**
 * 将图片按最短列优先分配，实现均衡的瀑布流
 */
function distributeToColumns<T>(items: T[], columnCount: number): T[][] {
  const columns: T[][] = Array.from({ length: columnCount }, () => []);
  const heights: number[] = Array(columnCount).fill(0);

  items.forEach((item) => {
    // 找到当前最短的列
    const minIdx = heights.indexOf(Math.min(...heights));
    columns[minIdx].push(item);
    // 用估算高度加权（无实际高度时假设等量）
    heights[minIdx] += 1;
  });

  return columns;
}

/**
 * ArtUI 瀑布流布局组件
 * 使用 JS 均衡列分配，从左到右流动排列
 *
 * @example
 * <Masonry images={photos} columns={3} showCaption />
 */
export function Masonry({
  images,
  columns = 3,
  gap,
  showCaption,
  onImageClick,
  className = '',
  style,
}: GalleryProps) {
  const { isXs, isSm } = useBreakpoint();

  // 响应式列数
  const effectiveCols = useMemo(() => {
    if (typeof columns === 'number') {
      if (isXs) return 1;
      if (isSm) return Math.min(2, columns);
      return columns;
    }
    // columns 是对象时的响应式逻辑
    if (isXs) return columns.xs || 1;
    if (isSm) return columns.sm || 2;
    if (typeof window !== 'undefined' && window.innerWidth <= 1024) return columns.md || 3;
    if (typeof window !== 'undefined' && window.innerWidth <= 1280) return columns.lg || 3;
    return columns.xl || 4;
  }, [columns, isXs, isSm]);

  // 均衡分配到各列
  const distributed = useMemo(
    () => distributeToColumns(images, effectiveCols),
    [images, effectiveCols]
  );

  return (
    <div className={`${styles.masonry} ${className}`} style={{ gap, ...style }}>
      {distributed.map((colItems, colIdx) => (
        <div key={colIdx} className={styles.column}>
          {colItems.map((img, itemIdx) => {
            const globalIdx = images.indexOf(img);
            return (
              <div
                key={img.src + itemIdx}
                className={`${styles.item} ${onImageClick ? styles.clickable : ''}`}
                onClick={() => onImageClick?.(img, globalIdx)}
                role={onImageClick ? 'button' : undefined}
                tabIndex={onImageClick ? 0 : undefined}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && onImageClick) onImageClick(img, globalIdx);
                }}
              >
                <img
                  className={styles.image}
                  src={img.thumbnail || img.src}
                  srcSet={img.srcSet}
                  alt={img.alt || img.title || `Masonry image ${globalIdx + 1}`}
                  loading="lazy"
                />
                {showCaption && (img.title || img.caption) && (
                  <div className={styles.body}>
                    {img.title && <div className={styles.title}>{img.title}</div>}
                    {img.caption && <div className={styles.caption}>{img.caption}</div>}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
