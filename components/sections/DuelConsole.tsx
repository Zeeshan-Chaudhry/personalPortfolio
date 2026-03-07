"use client";

import { useSfx } from "@/components/ui/SfxProvider";
import { motion } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";

type TabKey = "info" | "projects" | "resume" | "contact";

const tabs: { key: TabKey; label: string }[] = [
  { key: "info", label: "INFO" },
  { key: "projects", label: "PROJECTS" },
  { key: "resume", label: "RESUME" },
  { key: "contact", label: "CONTACT" },
];

export default function DuelConsole() {
  const [booted, setBooted] = useState(false);
  const [activeTab, setActiveTab] = useState<TabKey>("info");
  const { play } = useSfx();

  const tabIndex = useMemo(() => tabs.findIndex((t) => t.key === activeTab), [activeTab]);

  const goPrev = () => {
    play("nav");
    setActiveTab(tabs[(tabIndex - 1 + tabs.length) % tabs.length].key);
  };

  const goNext = () => {
    play("nav");
    setActiveTab(tabs[(tabIndex + 1) % tabs.length].key);
  };

  const startDuel = () => {
    play("toggle");
    setBooted(true);
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

      <div className="relative z-20 mx-auto flex min-h-[86vh] w-full max-w-5xl items-center justify-center">
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
            className="duel-shell w-full max-w-[1020px]"
          >
            <div className="duel-display-stack">
              <div className="duel-display-back" aria-hidden />
              <div className="duel-top relative z-10 rounded-[1.2rem] p-4 md:p-5">
                <div className="duel-floating-card duel-floating-card-terminal" aria-hidden>
                  <div className="duel-floating-card-inner">
                    <div className="duel-floating-card-face duel-floating-card-front">
                      <Image src="/signature-card.png" alt="Zeeshan signature card" className="duel-card-image" fill sizes="160px" />
                    </div>
                    <div className="duel-floating-card-face duel-floating-card-back">
                      <p className="duel-card-meta">Project Access</p>
                      <p className="duel-card-title">My Projects Deck</p>
                    </div>
                  </div>
                </div>
                <div className="duel-screen rounded-xl p-3 md:p-4">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="duel-screen-inner min-h-[255px] rounded-lg p-4 md:min-h-[300px]"
                  >
                    {activeTab === "info" && <InfoScreen />}
                    {activeTab === "projects" && <ProjectsScreen play={play} />}
                    {activeTab === "resume" && <ResumeScreen play={play} />}
                    {activeTab === "contact" && <ContactScreen play={play} />}
                  </motion.div>
                </div>
              </div>
            </div>

            <div className="duel-hinge my-2" aria-hidden />

            <div className="duel-bottom relative mt-4 rounded-[1.2rem] p-4 md:p-5">
              <div className="duel-bottom-disc" aria-hidden>
                <div className="dpad-ring" />
                <div className="dpad-core">+</div>
              </div>

              <div className="duel-controls ml-auto w-full max-w-[680px] rounded-xl p-3 text-slate-200 md:p-4">
                <div className="mb-3 grid grid-cols-2 gap-2 md:grid-cols-4">
                  {tabs.map((tab) => (
                    <button
                      key={tab.key}
                      type="button"
                      onClick={() => {
                        play("nav");
                        setActiveTab(tab.key);
                      }}
                      onMouseEnter={() => play("nav")}
                      onFocus={() => play("nav")}
                      className={`duel-tab ${activeTab === tab.key ? "duel-tab-active" : ""}`}
                      aria-current={activeTab === tab.key ? "page" : undefined}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button type="button" onClick={goPrev} onMouseEnter={() => play("nav")} onFocus={() => play("nav")} className="duel-nav-btn">
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    onMouseEnter={() => play("nav")}
                    onFocus={() => play("nav")}
                    className="duel-nav-btn duel-nav-btn-next"
                  >
                    Next
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    play("toggle");
                    setBooted(false);
                  }}
                  onMouseEnter={() => play("nav")}
                  onFocus={() => play("nav")}
                  className="duel-quit-btn mt-3 w-full"
                >
                  Quit
                </button>
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
      <p className="duel-label">Info</p>
      <h2 className="duel-heading mt-3 text-2xl text-yellow-100">Zeeshan Chaudhry</h2>
      <p className="mt-1 text-xs uppercase tracking-[0.16em] text-cyan-200">
        Third-Year Computer Science Student • Western University
      </p>
      <div className="duel-gold-divider mt-3" aria-hidden />
      <p className="mt-4 text-sm leading-relaxed text-slate-200">
        I&apos;m a third-year Computer Science student at Western University who enjoys building software, startups, and technical
        products. I&apos;m interested in full-stack development, entrepreneurship, and creating tools that solve real problems.
      </p>
      <div className="mt-4">
        <h3 className="text-sm text-yellow-100">Hobbies</h3>
        <ul className="mt-2 space-y-1 text-xs text-slate-200">
          <li>• Building side projects and startups</li>
          <li>• Going to the gym</li>
          <li>• Exploring new tech and AI tools</li>
          <li>• Cars, automotive design, and motorsport culture</li>
          <li>• Learning about business and entrepreneurship</li>
        </ul>
      </div>
    </div>
  );
}

function ProjectsScreen({ play }: { play: (kind?: "tap" | "nav" | "toggle") => void }) {
  const projectCards = [
    {
      name: "3PL Software — Workflow Automation",
      description: "Building automation tooling for a 3PL partner handling 700+ shipments/week.",
      github: "https://github.com/Zeeshan-Chaudhry",
    },
    {
      name: "Sultan Knives — E-Commerce Platform",
      description: "Full-stack commerce platform supporting secure checkout and operations workflows.",
      github: "https://github.com/Zeeshan-Chaudhry",
    },
    {
      name: "Plato — PDF to Calendar Converter",
      description: "Converts university outline PDFs into structured iCalendar exports with review tools.",
      github: "https://github.com/Zeeshan-Chaudhry",
    },
    {
      name: "Motive Rewards App APIs",
      description: "Built and optimized REST APIs powering event discovery, ticketing, and analytics.",
      github: "https://github.com/Zeeshan-Chaudhry",
    },
  ];

  return (
    <div>
      <p className="duel-label">Projects</p>
      <h2 className="mt-3 text-2xl text-yellow-100">Project Cards</h2>
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        {projectCards.map((project) => (
          <article key={project.name} className="deck-card">
            <h3 className="mt-1 text-sm text-yellow-100">{project.name}</h3>
            <p className="mt-2 line-clamp-3 text-xs text-slate-300">{project.description}</p>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              onClick={() => play("tap")}
              onMouseEnter={() => play("nav")}
              onFocus={() => play("nav")}
              className="mt-2 inline-block text-xs text-cyan-300"
            >
              GitHub
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
    <div>
      <p className="duel-label">Contact</p>
      <h2 className="mt-3 text-2xl text-yellow-100">Final Terminal</h2>
      <p className="mt-4 text-sm text-slate-200">Ready to collaborate on your next product duel.</p>
      <div className="mt-4 flex flex-wrap gap-2">
        <a href="mailto:ZeeshanNawazChaudhry@gmail.com" onClick={() => play("tap")} onMouseEnter={() => play("nav")} onFocus={() => play("nav")} className="duel-link-btn">
          Email
        </a>
        <a
          href="https://linkedin.com/in/zeeshannchaudhry"
          className="duel-link-btn"
          target="_blank"
          rel="noreferrer"
          onClick={() => play("tap")}
          onMouseEnter={() => play("nav")}
          onFocus={() => play("nav")}
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/Zeeshan-Chaudhry"
          className="duel-link-btn"
          target="_blank"
          rel="noreferrer"
          onClick={() => play("tap")}
          onMouseEnter={() => play("nav")}
          onFocus={() => play("nav")}
        >
          GitHub
        </a>
      </div>
    </div>
  );
}
