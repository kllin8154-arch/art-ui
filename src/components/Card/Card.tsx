import React from 'react';
import { CardProps } from '../../types';
import styles from './Card.module.css';

/**
 * ArtUI 卡片组件
 * 用于展示作品、文章、摄影等内容的卡片
 *
 * @example
 * <Card
 *   image="/photos/sunset.jpg"
 *   title="金色黄昏"
 *   subtitle="2024 · 风光摄影"
 *   tags={['风光', '日落', '暖色调']}
 *   hover="lift"
 * />
 */
export function Card({
  image,
  imageAlt,
  title,
  subtitle,
  description,
  aspectRatio = '4/3',
  hover = 'lift',
  href,
  tags,
  badge,
  className = '',
  children,
  style,
}: CardProps) {
  const hoverClass = hover !== 'none' ? styles[`hover${hover.charAt(0).toUpperCase() + hover.slice(1)}`] : '';
  const cls = [
    styles.card,
    hoverClass,
    (href || onClick) && styles.clickable,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const content = (
    <>
      {image && (
        <div className={styles.imageWrap} style={{ aspectRatio }}>
          {badge && <span className={styles.badge}>{badge}</span>}
          <img
            className={styles.image}
            src={image}
            alt={imageAlt || title || ''}
            loading="lazy"
          />
        </div>
      )}
      {(title || subtitle || description || tags || children) && (
        <div className={styles.body}>
          {title && <h3 className={styles.title}>{title}</h3>}
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          {description && <p className={styles.description}>{description}</p>}
          {tags && tags.length > 0 && (
            <div className={styles.tags}>
              {tags.map((tag) => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>
          )}
          {children}
        </div>
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={cls} style={style}>
        {content}
      </a>
    );
  }

  return (
    <article className={cls} style={style}>
      {content}
    </article>
  );
}

// Needed for clickable detection above
function onClick() {}
