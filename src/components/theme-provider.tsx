'use client';

import React, { createContext, useContext, useEffect } from 'react';
import { useTheme } from '@/stores/theme-store';
import { getThemeCSSVariables } from '@/lib/theme';

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeContext = createContext<ReturnType<typeof useTheme> | null>(null);

export function ThemeProvider({ children }: ThemeProviderProps) {
  const theme = useTheme();

  // Apply theme CSS variables to document
  useEffect(() => {
    const root = document.documentElement;
    const cssVariables = getThemeCSSVariables(theme.themeConfig);
    
    Object.entries(cssVariables).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });

    // Apply dark mode class
    if (theme.isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    // Apply animation speed
    root.style.setProperty('--animation-duration', theme.themeConfig.animations.duration[theme.animationSpeed]);
  }, [theme.currentTheme, theme.isDarkMode, theme.animationSpeed, theme.themeConfig]);

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
}
