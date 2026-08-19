"use client";

import { useEffect, useRef, useState } from "react";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [hidden, setHidden] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf: number;
    let p = 0;
    const duration = 1800; // total time
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(elapsed / duration, 1);
      // ease out
      const eased = 1 - Math.pow(1 - t, 3);
      p = Math.floor(eased * 100);
      setProgress(p);
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${eased})`;
      }
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        // hold then hide
        setTimeout(() => {
          setHidden(true);
          document.body.style.overflow = "auto";
        }, 350);
      }
    };

    document.body.style.overflow = "hidden";
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-bg flex items-center justify-center transition-opacity duration-700 ${
        progress === 100 ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="w-full max-w-7xl px-6 lg:px-12">
        <div className="flex items-end justify-between mb-6">
          <div className="section-num">Loading</div>
          <div className="section-num">AVS VIGNESH</div>
        </div>

        <div
          ref={counterRef}
          className="display-text text-[18vw] lg:text-[14vw] leading-none tracking-tightest"
        >
          {progress.toString().padStart(2, "0")}
          <span className="text-accent">.</span>
        </div>

        <div className="mt-8 h-px w-full bg-border overflow-hidden">
          <div
            ref={barRef}
            className="h-full bg-accent origin-left"
            style={{ transform: "scaleX(0)" }}
          />
        </div>

        <div className="mt-4 flex justify-between text-xs text-ink-muted font-mono uppercase tracking-widest">
          <span>Initializing</span>
          <span>{progress}%</span>
        </div>
      </div>
    </div>
  );
}
