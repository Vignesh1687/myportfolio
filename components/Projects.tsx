"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".proj-header", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
      });
      gsap.from(".proj-card", {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: { trigger: ".proj-grid", start: "top 80%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative px-6 lg:px-12 py-32 lg:py-40 z-10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-4">
          <div>
            <div className="proj-header section-num mb-3">03 / Selected Work</div>
            <h2 className="proj-header display-text text-5xl md:text-7xl lg:text-8xl leading-[0.9]">
              Featured<br />
              <span className="text-ink-muted italic">Projects</span><span className="text-accent">.</span>
            </h2>
          </div>
          <p className="proj-header text-ink-muted text-sm max-w-xs leading-relaxed">
            Complete products and practical systems, with engineering automation as a technical edge.
          </p>
        </div>

        <div className="proj-grid grid md:grid-cols-2 gap-10 lg:gap-14">
          {projects.map((p) => (
            <div key={p.id} className="proj-card">
              <ProjectCard project={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
