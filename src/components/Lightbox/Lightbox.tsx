import React, { useState, useEffect, useCallback } from 'react';
import { LightboxProps } from '../../types';
import styles from './Lightbox.module.css';

/**
 * ArtUI 灯箱组件
 * 全屏图片查看器，支持缩放、滑动、缩略图导航
 *
 * @example
 * <Lightbox
 *   images={photos}
 *   isOpen={lightboxOpen}
 *   onClose={() => setLightboxOpen(false)}
 *   initialIndex={currentIndex}
 * />
 */
export function Lightbox({
  images,
  isOpen,
  onClose,
  initialIndex = 0,
  showThumbnails = true,
  enableZoom = true,
  enableSwipe = true,
}: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [scale, setScale] = useState(1);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  useEffect(() => {
    setCurrentIndex(initialIndex);
    setScale(1);
  }, [initialIndex, isOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') goTo(currentIndex - 1);
      if (e.key === 'ArrowRight') goTo(currentIndex + 1);
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, currentIndex, onClose]);

  const goTo = useCallback(
    (index: number) => {
      if (index < 0) setCurrentIndex(images.length - 1);
      else if (index >= images.length) setCurrentIndex(0);
      else setCurrentIndex(index);
      setScale(1);
    },
    [images.length]
  );

  const handleWheel = (e: React.WheelEvent) => {
    if (enableZoom && e.ctrlKey) {
      e.preventDefault();
      setScale((prev) => Math.min(Math.max(0.5, prev - e.deltaY * 0.001), 3));
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!enableSwipe) return;
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null || !enableSwipe) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      goTo(currentIndex + (diff > 0 ? 1 : -1));
    }
    setTouchStart(null);
  };

  if (!isOpen || images.length === 0) return null;

  const current = images[currentIndex];

  return (
    <div className={styles.overlay} onClick={onClose}>
      {/* 关闭按钮 */}
      <button className={styles.close} onClick={onClose} aria-label="关闭">
        ✕
      </button>

      {/* 标题 */}
      {current.title && <div className={styles.title}>{current.title}</div>}

      {/* 上一张 */}
      {images.length > 1 && (
        <button
          className={`${styles.navBtn} ${styles.prev}`}
          onClick={(e) => {
            e.stopPropagation();
            goTo(currentIndex - 1);
          }}
          aria-label="上一张"
        >
          ‹
        </button>
      )}

      {/* 图片 */}
      <div
        className={styles.viewer}
        onClick={(e) => e.stopPropagation()}
        onWheel={handleWheel}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <img
          className={styles.image}
          src={current.src}
          srcSet={current.srcSet}
          alt={current.alt || current.title || ''}
          style={{ transform: `scale(${scale})`, cursor: enableZoom ? 'zoom-in' : 'default' }}
        />
      </div>

      {/* 下一张 */}
      {images.length > 1 && (
        <button
          className={`${styles.navBtn} ${styles.next}`}
          onClick={(e) => {
            e.stopPropagation();
            goTo(currentIndex + 1);
          }}
          aria-label="下一张"
        >
          ›
        </button>
      )}

      {/* 计数器 */}
      {images.length > 1 && (
        <div className={styles.counter}>
          {currentIndex + 1} / {images.length}
        </div>
      )}

      {/* 缩略图导航 */}
      {showThumbnails && images.length > 1 && (
        <div className={styles.thumbnails}>
          {images.map((img, i) => (
            <button
              key={i}
              className={`${styles.thumb} ${i === currentIndex ? styles.thumbActive : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                goTo(i);
              }}
            >
              <img src={img.thumbnail || img.src} alt="" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
