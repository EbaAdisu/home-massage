import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Theme configuration types
export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  foreground: string;
  muted: string;
  mutedForeground: string;
  border: string;
  input: string;
  ring: string;
  destructive: string;
  destructiveForeground: string;
  success: string;
  successForeground: string;
  warning: string;
  warningForeground: string;
}

export interface ThemeConfig {
  name: string;
  colors: ThemeColors;
  typography: {
    fontFamily: string;
    fontSize: {
      xs: string;
      sm: string;
      base: string;
      lg: string;
      xl: string;
      '2xl': string;
      '3xl': string;
      '4xl': string;
    };
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
  };
  borderRadius: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  shadows: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  animations: {
    duration: {
      fast: string;
      normal: string;
      slow: string;
    };
    easing: {
      easeIn: string;
      easeOut: string;
      easeInOut: string;
    };
  };
}

// Theme presets for the massage platform
export const themePresets: Record<string, ThemeConfig> = {
  wellness: {
    name: 'Wellness',
    colors: {
      primary: '#10b981', // Emerald green
      secondary: '#6b7280', // Gray
      accent: '#f59e0b', // Amber
      background: '#fefefe', // Off white
      foreground: '#1f2937', // Dark gray
      muted: '#f3f4f6', // Light gray
      mutedForeground: '#6b7280', // Medium gray
      border: '#e5e7eb', // Light border
      input: '#ffffff', // White input
      ring: '#10b981', // Primary ring
      destructive: '#ef4444', // Red
      destructiveForeground: '#ffffff', // White
      success: '#10b981', // Green
      successForeground: '#ffffff', // White
      warning: '#f59e0b', // Amber
      warningForeground: '#ffffff', // White
    },
    typography: {
      fontFamily: 'Inter, system-ui, sans-serif',
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
      },
    },
    spacing: {
      xs: '0.25rem',
      sm: '0.5rem',
      md: '1rem',
      lg: '1.5rem',
      xl: '2rem',
      '2xl': '3rem',
    },
    borderRadius: {
      sm: '0.25rem',
      md: '0.5rem',
      lg: '0.75rem',
      xl: '1rem',
    },
    shadows: {
      sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    },
    animations: {
      duration: {
        fast: '150ms',
        normal: '300ms',
        slow: '500ms',
      },
      easing: {
        easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
        easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
        easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  luxury: {
    name: 'Luxury',
    colors: {
      primary: '#d4af37', // Gold
      secondary: '#8b5cf6', // Purple
      accent: '#f59e0b', // Amber
      background: '#0f0f0f', // Dark
      foreground: '#fafafa', // Light
      muted: '#1a1a1a', // Dark muted
      mutedForeground: '#a1a1aa', // Light muted
      border: '#262626', // Dark border
      input: '#171717', // Dark input
      ring: '#d4af37', // Gold ring
      destructive: '#ef4444', // Red
      destructiveForeground: '#ffffff', // White
      success: '#10b981', // Green
      successForeground: '#ffffff', // White
      warning: '#f59e0b', // Amber
      warningForeground: '#ffffff', // White
    },
    typography: {
      fontFamily: 'Playfair Display, serif',
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
      },
    },
    spacing: {
      xs: '0.25rem',
      sm: '0.5rem',
      md: '1rem',
      lg: '1.5rem',
      xl: '2rem',
      '2xl': '3rem',
    },
    borderRadius: {
      sm: '0.25rem',
      md: '0.5rem',
      lg: '0.75rem',
      xl: '1rem',
    },
    shadows: {
      sm: '0 1px 2px 0 rgb(0 0 0 / 0.3)',
      md: '0 4px 6px -1px rgb(0 0 0 / 0.4), 0 2px 4px -2px rgb(0 0 0 / 0.4)',
      lg: '0 10px 15px -3px rgb(0 0 0 / 0.4), 0 4px 6px -4px rgb(0 0 0 / 0.4)',
      xl: '0 20px 25px -5px rgb(0 0 0 / 0.4), 0 8px 10px -6px rgb(0 0 0 / 0.4)',
    },
    animations: {
      duration: {
        fast: '200ms',
        normal: '400ms',
        slow: '600ms',
      },
      easing: {
        easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
        easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
        easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  modern: {
    name: 'Modern',
    colors: {
      primary: '#3b82f6', // Blue
      secondary: '#64748b', // Slate
      accent: '#06b6d4', // Cyan
      background: '#ffffff', // White
      foreground: '#0f172a', // Dark slate
      muted: '#f1f5f9', // Light slate
      mutedForeground: '#64748b', // Slate
      border: '#e2e8f0', // Light border
      input: '#ffffff', // White input
      ring: '#3b82f6', // Blue ring
      destructive: '#ef4444', // Red
      destructiveForeground: '#ffffff', // White
      success: '#10b981', // Green
      successForeground: '#ffffff', // White
      warning: '#f59e0b', // Amber
      warningForeground: '#ffffff', // White
    },
    typography: {
      fontFamily: 'Inter, system-ui, sans-serif',
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
      },
    },
    spacing: {
      xs: '0.25rem',
      sm: '0.5rem',
      md: '1rem',
      lg: '1.5rem',
      xl: '2rem',
      '2xl': '3rem',
    },
    borderRadius: {
      sm: '0.25rem',
      md: '0.5rem',
      lg: '0.75rem',
      xl: '1rem',
    },
    shadows: {
      sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    },
    animations: {
      duration: {
        fast: '150ms',
        normal: '300ms',
        slow: '500ms',
      },
      easing: {
        easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
        easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
        easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  spa: {
    name: 'Spa',
    colors: {
      primary: '#059669', // Emerald
      secondary: '#6b7280', // Gray
      accent: '#d97706', // Orange
      background: '#fefefe', // Off white
      foreground: '#1f2937', // Dark gray
      muted: '#f0fdf4', // Light green
      mutedForeground: '#6b7280', // Medium gray
      border: '#d1fae5', // Light green border
      input: '#ffffff', // White input
      ring: '#059669', // Emerald ring
      destructive: '#ef4444', // Red
      destructiveForeground: '#ffffff', // White
      success: '#10b981', // Green
      successForeground: '#ffffff', // White
      warning: '#f59e0b', // Amber
      warningForeground: '#ffffff', // White
    },
    typography: {
      fontFamily: 'Inter, system-ui, sans-serif',
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
      },
    },
    spacing: {
      xs: '0.25rem',
      sm: '0.5rem',
      md: '1rem',
      lg: '1.5rem',
      xl: '2rem',
      '2xl': '3rem',
    },
    borderRadius: {
      sm: '0.25rem',
      md: '0.5rem',
      lg: '0.75rem',
      xl: '1rem',
    },
    shadows: {
      sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    },
    animations: {
      duration: {
        fast: '200ms',
        normal: '400ms',
        slow: '600ms',
      },
      easing: {
        easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
        easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
        easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
};

// Default theme
export const defaultTheme = 'wellness';

// Theme utility functions
export function getTheme(themeName: string): ThemeConfig {
  return themePresets[themeName] || themePresets[defaultTheme];
}

export function getAllThemes(): string[] {
  return Object.keys(themePresets);
}

export function getThemeCSSVariables(theme: ThemeConfig): Record<string, string> {
  return {
    '--primary': theme.colors.primary,
    '--secondary': theme.colors.secondary,
    '--accent': theme.colors.accent,
    '--background': theme.colors.background,
    '--foreground': theme.colors.foreground,
    '--muted': theme.colors.muted,
    '--muted-foreground': theme.colors.mutedForeground,
    '--border': theme.colors.border,
    '--input': theme.colors.input,
    '--ring': theme.colors.ring,
    '--destructive': theme.colors.destructive,
    '--destructive-foreground': theme.colors.destructiveForeground,
    '--success': theme.colors.success,
    '--success-foreground': theme.colors.successForeground,
    '--warning': theme.colors.warning,
    '--warning-foreground': theme.colors.warningForeground,
  };
}
