import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ThemeConfig, getTheme, getAllThemes, defaultTheme } from '@/lib/theme';

interface ThemeStore {
  // Current theme state
  currentTheme: string;
  isDarkMode: boolean;
  animationSpeed: 'slow' | 'normal' | 'fast';

  // Theme configuration
  customTheme: ThemeConfig | null;

  // Actions
  setTheme: (themeName: string) => void;
  toggleDarkMode: () => void;
  setAnimationSpeed: (speed: 'slow' | 'normal' | 'fast') => void;
  setCustomTheme: (theme: ThemeConfig) => void;
  resetTheme: () => void;

  // Getters
  getCurrentThemeConfig: () => ThemeConfig;
  getAvailableThemes: () => string[];
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set, get) => ({
      // Initial state
      currentTheme: defaultTheme,
      isDarkMode: false,
      animationSpeed: 'normal',
      customTheme: null,

      // Actions
      setTheme: (themeName: string) => {
        set({ currentTheme: themeName });
      },

      toggleDarkMode: () => {
        set(state => ({ isDarkMode: !state.isDarkMode }));
      },

      setAnimationSpeed: (speed: 'slow' | 'normal' | 'fast') => {
        set({ animationSpeed: speed });
      },

      setCustomTheme: (theme: ThemeConfig) => {
        set({ customTheme: theme });
      },

      resetTheme: () => {
        set({
          currentTheme: defaultTheme,
          isDarkMode: false,
          animationSpeed: 'normal',
          customTheme: null,
        });
      },

      // Getters
      getCurrentThemeConfig: () => {
        const { currentTheme, customTheme } = get();
        return customTheme || getTheme(currentTheme);
      },

      getAvailableThemes: () => {
        return getAllThemes();
      },
    }),
    {
      name: 'theme-storage',
      partialize: state => ({
        currentTheme: state.currentTheme,
        isDarkMode: state.isDarkMode,
        animationSpeed: state.animationSpeed,
        customTheme: state.customTheme,
      }),
    }
  )
);

// Theme hook for easy access
export const useTheme = () => {
  const store = useThemeStore();

  return {
    // State
    currentTheme: store.currentTheme,
    isDarkMode: store.isDarkMode,
    animationSpeed: store.animationSpeed,
    customTheme: store.customTheme,

    // Actions
    setTheme: store.setTheme,
    toggleDarkMode: store.toggleDarkMode,
    setAnimationSpeed: store.setAnimationSpeed,
    setCustomTheme: store.setCustomTheme,
    resetTheme: store.resetTheme,

    // Computed
    themeConfig: store.getCurrentThemeConfig(),
    availableThemes: store.getAvailableThemes(),
  };
};
