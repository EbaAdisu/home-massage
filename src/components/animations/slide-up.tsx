'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useThemeContext } from '../theme-provider';

interface SlideUpProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export function SlideUp({ 
  children, 
  delay = 0, 
  duration,
  className 
}: SlideUpProps) {
  const { themeConfig } = useThemeContext();

  const animationDuration = duration || themeConfig.animations.duration.normal;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: parseFloat(animationDuration.replace('ms', '')) / 1000,
        delay: delay / 1000,
        ease: themeConfig.animations.easing.easeOut,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
