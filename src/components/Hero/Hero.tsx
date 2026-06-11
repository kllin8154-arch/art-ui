import React, { useEffect, useState } from 'react';
import { HeroProps } from '../../types';
import styles from './Hero.module.css';

/**
 * ArtUI Hero 首屏组件
 * 全宽大图/视频横幅，适合首页展示
 *
 * @example
 * <Hero image="/hero-bg.jpg" height="100vh" overlay parallax>
 *   <Typography variant="display">我的摄影集</Typography>
 *   <Typography variant="lead" tone="muted">探索光影之间的故事</Typography>
 * </Hero>
 */
export function Hero({
  image,
  video,
  height = '100vh',
  overlay: showOverlay = true,
  overlayOpacity = 0.4,
  align = 'center',
  verticalAlign = 'center',
  parallax,
  parallaxSpeed = 0.4,
  className = '',
  children,
  style,
}: HeroProps) {
  const [parallaxOffset, setParallaxOffset] = useState(0);

  useEffect(() => {
    if (!parallax) return;
    const handleScroll = () => {
      setParallaxOffset(window.scrollY * parallaxSpeed);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [parallax, parallaxSpeed]);

  const cls = [
    styles.hero,
    align !== 'center' && styles[`align${align.charAt(0).toUpperCase() + align.slice(1)}`],
    verticalAlign !== 'center' &&
      styles[`valign${verticalAlign.charAt(0).toUpperCase() + verticalAlign.slice(1)}`],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <section className={cls} style={{ height, ...style }}>
      {/* 背景 */}
      <div
        className={styles.bg}
        style={parallax ? { transform: `translateY(${parallaxOffset}px)` } : undefined}
      >
        {video ? (
          <video
            className={styles.bgVideo}
            src={video}
            autoPlay
            muted
            loop
            playsInline
          />
        ) : image ? (
          <img className={styles.bgImage} src={image} alt="" />
        ) : null}
      </div>

      {/* 叠加层 */}
      {showOverlay && (
        <div className={styles.overlay} style={{ opacity: overlayOpacity }} />
      )}

      {/* 内容 */}
      <div className={styles.content}>{children}</div>
    </section>
  );
}
