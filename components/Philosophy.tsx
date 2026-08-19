"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".phil-word", {
        y: 60,
        opacity: 0,
        stagger: 0.04,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
      gsap.from(".phil-meta", {
        y: 20,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const words =
    "Full-stack products × intelligent workflows — building useful software from ideas, data, and real-world problems.".split(
      " "
    );

  return (
    <section
      ref={sectionRef}
      id="philosophy"
      className="relative px-6 lg:px-12 py-32 lg:py-48 z-10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div className="phil-meta section-num">02 / Focus</div>
          <div className="phil-meta section-num hidden md:block">What I build</div>
        </div>

        <h2 className="display-text text-3xl md:text-5xl lg:text-6xl leading-tight max-w-5xl">
          {words.map((w, i) => (
            <span
              key={i}
              className={`phil-word inline-block mr-3 ${
                w === "Full-stack" || w === "products" ? "text-accent italic" : ""
              }`}
            >
              {w}
            </span>
          ))}
        </h2>

        <div className="mt-16 grid md:grid-cols-3 gap-8 text-ink-muted text-sm leading-relaxed">
          <div className="phil-meta">
            <div className="section-num mb-2">A.</div>
              <p className="text-ink text-base mb-2">Full-stack products</p>
              <p className="text-ink-muted text-xs uppercase tracking-widest mb-3">Ideas → interfaces → complete systems</p>
              <p>I build practical full-stack products with React, TypeScript, Supabase, PostgreSQL, authentication, workflows, analytics, and backend integrations.</p>
          </div>
          <div className="phil-meta">
            <div className="section-num mb-2">B.</div>
              <p className="text-ink text-base mb-2">Product systems</p>
              <p className="text-ink-muted text-xs uppercase tracking-widest mb-3">Turning complex requirements into usable software</p>
              <p>I focus on products that handle real workflows, from role-based access and database design to automation, reporting, and responsive interfaces.</p>
          </div>
          <div className="phil-meta">
            <div className="section-num mb-2">C.</div>
              <p className="text-ink text-base mb-2">Engineering automation</p>
              <p className="text-ink-muted text-xs uppercase tracking-widest mb-3">A different kind of problem</p>
              <p>At DRDO-CVRDE, I developed automation around Python, AutoCAD DXF geometry, feature recognition, process planning, and G-code/M-code generation.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
