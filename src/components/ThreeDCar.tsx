"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ThreeDCar() {
  const sectionRef = useRef(null);
  const carRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    // Title animation
    gsap.from(titleRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: "power2.out",
    });

    // Car animation - scroll-triggered
    gsap.from(carRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
      },
      opacity: 0,
      scale: 0.8,
      duration: 0.8,
      ease: "back.out",
    });

    // Continuous floating animation
    gsap.to(carRef.current, {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Rotation on scroll
    gsap.to(carRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
      rotationY: 360,
      duration: 1,
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 px-4 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div ref={titleRef} className="text-center mb-16">
          <p className="text-green-500 text-sm font-semibold mb-4 tracking-widest uppercase">
            3D Experience
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skoda Car Body Repair
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Experience professional car body repair with the latest techniques
            and tools
          </p>
        </div>

        {/* Car animation container */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Car SVG/Illustration */}
          <div
            ref={carRef}
            className="flex items-center justify-center h-64 md:h-96 bg-gray-900/30 rounded-lg border border-green-500/20 p-8"
            style={{
              perspective: "1000px",
            }}
          >
            {/* Car SVG */}
            <svg
              viewBox="0 0 400 200"
              className="w-full h-full text-green-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {/* Car body */}
              <path d="M 80 120 L 100 60 L 300 60 L 320 120 Z" />
              {/* Car top */}
              <path d="M 120 60 L 140 30 L 260 30 L 280 60 Z" />
              {/* Left wheel */}
              <circle cx="130" cy="130" r="20" />
              {/* Right wheel */}
              <circle cx="270" cy="130" r="20" />
              {/* Windows */}
              <path d="M 140 50 L 160 35 L 200 35 L 190 50 Z" opacity="0.5" />
              <path d="M 210 50 L 280 50 L 270 35 L 220 35 Z" opacity="0.5" />
              {/* Windshield */}
              <path
                d="M 100 65 L 140 40 L 260 40 L 300 65"
                strokeDasharray="5,5"
              />
            </svg>
          </div>

          {/* Features list */}
          <div className="space-y-6">
            <div className="p-6 bg-gray-900/50 rounded-lg border border-green-500/20 hover:border-green-500/50 transition-all transform hover:scale-105">
              <h3 className="text-xl font-bold text-green-500 mb-2">
                Premium Service
              </h3>
              <p className="text-gray-300">
                High-quality car body repair services using modern techniques
              </p>
            </div>

            <div className="p-6 bg-gray-900/50 rounded-lg border border-green-500/20 hover:border-green-500/50 transition-all transform hover:scale-105">
              <h3 className="text-xl font-bold text-green-500 mb-2">
                Expert Technicians
              </h3>
              <p className="text-gray-300">
                Trained professionals with years of experience in car restoration
              </p>
            </div>

            <div className="p-6 bg-gray-900/50 rounded-lg border border-green-500/20 hover:border-green-500/50 transition-all transform hover:scale-105">
              <h3 className="text-xl font-bold text-green-500 mb-2">
                Quick Turnaround
              </h3>
              <p className="text-gray-300">
                Efficient service delivery without compromising on quality
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}