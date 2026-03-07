"use client";

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

  const tabIndex = useMemo(() => tabs.findIndex((t) => t.key === activeTab), [activeTab]);
  const goPrev = () => setActiveTab(tabs[(tabIndex - 1 + tabs.length) % tabs.length].key);
  const goNext = () => setActiveTab(tabs[(tabIndex + 1) % tabs.length].key);

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
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            className="closed-console w-full max-w-[880px]"
          >
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
                  onClick={() => setBooted(true)}
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
            <div className="duel-top relative rounded-[1.2rem] p-4 md:p-5">
              <div className="duel-floating-card duel-floating-card-terminal" aria-hidden>
                <div className="duel-floating-card-inner">
                  <div className="duel-floating-card-face duel-floating-card-front">
                    <Image
                      src="/signature-card.png"
                      alt="Zeeshan signature card"
                      className="duel-card-image"
                      fill
                      sizes="160px"
                    />
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
                  {activeTab === "projects" && <ProjectsScreen />}
                  {activeTab === "resume" && <ResumeScreen />}
                  {activeTab === "contact" && <ContactScreen />}
                </motion.div>
              </div>
            </div>

            <div className="duel-hinge my-1" aria-hidden />

            <div className="duel-bottom relative rounded-[1.2rem] p-4 md:p-5">
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
                      onClick={() => setActiveTab(tab.key)}
                      className={`duel-tab ${activeTab === tab.key ? "duel-tab-active" : ""}`}
                      aria-current={activeTab === tab.key ? "page" : undefined}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button type="button" onClick={goPrev} className="duel-nav-btn">
                    Back
                  </button>
                  <button type="button" onClick={goNext} className="duel-nav-btn duel-nav-btn-next">
                    Next
                  </button>
                </div>

                <button type="button" onClick={() => setBooted(false)} className="duel-quit-btn mt-3 w-full">
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
        &quot;I&apos;m a third-year Computer Science student at Western University who enjoys building software, startups, and
        technical products. I&apos;m interested in full-stack development, entrepreneurship, and creating tools that solve real
        problems.&quot;
      </p>
      <div className="mt-4">
        <h3 className="text-sm text-yellow-100">Hobbies</h3>
        <ul className="mt-2 space-y-1 text-xs text-slate-200">
          <li>• Building side projects and startups</li>
          <li>• Going to the gym</li>
          <li>• Exploring new tech and AI tools</li>
          <li>• Watching anime / gaming</li>
          <li>• Learning about business and entrepreneurship</li>
        </ul>
      </div>
    </div>
  );
}

function ProjectsScreen() {
  const projectCards = [
    {
      name: "Project Alpha",
      description: "A full-stack app placeholder focused on solving a real productivity workflow.",
      github: "https://github.com",
    },
    {
      name: "Project Beta",
      description: "A startup-style MVP placeholder with clean UX and practical automation features.",
      github: "https://github.com",
    },
    {
      name: "Project Gamma",
      description: "A developer tooling placeholder that streamlines repetitive engineering tasks.",
      github: "https://github.com",
    },
    {
      name: "Project Delta",
      description: "An AI-enhanced placeholder product designed to deliver useful real-world insights.",
      github: "https://github.com",
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
            <a href={project.github} target="_blank" rel="noreferrer" className="mt-2 inline-block text-xs text-cyan-300">
              GitHub
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}

function ResumeScreen() {
  return (
    <div>
      <p className="duel-label">Resume</p>
      <h2 className="mt-3 text-2xl text-yellow-100">Resume Terminal</h2>
      <p className="mt-4 text-sm text-slate-200">Access my latest resume here.</p>
      <button type="button" className="duel-enter-btn mt-4">
        Download Resume
      </button>
    </div>
  );
}

function ContactScreen() {
  return (
    <div>
      <p className="duel-label">Contact</p>
      <h2 className="mt-3 text-2xl text-yellow-100">Final Terminal</h2>
      <p className="mt-4 text-sm text-slate-200">Ready to collaborate on your next product duel.</p>
      <div className="mt-4 flex flex-wrap gap-2">
        <a href="mailto:you@example.com" className="duel-link-btn">
          you@example.com
        </a>
        <a href="https://github.com" className="duel-link-btn" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="https://linkedin.com" className="duel-link-btn" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>
    </div>
  );
}
