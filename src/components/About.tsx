"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
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

    gsap.from(contentRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
      },
      opacity: 0,
      y: 30,
      duration: 0.8,
      delay: 0.2,
      ease: "power2.out",
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 bg-black relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-4xl">
        <div ref={titleRef} className="mb-12">
          <p className="text-green-500 text-sm font-semibold mb-4 tracking-widest uppercase">
            ABOUT ME
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Professional Expertise in Car Care
          </h2>
        </div>

        <div ref={contentRef} className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="p-6 bg-gray-900/50 rounded-lg border border-green-500/20 hover:border-green-500/50 transition-all">
              <h3 className="text-xl font-bold text-green-500 mb-3">
                🔧 Car Body Repair
              </h3>
              <p className="text-gray-300">
                Expert in professional car body repairs with precision and quality workmanship. From minor dents to major restoration work.
              </p>
            </div>

            <div className="p-6 bg-gray-900/50 rounded-lg border border-green-500/20 hover:border-green-500/50 transition-all">
              <h3 className="text-xl font-bold text-green-500 mb-3">
                📋 Insurance Claims
              </h3>
              <p className="text-gray-300">
                Specialized in insurance claim assistance and documentation. Ensuring smooth and hassle-free claim processes.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-6 bg-gray-900/50 rounded-lg border border-green-500/20 hover:border-green-500/50 transition-all">
              <h3 className="text-xl font-bold text-green-500 mb-3">
                🏆 Certified Professional
              </h3>
              <p className="text-gray-300">
                Years of experience with Skoda Auto and proven track record in customer satisfaction and quality service.
              </p>
            </div>

            <div className="p-6 bg-gray-900/50 rounded-lg border border-green-500/20 hover:border-green-500/50 transition-all">
              <h3 className="text-xl font-bold text-green-500 mb-3">
                ✓ Quality Assured
              </h3>
              <p className="text-gray-300">
                Committed to delivering high-quality workmanship with attention to detail in every project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}