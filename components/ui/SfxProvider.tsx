"use client";

import { createContext, ReactNode, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";

type SfxKind = "tap" | "nav" | "toggle" | "disk";

interface SfxContextValue {
  enabled: boolean;
  setEnabled: (next: boolean) => void;
  play: (kind?: SfxKind, force?: boolean) => void;
}

const STORAGE_KEY = "duel_sfx_enabled";
const SfxContext = createContext<SfxContextValue | null>(null);

function getAudioContext(): AudioContext | null {
  const AudioCtor = window.AudioContext || (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  return AudioCtor ? new AudioCtor() : null;
}

export function SfxProvider({ children }: { children: ReactNode }) {
  const contextRef = useRef<AudioContext | null>(null);
  const tapAudioRef = useRef<HTMLAudioElement | null>(null);
  const [enabled, setEnabledState] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "1") {
      setEnabledState(true);
    }
  }, []);

  const unlock = useCallback(async () => {
    if (!contextRef.current) {
      contextRef.current = getAudioContext();
    }

    if (contextRef.current && contextRef.current.state === "suspended") {
      try {
        await contextRef.current.resume();
      } catch {
        // Keep silent if browser blocks resume in background tabs.
      }
    }
  }, []);

  useEffect(() => {
    const onInteract = () => {
      void unlock();
    };

    document.addEventListener("pointerdown", onInteract, { passive: true });
    document.addEventListener("keydown", onInteract);

    return () => {
      document.removeEventListener("pointerdown", onInteract);
      document.removeEventListener("keydown", onInteract);
    };
  }, [unlock]);

  useEffect(() => {
    const audio = new Audio("/set-card.mp3");
    audio.preload = "auto";
    audio.volume = 0.55;
    tapAudioRef.current = audio;

    return () => {
      audio.pause();
      tapAudioRef.current = null;
    };
  }, []);

  const setEnabled = useCallback(
    (next: boolean) => {
      setEnabledState(next);
      window.localStorage.setItem(STORAGE_KEY, next ? "1" : "0");
      if (next) {
        void unlock();
      }
    },
    [unlock],
  );

  const play = useCallback(
    (kind: SfxKind = "tap", force = false) => {
      if (!enabled && !force) return;

      if (kind === "disk") {
        const tapTemplate = tapAudioRef.current;
        if (!tapTemplate) return;

        const tapAudio = tapTemplate.cloneNode() as HTMLAudioElement;
        tapAudio.volume = 0.55;
        tapAudio.currentTime = 0;
        void tapAudio.play().catch(() => {
          // Ignore autoplay-style rejections and fail silently.
        });
        return;
      }

      if (!contextRef.current) {
        contextRef.current = getAudioContext();
      }

      const ctx = contextRef.current;
      if (!ctx) return;

      if (ctx.state === "suspended") {
        void ctx.resume();
      }

      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      if (kind === "toggle") {
        osc.type = "triangle";
        osc.frequency.setValueAtTime(420, now);
      } else if (kind === "nav") {
        osc.type = "square";
        osc.frequency.setValueAtTime(330, now);
      } else {
        osc.type = "sine";
        osc.frequency.setValueAtTime(280, now);
      }

      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(0.045, now + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.14);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.16);
    },
    [enabled],
  );

  const value = useMemo<SfxContextValue>(
    () => ({
      enabled,
      setEnabled,
      play,
    }),
    [enabled, play, setEnabled],
  );

  return <SfxContext.Provider value={value}>{children}</SfxContext.Provider>;
}

export function useSfx() {
  const ctx = useContext(SfxContext);
  if (!ctx) {
    throw new Error("useSfx must be used within SfxProvider");
  }

  return ctx;
}
