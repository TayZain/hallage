"use client"

import React from 'react'
import Headers from '../layout/Headers'
import HeroTitle from '../layout/HeroTitle'

export default function Intro() {
  return (
    <div className="h-screen sticky top-0 z-0 contain-layout">
      <video
        src="/videos/1.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="object-cover w-full h-full will-change-transform pointer-events-none"
      />

      <HeroTitle />

      <div className="absolute top-0 left-0 right-0 z-50">
        <div className="container mx-auto">
          <Headers />
        </div>
      </div>
    </div>
  )
}