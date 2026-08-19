"use client";

import { useState, FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    const subject = encodeURIComponent(form.subject || "Portfolio Inquiry");
    const body = encodeURIComponent(
      `Hi Vignesh,\n\n${form.message}\n\n— ${form.name} (${form.email})`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setTimeout(() => setStatus("sent"), 800);
    setTimeout(() => setStatus("idle"), 3000);
  };

  const inputClass =
    "w-full bg-transparent border-b border-border py-3 text-ink placeholder:text-ink-dim focus:border-accent outline-none transition-colors text-base";

  return (
    <form
      onSubmit={submit}
      className="p-6 lg:p-10 border border-border rounded-2xl bg-bg-surface/50"
    >
      <div className="section-num mb-6">Send a Message</div>

      <div className="space-y-1">
        <input
          required
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={update("name")}
          className={inputClass}
        />
        <input
          required
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={update("email")}
          className={inputClass}
        />
        <input
          type="text"
          placeholder="Subject"
          value={form.subject}
          onChange={update("subject")}
          className={inputClass}
        />
        <textarea
          required
          rows={4}
          placeholder="Tell me about your project, role, or idea..."
          value={form.message}
          onChange={update("message")}
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="group mt-8 inline-flex items-center justify-between gap-6 px-6 py-4 w-full md:w-auto bg-ink text-bg rounded-full hover:bg-accent transition-colors disabled:opacity-50"
        data-cursor="link"
      >
        <span className="font-mono text-xs uppercase tracking-widest">
          {status === "idle" && "Send Message"}
          {status === "sending" && "Opening Mail…"}
          {status === "sent" && "Message Ready"}
        </span>
        <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
      </button>
    </form>
  );
}
