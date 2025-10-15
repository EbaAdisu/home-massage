'use client';

import { motion } from 'framer-motion';
import React from 'react';

interface HoverLiftProps {
  children: React.ReactNode;
  className?: string;
  scale?: number;
  duration?: number;
}

export function HoverLift({
  children,
  className,
  scale = 1.05,
  duration = 0.3,
}: HoverLiftProps) {
  return (
    <motion.div
      whileHover={{
        scale,
        transition: {
          duration,
          ease: 'easeOut',
        },
      }}
      whileTap={{
        scale: 0.98,
        transition: {
          duration: 0.1,
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
