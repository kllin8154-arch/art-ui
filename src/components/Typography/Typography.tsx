import React from 'react';
import { BaseProps } from '../../types';
import styles from './Typography.module.css';

type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'text' | 'textLg' | 'textSm' | 'textXs' | 'display' | 'blockquote' | 'caption' | 'lead' | 'signature' | 'handwriting' | 'decorative';
type TypographyAlign = 'left' | 'center' | 'right';
type TypographyTone = 'default' | 'muted' | 'accent';

const variantToElement: Record<TypographyVariant, keyof JSX.IntrinsicElements> = {
  h1: 'h1', h2: 'h2', h3: 'h3', h4: 'h4', h5: 'h5', h6: 'h6',
  text: 'p', textLg: 'p', textSm: 'p', textXs: 'span',
  display: 'h1', blockquote: 'blockquote', caption: 'span', lead: 'p',
  signature: 'p', handwriting: 'p', decorative: 'div',
};

export interface TypographyProps extends BaseProps {
  variant?: TypographyVariant;
  align?: TypographyAlign;
  tone?: TypographyTone;
  /** 用特定 HTML 标签渲染 */
  as?: keyof JSX.IntrinsicElements;
}

/**
 * ArtUI 排版组件
 * 提供统一的文本样式层级：展示文字、标题、正文、引用等
 *
 * @example
 * <Typography variant="display">我的摄影集</Typography>
 * <Typography variant="h2">最新作品</Typography>
 * <Typography variant="blockquote">摄影是光与影的诗</Typography>
 */
export function Typography({
  variant = 'text',
  align,
  tone,
  as,
  className = '',
  children,
  ...rest
}: TypographyProps) {
  const Tag = as || variantToElement[variant];
  const cls = [
    styles[variant],
    align && styles[align],
    tone && tone !== 'default' && styles[tone],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return React.createElement(Tag, { className: cls, ...rest }, children);
}
