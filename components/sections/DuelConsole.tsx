"use client";

import { useSfx } from "@/components/ui/SfxProvider";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

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
            initial={{ opacity: 0, scale: 0.97, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="duel-shell w-full max-w-[1280px]"
          >
            {/* Projection cone from duel disk */}
            <div className="holo-projection-cone" aria-hidden />

            {/* ── Blue-Eyes White Dragon Card ── */}

            <div className="holo-shell">
              {/* ── Holographic Header ── */}
              <div className="holo-header">
                <div className="holo-header-left">
                  <span className="holo-header-icon">◆</span>
                  <span className="holo-header-tab">{activeTab.toUpperCase()}</span>
                </div>
                <button type="button" onClick={returnHome} onMouseEnter={() => play("nav")} className="holo-header-quit">
                  END DUEL
                </button>
              </div>

              {/* ── Holographic Screen ── */}
              <div className="holo-screen">
                {/* Corner chevrons */}
                <div className="holo-corner holo-corner-tl" aria-hidden />
                <div className="holo-corner holo-corner-tr" aria-hidden />
                <div className="holo-corner holo-corner-bl" aria-hidden />
                <div className="holo-corner holo-corner-br" aria-hidden />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="holo-content h-[480px] overflow-y-auto p-5 md:h-[520px] md:p-6"
                  >
                    {activeTab === "info" && <InfoScreen />}
                    {activeTab === "projects" && <ProjectsScreen play={play} />}
                    {activeTab === "resume" && <ResumeScreen play={play} />}
                    {activeTab === "contact" && <ContactScreen play={play} />}
                  </motion.div>
                </AnimatePresence>

                {/* Status bar with external links */}
                <div className="holo-statusbar">
                  <span className="holo-statusbar-sector">◆ {activeTab.toUpperCase()}</span>
                  <div className="holo-statusbar-links">
                    <a href="https://github.com/Zeeshan-Chaudhry" target="_blank" rel="noreferrer" onClick={() => play("tap")} onMouseEnter={() => play("nav")}>GitHub</a>
                    <a href="https://linkedin.com/in/zeeshannchaudhry" target="_blank" rel="noreferrer" onClick={() => play("tap")} onMouseEnter={() => play("nav")}>LinkedIn</a>
                    <a href="/Zeeshan_Resume_2026.pdf" download onClick={() => play("tap")} onMouseEnter={() => play("nav")}>Resume</a>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Duel Disk Navigation ── */}
            <div className="dd mt-6" aria-label="Duel disk navigation">
              {/* Left blade arm */}
              <div className="dd-arm dd-arm-l">
                <div className="dd-arm-body" aria-hidden />
                <div className="dd-arm-zones">
                  {tabs.slice(0, 2).map((tab) => (
                    <button
                      key={tab.key}
                      type="button"
                      onClick={() => { play("disk"); setActiveTab(tab.key); }}
                      className={`dd-zone ${activeTab === tab.key ? "dd-zone-active" : ""}`}
                      aria-current={activeTab === tab.key ? "page" : undefined}
                    >
                      <span className="dd-zone-tri" aria-hidden />
                      <span className="dd-zone-label">{tab.label}</span>
                      <span className="dd-zone-holo" aria-hidden />
                    </button>
                  ))}
                </div>
                <div className="dd-arm-connector" aria-hidden />
              </div>

              {/* Core wrist mount */}
              <div className="dd-core">
                <div className="dd-core-outer" />
                <div className="dd-core-ring" />
                <div className="dd-core-bolts" aria-hidden>
                  <span /><span /><span /><span />
                </div>
                <div className="dd-core-red">
                  <div className="dd-core-red-wing dd-core-red-l" />
                  <div className="dd-core-red-wing dd-core-red-r" />
                  <div className="dd-core-red-top" />
                </div>
                <div className="dd-core-lp">
                  <span className="dd-core-lp-val">4000</span>
                </div>
              </div>

              {/* Right blade arm */}
              <div className="dd-arm dd-arm-r">
                <div className="dd-arm-body" aria-hidden />
                <div className="dd-arm-zones">
                  {tabs.slice(2, 4).map((tab) => (
                    <button
                      key={tab.key}
                      type="button"
                      onClick={() => { play("disk"); setActiveTab(tab.key); }}
                      className={`dd-zone ${activeTab === tab.key ? "dd-zone-active" : ""}`}
                      aria-current={activeTab === tab.key ? "page" : undefined}
                    >
                      <span className="dd-zone-tri" aria-hidden />
                      <span className="dd-zone-label">{tab.label}</span>
                      <span className="dd-zone-holo" aria-hidden />
                    </button>
                  ))}
                </div>
                <div className="dd-arm-connector" aria-hidden />
              </div>
            </div>
            <p className="mt-5 text-center text-xs text-slate-100/90">© 2026 Zeeshan Chaudhry. All rights reserved.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}

function ScrollReveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SkillBar({ label, level, delay = 0 }: { label: string; level: number; delay?: number }) {
  return (
    <motion.div
      className="skill-bar-row"
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="skill-bar-label">{label}</span>
      <div className="skill-bar-track">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: delay + 0.2, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </motion.div>
  );
}

function InfoScreen() {
  const skills = [
    { label: "TypeScript", level: 92 },
    { label: "Python", level: 85 },
    { label: "React / RN", level: 90 },
    { label: "Node / Nest", level: 88 },
    { label: "Swift", level: 78 },
    { label: "AI / LLMs", level: 82 },
  ];

  return (
    <div className="section-content">
      <div className="grid gap-4 md:grid-cols-[1fr_260px]">
        {/* Left: Bio + Skills + Stats */}
        <div>
          <ScrollReveal>
            <p className="duel-label">About</p>
            <h2 className="duel-heading mt-2 text-2xl text-yellow-100 md:text-3xl">Zeeshan Chaudhry</h2>
            <p className="mt-2 max-w-2xl text-sm text-cyan-200">
              Full-stack product engineer building practical software, startup tools, and systems that move from idea to real-world use.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="mt-2 max-w-2xl text-xs leading-relaxed text-slate-300">
              Been coding since I was 9, started with Scratch, built my first game in Java at 11, and never stopped. Now I&apos;m studying CS at Western, interning as a software engineer, and shipping real products — from AI-powered order systems to field research tools used at geological sites. I want to build things that change the world, not just look good in a demo. Yu-Gi-Oh shaped my childhood, so it felt right to theme my portfolio around it.
            </p>
          </ScrollReveal>

          {/* Skills + Stats side by side */}
          <div className="mt-3 grid gap-3 md:grid-cols-2">
            <ScrollReveal delay={0.2}>
              <p className="text-[10px] uppercase tracking-[0.16em] text-cyan-200/50 mb-2">Power Levels</p>
              <div className="skill-bars">
                {skills.map((s, i) => (
                  <SkillBar key={s.label} label={s.label} level={s.level} delay={i * 0.06} />
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="text-[10px] uppercase tracking-[0.16em] text-cyan-200/50 mb-2">Stats</p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { label: "School", value: "Western University" },
                  { label: "Program", value: "Computer Science" },
                  { label: "Location", value: "Toronto, Canada" },
                  { label: "Status", value: "Open to Work" },
                ].map((stat) => (
                  <div key={stat.label} className="deck-card deck-card-hover p-2">
                    <p className="text-[10px] uppercase tracking-[0.14em] text-cyan-200/50">{stat.label}</p>
                    <p className="mt-0.5 text-xs font-medium text-slate-200">{stat.value}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Right: Blue-Eyes White Dragon */}
        <div className="about-card-column">
          <div className="bewd" aria-hidden>
            <div className="bewd-glow" />
            <div className="bewd-energy bewd-energy-1" />
            <div className="bewd-energy bewd-energy-2" />
            <div className="bewd-energy bewd-energy-3" />
            <div className="bewd-dragon">
              <Image
                src="/Blue_Eyes.webp"
                alt="Blue-Eyes White Dragon"
                width={360}
                height={360}
                className="bewd-img"
                priority
              />
            </div>
            <div className="bewd-particles">
              <span /><span /><span /><span /><span /><span />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectsScreen({ play }: { play: (kind?: "tap" | "nav" | "toggle") => void }) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const projectCards = [
    {
      title: "AI OrderFlow",
      label: "Family Business Automation",
      description:
        "Automated an end-to-end order fulfillment pipeline for an e-commerce business processing 100+ orders/day across Etsy and Shopify. Built email webhook integrations with Zapier, then migrated to custom webhooks powered by Claude API for accurate order parsing. Automated cron jobs forward orders to a 3PL warehouse and purchase shipping labels via EasyShip API, reducing fulfillment time from hours to minutes.",
      stack: ["TypeScript", "Next.js", "Node.js", "PostgreSQL", "Claude API", "EasyShip API"],
      href: "https://dynastyblades.com",
      why: "Real business automation eliminating manual order management as the business scaled. Not a demo project.",
      linkLabel: "DynastyBlades.com",
    },
    {
      title: "PolyMarketAgent",
      label: "Odds Comparison and Betting Assistant",
      description:
        "A betting assistant bot that compares Polymarket prices against sportsbook odds, converts both into implied probabilities, and surfaces better-value opportunities. It combines market ingest, signal generation, risk checks, a FastAPI service layer, and a monitoring dashboard.",
      stack: ["Python", "FastAPI", "TypeScript", "Trading Systems", "API Integration", "Docker"],
      href: "https://github.com/Zeeshan-Chaudhry/PolyMarketAgent",
      why: "Backend systems thinking, data-driven decision logic, and end-to-end architecture beyond a simple app demo.",
      linkLabel: "View on GitHub",
    },
    {
      title: "Plato",
      label: "Course Outline to Calendar Converter",
      description:
        "A web application that extracts course information from Western University course outline PDFs and converts it into iCalendar (.ics) files for Google Calendar, Apple Calendar, and Outlook. It parses class schedules, assessments, and date rules, then generates a structured study calendar with editable review flows.",
      stack: ["Python", "PDF Parsing", "Calendar Generation", "Flask", "Automation"],
      href: "https://github.com/Zeeshan-Chaudhry/plato",
      why: "Turns messy real-world documents into a usable student workflow. Evidence of product thinking and practical automation.",
      linkLabel: "View on GitHub",
    },
    {
      title: "AI Reactivation Agent",
      label: "Customer Win-Back Automation",
      description:
        "A FastAPI backend that automates customer reactivation workflows. It enriches churned customer data from HubSpot CRM, runs CrewAI-based reasoning to analyze churn reasons and recommend outreach strategies, drafts personalized reactivation emails via Gmail, and stores audit history in SQLite. Draft-first system with escalation logic for risky conversations.",
      stack: ["Python", "FastAPI", "CrewAI", "HubSpot API", "Docker", "SQLite"],
      href: "https://github.com/Zeeshan-Chaudhry/AI-Reactivation-Agent",
      why: "End-to-end AI agent pipeline with real CRM integrations, not just a wrapper around an LLM call.",
      linkLabel: "View on GitHub",
    },
    {
      title: "Western Geologist Notebook",
      label: "iOS Field Data Collection App",
      description:
        "An iOS app built for the Osinski Planetary Research Lab at Western University, used by 120+ operators across remote geological sites. Features offline-first data sync, role-based authentication via Firebase, and PDF document viewing for field reference materials.",
      stack: ["Swift", "Firebase", "iOS", "Offline Sync", "Role-Based Auth"],
      href: "https://github.com/Zeeshan-Chaudhry/WesternGeologistNoteBook",
      why: "Production app used by real researchers in the field. Built for a $60K+ funded research initiative.",
      linkLabel: "View on GitHub",
    },
    {
      title: "This Portfolio",
      label: "Yu-Gi-Oh Themed Interactive Portfolio",
      description:
        "The site you are looking at right now. A fully custom Next.js portfolio themed around Yu-Gi-Oh duel disks, with holographic UI, sound effects, animated transitions, and a card-based navigation system.",
      stack: ["TypeScript", "Next.js", "Framer Motion", "Tailwind CSS"],
      href: "https://github.com/Zeeshan-Chaudhry/personalPortfolio",
      why: "Shows personality and frontend craft beyond a standard template portfolio.",
      linkLabel: "View on GitHub",
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
    <div className="section-content">
      <ScrollReveal>
        <p className="duel-label">Projects</p>
        <h2 className="duel-heading mt-3 text-2xl text-yellow-100 md:text-3xl">Featured Builds</h2>
        <p className="mt-2 max-w-2xl text-xs leading-relaxed text-slate-300 md:text-sm">
          The strongest current projects. Closest to real workflows, technical leverage, and compounding value.
        </p>
      </ScrollReveal>
      <ScrollReveal delay={0.15}>
        <div className="mt-4 flex items-center justify-between gap-3">
          <p className="text-[10px] uppercase tracking-[0.16em] text-slate-500">Featured from GitHub</p>
          <div className="flex items-center gap-2">
            <button type="button" aria-label="Previous" onClick={() => { play("nav"); scrollProjects("prev"); }} onMouseEnter={() => play("nav")} className="scroll-btn">‹</button>
            <button type="button" aria-label="Next" onClick={() => { play("nav"); scrollProjects("next"); }} onMouseEnter={() => play("nav")} className="scroll-btn">›</button>
            <a href="https://github.com/Zeeshan-Chaudhry" target="_blank" rel="noreferrer" onClick={() => play("tap")} onMouseEnter={() => play("nav")} className="duel-link-btn px-3 py-1.5 text-[10px]">View All</a>
          </div>
        </div>
      </ScrollReveal>
      <div ref={sliderRef} className="mt-3 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 pr-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {projectCards.map((project, i) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="deck-card deck-card-hover flex min-w-[85%] snap-start flex-col p-4 sm:min-w-[68%] lg:min-w-[31%]"
          >
            <p className="text-[10px] uppercase tracking-[0.16em] text-cyan-300/80">{project.label}</p>
            <h3 className="mt-2 text-base font-semibold text-yellow-100">{project.title}</h3>
            <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-slate-300">{project.description}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {project.stack.slice(0, 4).map((item) => (
                <span key={`${project.title}-${item}`} className="tech-chip">{item}</span>
              ))}
            </div>
            <a href={project.href} target="_blank" rel="noreferrer" onClick={() => play("tap")} onMouseEnter={() => play("nav")} className="mt-auto inline-flex items-center gap-1 pt-3 text-xs uppercase tracking-[0.12em] text-cyan-300/70 transition-colors hover:text-cyan-200">
              {project.linkLabel} <span className="text-[10px]">→</span>
            </a>
          </motion.article>
        ))}
      </div>
    </div>
  );
}

