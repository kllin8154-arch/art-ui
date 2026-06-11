import React from 'react';
import styles from './Breadcrumb.module.css';

interface BreadcrumbItem { label: string; href?: string }
interface BreadcrumbProps { items: BreadcrumbItem[]; separator?: string; className?: string }

export function Breadcrumb({ items, separator = '/', className = '' }: BreadcrumbProps) {
  return (
    <nav className={`${styles.crumb} ${className}`} aria-label="Breadcrumb">
      {items.map((item, i) => (
        <React.Fragment key={i}>
          {i > 0 && <span className={styles.sep}>{separator}</span>}
          {item.href && i < items.length - 1 ? (
            <a href={item.href} className={styles.link}>{item.label}</a>
          ) : (
            <span className={styles.current}>{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}
