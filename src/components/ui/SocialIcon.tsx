"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface SocialIconProps {
  icon: LucideIcon;
  href: string;
  label: string;
}

export default function SocialIcon({ icon: Icon, href, label }: SocialIconProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      whileHover={{ scale: 1.15, y: -3 }}
      whileTap={{ scale: 0.95 }}
      className="relative group w-12 h-12 rounded-full glass-panel flex items-center justify-center cursor-pointer"
    >
      {/* Glow ring */}
      <div className="absolute inset-0 rounded-full bg-[#4ba82e]/0 group-hover:bg-[#4ba82e]/10 transition-all duration-500" />
      <div className="absolute -inset-[1px] rounded-full border border-transparent group-hover:border-[#4ba82e]/40 transition-all duration-500" />
      <Icon
        size={18}
        className="relative z-10 text-white/50 group-hover:text-[#4ba82e] transition-colors duration-300"
      />
    </motion.a>
  );
}