function ResumeScreen({ play }: { play: (kind?: "tap" | "nav" | "toggle") => void }) {
  const experience = [
    { company: "Motive", role: "Software Engineer Intern · Building AI Infrastructure", period: "Nov 2025 – Present", desc: "Integrated Portkey as the AI gateway to route, cache, and monitor 10K+ LLM calls/month, reducing API costs by 35%. Built data pipelines ingesting 5,000+ event RSVPs and an AI evaluation engine auto-processing 1,000+ candidates per event, reducing manual review by 80%." },
    { company: "Osinski Planetary Research Lab", role: "Software Engineer Intern · Western University", period: "Sept 2024 – Sept 2025", desc: "Launched an iOS field data collection app used by 120+ operators across remote geological sites with offline-first sync. Built role-based auth via Firebase securing data across 3 research teams for a $60K+ funded initiative." },
    { company: "Fleex", role: "Software Engineer Intern", period: "May 2024 – Aug 2024", desc: "Delivered dashboard features, BTCPay integration, and hardened Auth0/Google OAuth flows." },
  ];

  return (
    <div className="section-content">
      <ScrollReveal>
        <p className="duel-label">Resume</p>
        <h2 className="duel-heading mt-3 text-2xl text-yellow-100 md:text-3xl">Experience</h2>
      </ScrollReveal>
      <div className="mt-4 space-y-3">
        {experience.map((exp, i) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="deck-card deck-card-hover p-4"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-sm font-semibold text-yellow-100">{exp.company}</h3>
              <span className="text-[10px] uppercase tracking-[0.14em] text-slate-500">{exp.period}</span>
            </div>
            <p className="mt-1 text-xs text-cyan-300/70">{exp.role}</p>
            <p className="mt-2 text-xs leading-relaxed text-slate-300">{exp.desc}</p>
          </motion.div>
        ))}
      </div>
      <ScrollReveal delay={0.3}>
        <a
          href="/Zeeshan_Resume_2026.pdf"
          download
          onClick={() => play("tap")}
          onMouseEnter={() => play("nav")}
          className="duel-enter-btn mt-5 inline-flex"
        >
          Download Resume
        </a>
      </ScrollReveal>
    </div>
  );
}

