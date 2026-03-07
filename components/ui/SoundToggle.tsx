"use client";

import { useState } from "react";

function beep() {
  const AudioContextRef = window.AudioContext || (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!AudioContextRef) return;

  const context = new AudioContextRef();
  const oscillator = context.createOscillator();
  const gain = context.createGain();

  oscillator.type = "triangle";
  oscillator.frequency.value = 390;

  gain.gain.setValueAtTime(0.0001, context.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.04, context.currentTime + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.18);

  oscillator.connect(gain);
  gain.connect(context.destination);

  oscillator.start();
  oscillator.stop(context.currentTime + 0.2);
}

export default function SoundToggle() {
  const [enabled, setEnabled] = useState(false);

  const toggle = () => {
    const next = !enabled;
    setEnabled(next);
    if (next) beep();
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={enabled}
      className="duel-button text-xs uppercase tracking-[0.2em]"
    >
      SFX {enabled ? "On" : "Off"}
    </button>
  );
}
