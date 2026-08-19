"use client";

import { profile } from "@/data/profile";
import { Github, Linkedin, FileText } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative px-6 lg:px-12 py-12 border-t border-border z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div>
            <div className="font-display font-bold text-2xl">
              AVS<span className="text-accent">.</span>
            </div>
            <p className="text-ink-muted text-xs mt-2 max-w-xs">
              Designed & built by {profile.fullName}. Hosted on Vercel.
            </p>
          </div>

          <div className="flex items-center justify-center gap-4">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
              aria-label="GitHub"
              data-cursor="link"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
              aria-label="LinkedIn"
              data-cursor="link"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={profile.socials.resume}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
              aria-label="Resume"
              data-cursor="link"
            >
              <FileText className="w-4 h-4" />
            </a>
          </div>

          <div className="text-xs font-mono uppercase tracking-widest text-ink-muted md:text-right">
            © {new Date().getFullYear()} · {profile.location.split(",")[0]}
          </div>
        </div>
      </div>
    </footer>
  );
}
