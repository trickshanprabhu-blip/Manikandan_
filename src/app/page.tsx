"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import ThreeDCar from "@/components/ThreeDCar";
import Contact from "@/components/Contact";

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    // GSAP animation on page load
    gsap.from(containerRef.current, {
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
    });
  }, []);

  return (
    <main ref={containerRef} className="bg-black overflow-hidden">
      <Hero />
      <About />
      <ThreeDCar />
      <Experience />
      <Contact />
    </main>
  );
}