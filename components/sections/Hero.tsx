"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const scrollToDeck = () => {
    const deck = document.getElementById("projects");
    deck?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative min-h-screen overflow-hidden px-6 pt-8 md:px-10">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.18),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(220,38,38,0.15),transparent_35%),radial-gradient(circle_at_50%_80%,rgba(234,179,8,0.15),transparent_55%),linear-gradient(180deg,#030712_0%,#02020a_55%,#050813_100%)]" />
      <div className="duel-grid absolute inset-0 -z-10 opacity-30" />

      <header className="mx-auto flex w-full max-w-6xl items-center justify-between py-4">
        <p className="text-sm uppercase tracking-[0.35em] text-slate-300">Duel Archive</p>
        <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
          <a href="#about" className="hover:text-yellow-200">About</a>
          <a href="#projects" className="hover:text-yellow-200">Projects</a>
          <a href="#experience" className="hover:text-yellow-200">Experience</a>
          <a href="#contact" className="hover:text-yellow-200">Contact</a>
        </nav>
      </header>

      <div className="mx-auto grid min-h-[84vh] w-full max-w-6xl items-center gap-10 pb-16 md:grid-cols-[1.2fr_1fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-xs uppercase tracking-[0.32em] text-cyan-300"
          >
            Draw Phase
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="text-balance text-4xl font-semibold leading-tight md:text-6xl"
          >
            [Your Name]
            <span className="mt-2 block bg-gradient-to-r from-gold-200 via-cyan-200 to-red-300 bg-clip-text text-transparent">
              Builder / Developer / Entrepreneur
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-slate-300 md:text-lg"
          >
            Enter a digital duel arena where product strategy, engineering precision, and creative execution combine into a high-impact portfolio deck.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <button onClick={scrollToDeck} className="duel-button text-sm uppercase tracking-[0.16em]">
              Enter the Duel
            </button>
            <a href="#projects" className="duel-link text-sm uppercase tracking-[0.16em]">
              Summon My Work
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, rotateY: 14 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 0.9, delay: 0.14 }}
          className="relative mx-auto h-[430px] w-full max-w-[370px]"
        >
          <div className="duel-device h-full w-full rounded-[2rem] p-4">
            <div className="relative h-full rounded-2xl border border-cyan-300/35 bg-slate-950/70 p-4 shadow-[0_0_30px_rgba(56,189,248,0.2)]">
              <div className="absolute inset-0 rounded-2xl bg-[conic-gradient(from_180deg_at_50%_50%,rgba(234,179,8,0.08),rgba(59,130,246,0.12),rgba(220,38,38,0.12),rgba(234,179,8,0.08))] animate-spin-slow" />
              <div className="relative flex h-full flex-col justify-between rounded-xl border border-slate-700/80 bg-[linear-gradient(180deg,rgba(12,18,30,0.9),rgba(6,10,20,0.92))] p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Duel Interface</p>
                <div className="relative mx-auto h-56 w-40 preserve-3d">
                  <div className="holo-card absolute inset-0 rounded-xl border border-gold-200/35 bg-[linear-gradient(160deg,#111827,#0a0f1f)] p-3">
                    <p className="text-[10px] uppercase tracking-[0.26em] text-cyan-200">Signature Card</p>
                    <h3 className="mt-2 text-lg text-gold-100">Creator Archetype</h3>
                    <p className="mt-2 text-xs text-slate-300">ATK 3200 / DEF 2800</p>
                    <div className="mt-4 h-24 rounded-lg border border-cyan-400/30 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.35),transparent_45%),radial-gradient(circle_at_70%_80%,rgba(220,38,38,0.25),transparent_40%),#050913]" />
                  </div>
                </div>
                <p className="text-center text-xs uppercase tracking-[0.24em] text-slate-400">Press Start: Begin Duel</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
