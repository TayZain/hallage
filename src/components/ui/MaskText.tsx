'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface MaskTextProps {
  phrases: string[];
  className?: string;
}

export default function MaskText({ phrases, className = "" }: MaskTextProps) {
  const body = useRef(null);
  const isInView = useInView(body, { once: true, margin: "-20%" });

  const animation = {
    initial: { y: "100%" },
    enter: (i: number) => ({
      y: "0%",
      transition: {
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1] as [number, number, number, number],
        delay: 0.075 * i
      }
    })
  };

  return (
    <div ref={body} className={className}>
      {phrases.map((phrase, index) => (
        <div key={index} className="overflow-hidden">
          <motion.p
            custom={index}
            variants={animation}
            initial="initial"
            animate={isInView ? "enter" : ""}
            className="will-change-transform"
          >
            {phrase}
          </motion.p>
        </div>
      ))}
    </div>
  );
}
