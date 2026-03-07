import { ReactNode } from "react";

interface SectionFrameProps {
  id: string;
  title: string;
  subtitle: string;
  phase: string;
  children: ReactNode;
}

export default function SectionFrame({ id, title, subtitle, phase, children }: SectionFrameProps) {
  return (
    <section id={id} className="relative mx-auto w-full max-w-6xl px-6 py-24 md:px-10 md:py-32">
      <div className="duel-panel rounded-3xl p-6 md:p-10">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="phase-chip">{phase}</p>
            <h2 className="mt-4 text-balance text-3xl font-semibold md:text-4xl">{title}</h2>
            <p className="mt-3 max-w-2xl text-sm text-slate-300 md:text-base">{subtitle}</p>
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}
