'use client';

import { motion } from 'framer-motion';
import React from 'react';

interface SlideUpProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export function SlideUp({
  children,
  delay = 0,
  duration = 300,
  className,
}: SlideUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: duration / 1000,
          delay: delay / 1000,
          ease: 'easeOut' as const,
        }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
