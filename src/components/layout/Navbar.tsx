"use client"

import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

const FlipLink = ({ children, href, index }: { children: string; href?: string; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20, filter: 'blur(4px)' }}
      animate={{
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: {
          duration: 0.5,
          ease: [0.25, 0.4, 0.25, 1],
          delay: index * 0.1
        }
      }}
    >
      <motion.a
        initial="initial"
        whileHover="hovered"
        href={href}
        className="relative cursor-pointer block overflow-hidden whitespace-nowrap text-xl font-semibold uppercase tracking-wider"
      >
        <motion.div
          variants={{ initial: { y: 0 }, hovered: { y: "100%" } }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
        >
          {children}
        </motion.div>
        <motion.div
          className="absolute inset-0"
          variants={{ initial: { y: "-100%" }, hovered: { y: 0 } }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
        >
          {children}
        </motion.div>
      </motion.a>
    </motion.div>
  );
};

const VolumeButton = ({ audioRef }: { audioRef: React.RefObject<HTMLAudioElement | null> }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const toggleAudio = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (!isPlaying) {
        audio.muted = false;
        setIsMuted(false);
        await audio.play();
        setIsPlaying(true);
      } else {
        audio.pause();
        setIsPlaying(false);
      }
    } catch (err) {
      console.log("Lecture audio refusée:", err);
    }
  };

  return (
    <motion.button
      onClick={toggleAudio}
      className="w-10 h-10 cursor-pointer flex items-center justify-center transition-transform hover:scale-110"
      aria-label={isPlaying ? "Mute" : "Unmute"}
      initial={{ opacity: 0, y: -20, filter: 'blur(4px)' }}
      animate={{
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1], delay: 0.4 }
      }}
    >
      {isPlaying && !isMuted ? (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
        </svg>
      ) : (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
          <line x1="23" y1="9" x2="17" y2="15" />
          <line x1="17" y1="9" x2="23" y2="15" />
        </svg>
      )}
    </motion.button>
  );
};

export default function Navbar() {
  const audioRef = useRef<HTMLAudioElement>(null);
  // isDarkText = true si on veut du texte noir (sur fond blanc)
  const [isDarkText, setIsDarkText] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;

      // Logique pour déterminer la couleur du texte
      // Zone 1 : Intro (0 à 100vh) -> Texte BLANC (isDarkText = false)
      // Zone 2 : Description (100vh à 200vh) -> Texte NOIR (isDarkText = true)
      // Zone 3 : Section1 (200vh+) -> Texte BLANC (isDarkText = false)

      // On ajoute un petit buffer (-50px) pour la transition
      if (scrollY > vh - 50 && scrollY < (2 * vh) - 50) {
        setIsDarkText(true);
      } else {
        setIsDarkText(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.muted = true;
    audio.play().catch(error => {
      console.log("Autoplay bloqué / ou en attente d'interaction:", error);
    });
  }, []);

  const textColorClass = isDarkText ? "text-black" : "text-white";
  const borderColorClass = isDarkText ? "border-black hover:bg-black hover:text-white" : "border-white hover:bg-white hover:text-black";

  return (
    <>
      <audio ref={audioRef} loop muted playsInline>
        <source src="/audio/1.mp3" type="audio/mpeg" />
        Votre navigateur ne supporte pas l'audio.
      </audio>

      <nav className={`fixed top-0 left-0 right-0 z-50 grid grid-cols-3 items-center px-6 py-4 transition-colors duration-300 ${textColorClass}`}>
        <div className="flex justify-start font-tanker">
          <div className="flex gap-8">
            <FlipLink index={0}>HOME</FlipLink>
            <FlipLink index={1}>WORK</FlipLink>
            <FlipLink index={2}>ABOUT</FlipLink>
          </div>
        </div>

        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0, filter: 'blur(4px)' }}
          animate={{
            opacity: 1,
            filter: 'blur(0px)',
            transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1], delay: 0.3 }
          }}
        >
          <div className={`w-20 h-20 flex items-center justify-center text-2xl font-bold uppercase font-tanker tracking-wider ${textColorClass}`}>
            HALLAGE
          </div>
        </motion.div>

        <div className="flex justify-end items-center gap-4 font-tanker">
          <VolumeButton audioRef={audioRef} />
          <motion.button
            className={`text-xl cursor-pointer font-semibold uppercase tracking-wider border px-6 py-2 rounded-full transition-all ${borderColorClass}`}
            initial={{ opacity: 0, y: -20, filter: 'blur(4px)' }}
            animate={{
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
              transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1], delay: 0.5 }
            }}
          >
            Let's talk
          </motion.button>
        </div>
      </nav>
    </>
  )
}
