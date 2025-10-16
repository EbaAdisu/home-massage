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
  midnight: {
    name: 'Midnight',
    colors: {
      primary: 'hsl(270 100% 50%)', // Deep purple
      secondary: 'hsl(240 100% 30%)', // Dark blue
      accent: 'hsl(300 100% 60%)', // Bright magenta
      background: 'hsl(0 0% 6%)', // Very dark
      foreground: 'hsl(0 0% 98%)', // Light
      muted: 'hsl(270 30% 10%)', // Dark purple muted
      mutedForeground: 'hsl(270 20% 65%)', // Light purple muted
      border: 'hsl(270 30% 20%)', // Dark purple border
      input: 'hsl(270 30% 8%)', // Dark purple input
      ring: 'hsl(270 100% 50%)', // Purple ring
      destructive: 'hsl(0 84% 60%)', // Red
      destructiveForeground: 'hsl(0 0% 98%)', // White
      success: 'hsl(160 84% 39%)', // Green
      successForeground: 'hsl(0 0% 98%)', // White
      warning: 'hsl(45 93% 47%)', // Amber
      warningForeground: 'hsl(0 0% 98%)', // White
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
  wellness: {
    name: 'Wellness',
    colors: {
      primary: 'hsl(160 84% 39%)', // Emerald green
      secondary: 'hsl(210 40% 50%)', // Blue gray
      accent: 'hsl(45 93% 47%)', // Amber
      background: 'hsl(0 0% 100%)', // White
      foreground: 'hsl(210 11% 15%)', // Dark gray
      muted: 'hsl(210 40% 98%)', // Very light blue
      mutedForeground: 'hsl(210 11% 45%)', // Medium gray
      border: 'hsl(210 40% 90%)', // Light border
      input: 'hsl(210 40% 98%)', // Light input
      ring: 'hsl(160 84% 39%)', // Primary ring
      destructive: 'hsl(0 84% 60%)', // Red
      destructiveForeground: 'hsl(0 0% 98%)', // White
      success: 'hsl(160 84% 39%)', // Green
      successForeground: 'hsl(0 0% 98%)', // White
      warning: 'hsl(45 93% 47%)', // Amber
      warningForeground: 'hsl(0 0% 98%)', // White
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
      primary: 'hsl(45 100% 50%)', // Gold
      secondary: 'hsl(270 95% 60%)', // Purple
      accent: 'hsl(45 93% 47%)', // Amber
      background: 'hsl(0 0% 6%)', // Very dark
      foreground: 'hsl(0 0% 98%)', // Light
      muted: 'hsl(0 0% 10%)', // Dark muted
      mutedForeground: 'hsl(0 0% 65%)', // Light muted
      border: 'hsl(0 0% 15%)', // Dark border
      input: 'hsl(0 0% 9%)', // Dark input
      ring: 'hsl(45 100% 50%)', // Gold ring
      destructive: 'hsl(0 84% 60%)', // Red
      destructiveForeground: 'hsl(0 0% 98%)', // White
      success: 'hsl(160 84% 39%)', // Green
      successForeground: 'hsl(0 0% 98%)', // White
      warning: 'hsl(45 93% 47%)', // Amber
      warningForeground: 'hsl(0 0% 98%)', // White
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
      primary: 'hsl(221 83% 53%)', // Blue
      secondary: 'hsl(215 16% 47%)', // Slate
      accent: 'hsl(188 94% 43%)', // Cyan
      background: 'hsl(0 0% 100%)', // White
      foreground: 'hsl(222 84% 5%)', // Dark slate
      muted: 'hsl(210 40% 98%)', // Light slate
      mutedForeground: 'hsl(215 16% 47%)', // Slate
      border: 'hsl(214 32% 91%)', // Light border
      input: 'hsl(0 0% 100%)', // White input
      ring: 'hsl(221 83% 53%)', // Blue ring
      destructive: 'hsl(0 84% 60%)', // Red
      destructiveForeground: 'hsl(0 0% 98%)', // White
      success: 'hsl(160 84% 39%)', // Green
      successForeground: 'hsl(0 0% 98%)', // White
      warning: 'hsl(45 93% 47%)', // Amber
      warningForeground: 'hsl(0 0% 98%)', // White
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
      primary: 'hsl(158 64% 52%)', // Emerald
      secondary: 'hsl(210 11% 45%)', // Gray
      accent: 'hsl(25 95% 53%)', // Orange
      background: 'hsl(0 0% 100%)', // White
      foreground: 'hsl(210 11% 15%)', // Dark gray
      muted: 'hsl(120 60% 97%)', // Light green
      mutedForeground: 'hsl(210 11% 45%)', // Medium gray
      border: 'hsl(120 60% 90%)', // Light green border
      input: 'hsl(0 0% 100%)', // White input
      ring: 'hsl(158 64% 52%)', // Emerald ring
      destructive: 'hsl(0 84% 60%)', // Red
      destructiveForeground: 'hsl(0 0% 98%)', // White
      success: 'hsl(160 84% 39%)', // Green
      successForeground: 'hsl(0 0% 98%)', // White
      warning: 'hsl(45 93% 47%)', // Amber
      warningForeground: 'hsl(0 0% 98%)', // White
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
  ocean: {
    name: 'Ocean',
    colors: {
      primary: 'hsl(200 98% 39%)', // Deep ocean blue
      secondary: 'hsl(180 100% 25%)', // Teal
      accent: 'hsl(195 100% 50%)', // Bright cyan
      background: 'hsl(0 0% 100%)', // White
      foreground: 'hsl(200 100% 10%)', // Dark blue
      muted: 'hsl(200 100% 98%)', // Very light blue
      mutedForeground: 'hsl(200 50% 45%)', // Medium blue
      border: 'hsl(200 100% 90%)', // Light blue border
      input: 'hsl(0 0% 100%)', // White input
      ring: 'hsl(200 98% 39%)', // Ocean blue ring
      destructive: 'hsl(0 84% 60%)', // Red
      destructiveForeground: 'hsl(0 0% 98%)', // White
      success: 'hsl(160 84% 39%)', // Green
      successForeground: 'hsl(0 0% 98%)', // White
      warning: 'hsl(45 93% 47%)', // Amber
      warningForeground: 'hsl(0 0% 98%)', // White
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
  sunset: {
    name: 'Sunset',
    colors: {
      primary: 'hsl(25 95% 53%)', // Warm orange
      secondary: 'hsl(330 81% 60%)', // Pink
      accent: 'hsl(45 93% 47%)', // Golden yellow
      background: 'hsl(0 0% 100%)', // White
      foreground: 'hsl(25 100% 10%)', // Dark orange
      muted: 'hsl(25 100% 98%)', // Very light orange
      mutedForeground: 'hsl(25 50% 45%)', // Medium orange
      border: 'hsl(25 100% 90%)', // Light orange border
      input: 'hsl(0 0% 100%)', // White input
      ring: 'hsl(25 95% 53%)', // Orange ring
      destructive: 'hsl(0 84% 60%)', // Red
      destructiveForeground: 'hsl(0 0% 98%)', // White
      success: 'hsl(160 84% 39%)', // Green
      successForeground: 'hsl(0 0% 98%)', // White
      warning: 'hsl(45 93% 47%)', // Amber
      warningForeground: 'hsl(0 0% 98%)', // White
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
  forest: {
    name: 'Forest',
    colors: {
      primary: 'hsl(120 60% 25%)', // Deep forest green
      secondary: 'hsl(60 30% 40%)', // Olive
      accent: 'hsl(45 80% 50%)', // Golden brown
      background: 'hsl(0 0% 100%)', // White
      foreground: 'hsl(120 100% 5%)', // Very dark green
      muted: 'hsl(120 60% 98%)', // Very light green
      mutedForeground: 'hsl(120 30% 40%)', // Medium green
      border: 'hsl(120 60% 90%)', // Light green border
      input: 'hsl(0 0% 100%)', // White input
      ring: 'hsl(120 60% 25%)', // Forest green ring
      destructive: 'hsl(0 84% 60%)', // Red
      destructiveForeground: 'hsl(0 0% 98%)', // White
      success: 'hsl(160 84% 39%)', // Green
      successForeground: 'hsl(0 0% 98%)', // White
      warning: 'hsl(45 93% 47%)', // Amber
      warningForeground: 'hsl(0 0% 98%)', // White
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
  rose: {
    name: 'Rose',
    colors: {
      primary: 'hsl(330 81% 60%)', // Elegant pink
      secondary: 'hsl(45 100% 50%)', // Rose gold
      accent: 'hsl(320 100% 70%)', // Bright pink
      background: 'hsl(0 0% 100%)', // White
      foreground: 'hsl(330 100% 10%)', // Dark pink
      muted: 'hsl(330 100% 98%)', // Very light pink
      mutedForeground: 'hsl(330 50% 45%)', // Medium pink
      border: 'hsl(330 100% 90%)', // Light pink border
      input: 'hsl(0 0% 100%)', // White input
      ring: 'hsl(330 81% 60%)', // Pink ring
      destructive: 'hsl(0 84% 60%)', // Red
      destructiveForeground: 'hsl(0 0% 98%)', // White
      success: 'hsl(160 84% 39%)', // Green
      successForeground: 'hsl(0 0% 98%)', // White
      warning: 'hsl(45 93% 47%)', // Amber
      warningForeground: 'hsl(0 0% 98%)', // White
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
  aurora: {
    name: 'Aurora',
    colors: {
      primary: 'hsl(280 100% 60%)', // Vibrant purple
      secondary: 'hsl(180 100% 50%)', // Cyan
      accent: 'hsl(300 100% 70%)', // Bright magenta
      background: 'hsl(0 0% 100%)', // White
      foreground: 'hsl(280 100% 10%)', // Dark purple
      muted: 'hsl(280 100% 98%)', // Very light purple
      mutedForeground: 'hsl(280 50% 45%)', // Medium purple
      border: 'hsl(280 100% 90%)', // Light purple border
      input: 'hsl(0 0% 100%)', // White input
      ring: 'hsl(280 100% 60%)', // Purple ring
      destructive: 'hsl(0 84% 60%)', // Red
      destructiveForeground: 'hsl(0 0% 98%)', // White
      success: 'hsl(160 84% 39%)', // Green
      successForeground: 'hsl(0 0% 98%)', // White
      warning: 'hsl(45 93% 47%)', // Amber
      warningForeground: 'hsl(0 0% 98%)', // White
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
  desert: {
    name: 'Desert',
    colors: {
      primary: 'hsl(30 80% 50%)', // Terracotta
      secondary: 'hsl(45 60% 40%)', // Sand brown
      accent: 'hsl(20 100% 60%)', // Burnt orange
      background: 'hsl(0 0% 100%)', // White
      foreground: 'hsl(30 100% 10%)', // Dark terracotta
      muted: 'hsl(30 100% 98%)', // Very light terracotta
      mutedForeground: 'hsl(30 50% 45%)', // Medium terracotta
      border: 'hsl(30 100% 90%)', // Light terracotta border
      input: 'hsl(0 0% 100%)', // White input
      ring: 'hsl(30 80% 50%)', // Terracotta ring
      destructive: 'hsl(0 84% 60%)', // Red
      destructiveForeground: 'hsl(0 0% 98%)', // White
      success: 'hsl(160 84% 39%)', // Green
      successForeground: 'hsl(0 0% 98%)', // White
      warning: 'hsl(45 93% 47%)', // Amber
      warningForeground: 'hsl(0 0% 98%)', // White
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
  cherry: {
    name: 'Cherry',
    colors: {
      primary: 'hsl(0 70% 50%)', // Deep red
      secondary: 'hsl(330 50% 30%)', // Burgundy
      accent: 'hsl(20 100% 60%)', // Bright red
      background: 'hsl(0 0% 100%)', // White
      foreground: 'hsl(0 100% 10%)', // Dark red
      muted: 'hsl(0 100% 98%)', // Very light red
      mutedForeground: 'hsl(0 50% 45%)', // Medium red
      border: 'hsl(0 100% 90%)', // Light red border
      input: 'hsl(0 0% 100%)', // White input
      ring: 'hsl(0 70% 50%)', // Red ring
      destructive: 'hsl(0 84% 60%)', // Red
      destructiveForeground: 'hsl(0 0% 98%)', // White
      success: 'hsl(160 84% 39%)', // Green
      successForeground: 'hsl(0 0% 98%)', // White
      warning: 'hsl(45 93% 47%)', // Amber
      warningForeground: 'hsl(0 0% 98%)', // White
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
  lavender: {
    name: 'Lavender',
    colors: {
      primary: 'hsl(270 60% 60%)', // Soft purple
      secondary: 'hsl(300 40% 70%)', // Lilac
      accent: 'hsl(280 80% 70%)', // Bright lavender
      background: 'hsl(0 0% 100%)', // White
      foreground: 'hsl(270 100% 10%)', // Dark purple
      muted: 'hsl(270 100% 98%)', // Very light purple
      mutedForeground: 'hsl(270 50% 45%)', // Medium purple
      border: 'hsl(270 100% 90%)', // Light purple border
      input: 'hsl(0 0% 100%)', // White input
      ring: 'hsl(270 60% 60%)', // Purple ring
      destructive: 'hsl(0 84% 60%)', // Red
      destructiveForeground: 'hsl(0 0% 98%)', // White
      success: 'hsl(160 84% 39%)', // Green
      successForeground: 'hsl(0 0% 98%)', // White
      warning: 'hsl(45 93% 47%)', // Amber
      warningForeground: 'hsl(0 0% 98%)', // White
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
  steel: {
    name: 'Steel',
    colors: {
      primary: 'hsl(210 20% 40%)', // Steel gray
      secondary: 'hsl(210 10% 60%)', // Light gray
      accent: 'hsl(210 30% 70%)', // Silver
      background: 'hsl(0 0% 100%)', // White
      foreground: 'hsl(210 20% 10%)', // Dark gray
      muted: 'hsl(210 20% 98%)', // Very light gray
      mutedForeground: 'hsl(210 10% 45%)', // Medium gray
      border: 'hsl(210 20% 90%)', // Light gray border
      input: 'hsl(0 0% 100%)', // White input
      ring: 'hsl(210 20% 40%)', // Steel gray ring
      destructive: 'hsl(0 84% 60%)', // Red
      destructiveForeground: 'hsl(0 0% 98%)', // White
      success: 'hsl(160 84% 39%)', // Green
      successForeground: 'hsl(0 0% 98%)', // White
      warning: 'hsl(45 93% 47%)', // Amber
      warningForeground: 'hsl(0 0% 98%)', // White
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

export function getThemeCSSVariables(
  theme: ThemeConfig
): Record<string, string> {
  return {
    '--background': theme.colors.background,
    '--foreground': theme.colors.foreground,
    '--card': theme.colors.background,
    '--card-foreground': theme.colors.foreground,
    '--popover': theme.colors.background,
    '--popover-foreground': theme.colors.foreground,
    '--primary': theme.colors.primary,
    '--primary-foreground': theme.colors.foreground,
    '--secondary': theme.colors.secondary,
    '--secondary-foreground': theme.colors.foreground,
    '--muted': theme.colors.muted,
    '--muted-foreground': theme.colors.mutedForeground,
    '--accent': theme.colors.accent,
    '--accent-foreground': theme.colors.foreground,
    '--destructive': theme.colors.destructive,
    '--destructive-foreground': theme.colors.foreground,
    '--border': theme.colors.border,
    '--input': theme.colors.input,
    '--ring': theme.colors.ring,
  };
}
