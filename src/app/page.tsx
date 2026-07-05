"use client";

import dynamic from "next/dynamic";
import SmoothScroll from "@/components/providers/SmoothScroll";
import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import InsuranceDocuments from "@/components/sections/InsuranceDocuments";
import Contact from "@/components/sections/Contact";

// Dynamic import for heavy 3D / canvas components to avoid SSR issues
const CarExperience = dynamic(
  () => import("@/components/sections/CarExperience"),
  { ssr: false }
);

const CustomCursor = dynamic(
  () => import("@/components/ui/CustomCursor"),
  { ssr: false }
);

export default function Home() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <CarExperience />
        <InsuranceDocuments />
        <Contact />
      </main>
    </SmoothScroll>
  );
}
