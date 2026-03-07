import Reveal from "@/components/ui/Reveal";
import SectionFrame from "@/components/ui/SectionFrame";

export default function About() {
  return (
    <SectionFrame
      id="about"
      phase="Standby Phase"
      title="About The Duelist"
      subtitle="I build products that feel sharp in user hands and strong under production pressure."
    >
      <Reveal>
        <div className="grid gap-6 md:grid-cols-2">
          <p className="text-pretty text-slate-200">
            I am a builder focused on turning ambitious product concepts into performant, scalable systems. My work blends fast experimentation with disciplined engineering so ideas become reliable products.
          </p>
          <p className="text-pretty text-slate-300">
            From early-stage prototypes to mature platforms, I design experiences that are visually strong, conversion-minded, and technically durable. I collaborate closely with founders and teams to ship outcomes, not just features.
          </p>
        </div>
      </Reveal>
    </SectionFrame>
  );
}
