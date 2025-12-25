'use client';

import { motion, type MotionProps } from 'framer-motion';
import type { ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
} & MotionProps;

export default function Reveal({
  children,
  className,
  delay = 0,
  ...motionProps
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -15% 0px' }}
      transition={{ duration: 0.55, ease: 'easeOut', delay }}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}
