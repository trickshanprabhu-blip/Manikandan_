"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(titleRef.current, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: "power2.out",
    })
      .from(
        subtitleRef.current,
        {
          opacity: 0,
          y: 30,
          duration: 0.6,
        },
        "-=0.4"
      )
      .from(
        buttonsRef.current,
        {
          opacity: 0,
          y: 20,
          duration: 0.6,
        },
        "-=0.4"
      );
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-b from-black to-gray-900 flex items-center justify-center px-4 relative overflow-hidden pt-20">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
        {/* Left side - Text content */}
        <div>
          <div
            ref={titleRef}
            className="mb-6"
          >
            <p className="text-green-500 text-sm font-semibold mb-4 tracking-widest uppercase">
              SKODA ROOFING
            </p>
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-4">
              <span className="text-white">MANI</span>
              <br />
              <span className="text-green-500">KANDAN</span>
            </h1>
          </div>

          <div ref={subtitleRef} className="mb-8">
            <h2 className="text-2xl text-gray-300 mb-4">
              Car Body Repair & Insurance Specialist
            </h2>
            <p className="text-green-500 text-sm mb-2">
              SKODA AUTO • CHENNAI
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              I specialize in professional car body repairs and insurance claim
              assistance, ensuring every customer receives high-quality
              workmanship and a smooth insurance process.
            </p>
          </div>

          <div ref={buttonsRef} className="flex gap-4 flex-wrap">
            <button className="px-8 py-3 bg-green-500 text-black font-bold rounded-full hover:bg-green-600 transition-all transform hover:scale-105">
              Contact Me
            </button>
            <button className="px-8 py-3 border-2 border-green-500 text-green-500 font-bold rounded-full hover:bg-green-500/10 transition-all">
              Explore My Work
            </button>
          </div>

          {/* Available for consultation badge */}
          <div className="mt-12 inline-flex items-center gap-3 bg-gray-900/50 px-4 py-2 rounded-full border border-green-500/30">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-gray-300 text-sm">
              Available for consultation
            </span>
          </div>
        </div>

        {/* Right side - Image/Profile */}
        <div className="relative h-96 md:h-full flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-transparent rounded-lg blur-2xl"></div>
          <div className="relative w-80 h-96 bg-gray-800/50 rounded-lg overflow-hidden border border-green-500/30 flex items-center justify-center">
            {/* Placeholder for profile image */}
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 bg-green-500/20 rounded-full flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-gray-400">Manikandan</p>
              <p className="text-sm text-green-500">Skoda Auto, Chennai</p>
              <p className="text-sm text-gray-500 mt-2">✓ Insurance Expert</p>
            </div>
          </div>

          {/* Experience badge */}
          <div className="absolute bottom-4 right-4 bg-green-500/90 px-4 py-2 rounded-lg font-bold text-black text-sm">
            10+ Years
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
        <p className="text-gray-500 text-sm">SCROLL</p>
        <div className="w-6 h-10 border-2 border-green-500 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-green-500 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}