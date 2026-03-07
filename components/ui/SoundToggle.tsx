"use client";

import { useSfx } from "@/components/ui/SfxProvider";

export default function SoundToggle() {
  const { enabled, setEnabled, play } = useSfx();

  const toggle = () => {
    const next = !enabled;
    setEnabled(next);
    if (next) {
      // Play immediately after enabling so users get confirmation feedback.
      play("toggle");
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      onMouseEnter={() => play("nav")}
      onFocus={() => play("nav")}
      aria-pressed={enabled}
      className="duel-button text-xs uppercase tracking-[0.2em]"
    >
      SFX {enabled ? "On" : "Off"}
    </button>
  );
}
