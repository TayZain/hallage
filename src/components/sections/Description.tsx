"use client"

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import FadeIn from '../ui/FadeIn'
import MaskText from '../ui/MaskText'

const ZoomImage = ({ src }: { src: string }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);

  return (
    <div ref={container} className="w-full h-full overflow-hidden relative">
      <motion.div style={{ scale }} className="w-full h-full relative will-change-transform">
        <Image
          src={src}
          alt="Descriptive image"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          loading="lazy"
          quality={85}
        />
      </motion.div>
    </div>
  )
}

export default function Description() {
  const textPhrases1 = [
    "Step into a world where",
    "cosmopolitan flair and alpine spirit",
    "exist in perfect harmony."
  ];

  const textPhrases2 = [
    "Embrace year-round pursuits –",
    "from world-renowned skiing",
    "to Michelin-starred dining.",
    "This is alpine life, elevated."
  ];

  return (
    <div className="relative z-10 flex flex-col bg-white w-full">
      <div className="flex items-center">
        <MaskText
          phrases={textPhrases1}
          className="text-[2.5vw] uppercase p-20 font-bespoke text-black max-w-[45vw] leading-tight text-left"
        />
        <FadeIn className="w-[30vw] h-[22vw] ml-40">
          <ZoomImage src="/images/1.1.jpg" />
        </FadeIn>
      </div>

      <div className="ml-auto flex items-center">
        <FadeIn className="w-[30vw] h-[30vw] mr-40">
          <ZoomImage src="/images/1.2.jpg" />
        </FadeIn>
        <MaskText
          phrases={textPhrases2}
          className="text-[2.5vw] uppercase p-20 font-bespoke text-black max-w-[45vw] leading-tight text-right"
        />
      </div>
    </div>
  )
}