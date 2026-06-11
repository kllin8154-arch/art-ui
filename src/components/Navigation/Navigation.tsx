import React, { useState, useEffect } from 'react';
import { NavigationProps } from '../../types';
import styles from './Navigation.module.css';

/**
 * ArtUI 导航组件
 * 支持固定/粘性定位、毛玻璃效果、响应式移动菜单
 *
 * @example
 * <Navigation
 *   logo={<Typography variant="h6">Lynn Studio</Typography>}
 *   items={[
 *     { label: '作品', href: '#works', active: true },
 *     { label: '关于', href: '#about' },
 *     { label: '联系', href: '#contact' },
 *   ]}
 *   position="fixed"
 *   transparent
 *   blur
 * />
 */
export function Navigation({
  logo,
  items = [],
  position = 'fixed',
  transparent = false,
  blur = false,
  mobileBreakpoint = 768,
  action,
  className = '',
  style,
}: NavigationProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
  }, [mobileOpen]);

  const navCls = [
    styles.nav,
    styles[position],
    transparent && !scrolled ? styles.transparent : '',
    blur ? styles.blur : '',
    mobileOpen ? styles.menuOpen : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <nav className={navCls} style={style}>
      <div className={styles.inner}>
        {/* Logo */}
        <div className={styles.logo}>{logo}</div>

        {/* 桌面菜单 */}
        {items.length > 0 && (
          <div className={styles.menu}>
            {items.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`${styles.menuItem} ${item.active ? styles.menuItemActive : ''}`}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}

        {/* 右侧操作区 */}
        {action && <div className={styles.action}>{action}</div>}

        {/* 移动端菜单按钮 */}
        <button
          className={styles.menuBtn}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? '关闭菜单' : '打开菜单'}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* 移动端菜单面板 */}
      {mobileOpen && (
        <div className={styles.mobileMenu}>
          {items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={styles.mobileMenuItem}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
