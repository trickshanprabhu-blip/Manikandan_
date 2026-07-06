"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: "filled" | "outlined";
}

export default function MagneticButton({
  children,
  className = "",
  onClick,
  variant = "filled",
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const glowOpacity = useTransform(
    [xSpring, ySpring],
    ([latestX, latestY]) => {
      const dist = Math.sqrt(
        (latestX as number) ** 2 + (latestY as number) ** 2
      );
      return Math.min(dist / 50, 1) * 0.6;
    }
  );

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.3);
    y.set((e.clientY - centerY) * 0.3);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const baseStyles =
    variant === "filled"
      ? "bg-[#4ba82e] text-white hover:bg-[#3d8c24] shadow-lg shadow-[#4ba82e]/20"
      : "bg-transparent text-white border border-white/20 hover:border-white/50";

  return (
    <motion.button
      ref={ref}
      style={{ x: xSpring, y: ySpring }}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      onClick={onClick}
      whileTap={{ scale: 0.95 }}
      className={`relative px-8 py-3.5 rounded-full font-medium text-sm tracking-wide transition-colors duration-300 cursor-pointer overflow-hidden ${baseStyles} ${className}`}
    >
      <motion.span
        className="absolute inset-0 rounded-full bg-white/10"
        style={{ opacity: glowOpacity }}
      />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
