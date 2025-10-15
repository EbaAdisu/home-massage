'use client';

import { motion } from 'framer-motion';
import React from 'react';

interface StaggerChildrenProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export function StaggerChildren({
  children,
  delay = 0,
  duration = 300,
  className,
}: StaggerChildrenProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay / 1000,
        staggerChildren: 0.1,
        duration: duration / 1000,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div key={index} variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
