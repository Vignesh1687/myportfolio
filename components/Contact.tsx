"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { profile } from "@/data/profile";
import ContactForm from "./ContactForm";
import { Mail, MapPin, Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".ct-fade", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative px-6 lg:px-12 py-32 lg:py-40 z-10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="ct-fade section-num mb-3">05 / Get in Touch</div>
        <h2 className="ct-fade display-text text-5xl md:text-7xl lg:text-8xl leading-[0.9] max-w-5xl">
          Let&apos;s create<br />
          something<br />
          <span className="text-accent italic">extraordinary</span>
          <span className="text-accent">.</span>
        </h2>

        <p className="ct-fade text-ink-muted text-base md:text-lg max-w-xl mt-8 leading-relaxed">
          Have an internship opportunity, a project idea, or just want to talk tech? My inbox is open.
        </p>

        <div className="mt-16 grid lg:grid-cols-2 gap-8">
          <div className="ct-fade p-6 lg:p-10 border border-border rounded-2xl bg-bg-surface/50">
            <div className="section-num mb-6">Contact Details</div>
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 text-ink-dim text-xs font-mono uppercase tracking-widest mb-1">
                  <Mail className="w-3 h-3" /> Email
                </div>
                <a
                  href={`mailto:${profile.email}`}
                  className="link-hover text-lg md:text-xl"
                  data-cursor="link"
                >
                  {profile.email}
                </a>
              </div>
              <div>
                <div className="flex items-center gap-2 text-ink-dim text-xs font-mono uppercase tracking-widest mb-1">
                  <MapPin className="w-3 h-3" /> Location
                </div>
                <p className="text-lg md:text-xl">{profile.location}</p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-ink-dim text-xs font-mono uppercase tracking-widest mb-1">
                  <Sparkles className="w-3 h-3" /> Availability
                </div>
                <p className="text-lg md:text-xl text-accent">{profile.availability}</p>
              </div>
            </div>
          </div>

          <div className="ct-fade">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
