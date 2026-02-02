'use client'

import { useScroll, useTransform, motion } from 'framer-motion';
import React, { useRef } from 'react';
import MaskText from '../ui/MaskText';

export default function Section1() {
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  });

  const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    ["circle(0% at 50% 50%)", "circle(100% at 50% 50%)"]
  );

  const textPhrases = [
    "We have a bold vision",
    "for the future of travel",
    "where you can better connect",
    "with the outdoors and each other."
  ];

  return (
    <div ref={container} className="relative z-10 h-[300vh] bg-black">

      <div className="sticky top-0 h-screen overflow-hidden contain-layout">

        <motion.div
          className="absolute inset-0 will-change-transform"
          style={{ clipPath }}
        >
          <video
            src="/videos/4.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="object-cover w-full h-full pointer-events-none"
          />
        </motion.div>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <MaskText
            phrases={textPhrases}
            className="text-white text-4xl font-tanker uppercase text-center px-10 max-w-4xl"
          />
        </div>

      </div>
    </div>
  )
}