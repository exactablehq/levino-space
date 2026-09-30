"use client";

import { useState } from "react";

export default function ComingSoon() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <div className="h-screen flex flex-col bg-[#fbfafa]">
      {/* ── Navigation ── */}
      <header className="sticky top-0 z-50">
        <div className="max-w-[1200px] mx-auto px-6 py-6 flex items-center">
          {/* Logo */}
          <a href="/" aria-label="Levino Home" className="shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/levino.png"
              alt="Levino"
              className="h-16 w-auto"
            />
          </a>
        </div>
      </header>

      {/* ── Hero Section ── */}
      <section
        className="absolute top-10 left-0 right-0 w-full bg-[#fbfafa] flex flex-col items-center pt-12 px-8 gap-8 overflow-hidden"
        aria-label="Under construction illustration"
      >
        <h2 className="text-[clamp(28px,5vw,48px)] font-black text-[#1a1a1a] tracking-tight leading-[1.15] text-center max-w-2xl">
          Our website is under <br />construction...
        </h2>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/Construction.gif"
          alt="Animated construction scene"
          className="block w-full max-w-[960px] h-auto"
        />
      </section>

      {/* ── Content ── */}
    </div>
  );
}
