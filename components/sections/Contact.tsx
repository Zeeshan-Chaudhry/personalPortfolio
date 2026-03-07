import Reveal from "@/components/ui/Reveal";
import SectionFrame from "@/components/ui/SectionFrame";

export default function Contact() {
  return (
    <SectionFrame
      id="contact"
      phase="End Phase"
      title="Summon Portal"
      subtitle="Ready to collaborate? Send a signal and let's build the next winning deck."
    >
      <Reveal>
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="text-pretty text-slate-200">
              I partner with founders, teams, and ambitious operators to design and ship high-leverage digital products.
            </p>
            <div className="mt-5 flex flex-wrap gap-3 text-sm">
              <a className="duel-link" href="mailto:you@example.com">
                you@example.com
              </a>
              <a className="duel-link" href="https://linkedin.com" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a className="duel-link" href="https://github.com" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>
          <a href="mailto:you@example.com" className="duel-button text-sm uppercase tracking-[0.18em]">
            Activate Contact
          </a>
        </div>
      </Reveal>
    </SectionFrame>
  );
}
