import React, { useRef } from 'react'
import { motion, useInView, Variants } from 'framer-motion'

export default function HeroTitle() {
  const brand = "DON'T BE DUMB";
  const ref = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const letters = brand.split('');

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: 3.2
      }
    }
  };

  const child: Variants = {
    hidden: {
      opacity: 0,
      y: 40,
      filter: 'blur(6px)'
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1]
      }
    }
  };

  return (
    <div className="absolute bottom-0 left-0 right-0 z-50 px-6 pb-4 w-full mix-blend-difference text-white pointer-events-none">
      <div className="flex flex-col w-full">
        <motion.h1
          ref={ref}
          className="
            flex justify-between w-full
            font-semibold leading-[0.75]
            text-[clamp(2rem,18vw,11.5rem)] 
            font-tanker uppercase tracking-wider
            gap-10
          "
          aria-label="Hallage"
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {letters.map((letter, i) => (
            <motion.span
              key={i}
              className="inline-block"
              variants={child}
            >
              {letter}
            </motion.span>
          ))}
        </motion.h1>
      </div>
    </div>
  )
}