import React from 'react';
import { FooterProps } from '../../types';
import styles from './Footer.module.css';

/**
 * ArtUI 页脚组件
 * 适用于个人网站、作品集的优雅页脚
 *
 * @example
 * <Footer
 *   columns={[
 *     { title: '浏览', links: [{ label: '作品', href: '#works' }] },
 *     { title: '关于', links: [{ label: '关于我', href: '#about' }] },
 *   ]}
 *   copyright="© 2024 Lynn Studio. All rights reserved."
 * />
 */
export function Footer({
  columns,
  copyright,
  social,
  bottomText,
  className = '',
  style,
}: FooterProps) {
  return (
    <footer className={`${styles.footer} ${className}`} style={style}>
      <div className={styles.inner}>
        {/* 多列链接 */}
        {columns && columns.length > 0 && (
          <div className={styles.columns}>
            {columns.map((col) => (
              <div key={col.title}>
                <h4 className={styles.colTitle}>{col.title}</h4>
                {col.links.map((link) => (
                  <a key={link.label} href={link.href} className={styles.colLink}>
                    {link.label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        )}

        {/* 底部栏 */}
        <div className={styles.bottom}>
          <div className={styles.copyright}>
            {copyright || `© ${new Date().getFullYear()}`}
          </div>

          {social && social.length > 0 && (
            <div className={styles.social}>
              {social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className={styles.socialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                >
                  {s.icon || s.label}
                </a>
              ))}
            </div>
          )}

          {bottomText && (
            <div style={{ fontSize: 'var(--art-font-size-sm)', color: 'var(--art-color-text-muted)' }}>
              {bottomText}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
