'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  margin?: string;
}

export default function FadeIn({ children, delay = 0, className = "", margin = "-10%" }: FadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: margin as any });

  return (
    <motion.div
      ref={ref}
      className={`${className} will-change-transform`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
