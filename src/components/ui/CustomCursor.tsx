"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Hide on touch devices
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    setVisible(true);

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("button") ||
        target.closest("a") ||
        target.closest("[data-cursor-hover]")
      ) {
        setHovering(true);
      }
    };

    const onOut = () => {
      setHovering(false);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mouseout", onOut);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mouseout", onOut);
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* Main dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: pos.x - (hovering ? 20 : 5),
          y: pos.y - (hovering ? 20 : 5),
          width: hovering ? 40 : 10,
          height: hovering ? 40 : 10,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
        style={{
          borderRadius: "50%",
          backgroundColor: hovering ? "rgba(75, 168, 46, 0.3)" : "#fff",
          border: hovering ? "1.5px solid rgba(75,168,46,0.8)" : "none",
        }}
      />
      {/* Trail ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        animate={{
          x: pos.x - 20,
          y: pos.y - 20,
          opacity: hovering ? 0 : 0.3,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.8 }}
        style={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.3)",
        }}
      />
    </>
  );
}
