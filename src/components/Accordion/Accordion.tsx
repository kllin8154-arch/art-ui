import React, { useState, useCallback } from 'react';
import styles from './Accordion.module.css';

export interface AccordionItem {
  id: string;
  title: React.ReactNode;
  content: React.ReactNode;
  disabled?: boolean;
}

export interface AccordionProps {
  items: AccordionItem[];
  defaultExpanded?: string[];
  allowMultiple?: boolean;
  className?: string;
}

export function Accordion({ items, defaultExpanded = [], allowMultiple = false, className = '' }: AccordionProps) {
  const [expanded, setExpanded] = useState<Set<string>>(new Set(defaultExpanded));
  const toggle = useCallback((id: string) => {
    setExpanded(prev => {
      const next = new Set(prev);
      if (next.has(id)) { next.delete(id); }
      else { if (!allowMultiple) next.clear(); next.add(id); }
      return next;
    });
  }, [allowMultiple]);

  return (
    <div className={`${styles.accordion} ${className}`}>
      {items.map(item => {
        const isOpen = expanded.has(item.id);
        return (
          <div key={item.id} className={`${styles.item} ${isOpen ? styles.open : ''} ${item.disabled ? styles.disabled : ''}`}>
            <button className={styles.trigger} onClick={() => !item.disabled && toggle(item.id)} aria-expanded={isOpen} disabled={item.disabled} type="button">
              <span className={styles.title}>{item.title}</span>
              <svg className={`${styles.icon} ${isOpen ? styles.iconOpen : ''}`} width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M4 6l4 4 4-4" />
              </svg>
            </button>
            <div className={`${styles.panel} ${isOpen ? styles.panelOpen : ''}`}>
              <div className={styles.content}>{item.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
