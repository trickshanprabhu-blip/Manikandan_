"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const sectionRef = useRef(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    itemsRef.current.forEach((item, index) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
        },
        opacity: 0,
        y: 50,
        duration: 0.6,
        delay: index * 0.1,
        ease: "power2.out",
      });
    });
  }, []);

  const experiences = [
    {
      year: "2023-Present",
      title: "Senior Car Body Specialist",
      company: "Skoda Auto, Chennai",
      description:
        "Leading car body repair operations with expertise in collision repairs and restoration",
    },
    {
      year: "2019-2023",
      title: "Car Body Repair Expert",
      company: "Skoda Auto, Chennai",
      description:
        "Specialized in professional car body repairs and insurance claim documentation",
    },
    {
      year: "2015-2019",
      title: "Certified Technician",
      company: "Automotive Service Center",
      description:
        "Trained in advanced car repair techniques and customer service excellence",
    },
    {
      year: "2010-2015",
      title: "Car Repair Apprentice",
      company: "Professional Training Institute",
      description:
        "Completed comprehensive training in automotive repair and maintenance",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 px-4 bg-black relative overflow-hidden"
    >
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl transform -translate-y-1/2"></div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <p className="text-green-500 text-sm font-semibold mb-4 tracking-widest uppercase">
            Experience
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Professional Journey
          </h2>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) itemsRef.current[index] = el;
              }}
              className="p-6 bg-gray-900/50 rounded-lg border border-green-500/20 hover:border-green-500/50 transition-all relative pl-12"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-8 w-6 h-6 bg-green-500 rounded-full transform -translate-x-3 shadow-lg shadow-green-500/50"></div>

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-3">
                <div>
                  <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                  <p className="text-green-500 font-semibold">{exp.company}</p>
                </div>
                <span className="text-gray-400 text-sm whitespace-nowrap">
                  {exp.year}
                </span>
              </div>
              <p className="text-gray-400">{exp.description}</p>
            </div>
          ))}
        </div>

        {/* Skills section */}
        <div className="mt-16 p-8 bg-gradient-to-r from-green-500/10 to-green-500/5 rounded-lg border border-green-500/20">
          <h3 className="text-2xl font-bold text-white mb-6">
            Key Skills & Expertise
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Car Body Repair",
              "Collision Assessment",
              "Insurance Claims",
              "Paint & Finishing",
              "Restoration Work",
              "Customer Service",
              "Quality Assurance",
              "Vehicle Diagnostics",
            ].map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-gray-300"
              >
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}