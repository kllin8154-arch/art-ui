import { useState, useEffect } from 'react';

/**
 * 滚动位置追踪 Hook
 * @returns 当前滚动位置信息
 *
 * @example
 * const { scrollY, scrollPercent, isScrolled } = useScrollPosition();
 */
export function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrollY(y);

      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollPercent(docHeight > 0 ? y / docHeight : 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return {
    scrollY,
    scrollPercent,
    isScrolled: scrollY > 10,
    isScrolledDeep: scrollY > 300,
  };
}

/**
 * 视差效果 Hook
 * @param speed 视差速度系数 (0-1)
 * @returns 变换值
 */
export function useParallax(speed: number = 0.5) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * speed);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return offset;
}

/**
 * 元素进入视口检测 Hook
 * @param threshold 可见阈值
 * @returns [ref callback, 是否可见, 是否曾可见]
 */
export function useInView(threshold: number = 0.1) {
  const [isInView, setIsInView] = useState(false);
  const [hasBeenInView, setHasBeenInView] = useState(false);
  const [refElement, setRefElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!refElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          setHasBeenInView(true);
        } else {
          setIsInView(false);
        }
      },
      { threshold }
    );

    observer.observe(refElement);
    return () => observer.disconnect();
  }, [refElement, threshold]);

  return {
    ref: setRefElement,
    isInView,
    hasBeenInView,
  };
}
