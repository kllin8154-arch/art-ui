import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import type { ThemeMode, Theme } from '../../types';
import { lightTheme, darkTheme } from '../../utils/theme';
import styles from './ThemeProvider.module.css';

interface ThemeContextValue {
  theme: Theme;
  mode: ThemeMode;
  toggleTheme: () => void;
  setTheme: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export interface ThemeProviderProps {
  /** 初始主题模式 */
  defaultMode?: ThemeMode;
  /** 是否显示浮动切换按钮 */
  showToggle?: boolean;
  children: React.ReactNode;
}

/**
 * ArtUI 主题提供者
 * 包裹应用根组件以启用深色/浅色主题切换
 */
export function ThemeProvider({
  defaultMode = 'light',
  showToggle = true,
  children,
}: ThemeProviderProps) {
  const [mode, setMode] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('art-theme');
      if (stored === 'dark' || stored === 'light') return stored;
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
    }
    return defaultMode;
  });

  const theme = mode === 'dark' ? darkTheme : lightTheme;

  useEffect(() => {
    document.documentElement.setAttribute('data-art-theme', mode);
    localStorage.setItem('art-theme', mode);
  }, [mode]);

  const toggleTheme = useCallback(() => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, mode, toggleTheme, setTheme: setMode }}>
      <div className={styles.themeProvider} data-art-theme={mode}>
        {children}
        {showToggle && (
          <button
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label={`切换到${mode === 'light' ? '深色' : '浅色'}模式`}
            title={`切换到${mode === 'light' ? '深色' : '浅色'}模式`}
          >
            {mode === 'light' ? '🌙' : '☀️'}
          </button>
        )}
      </div>
    </ThemeContext.Provider>
  );
}

/**
 * 使用主题的 Hook
 */
export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useTheme 必须在 ThemeProvider 内部使用');
  }
  return ctx;
}
