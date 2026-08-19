"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState(false);
  const [label, setLabel] = useState<string>("");

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    const handleMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    };

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const closest = target.closest("[data-cursor]");
      if (closest) {
        const mode = closest.getAttribute("data-cursor");
        setHover(true);
        setLabel(mode === "view" ? "VIEW" : mode === "drag" ? "DRAG" : "");
      } else {
        setHover(false);
        setLabel("");
      }
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }
      requestAnimationFrame(animate);
    };
    animate();

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleOver);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="custom-cursor pointer-events-none fixed left-0 top-0 z-[999] mix-blend-difference"
        style={{ transform: "translate3d(-100px,-100px,0)" }}
      >
        <div
          className={`-translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center text-[10px] font-mono tracking-widest text-bg transition-all duration-300 ${
            hover ? "w-16 h-16 bg-accent" : "w-2 h-2 bg-ink"
          }`}
        >
          {hover && label}
        </div>
      </div>
      <div
        ref={ringRef}
        className="custom-cursor pointer-events-none fixed left-0 top-0 z-[998]"
        style={{ transform: "translate3d(-100px,-100px,0)" }}
      >
        <div
          className={`-translate-x-1/2 -translate-y-1/2 rounded-full border transition-all duration-300 ${
            hover
              ? "w-20 h-20 border-accent opacity-60"
              : "w-10 h-10 border-ink/30"
          }`}
        />
      </div>
    </>
  );
}
