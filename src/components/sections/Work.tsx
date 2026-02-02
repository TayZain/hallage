'use client';
import React from 'react'
import Image from 'next/image'

import FadeIn from '../ui/FadeIn'
import MaskText from '../ui/MaskText'

export default function Work() {
  return (
    <div className="relative z-10 min-h-screen bg-white py-20 text-black">
      <div className="container mx-auto px-4">

        <MaskText
          phrases={["SELECTED", "WORKS"]}
          className="text-[8vw] font-bespoke leading-none mb-32 tracking-tighter"
        />

        <div className="grid grid-cols-1 md:grid-cols-6 gap-x-8 gap-y-32">

          <div className="col-span-2 flex flex-col justify-end">
            <FadeIn delay={0.2} className="mb-8">
              <h3 className="text-5xl font-tanker mb-4">ALPINE LODGE</h3>
              <p className="font-bespoke text-xl leading-relaxed opacity-80">
                Une immersion totale dans le luxe alpin.
                Architecture traditionnelle revisitée avec une touche moderne.
              </p>
            </FadeIn>
            <div className="flex gap-4 text-sm font-tanker tracking-wider">
              <FadeIn delay={0.3}>
                <span className="border border-black px-6 py-2 rounded-full hover:bg-black hover:text-white transition-colors cursor-pointer">ARCHITECTURE</span>
              </FadeIn>
              <FadeIn delay={0.4}>
                <span className="border border-black px-6 py-2 rounded-full hover:bg-black hover:text-white transition-colors cursor-pointer">2024</span>
              </FadeIn>
            </div>
          </div>

          <div className="col-span-4 h-[40vw] bg-gray-100 relative overflow-hidden group">
            <FadeIn delay={0.2} className="w-full h-full relative">
              <Image
                src="/images/1.1.jpg"
                alt="Alpine Lodge"
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                loading="lazy"
                quality={85}
              />
            </FadeIn>
          </div>

          <div className="col-span-3 h-[35vw] bg-gray-100 relative overflow-hidden group">
            <FadeIn className="w-full h-full relative">
              <Image
                src="/images/1.2.jpg"
                alt="Urban Retreat"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                loading="lazy"
                quality={85}
              />
            </FadeIn>
          </div>

          <div className="col-span-3 flex flex-col justify-center pl-10">
            <FadeIn delay={0.2}>
              <h3 className="text-5xl font-tanker mb-4">URBAN RETREAT</h3>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="font-bespoke text-xl leading-relaxed max-w-md opacity-80">
                Un havre de paix au coeur de la ville.
                Utilisation de matériaux naturels pour créer une atmosphère zen.
              </p>
            </FadeIn>
          </div>


          <div className="col-span-2 flex flex-col justify-end">
            <FadeIn delay={0.2} className="mb-8">
              <h3 className="text-3xl font-tanker mb-4">ALPINE LODGE</h3>
              <p className="font-bespoke text-xl leading-relaxed opacity-80">
                Une immersion totale dans le luxe alpin.
                Architecture traditionnelle revisitée avec une touche moderne.
              </p>
            </FadeIn>
            <div className="flex gap-4 text-sm font-tanker tracking-wider">
              <FadeIn delay={0.3}>
                <span className="border border-black px-6 py-2 rounded-full hover:bg-black hover:text-white transition-colors cursor-pointer">ARCHITECTURE</span>
              </FadeIn>
              <FadeIn delay={0.4}>
                <span className="border border-black px-6 py-2 rounded-full hover:bg-black hover:text-white transition-colors cursor-pointer">2024</span>
              </FadeIn>
            </div>
          </div>

          <div className="col-span-4 h-[25vw] bg-gray-100 relative overflow-hidden group">
            <FadeIn delay={0.2} className="w-full h-full">
              <Image src="/images/1.1.jpg" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" alt={'Alpine Lodge'} />
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  )
}
