"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { profile } from "@/data/profile";
import { ArrowUpRight, Mail } from "lucide-react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 2.2 }); // wait for preloader
      tl.from(".hero-line", {
        y: 120,
        opacity: 0,
        stagger: 0.12,
        duration: 1.1,
        ease: "power4.out",
      })
        .from(
          ".hero-fade",
          { y: 30, opacity: 0, duration: 0.9, stagger: 0.1, ease: "power3.out" },
          "-=0.6"
        )
        .from(
          ".hero-cta",
          { y: 20, opacity: 0, duration: 0.7, stagger: 0.08, ease: "power3.out" },
          "-=0.4"
        );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleHover = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(el, { x: x * 0.25, y: y * 0.25, duration: 0.4, ease: "power3.out" });
  };
  const handleLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.4)" });
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex flex-col justify-between px-6 lg:px-12 pt-32 pb-12 z-10"
    >
      {/* Top meta */}
      <div ref={metaRef} className="flex items-center justify-between">
        <div className="hero-fade flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="section-num">Available for Internships</span>
        </div>
        <div className="hero-fade hidden md:flex items-center gap-6 text-xs font-mono uppercase tracking-widest text-ink-muted">
          <span>India · {profile.location.split(",")[0]}</span>
          <span className="text-accent">●</span>
          <span>2027</span>
        </div>
      </div>

      {/* Center title */}
      <div className="flex-1 flex items-center my-12 lg:my-0">
        <div className="w-full">
          <h1
            ref={titleRef}
            className="display-text text-[15vw] md:text-[12vw] lg:text-[10.5vw] leading-[0.85]"
          >
            <span className="hero-line block">AVS</span>
            <span className="hero-line block text-accent italic">VIGNESH</span>
            <span className="hero-line block text-ink-muted text-[8vw] md:text-[6vw] lg:text-[5vw] mt-4">
              {profile.role.split(" ")[0]} · {profile.role.split(" ")[1]}
            </span>
          </h1>
        </div>
      </div>

      {/* Bottom block */}
      <div className="grid lg:grid-cols-12 gap-8 items-end">
        <div ref={subtitleRef} className="lg:col-span-6">
          <p className="hero-fade text-ink-muted text-base md:text-lg max-w-md leading-relaxed">
            {profile.tagline} <br />
            <span className="text-ink-dim">B.Tech CSE at SRM IST · DRDO-CVRDE experience.</span>
          </p>
        </div>

        <div ref={ctaRef} className="lg:col-span-6 flex flex-col md:flex-row md:items-center md:justify-end gap-3">
          <a
            href="#projects"
            onMouseMove={handleHover}
            onMouseLeave={handleLeave}
            className="hero-cta magnetic group inline-flex items-center justify-between gap-6 px-6 py-4 border border-ink/20 rounded-full hover:bg-ink hover:text-bg transition-colors"
            data-cursor="link"
          >
            <span className="font-mono text-xs uppercase tracking-widest">Explore Work</span>
            <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
          </a>
          <a
            href="#contact"
            onMouseMove={handleHover}
            onMouseLeave={handleLeave}
            className="hero-cta magnetic group inline-flex items-center justify-between gap-6 px-6 py-4 bg-accent text-bg rounded-full hover:bg-accent-hover transition-colors"
            data-cursor="link"
          >
            <span className="font-mono text-xs uppercase tracking-widest">Let&apos;s Connect</span>
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
