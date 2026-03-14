"use client";

import { useSfx } from "@/components/ui/SfxProvider";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

type TabKey = "info" | "projects" | "resume" | "contact";

const tabs: { key: TabKey; label: string }[] = [
  { key: "info", label: "ABOUT" },
  { key: "projects", label: "PROJECTS" },
  { key: "resume", label: "RESUME" },
  { key: "contact", label: "CONTACT" },
];

export default function DuelConsole() {
  const [booted, setBooted] = useState(false);
  const [activeTab, setActiveTab] = useState<TabKey>("info");
  const { play } = useSfx();

  const startDuel = () => {
    play("toggle");
    setBooted(true);
  };

  const returnHome = () => {
    play("toggle");
    setActiveTab("info");
    setBooted(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="duel-stage min-h-screen px-4 py-8 md:px-8 md:py-10">
      <div className="duel-bg-night" aria-hidden />
      <div className="duel-bg-vortex" aria-hidden />
      <div className="duel-bg-rays" aria-hidden />
      <div className="duel-bg-storm" aria-hidden />
      <div className="duel-bg-fog" aria-hidden />
      <div className="duel-bg-grid" aria-hidden />
      <div className="duel-bg-runes" aria-hidden />
      <div className="duel-bg-particles" aria-hidden />

      <div className="relative z-20 mx-auto flex min-h-[86vh] w-full max-w-[1320px] items-center justify-center">
        {!booted ? (
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} className="closed-console w-full max-w-[880px]">
            <div className="closed-body">
              <div className="duel-floating-card" aria-hidden>
                <div className="duel-floating-card-inner">
                  <div className="duel-floating-card-face duel-floating-card-front">
                    <Image
                      src="/signature-card.png"
                      alt="Zeeshan signature card"
                      className="duel-card-image"
                      fill
                      sizes="170px"
                      priority
                    />
                  </div>
                  <div className="duel-floating-card-face duel-floating-card-back">
                    <p className="duel-card-meta">Portfolio Mode</p>
                    <p className="duel-card-title">My Projects Deck</p>
                  </div>
                </div>
              </div>
              <div className="closed-screen-wrap">
                <button
                  type="button"
                  className="closed-screen closed-screen-tap"
                  onClick={startDuel}
                  onMouseEnter={() => play("nav")}
                  onFocus={() => play("nav")}
                  aria-label="Tap to begin duel"
                >
                  <p className="duel-label">Yu-Gi-Oh Duel Interface</p>
                  <h1 className="duel-heading mt-3 text-3xl text-yellow-100 md:text-4xl">Zeeshan Chaudhry</h1>
                  <p className="mt-2 text-sm uppercase tracking-[0.14em] text-cyan-200">
                    Computer Science Student • Builder • Founder
                    <span className="block text-xs text-slate-300">Western University</span>
                  </p>
                  <div className="duel-gold-divider mt-4" aria-hidden />
                  <div className="mt-4 rounded-lg border border-yellow-200/30 bg-[linear-gradient(155deg,rgba(14,23,40,0.95),rgba(17,10,28,0.92))] p-3">
                    <p className="text-xs text-slate-200">Exploring software, startups, and technical systems.</p>
                  </div>
                  <p className="tap-begin mt-5">Tap to Begin Duel</p>
                </button>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="duel-shell w-full max-w-[1280px]"
          >
            <div className="duel-display-stack">
              <div className="duel-display-back" aria-hidden />
              <div className="duel-top duel-os-shell relative z-10 rounded-[1rem] p-3 md:p-4">
                <div className="duel-os-topbar">
                  <div>
                    <p className="duel-os-brand">ZC // DUEL OS</p>
                    <p className="duel-os-subtitle">Software engineer portfolio command workspace</p>
                  </div>
                  <div className="duel-os-topbar-right">
                    <div className="duel-os-actions">
                      <button type="button" onClick={() => { play("nav"); setActiveTab("info"); }} onMouseEnter={() => play("nav")} onFocus={() => play("nav")} className="duel-os-action-link">
                        About
                      </button>
                      <button type="button" onClick={() => { play("nav"); setActiveTab("projects"); }} onMouseEnter={() => play("nav")} onFocus={() => play("nav")} className="duel-os-action-link">
                        Projects
                      </button>
                      <a href="/Zeeshan_Resume_2026.pdf" download onClick={() => play("tap")} onMouseEnter={() => play("nav")} onFocus={() => play("nav")} className="duel-os-action-link">
                        Resume
                      </a>
                      <a href="https://github.com/Zeeshan-Chaudhry" target="_blank" rel="noreferrer" onClick={() => play("tap")} onMouseEnter={() => play("nav")} onFocus={() => play("nav")} className="duel-os-action-link">
                        GitHub
                      </a>
                      <a href="https://linkedin.com/in/zeeshannchaudhry" target="_blank" rel="noreferrer" onClick={() => play("tap")} onMouseEnter={() => play("nav")} onFocus={() => play("nav")} className="duel-os-action-link">
                        LinkedIn
                      </a>
                      <a href="mailto:ZeeshanNawazChaudhry@gmail.com" onClick={() => play("tap")} onMouseEnter={() => play("nav")} onFocus={() => play("nav")} className="duel-os-action-link">
                        Contact
                      </a>
                      <button
                        type="button"
                        onClick={returnHome}
                        onMouseEnter={() => play("nav")}
                        onFocus={() => play("nav")}
                        className="duel-os-action-link text-red-200/90 hover:text-red-100"
                      >
                        Quit
                      </button>
                    </div>
                  </div>
                </div>

                <div className="duel-os-layout mt-3">
                  <div className="duel-screen duel-os-workspace rounded-xl p-2.5 md:p-3">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className="duel-screen-inner duel-os-screen min-h-[255px] rounded-lg p-5 md:min-h-[300px] md:p-6"
                    >
                      {activeTab === "info" && <InfoScreen />}
                      {activeTab === "projects" && <ProjectsScreen play={play} />}
                      {activeTab === "resume" && <ResumeScreen play={play} />}
                      {activeTab === "contact" && <ContactScreen play={play} />}
                    </motion.div>
                  </div>
                </div>

                <div
                  className={`duel-disk-wrap duel-disk-state-${tabs.findIndex((tab) => tab.key === activeTab)} mt-3`}
                  aria-label="Duel disk navigation"
                >
                  <div className="duel-disk-core" aria-hidden>
                    <div className="duel-disk-wheel" />
                    <div className="duel-disk-wheel-center" />
                    <div className="duel-disk-vents">
                      <span />
                      <span />
                      <span />
                    </div>
                    <div className="duel-disk-head">
                      <div className="duel-disk-head-mark" />
                      <div className="duel-disk-head-grille">
                        <span />
                        <span />
                        <span />
                        <span />
                      </div>
                    </div>
                    <div className="duel-disk-body">
                      <div className="duel-disk-body-badge" />
                    </div>
                    <div className="duel-disk-ring" />
                    <div className="duel-disk-emblem">ZC</div>
                  </div>
                  <div className="duel-disk-arm" aria-hidden />
                  <div className="duel-disk-slots">
                    {tabs.map((tab) => (
                      <button
                        key={tab.key}
                        type="button"
                        onClick={() => {
                          play("disk");
                          setActiveTab(tab.key);
                        }}
                        onMouseEnter={() => play("disk")}
                        onFocus={() => play("disk")}
                        className={`duel-disk-slot duel-disk-slot-${tab.key} ${activeTab === tab.key ? "duel-disk-slot-active" : ""}`}
                        aria-current={activeTab === tab.key ? "page" : undefined}
                      >
                        <span className="duel-disk-slot-index">0{tabs.findIndex((item) => item.key === tab.key) + 1}</span>
                        <span className="duel-disk-slot-frame" aria-hidden />
                        <span className="duel-disk-slot-notch" aria-hidden />
                        <span className="duel-disk-slot-label">{tab.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-5 text-center text-xs text-slate-100/90">© 2026 Zeeshan Chaudhry. All rights reserved.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}

function InfoScreen() {
  return (
    <div>
      <h2 className="duel-heading text-4xl text-yellow-100 md:text-5xl">Zeeshan Chaudhry</h2>
      <p className="mt-3 max-w-4xl text-base text-cyan-200 md:text-lg">
        Full-stack product engineer building practical software, startup tools, and systems that move from idea to real-world use.
      </p>
      <p className="mt-5 max-w-4xl text-sm leading-relaxed text-slate-200 md:text-base">
        I work at the intersection of engineering, product thinking, and execution. The strongest projects here are the ones rooted
        in real workflows, operational problems, and software that can keep compounding beyond the first release.
      </p>

      <div className="mt-7 space-y-6">
        <section>
          <div className="grid gap-4 lg:grid-cols-3">
            <article className="deck-card p-4">
              <h3 className="text-lg text-yellow-100">Plato</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                Converts course outline PDFs into structured study calendars and usable academic planning workflows.
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.12em] text-cyan-100">
                <span className="rounded-full border border-cyan-300/30 px-2 py-1">Python</span>
                <span className="rounded-full border border-cyan-300/30 px-2 py-1">PDF Parsing</span>
                <span className="rounded-full border border-cyan-300/30 px-2 py-1">Automation</span>
              </div>
            </article>

            <article className="deck-card p-4">
              <h3 className="text-lg text-yellow-100">PolyMarketAgent</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                Compares market prices and sportsbook odds through implied probability logic, signal generation, and monitoring.
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.12em] text-cyan-100">
                <span className="rounded-full border border-cyan-300/30 px-2 py-1">FastAPI</span>
                <span className="rounded-full border border-cyan-300/30 px-2 py-1">TypeScript</span>
                <span className="rounded-full border border-cyan-300/30 px-2 py-1">Trading Systems</span>
              </div>
            </article>

            <article className="deck-card p-4">
              <h3 className="text-lg text-yellow-100">3PL (In Progress)</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                Workflow software focused on logistics execution, internal tooling, and real operational constraints.
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.12em] text-cyan-100">
                <span className="rounded-full border border-cyan-300/30 px-2 py-1">Operations</span>
                <span className="rounded-full border border-cyan-300/30 px-2 py-1">Workflow Automation</span>
                <span className="rounded-full border border-cyan-300/30 px-2 py-1">In Progress</span>
              </div>
            </article>
          </div>
        </section>

        <section className="deck-card p-4">
          <div className="flex flex-wrap gap-3 text-sm text-slate-300">
            <span className="text-cyan-200">Motive Rewards</span>
            <span className="text-slate-500">/</span>
            <span>React Native features and 20+ Node/Express APIs</span>
            <span className="text-slate-500">/</span>
            <span className="text-cyan-200">SpaceRocks</span>
            <span className="text-slate-500">/</span>
            <span>SwiftUI features and offline sync reliability</span>
            <span className="text-slate-500">/</span>
            <span className="text-cyan-200">Fleex</span>
            <span className="text-slate-500">/</span>
            <span>Dashboard features, BTCPay integration, hardened OAuth</span>
          </div>
        </section>
      </div>
    </div>
  );
}

function ProjectsScreen({ play }: { play: (kind?: "tap" | "nav" | "toggle") => void }) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const projectCards = [
    {
      title: "3PL (In Progress)",
      label: "Logistics Workflow Automation",
      description:
        "An operations software build focused on streamlining logistics workflows for a 3PL environment. The project is being developed around practical shipment handling, internal process tooling, and automation that supports day-to-day execution.",
      stack: ["Logistics", "Workflow Automation", "Operations Software"],
      href: "https://github.com/Zeeshan-Chaudhry/3PL",
      why: "Important because it reflects founder-style product development around a real operating environment, not a classroom prompt.",
    },
    {
      title: "PolyMarketAgent",
      label: "Odds Comparison and Betting Assistant",
      description:
        "A betting assistant bot that compares Polymarket prices against sportsbook odds, converts both into implied probabilities, and surfaces better-value opportunities. It combines market ingest, signal generation, risk checks, a FastAPI service layer, and a monitoring dashboard.",
      stack: ["Python", "FastAPI", "TypeScript", "Trading Systems", "API Integration", "Docker"],
      href: "https://github.com/Zeeshan-Chaudhry/PolyMarketAgent",
      why: "Important because it shows backend systems thinking, data-driven decision logic, and a stronger end-to-end architecture than a simple app demo.",
    },
    {
      title: "Plato",
      label: "Course Outline to Calendar Converter",
      description:
        "A web application that extracts course information from Western University course outline PDFs and converts it into iCalendar (.ics) files for Google Calendar, Apple Calendar, and Outlook. It parses class schedules, assessments, and date rules, then generates a structured study calendar with editable review flows.",
      stack: ["Python", "PDF Parsing", "Calendar Generation", "Flask", "Automation"],
      href: "https://github.com/Zeeshan-Chaudhry/plato",
      why: "Important because it turns messy real-world documents into a usable student workflow, which is strong evidence of product thinking and practical automation.",
    },
  ];

  const scrollProjects = (direction: "prev" | "next") => {
    const slider = sliderRef.current;
    if (!slider) return;

    const step = Math.max(slider.clientWidth * 0.78, 260);
    slider.scrollBy({
      left: direction === "next" ? step : -step,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <p className="duel-label">Projects</p>
      <h2 className="mt-3 text-2xl text-yellow-100">Featured Builds</h2>
      <p className="mt-2 max-w-2xl text-xs leading-relaxed text-slate-300 md:text-sm">
        The strongest current projects are the ones closest to real workflows, technical leverage, and products that can keep compounding over time.
      </p>
      <div className="mt-4 flex items-center justify-between gap-3">
        <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400">Top three featured from GitHub</p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Previous projects"
            onClick={() => {
              play("nav");
              scrollProjects("prev");
            }}
            onMouseEnter={() => play("nav")}
            onFocus={() => play("nav")}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-cyan-300/30 bg-slate-950/50 text-cyan-200 transition hover:border-cyan-200/60 hover:bg-cyan-500/10"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Next projects"
            onClick={() => {
              play("nav");
              scrollProjects("next");
            }}
            onMouseEnter={() => play("nav")}
            onFocus={() => play("nav")}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-cyan-300/30 bg-slate-950/50 text-cyan-200 transition hover:border-cyan-200/60 hover:bg-cyan-500/10"
          >
            ›
          </button>
          <a
            href="https://github.com/Zeeshan-Chaudhry?tab=repositories"
            target="_blank"
            rel="noreferrer"
            onClick={() => play("tap")}
            onMouseEnter={() => play("nav")}
            onFocus={() => play("nav")}
            className="duel-link-btn px-3 py-2 text-[10px]"
          >
            View All
          </a>
        </div>
      </div>
      <div
        ref={sliderRef}
        className="mt-4 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 pr-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {projectCards.map((project) => (
          <article
            key={project.title}
            className="deck-card flex min-h-[250px] min-w-[85%] snap-start flex-col sm:min-w-[68%] lg:min-w-[31%]"
          >
            <p className="text-[11px] uppercase tracking-[0.16em] text-cyan-300">{project.label}</p>
            <h3 className="mt-2 text-base text-yellow-100">{project.title}</h3>
            <p className="mt-3 text-xs leading-relaxed text-slate-300">{project.description}</p>
            <p className="mt-3 text-[11px] leading-relaxed text-slate-400">
              <span className="text-cyan-200">Why it matters:</span> {project.why}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={`${project.title}-${item}`}
                  className="rounded-full border border-cyan-300/35 bg-cyan-500/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-cyan-100"
                >
                  {item}
                </span>
              ))}
            </div>
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              onClick={() => play("tap")}
              onMouseEnter={() => play("nav")}
              onFocus={() => play("nav")}
              className="mt-auto pt-5 inline-flex items-center text-xs uppercase tracking-[0.14em] text-cyan-300"
            >
              View on GitHub
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}

function ResumeScreen({ play }: { play: (kind?: "tap" | "nav" | "toggle") => void }) {
  return (
    <div>
      <p className="duel-label">Resume</p>
      <h2 className="mt-3 text-2xl text-yellow-100">Experience Summary</h2>
      <div className="mt-4 space-y-3 text-xs text-slate-200">
        <div className="deck-card">
          <p className="text-cyan-300">Motive Rewards • Software Engineer Intern • Sept 2025 - Present</p>
          <p className="mt-1">Built cross-platform React Native features and 20+ Node/Express APIs for event workflows.</p>
        </div>
        <div className="deck-card">
          <p className="text-cyan-300">SpaceRocks • Software Engineer Intern • Sept 2024 - Sept 2025</p>
          <p className="mt-1">Developed iOS SwiftUI features and improved offline sync reliability for field operations.</p>
        </div>
        <div className="deck-card">
          <p className="text-cyan-300">Fleex • Software Engineer Intern • May 2024 - Aug 2024</p>
          <p className="mt-1">Delivered dashboard features, BTCPay integration, and hardened Auth0/Google OAuth flows.</p>
        </div>
      </div>
      <a
        href="/Zeeshan_Resume_2026.pdf"
        download
        onClick={() => play("tap")}
        onMouseEnter={() => play("nav")}
        onFocus={() => play("nav")}
        className="duel-enter-btn mt-4 inline-flex"
      >
        Download Resume
      </a>
    </div>
  );
}

function ContactScreen({ play }: { play: (kind?: "tap" | "nav" | "toggle") => void }) {
  return (
    <div className="flex min-h-[300px] items-center justify-center py-2 md:min-h-[360px]">
      <div className="relative w-full max-w-3xl">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-[12%] top-6 h-[80%] rounded-[2rem] bg-[radial-gradient(circle,rgba(59,130,246,0.18),transparent_68%)] blur-3xl"
        />
        <div className="relative overflow-hidden rounded-[1.4rem] border border-yellow-200/22 bg-[linear-gradient(180deg,rgba(151,116,56,0.95),rgba(116,85,36,0.96)_6%,rgba(17,31,56,0.98)_6.1%,rgba(7,16,30,0.99)_100%)] p-[4px] shadow-[0_26px_90px_rgba(2,8,23,0.7),0_0_24px_rgba(245,158,11,0.08)]">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),transparent_20%,transparent_78%,rgba(255,255,255,0.03))]" aria-hidden />
          <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(125,211,252,0.22)_1px,transparent_1px)] [background-size:100%_4px]" aria-hidden />

          <div className="relative overflow-hidden rounded-[1.15rem] border border-white/6 bg-[radial-gradient(circle_at_top,rgba(18,56,109,0.24),transparent_30%),linear-gradient(180deg,rgba(8,17,33,0.98),rgba(6,14,27,0.99))]">
            <div className="flex items-center justify-between bg-[linear-gradient(90deg,rgba(148,118,57,0.95),rgba(203,178,101,0.9),rgba(118,89,34,0.95))] px-4 py-3 text-[11px] uppercase tracking-[0.16em] text-slate-950 md:px-5">
              <div className="flex items-center gap-3">
                <span className="h-0 w-0 border-b-[8px] border-l-[7px] border-r-[7px] border-b-slate-100/90 border-l-transparent border-r-transparent" />
                <span className="duel-matrix-font font-semibold">Contact // Duelist Dossier</span>
              </div>
              <span className="duel-matrix-font rounded-full border border-slate-900/20 bg-slate-950/10 px-2 py-1 text-[10px] tracking-[0.2em]">Comm Link</span>
            </div>

            <div className="px-4 pb-4 pt-3 md:px-5 md:pb-5">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h2 className="duel-matrix-font text-2xl text-yellow-100 md:text-[2rem]">Zeeshan Chaudhry // Software Engineer</h2>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-300">
                    Full-stack product builder focused on practical software, startup systems, and engineering work that survives real constraints.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  {["01", "02", "03", "04", "05", "06", "07"].map((star) => (
                    <span
                      key={star}
                      className="flex h-6 w-6 items-center justify-center rounded-full border border-yellow-200/20 bg-[radial-gradient(circle,rgba(251,191,36,0.95),rgba(180,83,9,0.98))] text-[9px] font-semibold text-slate-950 shadow-[0_0_10px_rgba(245,158,11,0.16)]"
                    >
                      {star}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4 grid gap-4 md:grid-cols-[1.15fr_0.85fr]">
                <div className="rounded-[1.1rem] border border-slate-300/18 bg-[linear-gradient(180deg,rgba(38,43,52,0.96),rgba(11,15,21,0.98))] p-[10px] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                  <div className="relative overflow-hidden rounded-[0.95rem] border border-cyan-300/14 bg-[radial-gradient(circle_at_50%_40%,rgba(168,85,247,0.25),transparent_28%),radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.16),transparent_52%),linear-gradient(180deg,rgba(15,22,37,0.96),rgba(3,7,18,0.99))] p-5">
                    <div
                      aria-hidden
                      className="absolute inset-0 opacity-60 [background-image:radial-gradient(circle_at_center,transparent_34%,rgba(168,85,247,0.4)_35%,transparent_43%)]"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-x-6 top-6 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.45),transparent)]"
                    />
                    <div className="relative flex min-h-[250px] items-center justify-center">
                      <div className="duelist-card-flip mx-auto aspect-[0.7] w-full max-w-[260px]">
                        <div className="duelist-card-flip-inner">
                          <div className="duelist-card-face duelist-card-front">
                            <Image
                              src="/signature-card.png"
                              alt="Zeeshan duelist signature card"
                              fill
                              sizes="(max-width: 768px) 70vw, 260px"
                              className="object-contain"
                            />
                            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,10,20,0.08),transparent_30%,transparent_70%,rgba(4,10,20,0.28))]" aria-hidden />
                          </div>
                          <div className="duelist-card-face duelist-card-back" aria-hidden>
                            <div className="duelist-card-back-frame">
                              <div className="duelist-card-back-surface" />
                              <div className="duelist-card-back-core" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="rounded-[1.1rem] border border-cyan-300/14 bg-[linear-gradient(180deg,rgba(12,28,54,0.96),rgba(8,18,33,0.98))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                    <div className="flex items-center justify-between border-b border-cyan-300/12 pb-3">
                      <span className="text-[11px] uppercase tracking-[0.18em] text-cyan-200/76">Attribute</span>
                      <span className="duel-matrix-font rounded-full border border-cyan-300/14 bg-cyan-400/8 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-cyan-100">
                        Builder / Light
                      </span>
                    </div>

                    <div className="mt-4 space-y-3">
                      {[
                        ["School", "Western University"],
                        ["Focus", "Full-Stack Product Engineering"],
                        ["Status", "Open to internships and technical opportunities"],
                        ["Location", "Ontario, Canada"],
                        ["ID No.", "03315"],
                      ].map(([label, value]) => (
                        <div key={label} className="grid grid-cols-[74px_1fr] gap-3 text-sm">
                          <span className="text-[11px] uppercase tracking-[0.18em] text-cyan-200/72">{label}</span>
                          <span className="text-slate-100">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[1.05rem] border border-yellow-200/18 bg-[linear-gradient(180deg,rgba(26,20,10,0.94),rgba(12,11,16,0.98))] px-4 py-4">
                    <p className="duel-matrix-font text-[11px] uppercase tracking-[0.18em] text-yellow-100/76">Dossier Text</p>
                    <p className="mt-3 text-sm leading-relaxed text-slate-200">
                      Engineering profile centered on product execution, shipped workflows, and technical systems with real operational value.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 rounded-[1.05rem] border border-yellow-200/18 bg-[linear-gradient(180deg,rgba(26,20,10,0.94),rgba(12,11,16,0.98))] p-3">
                <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                  <a
                    href="mailto:ZeeshanNawazChaudhry@gmail.com"
                    onClick={() => play("tap")}
                    onMouseEnter={() => play("nav")}
                    onFocus={() => play("nav")}
                    className="group rounded-xl border border-cyan-300/14 bg-[linear-gradient(180deg,rgba(10,24,46,0.95),rgba(8,18,34,0.98))] px-4 py-4 text-left transition hover:-translate-y-0.5 hover:border-yellow-200/32 hover:shadow-[0_0_20px_rgba(245,158,11,0.08)]"
                  >
                    <span className="duel-matrix-font block text-[11px] uppercase tracking-[0.2em] text-cyan-200/72 transition group-hover:text-yellow-100">Email</span>
                    <span className="mt-1 block text-sm text-slate-100">Direct</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/zeeshannchaudhry"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => play("tap")}
                    onMouseEnter={() => play("nav")}
                    onFocus={() => play("nav")}
                    className="group rounded-xl border border-cyan-300/14 bg-[linear-gradient(180deg,rgba(10,24,46,0.95),rgba(8,18,34,0.98))] px-4 py-4 text-left transition hover:-translate-y-0.5 hover:border-yellow-200/32 hover:shadow-[0_0_20px_rgba(245,158,11,0.08)]"
                  >
                    <span className="duel-matrix-font block text-[11px] uppercase tracking-[0.2em] text-cyan-200/72 transition group-hover:text-yellow-100">LinkedIn</span>
                    <span className="mt-1 block text-sm text-slate-100">Profile</span>
                  </a>
                  <a
                    href="https://github.com/Zeeshan-Chaudhry"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => play("tap")}
                    onMouseEnter={() => play("nav")}
                    onFocus={() => play("nav")}
                    className="group rounded-xl border border-cyan-300/14 bg-[linear-gradient(180deg,rgba(10,24,46,0.95),rgba(8,18,34,0.98))] px-4 py-4 text-left transition hover:-translate-y-0.5 hover:border-yellow-200/32 hover:shadow-[0_0_20px_rgba(245,158,11,0.08)]"
                  >
                    <span className="duel-matrix-font block text-[11px] uppercase tracking-[0.2em] text-cyan-200/72 transition group-hover:text-yellow-100">GitHub</span>
                    <span className="mt-1 block text-sm text-slate-100">Code</span>
                  </a>
                  <a
                    href="/Zeeshan_Resume_2026.pdf"
                    download
                    onClick={() => play("tap")}
                    onMouseEnter={() => play("nav")}
                    onFocus={() => play("nav")}
                    className="group rounded-xl border border-cyan-300/14 bg-[linear-gradient(180deg,rgba(10,24,46,0.95),rgba(8,18,34,0.98))] px-4 py-4 text-left transition hover:-translate-y-0.5 hover:border-yellow-200/32 hover:shadow-[0_0_20px_rgba(245,158,11,0.08)]"
                  >
                    <span className="duel-matrix-font block text-[11px] uppercase tracking-[0.2em] text-cyan-200/72 transition group-hover:text-yellow-100">Resume</span>
                    <span className="mt-1 block text-sm text-slate-100">PDF</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
