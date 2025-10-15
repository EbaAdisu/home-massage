'use client';

import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
}

export function PageTransition({ children, className }: PageTransitionProps) {
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20,
      scale: 0.98,
    },
    in: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
    out: {
      opacity: 0,
      y: -20,
      scale: 1.02,
    },
  };

  const pageTransition = {
    type: 'tween' as const,
    ease: 'easeInOut',
    duration: 0.3,
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
