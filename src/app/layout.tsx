import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MANIKANDAN | Car Body Repair & Insurance Specialist — Škoda Auto Chennai",
  description:
    "Premium portfolio of Manikandan — Car Body Repair & Insurance Specialist at Škoda Auto, Chennai. Expert in professional car body repairs, insurance claim assistance, and quality workmanship.",
  keywords: [
    "car body repair",
    "insurance specialist",
    "Škoda Auto",
    "Chennai",
    "Manikandan",
    "automotive",
    "insurance claims",
  ],
  openGraph: {
    title: "MANIKANDAN | Car Body Repair & Insurance Specialist",
    description:
      "Professional car body repairs and insurance claim assistance at Škoda Auto, Chennai.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} antialiased`}
    >
      <body className="bg-black text-white overflow-x-hidden">{children}</body>
    </html>
  );
}
