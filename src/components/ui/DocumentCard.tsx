"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface DocumentCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  required: boolean;
  index: number;
}

export default function DocumentCard({
  icon: Icon,
  title,
  description,
  required,
  index,
}: DocumentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.05,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative"
    >
      {/* Hover glow */}
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-[#4ba82e]/0 to-[#4ba82e]/0 group-hover:from-[#4ba82e]/30 group-hover:to-[#4ba82e]/10 transition-all duration-500 blur-sm" />

      <div className="relative glass-panel rounded-2xl p-6 h-full flex flex-col gap-4 overflow-hidden group-hover:border-[#4ba82e]/30 transition-colors duration-500">
        {/* Top row: icon + badge */}
        <div className="flex items-start justify-between">
          <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center group-hover:border-[#4ba82e]/30 group-hover:bg-[#4ba82e]/10 transition-all duration-500">
            <Icon
              size={22}
              className="text-white/40 group-hover:text-[#4ba82e] transition-colors duration-500"
            />
          </div>
          <span
            className={`text-[10px] tracking-widest uppercase px-3 py-1 rounded-full font-medium ${
              required
                ? "bg-[#4ba82e]/10 text-[#4ba82e] border border-[#4ba82e]/20"
                : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
            }`}
          >
            {required ? "Required" : "If Applicable"}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base font-semibold text-white/90 font-[family-name:var(--font-outfit)] leading-tight">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-white/40 leading-relaxed flex-1">
          {description}
        </p>

        {/* Bottom accent line */}
        <div className="w-0 group-hover:w-full h-[1px] bg-gradient-to-r from-[#4ba82e]/50 to-transparent transition-all duration-700" />
      </div>
    </motion.div>
  );
}
