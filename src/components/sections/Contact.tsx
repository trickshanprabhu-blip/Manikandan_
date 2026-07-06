"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, User, Phone, Mail, MessageSquare, MapPin, Briefcase, Building2, Globe, AtSign, MessageCircle } from "lucide-react";
import SocialIcon from "@/components/ui/SocialIcon";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // Simulate form submission
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
      setFormState({ name: "", phone: "", email: "", message: "" });
    }, 1500);
  };

  const inputClasses =
    "w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3.5 text-sm text-white/90 placeholder:text-white/25 focus:outline-none focus:border-[#4ba82e]/50 focus:ring-1 focus:ring-[#4ba82e]/20 transition-all duration-300";

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true as const },
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  };

  return (
    <section id="contact" className="relative py-32 lg:py-40 bg-black">
      {/* Top divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <motion.div {...fadeUp} className="text-center mb-20">
          <p className="text-xs text-[#4ba82e] tracking-[0.3em] uppercase mb-4">
            Get in Touch
          </p>
          <h2 className="font-[family-name:var(--font-outfit)] text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient">
            Let&apos;s Connect
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left — Form */}
          <motion.div {...fadeUp}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="relative">
                <User
                  size={16}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20"
                />
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className={`${inputClasses} pl-11`}
                />
              </div>

              <div className="relative">
                <Phone
                  size={16}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formState.phone}
                  onChange={handleChange}
                  required
                  className={`${inputClasses} pl-11`}
                />
              </div>

              <div className="relative">
                <Mail
                  size={16}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className={`${inputClasses} pl-11`}
                />
              </div>

              <div className="relative">
                <MessageSquare
                  size={16}
                  className="absolute left-4 top-4 text-white/20"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`${inputClasses} pl-11 resize-none`}
                />
              </div>

              <div className="pt-2">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="glass-panel rounded-xl px-6 py-4 text-center"
                  >
                    <p className="text-[#4ba82e] font-medium text-sm">
                      ✓ Message sent successfully!
                    </p>
                    <p className="text-white/40 text-xs mt-1">
                      I&apos;ll get back to you shortly.
                    </p>
                  </motion.div>
                ) : (
                  <MagneticButton
                    variant="filled"
                    className="w-full flex items-center justify-center gap-2"
                  >
                    {sending ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                      />
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </MagneticButton>
                )}
              </div>
            </form>
          </motion.div>

          {/* Right — Info */}
          <motion.div
            {...fadeUp}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
            }}
          >
            <div className="glass-panel rounded-2xl p-8 lg:p-10 h-full flex flex-col justify-between">
              <div>
                {/* Personal info */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#4ba82e]/10 flex items-center justify-center flex-shrink-0">
                      <User size={18} className="text-[#4ba82e]" />
                    </div>
                    <div>
                      <p className="text-xs text-white/30 uppercase tracking-widest mb-1">
                        Name
                      </p>
                      <p className="text-lg font-semibold text-white/90 font-[family-name:var(--font-outfit)]">
                        MANIKANDAN
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#4ba82e]/10 flex items-center justify-center flex-shrink-0">
                      <Briefcase size={18} className="text-[#4ba82e]" />
                    </div>
                    <div>
                      <p className="text-xs text-white/30 uppercase tracking-widest mb-1">
                        Profession
                      </p>
                      <p className="text-base text-white/70">
                        Car Body Repair & Insurance Specialist
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#4ba82e]/10 flex items-center justify-center flex-shrink-0">
                      <Building2 size={18} className="text-[#4ba82e]" />
                    </div>
                    <div>
                      <p className="text-xs text-white/30 uppercase tracking-widest mb-1">
                        Company
                      </p>
                      <p className="text-base text-white/70">
                        Škoda Auto – Chennai
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#4ba82e]/10 flex items-center justify-center flex-shrink-0">
                      <MapPin size={18} className="text-[#4ba82e]" />
                    </div>
                    <div>
                      <p className="text-xs text-white/30 uppercase tracking-widest mb-1">
                        Location
                      </p>
                      <p className="text-base text-white/70">
                        Chennai, Tamil Nadu, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-10 pt-8 border-t border-white/[0.06]">
                <p className="text-xs text-white/30 uppercase tracking-widest mb-4">
                  Connect With Me
                </p>
                <div className="flex gap-3">
                  <SocialIcon
                    icon={Globe}
                    href="#"
                    label="LinkedIn"
                  />
                  <SocialIcon
                    icon={AtSign}
                    href="#"
                    label="Instagram"
                  />
                  <SocialIcon
                    icon={MessageCircle}
                    href="#"
                    label="WhatsApp"
                  />
                  <SocialIcon
                    icon={Mail}
                    href="#"
                    label="Email"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-32 pt-8 border-t border-white/[0.04] text-center"
        >
          <p className="text-sm text-white/20">
            Designed with passion by{" "}
            <span className="text-[#4ba82e]/60 font-medium">MANIKANDAN</span>
          </p>
          <p className="text-xs text-white/10 mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </motion.footer>
      </div>
    </section>
  );
}
