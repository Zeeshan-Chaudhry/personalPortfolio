"use client";

import Reveal from "@/components/ui/Reveal";
import SectionFrame from "@/components/ui/SectionFrame";
import { projects } from "@/data/portfolio";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <SectionFrame
      id="projects"
      phase="Main Phase I"
      title="Project Deck"
      subtitle="Each card represents a shipped product or system designed for measurable impact."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.06}>
            <motion.article
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ duration: 0.24 }}
              className="project-card group relative h-72 rounded-2xl"
            >
              <div className="project-card-inner absolute inset-0 rounded-2xl">
                <div className="project-face project-front absolute inset-0 rounded-2xl p-5">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-cyan-300">{project.type}</p>
                  <h3 className="mt-3 text-xl text-gold-100">{project.title}</h3>
                  <p className="mt-4 text-sm text-slate-300">Hover to reveal details</p>
                </div>
                <div className="project-face project-back absolute inset-0 rounded-2xl p-5">
                  <p className="text-sm leading-relaxed text-slate-200">{project.summary}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={`${project.title}-${item}`}
                        className="rounded-full border border-cyan-300/40 bg-cyan-500/10 px-2.5 py-1 text-[11px] text-cyan-100"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </SectionFrame>
  );
}
