import React, { useEffect } from 'react';
import { ModalProps } from '../../types';
import styles from './Modal.module.css';

/**
 * ArtUI 模态弹窗组件
 *
 * @example
 * <Modal isOpen={open} onClose={() => setOpen(false)} title="作品详情">
 *   <img src="/artwork-full.jpg" alt="" />
 * </Modal>
 */
export function Modal({
  isOpen,
  onClose,
  title,
  size = 'md',
  closeOnOverlay = true,
  showCloseButton = true,
  className = '',
  children,
  style,
}: ModalProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className={styles.overlay}
      onClick={closeOnOverlay ? onClose : undefined}
    >
      <div
        className={`${styles.modal} ${styles[size]} ${className}`}
        onClick={(e) => e.stopPropagation()}
        style={style}
        role="dialog"
        aria-modal="true"
        aria-label={title || 'Modal'}
      >
        {(title || showCloseButton) && (
          <div className={styles.header}>
            {title ? <h2 className={styles.title}>{title}</h2> : <span />}
            {showCloseButton && (
              <button className={styles.closeBtn} onClick={onClose} aria-label="关闭">
                ✕
              </button>
            )}
          </div>
        )}
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  );
}
