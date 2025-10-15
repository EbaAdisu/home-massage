'use client';

import { useThemeStore } from '@/stores/theme-store';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export function TopLoader() {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();
  const { currentTheme } = useThemeStore();

  useEffect(() => {
    let progressInterval: NodeJS.Timeout;
    let timeoutId: NodeJS.Timeout;

    const startLoading = () => {
      setIsLoading(true);
      setProgress(0);
      
      // Real loading simulation based on actual navigation
      let currentProgress = 0;
      progressInterval = setInterval(() => {
        currentProgress += Math.random() * 8 + 2; // 2-10% increments
        if (currentProgress >= 85) {
          clearInterval(progressInterval);
          setProgress(85);
        } else {
          setProgress(currentProgress);
        }
      }, 50);
    };

    const finishLoading = () => {
      clearInterval(progressInterval);
      setProgress(100);
      
      // Hide loader after completion
      timeoutId = setTimeout(() => {
        setIsLoading(false);
        setProgress(0);
      }, 300);
    };

    // Start loading immediately on route change
    startLoading();

    // Finish loading when page is actually loaded
    const handleLoad = () => {
      finishLoading();
    };

    // Listen for actual page load events
    window.addEventListener('load', handleLoad);
    
    // Also finish after a reasonable time (fallback)
    const fallbackTimer = setTimeout(finishLoading, 2000);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timeoutId);
      clearTimeout(fallbackTimer);
      window.removeEventListener('load', handleLoad);
    };
  }, [pathname]);

  // Theme-based styling with proper gradients
  const getThemeStyles = () => {
    switch (currentTheme) {
      case 'wellness':
        return {
          background: 'bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500',
          glow: 'shadow-green-500/30'
        };
      case 'luxury':
        return {
          background: 'bg-gradient-to-r from-purple-500 via-violet-600 to-indigo-600',
          glow: 'shadow-purple-500/30'
        };
      case 'modern':
        return {
          background: 'bg-gradient-to-r from-blue-500 via-cyan-500 to-sky-500',
          glow: 'shadow-blue-500/30'
        };
      case 'spa':
        return {
          background: 'bg-gradient-to-r from-amber-400 via-orange-500 to-red-500',
          glow: 'shadow-amber-500/30'
        };
      default:
        return {
          background: 'bg-gradient-to-r from-primary via-primary/90 to-primary/80',
          glow: 'shadow-primary/30'
        };
    }
  };

  const themeStyles = getThemeStyles();

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.15, ease: 'easeOut' }}
          className="fixed top-0 left-0 right-0 z-[9999]"
        >
          {/* Main progress bar */}
          <div className="relative h-1 bg-background/10">
            <motion.div
              className={`h-full ${themeStyles.background} ${themeStyles.glow} shadow-lg`}
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ 
                duration: 0.2, 
                ease: [0.4, 0, 0.2, 1] // Custom easing for smooth progress
              }}
            />
            
            {/* Shimmer effect */}
            <motion.div
              className="absolute top-0 h-full w-8 bg-white/30 blur-sm"
              animate={{
                x: ['-32px', '100vw'],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'linear'
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
