"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/profile";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openMenu = () => {
    document.dispatchEvent(new CustomEvent("open-menu"));
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-4 bg-bg/70 backdrop-blur-md" : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        <a
          href="#hero"
          className="font-display font-bold text-lg tracking-tight"
          data-cursor="link"
        >
          AVS<span className="text-accent">.</span>
        </a>

        <button
          onClick={openMenu}
          className="group flex items-center gap-3 text-sm font-mono uppercase tracking-widest text-ink-muted hover:text-ink transition-colors"
          data-cursor="link"
          aria-label="Open menu"
        >
          <span>Menu</span>
          <span className="text-accent text-xl leading-none">+</span>
        </button>
      </div>
    </header>
  );
}
