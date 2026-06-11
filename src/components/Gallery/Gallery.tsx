import React from 'react';
import { GalleryProps, ImageSrc } from '../../types';
import styles from './Gallery.module.css';

const RATIO_MAP: Record<string, string> = {
  '1/1': '1 / 1',
  '4/3': '4 / 3',
  '3/4': '3 / 4',
  '16/9': '16 / 9',
  '9/16': '9 / 16',
  '3/2': '3 / 2',
  '2/3': '2 / 3',
};

/**
 * ArtUI 画廊网格组件
 * 响应式图片画廊，自动排列网格
 *
 * @example
 * <Gallery
 *   images={photos}
 *   columns={{ xs: 1, sm: 2, md: 3, lg: 4 }}
 *   aspectRatio="4/3"
 *   overlay
 *   onImageClick={(img, i) => openLightbox(i)}
 * />
 */
export function Gallery({
  images,
  columns = 3,
  gap,
  aspectRatio = '4/3',
  showCaption,
  onImageClick,
  overlay = true,
  loading = 'lazy',
  className = '',
  style,
}: GalleryProps) {
  const cols = typeof columns === 'object' ? 3 : columns;
  const ratio = RATIO_MAP[aspectRatio] || aspectRatio;

  const cls = [styles.gallery, styles[`cols${cols}`], className]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      className={cls}
      style={{
        gap: gap,
        ...style,
      }}
    >
      {images.map((img, index) => (
        <div
          key={img.src + index}
          className={styles.item}
          style={{ aspectRatio: ratio }}
          onClick={() => onImageClick?.(img, index)}
          role={onImageClick ? 'button' : undefined}
          tabIndex={onImageClick ? 0 : undefined}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && onImageClick) onImageClick(img, index);
          }}
        >
          <img
            className={styles.image}
            src={img.thumbnail || img.src}
            srcSet={img.srcSet}
            alt={img.alt || img.title || `Gallery image ${index + 1}`}
            loading={loading}
          />
          {overlay && (
            <div className={styles.overlay}>
              {img.title && <span className={styles.overlayTitle}>{img.title}</span>}
              {img.caption && <span className={styles.overlayCaption}>{img.caption}</span>}
            </div>
          )}
          {showCaption && img.caption && !overlay && (
            <div className={styles.caption}>{img.caption}</div>
          )}
        </div>
      ))}
    </div>
  );
}
