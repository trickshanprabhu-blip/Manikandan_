"use client";

import { motion } from "framer-motion";
import DocumentCard from "@/components/ui/DocumentCard";
import {
  FileText,
  ClipboardList,
  CreditCard,
  Car,
  Fingerprint,
  Shield,
  UserCheck,
  Camera,
  FileSignature,
  Award,
  Stamp,
  SplitSquareVertical,
  Receipt,
  AlertTriangle,
} from "lucide-react";

const documents = [
  {
    icon: FileText,
    title: "Policy Copy",
    description:
      "Original or photocopy of your active motor insurance policy document with valid coverage period.",
    required: true,
  },
  {
    icon: ClipboardList,
    title: "Claim Form",
    description:
      "Duly filled and signed claim intimation form as provided by the insurance company.",
    required: true,
  },
  {
    icon: CreditCard,
    title: "Driving License",
    description:
      "Valid driving license of the person who was driving the vehicle at the time of the incident.",
    required: true,
  },
  {
    icon: Car,
    title: "Registration Certificate (RC)",
    description:
      "Vehicle registration certificate (RC book) showing ownership and vehicle details.",
    required: true,
  },
  {
    icon: Fingerprint,
    title: "PAN Card",
    description:
      "PAN card copy for identity verification and tax compliance purposes.",
    required: true,
  },
  {
    icon: Shield,
    title: "Aadhaar Card",
    description:
      "Aadhaar card copy for government-issued identity and address verification.",
    required: true,
  },
  {
    icon: UserCheck,
    title: "KYC Form",
    description:
      "Know Your Customer form with personal details, address, and identification proofs.",
    required: true,
  },
  {
    icon: Camera,
    title: "Passport Size Photo",
    description:
      "Recent passport-sized photographs for identification and claim processing records.",
    required: true,
  },
  {
    icon: FileSignature,
    title: "Memorandum of Understanding",
    description:
      "MoU document if applicable — typically required for specific claim types or third-party agreements.",
    required: false,
  },
  {
    icon: Award,
    title: "Fitness Certificate",
    description:
      "Vehicle fitness certificate issued by the Regional Transport Office for commercial vehicles.",
    required: false,
  },
  {
    icon: Stamp,
    title: "Permit Authorization",
    description:
      "Route permit or authorization document for commercial and transport vehicles.",
    required: false,
  },
  {
    icon: SplitSquareVertical,
    title: "Vehicle Bifurcation Certificate",
    description:
      "Detailed bifurcation of vehicle parts and cost breakdowns required for claim assessment.",
    required: false,
  },
  {
    icon: Receipt,
    title: "GST Certificate",
    description:
      "GST registration certificate if applicable for business-owned or commercial vehicles.",
    required: false,
  },
  {
    icon: AlertTriangle,
    title: "FIR / Affidavit",
    description:
      "First Information Report from police or a notarized affidavit for theft, accident, or major damage claims.",
    required: false,
  },
];

export default function InsuranceDocuments() {
  return (
    <section
      id="documents"
      className="relative py-32 lg:py-40 bg-gradient-to-b from-[#050505] via-[#0a0a0a] to-black"
    >
      {/* Decorative top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-[#4ba82e]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="text-center mb-20"
        >
          <p className="text-xs text-[#4ba82e] tracking-[0.3em] uppercase mb-4">
            Insurance Claims
          </p>
          <h2 className="font-[family-name:var(--font-outfit)] text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient mb-6">
            Documents Required for
            <br />
            Insurance Claim Submission
          </h2>
          <p className="text-base text-white/40 max-w-2xl mx-auto leading-relaxed">
            Ensure a smooth and efficient claim process by keeping the following
            documents ready. Required documents are essential, while others may
            be needed based on your specific case.
          </p>
        </motion.div>

        {/* Document grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc, index) => (
            <DocumentCard
              key={doc.title}
              icon={doc.icon}
              title={doc.title}
              description={doc.description}
              required={doc.required}
              index={index}
            />
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 glass-panel rounded-full px-6 py-3">
            <Shield size={16} className="text-[#4ba82e]" />
            <span className="text-sm text-white/50">
              All documents are handled with strict confidentiality
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
