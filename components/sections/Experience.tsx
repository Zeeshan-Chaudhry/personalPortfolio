import Reveal from "@/components/ui/Reveal";
import SectionFrame from "@/components/ui/SectionFrame";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <SectionFrame
      id="experience"
      phase="Battle Phase"
      title="Duelist Timeline"
      subtitle="A progression path of roles where strategy and delivery kept leveling up."
    >
      <div className="relative space-y-7 before:absolute before:left-2 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-gradient-to-b before:from-cyan-400 before:to-red-400">
        {experience.map((entry, index) => (
          <Reveal key={entry.period} delay={index * 0.08}>
            <article className="relative ml-8 rounded-2xl border border-slate-700/70 bg-slate-900/65 p-5">
              <span className="absolute -left-[1.88rem] top-6 h-3.5 w-3.5 rounded-full border border-cyan-200/70 bg-cyan-300 shadow-[0_0_18px_rgba(56,189,248,0.8)]" />
              <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">{entry.period}</p>
              <h3 className="mt-2 text-xl text-gold-100">{entry.role}</h3>
              <p className="mt-1 text-sm text-slate-300">{entry.org}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-200">{entry.detail}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionFrame>
  );
}
