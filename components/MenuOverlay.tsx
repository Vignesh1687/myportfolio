"use client";

import { useEffect, useRef, useState } from "react";
import { profile } from "@/data/profile";
import { Github, Linkedin, FileText, X } from "lucide-react";
import { gsap } from "gsap";

const links = [
  { label: "Projects", href: "#projects", num: "01" },
  { label: "Experience", href: "#experience", num: "02" },
  { label: "Contact", href: "#contact", num: "03" },
];

export default function MenuOverlay() {
  const [open, setOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onOpen = () => setOpen(true);
    const onClose = () => setOpen(false);
    document.addEventListener("open-menu", onOpen);
    document.addEventListener("close-menu", onClose);
    return () => {
      document.removeEventListener("open-menu", onOpen);
      document.removeEventListener("close-menu", onClose);
    };
  }, []);

  useEffect(() => {
    if (!overlayRef.current) return;
    if (open) {
      gsap.set(overlayRef.current, { display: "flex" });
      const tl = gsap.timeline();
      tl.fromTo(
        overlayRef.current,
        { clipPath: "inset(0 0 100% 0)" },
        { clipPath: "inset(0 0 0% 0)", duration: 0.8, ease: "power4.inOut" }
      ).fromTo(
        linksRef.current?.querySelectorAll(".menu-link") ?? [],
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: "power3.out" },
        "-=0.3"
      );
    } else {
      gsap.to(overlayRef.current, {
        clipPath: "inset(0 0 100% 0)",
        duration: 0.6,
        ease: "power4.inOut",
        onComplete: () => {
          if (overlayRef.current) gsap.set(overlayRef.current, { display: "none" });
        },
      });
    }
  }, [open]);

  const close = () => document.dispatchEvent(new CustomEvent("close-menu"));

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[60] bg-bg hidden flex-col"
      style={{ clipPath: "inset(0 0 100% 0)" }}
    >
      <div className="flex items-center justify-between px-6 lg:px-12 py-6">
        <div className="font-display font-bold text-lg">AVS.</div>
        <button
          onClick={close}
          className="flex items-center gap-3 text-sm font-mono uppercase tracking-widest text-ink-muted hover:text-ink transition-colors"
          data-cursor="link"
          aria-label="Close menu"
        >
          <span>Close</span>
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 flex flex-col justify-center px-6 lg:px-12">
        <div className="section-num mb-8">Navigation</div>
        <div ref={linksRef} className="space-y-4 lg:space-y-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={close}
              className="menu-link group flex items-end justify-between border-b border-border pb-3 lg:pb-4"
              data-cursor="link"
            >
              <span className="display-text text-5xl md:text-7xl lg:text-8xl group-hover:text-accent transition-colors">
                {l.label}
              </span>
              <span className="font-mono text-sm text-accent mb-2 lg:mb-4">
                {l.num}
              </span>
            </a>
          ))}
        </div>

        <div className="mt-12 lg:mt-16 grid md:grid-cols-2 gap-8 max-w-4xl">
          <div>
            <div className="section-num mb-3">Socials</div>
            <div className="flex flex-col gap-2 text-ink-muted">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                className="link-hover inline-flex items-center gap-2 w-fit"
                data-cursor="link"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="link-hover inline-flex items-center gap-2 w-fit"
                data-cursor="link"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
              <a
                href={profile.socials.resume}
                target="_blank"
                rel="noreferrer"
                className="link-hover inline-flex items-center gap-2 w-fit"
                data-cursor="link"
              >
                <FileText className="w-4 h-4" /> Resume
              </a>
            </div>
          </div>
          <div>
            <div className="section-num mb-3">Get in touch</div>
            <a
              href={`mailto:${profile.email}`}
              className="link-hover text-ink"
              data-cursor="link"
            >
              {profile.email}
            </a>
            <p className="text-ink-muted text-sm mt-2">{profile.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
