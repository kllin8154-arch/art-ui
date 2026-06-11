import React from 'react';
import styles from './Avatar.module.css';

interface AvatarProps {
  src?: string; alt?: string; name?: string;
  size?: 'sm'|'md'|'lg'|'xl';
  status?: 'online'|'offline'|'away';
  className?: string;
}
export function Avatar({ src, alt, name, size = 'md', status: st, className = '' }: AvatarProps) {
  const initials = name?.split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase();
  return (
    <span className={`${styles.avatar} ${styles[size]} ${className}`}>
      {src ? <img src={src} alt={alt||name||''} /> : <span className={styles.fallback}>{initials||'?'}</span>}
      {st && <span className={`${styles.status} ${styles[st]}`} />}
    </span>
  );
}
