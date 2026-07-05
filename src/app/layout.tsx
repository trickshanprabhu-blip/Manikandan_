import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Manikandan - Car Body Repair & Insurance Specialist",
  description: "Professional car body repair and insurance claim assistance",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}