function useDuelistNotifications() {
  const notifications: { text: string; icon: React.ReactNode }[] = [
    { text: "Deployed AI OrderFlow", icon: <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg> },
    { text: "Pushed to PolyMarketAgent", icon: <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><line x1="3" x2="9" y1="12" y2="12"/><line x1="15" x2="21" y1="12" y2="12"/><path d="M12 3v6"/><path d="M12 15v6"/></svg> },
    { text: "Plato reached 50+ users", icon: <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"/></svg> },
    { text: "Shipped Portkey at Motive", icon: <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.287 1.288L3 12l5.8 1.9a2 2 0 0 1 1.288 1.287L12 21l1.9-5.8a2 2 0 0 1 1.287-1.288L21 12l-5.8-1.9a2 2 0 0 1-1.288-1.287Z"/></svg> },
    { text: "Built iOS app for Osinski Lab", icon: <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg> },
    { text: "Automated 100+ orders/day", icon: <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg> },
  ];
  const [active, setActive] = useState<{ text: string; icon: React.ReactNode; id: number } | null>(null);
  const idRef = useRef(0);
  useEffect(() => {
    const show = () => {
      const n = notifications[Math.floor(Math.random() * notifications.length)];
      setActive({ ...n, id: ++idRef.current });
      setTimeout(() => setActive(null), 3000);
    };
    const initial = setTimeout(show, 2000);
    const interval = setInterval(show, 5000);
    return () => { clearTimeout(initial); clearInterval(interval); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return active;
}

function ContactScreen({ play }: { play: (kind?: "tap" | "nav" | "toggle" | "disk") => void }) {
  const [entered, setEntered] = useState(false);
  const [barsReady, setBarsReady] = useState(false);
  const notification = useDuelistNotifications();

  // Trigger entrance slam after mount
  useEffect(() => {
    const t = setTimeout(() => setEntered(true), 100);
    const b = setTimeout(() => setBarsReady(true), 900);
    return () => { clearTimeout(t); clearTimeout(b); };
  }, []);

  // Play slam sound on entrance
  useEffect(() => {
    if (entered) play("disk");
  }, [entered, play]);

  const actions = [
    { label: "Email", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>, href: "mailto:ZeeshanNawazChaudhry@gmail.com" },
    { label: "LinkedIn", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>, href: "https://linkedin.com/in/zeeshannchaudhry", external: true },
    { label: "GitHub", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>, href: "https://github.com/Zeeshan-Chaudhry", external: true },
    { label: "Resume", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>, href: "/Zeeshan_Resume_2026.pdf", download: true },
  ];

  const powerLevels = [
    { label: "TypeScript", level: 92 },
    { label: "React / RN", level: 90 },
    { label: "Node / Nest", level: 88 },
    { label: "Python", level: 85 },
    { label: "AI / LLMs", level: 82 },
  ];

  return (
    <div className="section-content relative">
      {/* Rotating summoning circle behind everything */}
      <div className="cd-summoning-circle" aria-hidden />

      {/* Screen flash on card slam */}
      <div className={`cd-slam-flash ${entered ? "cd-slam-flash-active" : ""}`} aria-hidden />

      <div className="flex flex-col items-center gap-4 lg:flex-row lg:items-start lg:gap-8">
        {/* Left: Spinning Yu-Gi-Oh card */}
        <div
          className={`cd-card-stage ${entered ? "cd-card-entered" : "cd-card-pre"}`}
          style={{ perspective: 900 }}
        >
          {/* Glow behind card */}
          <div className={`cd-card-glow ${entered ? "cd-glow-active" : ""}`} aria-hidden />

          {/* Impact shockwave ring on slam */}
          <div className={`cd-shockwave ${entered ? "cd-shockwave-active" : ""}`} aria-hidden />

          <div className="cd-spin-card">
            <div className="cd-spin-card-inner">
              <div className="cd-spin-card-face cd-spin-card-front">
                <Image src="/signature-card.png" alt="Zeeshan Chaudhry" fill sizes="220px" className="object-contain rounded-[8px]" />
              </div>
              <div className="cd-spin-card-face cd-spin-card-back">
                <Image src="/Yugioh_Card_Back.jpg" alt="Card back" fill sizes="220px" className="object-cover rounded-[8px]" />
              </div>
            </div>
          </div>

          {/* Floating particles around card */}
          <div className="cd-floating-particles" aria-hidden>
            <span /><span /><span /><span /><span /><span />
            <span /><span /><span /><span /><span /><span />
          </div>
        </div>

        {/* Right: Info + actions with pulsing bracket border */}
        <div className="cd-right-panel flex flex-1 flex-col min-w-0">
          {/* Animated corner brackets */}
          <div className="cd-brackets" aria-hidden>
            <span className="cd-bracket cd-bracket-tl" />
            <span className="cd-bracket cd-bracket-tr" />
            <span className="cd-bracket cd-bracket-bl" />
            <span className="cd-bracket cd-bracket-br" />
          </div>

          {/* Live notification toast */}
          <div className="relative h-8 mb-3">
            <AnimatePresence mode="wait">
              {notification && (
                <motion.div
                  key={notification.id}
                  initial={{ opacity: 0, y: -8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.95 }}
                  className="cd-live-toast"
                >
                  <span className="cd-live-dot" />
                  <span className="cd-live-icon">{notification.icon}</span>
                  <span className="cd-live-text">{notification.text}</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Duelist info with staggered entrance */}
          <motion.div
            initial={{ opacity: 0, x: 30, filter: "blur(8px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="cd-section-label text-cyan-200/40">Duelist Profile</p>
            <h2 className="cd-profile-name mt-1">Zeeshan Chaudhry</h2>
            <p className="mt-1 text-xs text-slate-400">Software Engineer · Computer Science · Western University</p>
          </motion.div>

          {/* Quick stats row */}
          <motion.div
            initial={{ opacity: 0, x: 30, filter: "blur(8px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mt-3 flex flex-wrap gap-2"
          >
            {[
              { label: "Region", value: "Toronto, CA" },
              { label: "Guild", value: "Motive" },
              { label: "Status", value: "Open to Work" },
            ].map((s) => (
              <div key={s.label} className="cd-info-chip">
                <span className="cd-info-chip-label">{s.label}</span>
                <span className="cd-info-chip-value">{s.value}</span>
              </div>
            ))}
          </motion.div>

          {/* Power levels with sequential energy fill */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="mt-4"
          >
            <p className="cd-section-label text-cyan-200/30 mb-2">Power Levels</p>
            <div className="space-y-1.5">
              {powerLevels.map((s, i) => (
                <div key={s.label} className="cd-power-row">
                  <span className="cd-power-label">{s.label}</span>
                  <div className="cd-power-track">
                    <motion.div
                      className="cd-power-fill"
                      initial={{ width: 0 }}
                      animate={barsReady ? { width: `${s.level}%` } : { width: 0 }}
                      transition={{ duration: 1.2, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <span className="cd-power-spark" />
                    </motion.div>
                  </div>
                  <motion.span
                    className="cd-power-val"
                    initial={{ opacity: 0 }}
                    animate={barsReady ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.15 + 0.8 }}
                  >{s.level}</motion.span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Challenge actions with summoning circle hover */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-4"
          >
            <p className="cd-section-label text-yellow-200/40 mb-2">Challenge This Duelist</p>
            <div className="flex gap-2">
              {actions.map((a, i) => (
                <motion.a
                  key={a.label}
                  href={a.href}
                  target={a.external ? "_blank" : undefined}
                  rel={a.external ? "noreferrer" : undefined}
                  download={a.download || undefined}
                  onClick={() => play("tap")}
                  onMouseEnter={() => play("nav")}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.9 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="cd-action group"
                >
                  <span className="cd-action-circle" aria-hidden />
                  <span className="cd-action-icon">{a.icon}</span>
                  <p className="cd-action-label">{a.label}</p>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
