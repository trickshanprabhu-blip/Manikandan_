"use client";

import { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import ParticleField from "@/components/ui/ParticleField";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const lightX = useTransform(mouseX, [0, 1], [30, 70]);
  const lightY = useTransform(mouseY, [0, 1], [20, 60]);

  const handleMouse = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      onMouseMove={handleMouse}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#050505]" />

      {/* Mouse-responsive lighting */}
      <motion.div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background: useTransform(
            [lightX, lightY],
            ([x, y]) =>
              `radial-gradient(600px circle at ${x}% ${y}%, rgba(75,168,46,0.12), transparent 60%)`
          ),
        }}
      />

      {/* Particles */}
      <ParticleField />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-24"
      >
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left — Text */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#4ba82e] animate-pulse" />
              <span className="text-xs text-white/60 tracking-widest uppercase">
                Available for Consultation
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-[family-name:var(--font-outfit)] text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[0.95]"
            >
              <span className="text-gradient">MANI</span>
              <br />
              <span className="text-[#4ba82e]">KANDAN</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-6 text-lg sm:text-xl text-white/40 font-light tracking-wide"
            >
              Car Body Repair & Insurance Specialist
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2 mt-2 justify-center lg:justify-start"
            >
              <div className="w-8 h-[1px] bg-[#4ba82e]" />
              <span className="text-sm text-white/30 tracking-[0.2em] uppercase">
                Škoda Auto · Chennai
              </span>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="mt-8 text-base text-white/50 max-w-lg leading-relaxed mx-auto lg:mx-0"
            >
              I specialize in professional car body repairs and insurance claim
              assistance, ensuring every customer receives high-quality
              workmanship and a smooth insurance process.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <MagneticButton
                variant="filled"
                onClick={() => scrollTo("#contact")}
              >
                Contact Me
              </MagneticButton>
              <MagneticButton
                variant="outlined"
                onClick={() => scrollTo("#car-experience")}
              >
                Explore My Work
              </MagneticButton>
            </motion.div>
          </div>

          {/* Right — Profile Card */}
          <motion.div variants={itemVariants} className="relative flex-shrink-0">
            <div className="relative">
              {/* Glow behind */}
              <div className="absolute -inset-4 bg-[#4ba82e]/10 rounded-3xl blur-3xl" />

              {/* Glassmorphism card */}
              <div className="relative glass-panel rounded-2xl p-3 overflow-hidden group">
                <div className="relative w-64 h-80 sm:w-72 sm:h-96 lg:w-80 lg:h-[28rem] rounded-xl overflow-hidden">
                  <Image
                    src="/profile.jpg"
                    alt="Manikandan — Car Body Repair & Insurance Specialist"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                    sizes="(max-width: 768px) 256px, 320px"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                {/* Card bottom label */}
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-sm font-medium text-white/90">
                    Manikandan
                  </p>
                  <p className="text-xs text-white/50">
                    Škoda Auto, Chennai
                  </p>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16">
                  <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-[#4ba82e]/60" />
                </div>
                <div className="absolute bottom-0 left-0 w-16 h-16">
                  <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-[#4ba82e]/60" />
                </div>
              </div>
            </div>

            {/* Floating animation */}
            <motion.div
              className="absolute -top-6 -right-6 glass-panel rounded-xl px-3 py-2"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-xs text-[#4ba82e] font-semibold">
                10+ Years
              </span>
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-4 glass-panel rounded-xl px-3 py-2"
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              <span className="text-xs text-white/60">
                ✓ Insurance Expert
              </span>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => scrollTo("#car-experience")}
      >
        <span className="text-[10px] text-white/30 tracking-[0.3em] uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={18} className="text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
