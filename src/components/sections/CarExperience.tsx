"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 180;

function padFrame(n: number): string {
  return String(n).padStart(3, "0");
}

function getFramePath(i: number): string {
  return `/frames/ezgif-frame-${padFrame(i)}.jpg`;
}

export default function CarExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [loadProgress, setLoadProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const frameIndexRef = useRef(0);

  const drawFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const img = imagesRef.current[index];
    if (!img) return;

    // Size canvas to match image aspect ratio
    const dpr = window.devicePixelRatio || 1;
    const containerWidth = canvas.parentElement?.clientWidth || window.innerWidth;
    const containerHeight = canvas.parentElement?.clientHeight || window.innerHeight;

    canvas.width = containerWidth * dpr;
    canvas.height = containerHeight * dpr;
    canvas.style.width = `${containerWidth}px`;
    canvas.style.height = `${containerHeight}px`;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Cover-fit the image
    const imgAspect = img.naturalWidth / img.naturalHeight;
    const canvasAspect = canvas.width / canvas.height;
    let drawW: number, drawH: number, drawX: number, drawY: number;

    if (canvasAspect > imgAspect) {
      drawW = canvas.width;
      drawH = canvas.width / imgAspect;
      drawX = 0;
      drawY = (canvas.height - drawH) / 2;
    } else {
      drawH = canvas.height;
      drawW = canvas.height * imgAspect;
      drawX = (canvas.width - drawW) / 2;
      drawY = 0;
    }

    ctx.drawImage(img, drawX, drawY, drawW, drawH);
  }, []);

  // Preload all frames
  useEffect(() => {
    let loadedCount = 0;
    const images: HTMLImageElement[] = [];

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFramePath(i);
      img.onload = () => {
        loadedCount++;
        setLoadProgress(Math.round((loadedCount / TOTAL_FRAMES) * 100));
        if (loadedCount === TOTAL_FRAMES) {
          setLoaded(true);
          drawFrame(0);
        }
      };
      img.onerror = () => {
        loadedCount++;
        setLoadProgress(Math.round((loadedCount / TOTAL_FRAMES) * 100));
        if (loadedCount === TOTAL_FRAMES) setLoaded(true);
      };
      images.push(img);
    }

    imagesRef.current = images;
  }, [drawFrame]);

  // Setup ScrollTrigger after images are loaded
  useEffect(() => {
    if (!loaded || !containerRef.current) return;

    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom bottom",
      scrub: 0.5,
      onUpdate: (self) => {
        const newIndex = Math.min(
          TOTAL_FRAMES - 1,
          Math.floor(self.progress * TOTAL_FRAMES)
        );
        if (newIndex !== frameIndexRef.current) {
          frameIndexRef.current = newIndex;
          drawFrame(newIndex);
        }
      },
    });

    // Handle resize
    const onResize = () => drawFrame(frameIndexRef.current);
    window.addEventListener("resize", onResize);

    return () => {
      trigger.kill();
      window.removeEventListener("resize", onResize);
    };
  }, [loaded, drawFrame]);

  // Overlay text that fades in/out at scroll milestones
  const overlayTexts = [
    { text: "Engineering Excellence", startFrame: 0, endFrame: 35 },
    { text: "Precision Craftsmanship", startFrame: 55, endFrame: 95 },
    { text: "Every Component Matters", startFrame: 115, endFrame: 155 },
    { text: "Built to Perfection", startFrame: 160, endFrame: 180 },
  ];

  return (
    <section id="car-experience">
      {/* Scroll container — 5x viewport height for 180 frames */}
      <div ref={containerRef} className="relative" style={{ height: "500vh" }}>
        {/* Sticky canvas wrapper */}
        <div className="sticky top-0 w-full h-screen overflow-hidden bg-[#050505]">
          {/* Loading overlay */}
          {!loaded && (
            <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-[#050505]">
              <div className="text-center">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-sm text-white/40 tracking-[0.3em] uppercase mb-6 font-[family-name:var(--font-outfit)]"
                >
                  Loading Experience
                </motion.p>
                <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-[#4ba82e]"
                    initial={{ width: 0 }}
                    animate={{ width: `${loadProgress}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <p className="mt-3 text-xs text-white/30 tabular-nums">
                  {loadProgress}%
                </p>
              </div>
            </div>
          )}

          {/* Canvas */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
          />

          {/* Section heading overlay at top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="absolute top-8 left-0 right-0 z-10 text-center pointer-events-none"
          >
            <p className="text-xs text-[#4ba82e] tracking-[0.3em] uppercase mb-2">
              Škoda Kushaq
            </p>
            <h2 className="font-[family-name:var(--font-outfit)] text-2xl sm:text-3xl font-bold text-white/80">
              3D Car Experience
            </h2>
          </motion.div>

          {/* Scroll-synced overlay texts */}
          {overlayTexts.map((item, idx) => (
            <OverlayText
              key={idx}
              text={item.text}
              startFrame={item.startFrame}
              endFrame={item.endFrame}
              frameIndex={frameIndexRef}
            />
          ))}

          {/* Bottom gradient for depth */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </section>
  );
}

function OverlayText({
  text,
  startFrame,
  endFrame,
}: {
  text: string;
  startFrame: number;
  endFrame: number;
  frameIndex: React.RefObject<number>;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Use ScrollTrigger linked to the car-experience container
    const container = document.getElementById("car-experience")?.firstElementChild;
    if (!container) return;

    const startProgress = startFrame / TOTAL_FRAMES;
    const endProgress = endFrame / TOTAL_FRAMES;
    const midProgress = (startProgress + endProgress) / 2;

    // Fade in timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: `${startProgress * 100}% top`,
        end: `${endProgress * 100}% top`,
        scrub: 0.5,
      },
    });

    tl.fromTo(
      el,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.5 },
      0
    ).to(
      el,
      { opacity: 0, y: -20, duration: 0.5 },
      0.5
    );

    return () => {
      tl.kill();
    };
  }, [startFrame, endFrame]);

  return (
    <div
      ref={ref}
      className="absolute bottom-20 left-0 right-0 z-20 text-center pointer-events-none opacity-0"
    >
      <p className="font-[family-name:var(--font-outfit)] text-3xl sm:text-4xl lg:text-5xl font-bold text-white/90 drop-shadow-2xl">
        {text}
      </p>
    </div>
  );
}
