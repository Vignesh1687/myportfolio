"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experiences, education } from "@/data/experience";
import { education as _e } from "@/data/experience";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".exp-header", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
      });
      gsap.from(".exp-item", {
        y: 50,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: { trigger: ".exp-list", start: "top 80%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative px-6 lg:px-12 py-32 lg:py-40 z-10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-4">
          <div>
            <div className="exp-header section-num mb-3">04 / Experience</div>
            <h2 className="exp-header display-text text-5xl md:text-7xl lg:text-8xl leading-[0.9]">
              Career<br />
              <span className="text-ink-muted italic">Timeline</span><span className="text-accent">.</span>
            </h2>
          </div>
          <p className="exp-header text-ink-muted text-sm max-w-xs leading-relaxed">
            From research labs to production apps — every step has been about building, shipping, and learning.
          </p>
        </div>

        {/* Education card */}
        <div className="exp-item mb-12 p-6 lg:p-8 border border-border rounded-2xl bg-bg-surface/50">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div>
              <div className="section-num mb-1">Education</div>
              <h3 className="font-display text-xl md:text-2xl">{education.institution}</h3>
              <p className="text-ink-muted text-sm mt-1">{education.degree}</p>
            </div>
            <div className="text-right">
              <div className="font-mono text-xs uppercase tracking-widest text-ink-muted">
                {education.period}
              </div>
              <div className="font-mono text-2xl text-accent mt-1">{education.cgpa}</div>
            </div>
          </div>
        </div>

        <div className="exp-list relative">
          {/* vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />

          {experiences.map((exp, idx) => (
            <div
              key={exp.id}
              className={`exp-item relative grid md:grid-cols-2 gap-6 md:gap-12 py-10 ${
                idx % 2 === 0 ? "" : "md:[&>:first-child]:order-2"
              }`}
            >
              {/* dot */}
              <div className="absolute left-4 md:left-1/2 top-12 w-2 h-2 -translate-x-1/2 rounded-full bg-accent" />

              <div className={`pl-10 md:pl-0 ${idx % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                <div className="section-num mb-1">/ {exp.index}</div>
                <div className="font-mono text-xs uppercase tracking-widest text-accent mb-2">
                  {exp.period}
                </div>
                <h3 className="font-display text-2xl md:text-3xl leading-tight">{exp.role}</h3>
                <p className="text-ink-muted text-sm mt-2">{exp.organization}</p>
                <p className="text-ink-dim text-xs font-mono uppercase tracking-widest mt-1">
                  {exp.type} · {exp.location}
                </p>
              </div>

              <div className={`pl-10 md:pl-0 ${idx % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                <p className="text-ink-muted text-sm leading-relaxed mb-4">
                  {exp.description}
                </p>
                <ul className="space-y-2 text-sm text-ink-muted">
                  {exp.achievements.map((a, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-accent mt-1.5">→</span>
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
