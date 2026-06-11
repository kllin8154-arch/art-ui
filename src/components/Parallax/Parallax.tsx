import React, { useEffect, useState, useRef } from 'react';
import { ParallaxProps } from '../../types';
import styles from './Parallax.module.css';

/**
 * ArtUI 视差滚动组件
 * 背景以不同于内容的速度滚动，营造深度感
 *
 * @example
 * <Parallax image="/bg.jpg" height="80vh" speed={0.3}>
 *   <Typography variant="h2">Scroll Effect</Typography>
 * </Parallax>
 */
export function Parallax({
  speed = 0.5,
  direction = 'up',
  image,
  height = '100vh',
  overlay: overlayColor,
  overlayOpacity = 0.3,
  className = '',
  children,
  style,
}: ParallaxProps) {
  const [offset, setOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const scrollProgress = -rect.top / (window.innerHeight + rect.height);
      setOffset(scrollProgress * speed * rect.height);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  const dirMultiplier =
    direction === 'up' ? -1 : direction === 'down' ? 1 : direction === 'left' ? -1 : 1;

  const isHorizontal = direction === 'left' || direction === 'right';

  return (
    <div
      ref={containerRef}
      className={`${styles.parallax} ${className}`}
      style={{ height, ...style }}
    >
      <img
        className={styles.image}
        src={image}
        alt=""
        style={{
          transform: isHorizontal
            ? `translateX(${offset * dirMultiplier}px)`
            : `translateY(${offset * dirMultiplier}px)`,
        }}
      />
      {overlayColor && (
        <div
          className={styles.overlay}
          style={{ background: overlayColor, opacity: overlayOpacity }}
        />
      )}
      {children && <div className={styles.content}>{children}</div>}
    </div>
  );
}
