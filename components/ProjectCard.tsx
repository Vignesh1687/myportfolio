"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    gsap.to(el, { rotateY: x * 4, rotateX: -y * 4, duration: 0.6, ease: "power3.out" });
    gsap.to(imgRef.current, { x: x * 20, y: y * 20, duration: 0.6, ease: "power3.out" });
  };
  const onLeave = () => {
    gsap.to(ref.current, { rotateY: 0, rotateX: 0, duration: 0.8, ease: "power3.out" });
    gsap.to(imgRef.current, { x: 0, y: 0, duration: 0.8, ease: "power3.out" });
  };

  return (
    <a
      href={project.href}
      target={project.href ? "_blank" : undefined}
      rel={project.href ? "noreferrer" : undefined}
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="group relative"
      style={{ perspective: "1000px" }}
      data-cursor="view"
    >
      <div className="flex items-baseline justify-between mb-4">
        <span className="font-mono text-xs uppercase tracking-widest text-accent">
          / {project.index}
        </span>
        <span className="font-mono text-xs uppercase tracking-widest text-ink-muted">
          {project.year}
        </span>
      </div>

      <div
        ref={imgRef}
        className={`relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gradient-to-br ${project.gradient}`}
      >
        {project.image && (
          <img
            src={project.image}
            alt={`${project.title} website preview`}
            className={`absolute inset-0 h-full w-full object-contain p-12 transition-transform duration-700 group-hover:scale-105 ${
              project.id === "smart-event-management" ? "bg-[#071536]" : ""
            }`}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/10" />
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-20 mix-blend-overlay"
             style={{
               backgroundImage:
                 "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(0,0,0,0.4) 0%, transparent 50%)",
             }}
        />
        <div className="absolute inset-0 flex items-end p-6 lg:p-10">
          <div className="text-white font-display font-bold text-2xl md:text-4xl lg:text-5xl leading-none max-w-md drop-shadow-lg">
            {project.title}
          </div>
        </div>
        <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-bg/80 backdrop-blur flex items-center justify-center group-hover:bg-accent transition-colors">
          <ArrowUpRight className="w-4 h-4 text-ink group-hover:text-bg transition-colors" />
        </div>
      </div>

      <div className="mt-5 flex items-start justify-between gap-6">
        <div>
          <p className="text-ink-muted text-sm leading-relaxed max-w-md">
            {project.description}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.tech.slice(0, 5).map((t) => (
              <span
                key={t}
                className="text-[10px] font-mono uppercase tracking-widest text-ink-muted border border-border rounded-full px-2.5 py-1"
              >
                {t}
              </span>
            ))}
            {project.tech.length > 5 && (
              <span className="text-[10px] font-mono uppercase tracking-widest text-ink-dim border border-border rounded-full px-2.5 py-1">
                +{project.tech.length - 5}
              </span>
            )}
          </div>
        </div>
        <div className="section-num whitespace-nowrap mt-1">{project.category}</div>
      </div>
    </a>
  );
}
