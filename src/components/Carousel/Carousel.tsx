import React, { useState, useEffect, useCallback, useRef } from 'react';
import { CarouselProps } from '../../types';
import styles from './Carousel.module.css';

/**
 * ArtUI 轮播组件
 * 优雅的图片轮播，支持淡入/滑动效果、自动播放
 *
 * @example
 * <Carousel images={heroImages} autoPlay interval={5000} effect="fade" />
 */
export function Carousel({
  images,
  autoPlay = true,
  interval = 5000,
  showArrows = true,
  showDots = true,
  showCounter = false,
  effect = 'fade',
  aspectRatio = '16/9',
  fit = 'cover',
  pauseOnHover = true,
  className = '',
  style,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback(
    (index: number) => {
      if (index < 0) setCurrentIndex(images.length - 1);
      else if (index >= images.length) setCurrentIndex(0);
      else setCurrentIndex(index);
    },
    [images.length]
  );

  useEffect(() => {
    if (!autoPlay || isPaused) return;
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [autoPlay, interval, isPaused, images.length]);

  if (images.length === 0) return null;

  return (
    <div
      className={`${styles.carousel} ${effect === 'fade' ? styles.fade : ''} ${className}`}
      style={{ aspectRatio, ...style }}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      {/* 轨道 */}
      <div
        className={styles.track}
        style={
          effect === 'slide'
            ? { transform: `translateX(-${currentIndex * 100}%)` }
            : undefined
        }
      >
        {images.map((img, i) => (
          <div
            key={i}
            className={`${styles.slide} ${
              effect === 'fade' && i === currentIndex ? styles.slideActive : ''
            }`}
          >
            <img
              className={styles.image}
              src={img.src}
              srcSet={img.srcSet}
              alt={img.alt || img.title || `Slide ${i + 1}`}
              style={{ objectFit: fit }}
            />
            {(img.title || img.caption) && (
              <div className={styles.caption}>
                {img.title && <div className={styles.captionTitle}>{img.title}</div>}
                {img.caption && <div className={styles.captionText}>{img.caption}</div>}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* 箭头 */}
      {showArrows && images.length > 1 && (
        <>
          <button
            className={`${styles.arrow} ${styles.arrowPrev}`}
            onClick={() => goTo(currentIndex - 1)}
            aria-label="上一张"
          >
            ‹
          </button>
          <button
            className={`${styles.arrow} ${styles.arrowNext}`}
            onClick={() => goTo(currentIndex + 1)}
            aria-label="下一张"
          >
            ›
          </button>
        </>
      )}

      {/* 圆点 */}
      {showDots && images.length > 1 && (
        <div className={styles.dots}>
          {images.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === currentIndex ? styles.dotActive : ''}`}
              onClick={() => goTo(i)}
              aria-label={`第 ${i + 1} 张`}
            />
          ))}
        </div>
      )}

      {/* 计数器 */}
      {showCounter && images.length > 1 && (
        <div className={styles.counter}>
          {currentIndex + 1} / {images.length}
        </div>
      )}
    </div>
  );
}
