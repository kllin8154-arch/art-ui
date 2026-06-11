import { useState, useEffect } from 'react';

/**
 * 响应式媒体查询 Hook
 * @param query CSS 媒体查询字符串
 * @returns 是否匹配
 *
 * @example
 * const isMobile = useMediaQuery('(max-width: 768px)');
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches;
    }
    return false;
  });

  useEffect(() => {
    const mql = window.matchMedia(query);
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);

    mql.addEventListener('change', handler);
    setMatches(mql.matches);

    return () => mql.removeEventListener('change', handler);
  }, [query]);

  return matches;
}

/**
 * 响应式断点 Hook
 * @returns 当前断点信息
 */
export function useBreakpoint() {
  const isXs = useMediaQuery('(max-width: 480px)');
  const isSm = useMediaQuery('(min-width: 481px) and (max-width: 768px)');
  const isMd = useMediaQuery('(min-width: 769px) and (max-width: 1024px)');
  const isLg = useMediaQuery('(min-width: 1025px) and (max-width: 1280px)');
  const isXl = useMediaQuery('(min-width: 1281px)');

  return {
    isXs,
    isSm,
    isMd,
    isLg,
    isXl,
    isMobile: isXs || isSm,
    isDesktop: isMd || isLg || isXl,
  };
}
