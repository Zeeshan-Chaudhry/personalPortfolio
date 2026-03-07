import Reveal from "@/components/ui/Reveal";
import SectionFrame from "@/components/ui/SectionFrame";
import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <SectionFrame
      id="skills"
      phase="Main Phase II"
      title="Deck Attributes"
      subtitle="Core capabilities organized like a competitive build: balanced, versatile, and battle-tested."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {skills.map((group, index) => (
          <Reveal key={group.category} delay={index * 0.07}>
            <article className="rounded-2xl border border-gold-200/25 bg-[linear-gradient(160deg,rgba(15,23,42,0.8),rgba(11,17,32,0.9))] p-5">
              <h3 className="text-lg text-gold-100">{group.category}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-md border border-slate-600 bg-slate-900/70 px-2.5 py-1 text-xs text-slate-200">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionFrame>
  );
}
