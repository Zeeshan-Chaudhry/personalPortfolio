"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function CursorAura() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const sx = useSpring(x, { damping: 40, stiffness: 240, mass: 0.5 });
  const sy = useSpring(y, { damping: 40, stiffness: 240, mass: 0.5 });

  useEffect(() => {
    const move = (event: MouseEvent) => {
      x.set(event.clientX - 130);
      y.set(event.clientY - 130);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-10 hidden h-64 w-64 rounded-full bg-[radial-gradient(circle,_rgba(56,189,248,0.25),_rgba(56,189,248,0.05)_45%,_transparent_70%)] blur-2xl md:block"
      style={{ x: sx, y: sy }}
    />
  );
}
