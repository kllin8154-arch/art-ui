import { CSSProperties, ReactNode } from 'react';

// ============ Theme ============
export type ThemeMode = 'light' | 'dark';

export interface ThemeColors {
  background: string;
  backgroundSecondary: string;
  surface: string;
  surfaceHover: string;
  text: string;
  textSecondary: string;
  textMuted: string;
  accent: string;
  accentHover: string;
  border: string;
  borderSubtle: string;
  shadow: string;
  shadowStrong: string;
  overlay: string;
}

export interface ThemeTypography {
  fontDisplay: string;
  fontBody: string;
  fontMono: string;
  fontSizeXs: string;
  fontSizeSm: string;
  fontSizeBase: string;
  fontSizeLg: string;
  fontSizeXl: string;
  fontSize2xl: string;
  fontSize3xl: string;
  fontSize4xl: string;
  fontSize5xl: string;
  fontWeightLight: number;
  fontWeightNormal: number;
  fontWeightMedium: number;
  fontWeightBold: number;
  lineHeightTight: number;
  lineHeightNormal: number;
  lineHeightRelaxed: number;
  letterSpacingTight: string;
  letterSpacingNormal: string;
  letterSpacingWide: string;
}

export interface ThemeSpacing {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  '3xl': string;
  '4xl': string;
  '5xl': string;
}

export interface Theme {
  mode: ThemeMode;
  colors: ThemeColors;
  typography: ThemeTypography;
  spacing: ThemeSpacing;
  radius: ThemeSpacing;
  transition: string;
  transitionSlow: string;
}

// ============ Common Props ============
export interface BaseProps {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

export interface ImageSrc {
  src: string;
  srcSet?: string;
  alt?: string;
  thumbnail?: string;
  width?: number;
  height?: number;
  caption?: string;
  title?: string;
  category?: string;
}

export interface GalleryProps extends BaseProps {
  images: ImageSrc[];
  columns?: number | { xs?: number; sm?: number; md?: number; lg?: number; xl?: number };
  gap?: string;
  aspectRatio?: string;
  showCaption?: boolean;
  onImageClick?: (image: ImageSrc, index: number) => void;
  overlay?: boolean;
  loading?: 'lazy' | 'eager';
}

export interface LightboxProps {
  images: ImageSrc[];
  isOpen: boolean;
  onClose: () => void;
  initialIndex?: number;
  showThumbnails?: boolean;
  enableZoom?: boolean;
  enableSwipe?: boolean;
}

export interface CarouselProps extends BaseProps {
  images: ImageSrc[];
  autoPlay?: boolean;
  interval?: number;
  showArrows?: boolean;
  showDots?: boolean;
  showCounter?: boolean;
  effect?: 'fade' | 'slide';
  aspectRatio?: string;
  fit?: 'cover' | 'contain';
  pauseOnHover?: boolean;
}

export interface ParallaxProps extends BaseProps {
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  image: string;
  height?: string;
  overlay?: string;
  overlayOpacity?: number;
}

export interface HeroProps extends BaseProps {
  image?: string;
  video?: string;
  height?: string;
  overlay?: boolean;
  overlayOpacity?: number;
  align?: 'center' | 'left' | 'right';
  verticalAlign?: 'center' | 'top' | 'bottom';
  parallax?: boolean;
  parallaxSpeed?: number;
}

export interface NavigationProps extends BaseProps {
  logo?: ReactNode;
  items?: Array<{ label: string; href: string; active?: boolean }>;
  position?: 'fixed' | 'sticky' | 'static';
  transparent?: boolean;
  blur?: boolean;
  mobileBreakpoint?: number;
  action?: ReactNode;
}

export interface FooterProps extends BaseProps {
  columns?: Array<{
    title: string;
    links: Array<{ label: string; href: string }>;
  }>;
  copyright?: string;
  social?: Array<{ label: string; href: string; icon?: ReactNode }>;
  bottomText?: string;
}

export interface CardProps extends BaseProps {
  image?: string;
  imageAlt?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  aspectRatio?: string;
  hover?: 'lift' | 'zoom' | 'glow' | 'none';
  href?: string;
  tags?: string[];
  badge?: string;
}

export interface ModalProps extends BaseProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: 'sm' | 'md' | 'lg' | 'full';
  closeOnOverlay?: boolean;
  showCloseButton?: boolean;
}

export interface ButtonProps extends BaseProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit';
  icon?: ReactNode;
  fullWidth?: boolean;
  rounded?: boolean;
}
