"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    gsap.from(formRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: "power2.out",
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 px-4 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-green-500/10 rounded-full blur-3xl transform -translate-x-1/2"></div>

      <div className="container mx-auto max-w-2xl relative z-10">
        <div className="text-center mb-12">
          <p className="text-green-500 text-sm font-semibold mb-4 tracking-widest uppercase">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Me
          </h2>
          <p className="text-gray-400 text-lg">
            Let's discuss your car repair needs and insurance claims
          </p>
        </div>

        {/* Contact info */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 bg-gray-900/50 rounded-lg border border-green-500/20 text-center">
            <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg
                className="w-6 h-6 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-white font-semibold mb-2">Email</h3>
            <p className="text-gray-400 text-sm">manikandan@example.com</p>
          </div>

          <div className="p-6 bg-gray-900/50 rounded-lg border border-green-500/20 text-center">
            <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg
                className="w-6 h-6 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <h3 className="text-white font-semibold mb-2">Phone</h3>
            <p className="text-gray-400 text-sm">+91 XXXXX XXXXX</p>
          </div>

          <div className="p-6 bg-gray-900/50 rounded-lg border border-green-500/20 text-center">
            <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg
                className="w-6 h-6 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h3 className="text-white font-semibold mb-2">Location</h3>
            <p className="text-gray-400 text-sm">Chennai, India</p>
          </div>
        </div>

        {/* Contact form */}
        <form
          ref={formRef}
          className="p-8 bg-gray-900/50 rounded-lg border border-green-500/20 space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 bg-gray-800/50 border border-green-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 bg-gray-800/50 border border-green-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors"
            />
          </div>

          <input
            type="text"
            placeholder="Subject"
            className="w-full px-4 py-3 bg-gray-800/50 border border-green-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors"
          />

          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full px-4 py-3 bg-gray-800/50 border border-green-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors resize-none"
          ></textarea>

          <button
            type="submit"
            className="w-full px-8 py-3 bg-green-500 text-black font-bold rounded-lg hover:bg-green-600 transition-all transform hover:scale-105"
          >
            Send Message
          </button>
        </form>

        {/* Social links */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">Follow Me On</p>
          <div className="flex justify-center gap-4">
            {["LinkedIn", "WhatsApp", "Instagram"].map((social) => (
              <a
                key={social}
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-green-500/10 border border-green-500/20 text-green-500 hover:bg-green-500/20 transition-all"
              >
                <span className="text-xs font-semibold">{social[0]}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
