// Preloader.tsx
'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [index, setIndex] = useState(0); // 0..100
  const [hasMounted, setHasMounted] = useState(false);
  const [dimension, setDimension] = useState<{ width: number; height: number }>({ width: 0, height: 0 });

  const loaderRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const rafCounter = useRef<number | null>(null);
  const rafCurve = useRef<number | null>(null);

  const INITIAL_CURVE = 300; // extra height under viewport
  const COUNTER_DURATION_MS = 2000; // 2s exact
  const PAUSES = [
    { atPercent: 30, pauseMs: 500 },
    { atPercent: 70, pauseMs: 600 },
  ];

  // Mount + dimensions
  useEffect(() => {
    setHasMounted(true);
    const updateSize = () => setDimension({ width: window.innerWidth, height: window.innerHeight });
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  // Build path string
  const buildPath = (curve: number) => {
    const width = dimension.width;
    const height = (dimension.height || window.innerHeight) + INITIAL_CURVE;
    return `M0 0 L${width} 0 L${width} ${height} Q${width / 2} ${height - curve} 0 ${height} L0 0 Z`;
  };

  const setPath = (curve: number) => {
    if (!pathRef.current || dimension.width === 0) return;
    pathRef.current.setAttribute('d', buildPath(curve));
  };

  useEffect(() => {
    // Initialise le path à 0 (plat) dès qu'on a les dimensions
    if (dimension.width > 0) {
      setPath(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dimension]);

  const easeOutQuad = (t: number, s: number, e: number, d: number) => -e * ((t /= d) * (t - 2)) + s;

  // Counter: 0→100 in 2s with pauses at 30% and 70%
  useEffect(() => {
    if (!hasMounted) return;

    let start: number | null = null;
    let pausedUntil = 0;
    let accumulatedPause = 0;
    let reached30 = false;
    let reached70 = false;

    const step = (ts: number) => {
      if (start === null) start = ts;
      // If currently paused, keep the same index and continue until pause ends
      if (ts < pausedUntil) {
        rafCounter.current = requestAnimationFrame(step);
        return;
      }

      const elapsedNoPause = ts - start - accumulatedPause;
      // compute percent based on elapsedNoPause over COUNTER_DURATION_MS
      let percent = Math.floor((elapsedNoPause / COUNTER_DURATION_MS) * 100);
      percent = Math.max(0, Math.min(100, percent));

      // schedule pauses when crossing thresholds the first time
      if (!reached30 && percent >= 30) {
        reached30 = true;
        pausedUntil = ts + PAUSES[0].pauseMs;
        accumulatedPause += PAUSES[0].pauseMs;
      } else if (!reached70 && percent >= 70) {
        reached70 = true;
        pausedUntil = ts + PAUSES[1].pauseMs;
        accumulatedPause += PAUSES[1].pauseMs;
      }

      setIndex(percent);

      if (percent < 100) {
        rafCounter.current = requestAnimationFrame(step);
      } else {
        // stop counter and trigger curve animation
        if (rafCounter.current) {
          cancelAnimationFrame(rafCounter.current);
          rafCounter.current = null;
        }
        triggerCurveAnimation();
      }
    };

    rafCounter.current = requestAnimationFrame(step);

    return () => {
      if (rafCounter.current) cancelAnimationFrame(rafCounter.current);
      rafCounter.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasMounted]);

  const [isCurveStarted, setIsCurveStarted] = useState(false);

  const triggerCurveAnimation = () => {
    if (!hasMounted || dimension.width === 0 || dimension.height === 0) {
      requestAnimationFrame(triggerCurveAnimation);
      return;
    }

    setIsCurveStarted(true);
    setPath(INITIAL_CURVE);

    let start: number | null = null;
    const duration = 700;

    const step = (ts: number) => {
      if (start === null) start = ts;
      const elapsed = ts - start;

      const overlayHeight = (dimension.height || window.innerHeight) + INITIAL_CURVE;
      const topPx = easeOutQuad(elapsed, 0, -overlayHeight, duration);
      if (loaderRef.current) {
        loaderRef.current.style.top = `${topPx}px`;
      }

      const newCurve = easeOutQuad(elapsed, INITIAL_CURVE, -INITIAL_CURVE, duration);
      setPath(newCurve);

      if (elapsed < duration) {
        rafCurve.current = requestAnimationFrame(step);
      } else {
        setIsLoading(false);
        if (rafCurve.current) {
          cancelAnimationFrame(rafCurve.current);
          rafCurve.current = null;
        }
      }
    };

    rafCurve.current = requestAnimationFrame(step);
  };

  useEffect(() => {
    return () => {
      if (rafCounter.current) cancelAnimationFrame(rafCounter.current);
      if (rafCurve.current) cancelAnimationFrame(rafCurve.current);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          ref={loaderRef}
          className={`fixed inset-0 z-[99] cursor-wait ${isCurveStarted ? 'bg-transparent' : 'bg-black'}`}
          style={{ height: 'calc(100vh + 300px)', top: 0, left: 0 }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.4 } }}
        >
          {hasMounted && dimension.width > 0 && dimension.height > 0 && (
            <svg
              className="absolute top-0 left-0 w-full h-full pointer-events-none"
              viewBox={`0 0 ${dimension.width} ${(dimension.height || 0) + INITIAL_CURVE}`}
              preserveAspectRatio="none"
            >
              <path ref={pathRef} fill="black" />
            </svg>
          )}

          <div className="absolute inset-0 flex items-center justify-center">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.3 } }}
              className="text-white text-[20vw] md:text-8xl lg:text-9xl font-tanker"
            >
              {index}%
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
